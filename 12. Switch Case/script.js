//Create a simple menu using switch statements with options to add, subtract, multiply, and divide two numbers.
var number1=10;
var number2=15;
var operation="add";
switch (operation) {                   //in switch, if the value of key matches the value of case then the case code block 
    case "add":                        //will show the output. Here the value of key named Operation matches the value of case
       var result=number1+number2;     //"add" and the output is the addition of number1 and number2.
        console.log(result);
        break;

    default:
        break;
}