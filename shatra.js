'use strict';

(function() {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    let selectButtons = document.forms['shatra'].elements['shatraType']
    let plainBox = document.getElementById('plainText')
    let shatraBox = document.getElementById('shatraText')
    let convert = convertA

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

    function convertA(text) {
        let words = text.toString().split(' ')
        return words.map((word) => {
            let firstSyllable = getFirstSyllable(word)
            return word.replace(firstSyllable, '').concat(firstSyllable)
        }).join(' ')
    }

    function convertB(text) {
        let words = text.toString().split(' ')
        let regex = /(?=[${vowels.join()}}])/
        return words.map((word) => word.split(regex).reverse().join('')).join(' ')
    }

    function convertC(text) {

    }

    selectButtons.forEach((sb) => {
        sb.onclick = function() {
            switch (this.value) {
                case 'a':
                    convert = convertA
                    break;
                case 'b':
                    convert = convertB
                    break;
            }
        }
    })

    plainBox.onkeyup = function() {
        shatraBox.value = convert(plainBox.value)
    }
    shatraBox.onkeyup = function() {
        plainBox.value = convert(shatraBox.value)
    }
})()