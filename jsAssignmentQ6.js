// What will be the output of the following code?
// var a = {a: 1};
// var b = {a: 1};
// console.log(a == b);
// console.log(a === b);
// var c = a;
// console.log(a == c);
// console.log(a === c);
 
//ANSWER= it will print "False False True True" (both the operators are comparing the memory address pointed
// by object a and b which is different and in case of c in line 6 we pointed it to the address of a and
// therefore both the operators are returning true)