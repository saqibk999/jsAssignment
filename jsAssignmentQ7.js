// What will be the output of the following code?
// console.log(0/0 === 0/0);
// console.log(0/0 == 0/0);
// console.log(Number.isNaN(0/0) === Number.isNaN(0/0));
//ANSWER= it will print "False False True" (0/0 is of type Nan and in js Nan is not equal to itself therefore 
// first two are returning false and in line no. 4 both isNan is returning true and the operator is 
// comparing two true values thereby returning true)