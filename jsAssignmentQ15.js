// What is the output of the following code?
// function f1(object) {
// const obj = { name: "Daniel", age: 27 };
// if (object.age === 20) {
// const obj = { name: "Jack" };
// object.name = "Sam";
// console.log(obj.age);
// } else {
// const obj = { name: "Emily" };
// object = null;
// console.log(obj.name);
// }
// }
// const ob1 = { name: "Mark", age: 20 };
// const ob2 = { name: "Karl", age: 21 };
// f1(ob1);
// console.log(ob1);
// f1(ob2);
// console.log(ob2);

//ANSWER= it will print 
//" undefined
// { name: 'Sam', age: 20 }
// Emily
// { name: 'Karl', age: 21 } " 
// explanation=
// we are calling  f1() and at line 7 we are trying to fetch the age of obj i.e. not declared therefore it is returning undefined.
// f1 is also changing value of passed object because it is passed by refference and therefore it is printed with changed value.
// then we are console logging obj2 which is printing as it was
