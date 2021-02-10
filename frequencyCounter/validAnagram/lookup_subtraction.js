function validAnagram(word1, word2) {
  // if the length of word1 and word2 are not the same
  if (word1.length !== word2.length) {
    // return false
    return false;
  }

  // create a lookup object for the letters of the first word
  var lookup = {};
  for (var letter of word1) {
    lookup[letter.toLowerCase()] = (lookup[letter] && ++lookup[letter]) || 1;
  }

  // loop through the letters of the second word
  for (var letter of word2) {
    // if the letter does not exist in the lookup, return false
    if (!lookup[letter.toLowerCase()]) {
      return false;
    } else {
      // or else, if it exists, subtract one from the lookup entry
      lookup[letter.toLowerCase()] -= 1;
    }
  }

  return true;
}

console.log("Node/Deno", validAnagram("Node", "Deno"));
console.log("aab/baa ", validAnagram("aab", "baa"));
