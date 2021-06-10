/*
* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false

* Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an
* array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word = '', words = []) {
  if (typeof word !== 'string' || !Array.isArray(words)) {
    return [];
  }

  const checkWords = (word1, word2) => {
    const word1Arr = word1.split('').sort();
    const word2Arr = word2.split('').sort();

    if (word1Arr.length !== word2Arr.length) {
      return false;
    }

    for (let i = 0; i < word1Arr.length; i++) {
      if (word1Arr[i] !== word2Arr[i]) {
        return false;
      }
    }

    return true;
  };

  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    if (checkWords(word, words[i])) {
      result.add(words[i]);
    }
  }

  return Array.from(result);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));

// del
function tt() {
  return class test {
    constructor() {
      console.log('123');
    }
  }
}

const t1 = tt();
new t1;
