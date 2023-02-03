// 16.Convert the code to Promises, where each function should return a promise. And
// implement the promise chaining.
// And after execution of all the promises, either rejected or fulfilled, make it

//ANSWER= 
const f1 = () => {
    const bool = true;
    return new Promise((resolve, reject) => {
      if (bool) {
        resolve("From F1");
      } else {
        reject("error");
      }
    });
  };
  
  const f2 = () => {
    return new Promise((resolve, reject) => {
      resolve("From F2");
    });
  };
  const f3 = () => {
    return new Promise((resolve, reject) => {
      resolve("From F3");
    });
  };
  const f4 = () => {
    return new Promise((resolve, reject) => {
      resolve("From F4");
    });
  };
  
  f1()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  f2().then((res) => console.log(res));
  f3().then((res) => console.log(res));
  f4().then((res) => console.log(res));