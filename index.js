function isPalindrome(word) {
  // Write your algorithm here
  
 
    let leftIdx = 0;
    let rightIdx = word.length - 1;
    
    while (leftIdx < rightIdx) {
    if (word[leftIdx] !== word[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
    }
    return true;
   }
   console.log(isPalindrome("a"));


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
