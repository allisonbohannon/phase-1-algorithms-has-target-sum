function hasTargetSum(array, target) {
  // Write your algorithm here
  let hasTarget = false; 
    for (let i = 0; i < array.length; i++ ) {
      //console.log(array[i])
      for (let j = i+1; j <array.length; j++) {
        console.log(`i: ${i}, j:${j}`)
        console.log(array[j])
        console.log(`${array[i]} + ${array[j]} = ${array[i]+array[j]}`)
        debugger; 
        if (array[i] + array[j] == target) {
          hasTarget = true; 
          console.log(hasTarget)
          break; 
        }
      }
   }
  return hasTarget
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/


/* 
  Add your pseudocode here
  let hasTarget = false; 
  for (i = 0; i < array.length; i++) {
    for ( j = 1; j < array.length, j++ ) {
      if (array[i] + array[j] === target) {
        hasTarget = true; 
      }
    }
    return hasTarget
  }
*/

/*
  Add written explanation of your solution here
  Use nested for loops
  The outloop starts at position 0 and iterates through the inner loop
  Inner loop starts at position 1
  Check to see is value from outerloop and innerloop sum to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
