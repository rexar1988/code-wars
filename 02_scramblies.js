/*
* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered
  Input strings s1 and s2 are null terminated.
  Examples
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

function scramble(str1 = '', str2 = '') {
  if (!str1 || !str2) {
    return false;
  }

  const strArr1 = str1.toLowerCase().split('').sort();
  const strArr2 = str2.toLowerCase().split('').sort();

  for (let i = 0; i < strArr2.length; i++) {
    if (!strArr1.includes(strArr2[i])) {
      return false;
    }
  }

  return true;
}

console.log(scramble('', ''));

