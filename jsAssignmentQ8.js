// 8. What will be the output of the following code?
// let a;
// console.log(a === undefined);
// console.log(a === null);
// console.log(a*2);
// console.log(`${a} is the value of a`);

//ANSWER= it will print "true false NaN undefined is the value of a" (since a is not initialized it was given 
// undefined as a value and therefore it is returning true when compared to undefined and returning false when
// compared to null as null is another datatype that needed to be assigned to a variable 
// in line 5 we are operating an undefined datatype with a number which is returning Nan because undefined was not a number)