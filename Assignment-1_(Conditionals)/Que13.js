// Section 3 - if, else-if & Nested Conditions
// 13. Student Grade
// Take a student’s percentage.
// Assign a grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Also check for invalid percentages below 0 or above 100.

//solution-->

let percentage = 70;
if(percentage > 0  &&  percentage <= 100){
    if(percentage < 100 && percentage >= 90){
        console.log("A Grade");
    }else if(percentage < 90 && percentage >= 80){
        console.log("B Grade");
    }else if(percentage < 80 && percentage >= 70){
        console.log("C Grade");
    }else if(percentage < 70 && percentage >= 60){
        console.log("D Grade");
    }else if(percentage < 60 && percentage >= 50){
        console.log("E Grade");
    }else{
        console.log("F Grade");
    }
    
}else{console.log("Enter a valid number");}
// Section 3 - if, else-if & Nested Conditions
// 13. Student Grade
// Take a student’s percentage.
// Assign a grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Also check for invalid percentages below 0 or above 100.

//solution-->

let percentage = 70;
if(percentage > 0  &&  percentage <= 100){
    if(percentage < 100 && percentage >= 90){
        console.log("A Grade");
    }else if(percentage < 90 && percentage >= 80){
        console.log("B Grade");
    }else if(percentage < 80 && percentage >= 70){
        console.log("C Grade");
    }else if(percentage < 70 && percentage >= 60){
        console.log("D Grade");
    }else if(percentage < 60 && percentage >= 50){
        console.log("E Grade");
    }else{
        console.log("F Grade");
    }
    
}else{console.log("Enter a valid number");}