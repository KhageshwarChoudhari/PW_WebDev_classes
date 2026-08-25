// 13. Even or Odd Function
// Create a function that takes a number and checks whether it is even or odd.


function check(num){
    if(num % 2 === 0 ){
        return num + " is Even";
    }else{
        return num + " is Odd"
    }
}

console.log(check(30));

