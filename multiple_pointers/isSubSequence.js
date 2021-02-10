function isSubsequence(sub, word) {
  /**
   * hello
   * i
   *
   * hello world
   * j
   *
   * - letter found, move both
   *
   * hello
   *     i
   * hello world
   *     j
   * letter found,
   * i is at the end, return true.
   *
   * abc
   * i
   * acb
   * j
   * - letter found, move both
   * abc
   *  i
   * acb
   *   j
   * - nope, move j
   * - letter found, j is last letter, return false
   *
   */

  let subIdx = 0;
  let wordIdx = 0;

  while (wordIdx < word.length) {
    if (word[wordIdx] === sub[subIdx]) {
      wordIdx++;
      subIdx++;
    } else {
      wordIdx++;
    }
  }

  if (subIdx === sub.length) {
    return true;
  }

  return false;
}

console.log(isSubsequence("hel", "hello world"));
