"use strict;"
let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
// console.log(numbers.replaceAll(" ", ","));
let array = numbers.split(" ");
console.log(array)

let max = array[0];
let min = array[0]

console.log(`max#:${max}`)
console.log(`min#:${min}`)

// highAndLow(array);

function highAndLow(numbers) {
    console.log(numbers);
    for(let i = 0; i <= numbers.length-1; i+=1) {
        let currentNumber = numbers[i];
        // console.log(currentNumber);
        if (i=0) {
            max = currentNumber;
            // console.log(`max#: ${max}`)
        } else {
            if (currentNumber > numbers[i-1]) {
                max = currentNumber;
                // console.log(`max#: ${max}`)
                } else {
                min = currentNumber;
                };
            };
        console.log(`max#: ${max}`)
        console.log(`min#: ${min}`)
    };
}
//     for(let i = 0; i <= numbers.length-1; i+=1) {
//         let currentNumber = numbers[i];
//         console.log(currentNumber);
//         if (i=0) {
//             min = currentNumber;
//             console.log(`min#: ${min}`)
//         } else {
//           if (currentNumber < numbers[i-1]) {
//             min = currentNumber;
//             console.log(`min#: ${min}`)
//         };
//     };
// };
// return(max,min)


// "use strict;"
// let a = [];
// let b = [4,5];

// // let a = [0,1,1,2,1,4,3,1,1,7];
// // let b = [1];

// arrayDiff(a, b);
// function arrayDiff(a, b) {
//     console.log(a);
//     console.log(b);
//     if (a.length == 0) {
//         let diff = [];
//         console.log(diff);
//         return
//     } else {
//         if (b.length == 0) {
//             let diff = a
//             console.log(diff);
//             return;
//         } else {
//             let diff = []
//         };
//     };
    
//     let diff = [];
//     let indexB = 0;
//     // determine if all elements of array checked

//     for (let i = 0; i <= a.length-1; i+=1) {
//         console.log(a)
//         console.log(b)

//         // move to next arrayA element or done
//         if(i <= a.length - 1) {
//             //is element the same
//             if(b[indexB] !== a[i]) {
//                 // a.splice(i,1);
//                 //if same add to result array
//                 diff.push(a[i]);
//                 console.log(diff)
//             } else
//             {
//                 // move to next array b element or done
//                 if (indexB < b.length-1) {
//                     indexB+=1;
//                 };   
//             };
//         };
//     };
// };








// let newString = "";
// function repeater(string, n){
//   //Your code goes here.
//   for (i=0; i < n; i += 1) 
//   newString = newString + string;
//   return(newString);
// };
// repeater("a", 5);


// function countSheep(num){
//   let newString = "";
//   for(let i = 1; i <= num; i += 1) {
//   newString = newString + (`${i} sheep...`);
//   };
//   console.log(newString);
//   return newString;
// };
// let output = countSheep(4);
// console.log(output)

// let newString = "";
// function doubleChar(str) {
//   console.log(str);
//   // let newString = "";
//   for (i = 0; i < str.length; i +=1) {
//     newString = newString + str[i] + str[i];
//     console.log(newString);
//   };
//   console.log(newString);
//   // return newString;
// };
// // let output = doubleChar("ab12&");
// doubleChar("ab12&");
// console.log(newString)  // why can't I use newString since it was returned


// function smash (words) {
//   "use strict";
//   let newString = "";
//   for (let i = 0; i < words.length; i += 1) {
//     newString = `${newString} ${words[i]}`;
//     console.log(newString);
//   };
//   newString = newString.trim();
//   console.log(newString);
//   return(newString);
// };

// let arrayExample = ['hello', 'world', 'this', 'is', 'great']
// // expected output =>  'hello world this is great'
// smash(arrayExample);
// let output = newString;

// console.log(output);