// Create a timer in javascript, in such a way, that it should display 0-10 seconds,
// and after displaying 10, the program should exit.

//ANSWER= 

     var count=1;
     var print=setInterval(()=>{
     if(count==10) clearInterval(print);
     console.log(count)
     count++
     },1000) 