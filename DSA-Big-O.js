// 1. big O for this?
/* 1) Playmate for doggo, search array for 1 person
This is O(1) right? 

   2) Searching for 1, by 1 person until you find someone with the golden retriever
      this is Linear
*/
// /***************************************************************************/

// // 2. Even or Odd
// /* What is the Big O of this algorithm? Explain */
// function isEven(value) {
//     if (value % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(3));
// // seems like O(1)  no matter the input, it only takes 1 step, it's constant
// /***************************************************************************/

// 3. Are you here?
// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }
// console.log(areYouHere([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // seems like O(n^2) - input size N raised to consant power, 2 loops here? 
// /***************************************************************************/

// 4. Doubler
// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }
// console.log(doubleArrayValues([2, 4, 6]));
// seems constant O(1)  it does one thing.. even tho it loops through array
// /***************************************************************************/

// 5. Naive search
// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
// console.log(naiveSearch([2, 3, 4, 4, 5], 5));
// O(n) // seems linear, it has to search the array for first index of it

// 6. Creating pairs:
// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }
// console.log(createPairs([1, 2, 3, 4, 5]));
// O(n^2) again?  There's 2 loops
/***************************************************************************/

// 7. 
// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i == 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }
// I'm not sure.. Looks like it might be O(log n), more like a binary search

// 8. An efficient search
// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }
// This is likely Exponential time O(2^n) ? 

// 9. Random element
// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }
// this is definitely O(1) because it does one step and solves one thing no matter the size of the input

