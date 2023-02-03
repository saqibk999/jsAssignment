// 18.What will be the output for the following:
// var a = () => {
// console.log("a called");
// };
// a();
// var a = 34;
// a();

//ANSWER= it will print
// a called
// /tmp/fSUxKifTfw.js:7
// a()
// ^

// TypeError: a is not a function
//     at Object.<anonymous> (/tmp/fSUxKifTfw.js:7:1)
//     at Module._compile (internal/modules/cjs/loader.js:999:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
//     at Module.load (internal/modules/cjs/loader.js:863:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
//     at internal/main/run_main_module.js:17:47

//Explanation= at line 5 when we're calling a() it is working fine but after that
// we redeclared a as a variable which has overridden a as a function to
// a variable and therefore its showing error on calling.