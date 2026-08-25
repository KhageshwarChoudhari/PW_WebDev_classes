// 15. Largest of Two Numbers
// Create a function that takes two numbers and returns the greater number.


function greatest(num1 , num2){
    if(num1 >= num2 ){
        return num1 + " is greater";
    }else{
        return num2 + " is greater"
    }
}

console.log(greatest(40,40));