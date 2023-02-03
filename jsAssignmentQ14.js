// 14.Write a function that takes in an array of objects ({ name: “”, age: 2}) and
// returns the names of all the persons whose age is even.

//ANSWER= 

const Peven = obj.filter((ele) => {
    return ele.age % 2 === 0;
  }).map((ele) => ele.name);
console.log(Peven);