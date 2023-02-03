// Object:
// 1) keys
// 2) values
// 3) assign
// 4) hasOwnProperty
const obj = { name: "saqib", department: "intern" };

console.log(Object.keys(obj));
console.log(Object.values(obj));
const obj2 = { department:"sde" };
const obj3 = Object.assign(obj, obj2);
console.log(obj3);
console.log(obj3.hasOwnProperty("age"));
console.log(obj3.hasOwnProperty("department"));