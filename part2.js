// Problem 1: Sum Zero
// Time Complexity: O(n^2) due to the nested loops where each number is compared with every other number.
// Space Complexity: O(1) as no additional data structures are created.
const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

// Problem 2: Unique Characters
// Time Complexity: O(n^2) due to the nested loops where each character is compared with every other character.
// Space Complexity: O(1) as no additional data structures are created.
const hasUniqueChars = (word) => {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
};

// Problem 3: Pangram Sentence
// Time Complexity: O(n), where n is the length of the sentence, because it checks each letter of the alphabet once against the sentence.
// Space Complexity: O(1) as no additional data structures are created.
const isPangram = (sentence) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (sentence.toLowerCase().indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

// Problem 4: Longest Word
// Time Complexity: O(n), where n is the number of words in the input list, as it iterates over each word in the array once.
// Space Complexity: O(1) as it doesn't create any new data structures whose size depends on the input.
const findLongestWord = (words) => {
  let longestLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }
  return longestLength;
};
