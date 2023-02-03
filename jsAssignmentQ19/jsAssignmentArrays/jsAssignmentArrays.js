// Array:
// 1) push
// 2) pop
// 3) shift
// 4) unshift
// 5) map
// 6) filter
// 7) splice
// 8) slice
// 9) sort
// 10)join

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);
const arr2 = arr.map((ele) => ele + 1);
console.log(arr2);
const arr3 = arr.filter((ele) => ele > 3);
console.log("line 13= "+arr3);
arr.splice(1,1,10,20);
console.log(arr);
console.log(arr.slice(0,3));
arr.sort((a,b) => {
  return a - b;
});
console.log(arr);
const arr4 = ["Byju's", "Exam prep"];
console.log(arr4.join(" "));