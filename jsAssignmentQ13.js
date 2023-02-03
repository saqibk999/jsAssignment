// 13.What is Regex? Write a function that uses a regex in javascript to check if the
// input string is alphanumeric or not.

//ANSWER Regular expressions are combinations of special character operators, 
// which are symbols that control the search, that you can use to construct 
// search strings for advanced find and/or replace searches.

function isAlpha(s){
    var pat=/^[a-z0-9]+$/i;
    return pat.test(s);
}
console.log(isAlpha("saqib21"));