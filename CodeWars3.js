// DRUNK AF SOLUTION
// function arrayDiff(a, b) {
//     if (b.length > 0) {
//         let res = [];
//         for (let i = 0; i < a.length; i++) {
//             for (let j = 0; j < b.length; j++) {
//                 if (a[i] !== b[j] && b.includes(a[i]) === false) {
//                     res.push(a[i]);
//                     break;
//                 }
//             }
//         }
//         return res;
//     }
//     return a;
// }

// Sober solution
function arrayDiff(a, b) {
   return a.filter(n => !b.includes(n));
}

console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2,4]));