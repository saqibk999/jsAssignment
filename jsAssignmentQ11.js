// Create a calculator that supports +, -, * and /. The calculator should take a string
// expression as an input. The string can
// Example:
// “2*2” → 4
// “8-8” → 0
// “9+9” → 18
// “a*a” → invalid
// “2” → invalid
// “9/2” → 2.5

//ANSWER= 
          function calculator(input){
       s=input.trim();
       let arr= s.split(/\-|\+|\*|\//)
       if (arr.length===1){
          console.log("invalid")
       }
       else{
       var a=arr[0];
       var b=arr[1];
       var ind=a.length
       console.log(s.charAt(ind))
      if(s.charAt(ind)=='+') console.log(Number(a)+Number(b))
      if(s.charAt(ind)=='-') console.log(Number(a)-Number(b))
      if(s.charAt(ind)=='*') console.log(Number(a)*Number(b))
      if(s.charAt(ind)=='/') console.log(Number(a)/Number(b))
  
      }
      }
      calculator("9/2")