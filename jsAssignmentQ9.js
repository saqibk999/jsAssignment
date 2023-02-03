// What is the output of the following code?
// (function(){
// setTimeout(()=> console.log(1),2000);
// console.log(2);
// setTimeout(()=> console.log(3),0);
// console.log(4);
// })();

//ANSWER= it will print "2 4 3 1" (this code contains some synchronous and some 
// asynchronous lines of code the synchronous part is executing first in the order of
// line number and the asynchronous part is executing afterwords after their
 // timer got completed which we specified using setTimeout() which is a window function)