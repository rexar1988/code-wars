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
  const wordArr = word.split('').sort();
  const toArrayFn = (word) => word.split('').sort();
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const itemArr = toArrayFn(words[i]);

    if (itemArr.length !== wordArr.length) {
      return false;
    }


  }

  console.log(wordArr);
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// anagrams('laser', ['lazing', 'lazy',  'lacer']);
