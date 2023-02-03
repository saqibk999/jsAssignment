// 17.Remove all the duplicate names objects from an array of objects. The object can
// contain name and age.
// [ { name: “Karl”, age:20}, { name: “Karl”, age:23}, { name:
// “Marry”, age:20}, { name: “Aston”, age:20} ]
// Output:
// [{ name: “Marry”, age:20}, { name: “Aston”, age:20} ]

//ANSWER= 
const remDup = (obj) => {
    const total = obj.reduce((acc,ele) => {
      acc[ele.name] = acc[ele.name] + 1 || 1;
      return acc;
    }, {});
    const res = obj.filter((ob) => {
      return total[ob.name] === 1;
    });
    console.log(res);
  };
  remDup(obj1);