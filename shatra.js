'use strict';

(function() {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    let plainBox = document.getElementById('plainText')
    let shatraBox = document.getElementById('shatraText')

    function getFirstSyllable(word) {
        let i;
        for (i = 0; i < word.length; ++i) {
            if (vowels.includes(word[i])) {
                if (word.length <= i && vowels.includes(word[i + 1]) ||
                    word.length < i + 2 && !vowels.includes(word[i + 1]) && vowels.includes(word[i + 2]) ||
                    word.length > i) {
                    ++i
                    break
                }
            }
        }
        return word.slice(0, i)
    }

    function convert(text) {
        let words = text.toString().split(' ')
        return words.map(function(word) {
            let firstSyllable = getFirstSyllable(word)
            return word.replace(firstSyllable, '').concat(firstSyllable)
        }).join(' ')
    }

    plainBox.onkeyup = function() {
        shatraBox.value = convert(plainBox.value)
    }
    shatraBox.onkeyup = function() {
        plainBox.value = convert(shatraBox.value)
    }
})()