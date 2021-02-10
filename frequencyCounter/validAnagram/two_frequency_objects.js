function validAnagram(word1, word2) {
  // if the length of word1 and word2 are not the same
  if (word1.length !== word2.length) {
    // return false
    return false;
  }

  // create a frequency object for the letters:ocurrences of the first word
  var frequency1 = {};
  for (var letter of word1) {
    frequency1[letter.toLowerCase()] =
      (frequency1[letter] && ++frequency1[letter]) || 1;
  }
  // create a frequency object for the letters:ocurrences of the second word
  var frequency2 = {};
  for (var letter of word2) {
    frequency2[letter.toLowerCase()] =
      (frequency2[letter] && ++frequency2[letter]) || 1;
  }

  // loop through the keys of the first frequency object
  for (var letter in frequency1) {
    // if the letter doesn't exist in the second frequency object
    // or
    // if the frequency count is differente between frequency2 and frequency1
    if (!frequency2[letter] || frequency2[letter] !== frequency1[letter]) {
      // return false
      return false;
    }
  }

  return true;
}

console.log(validAnagram("Word", "Drwo"));
