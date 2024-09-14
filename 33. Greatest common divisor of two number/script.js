//Write a function that finds the greatest common divisor (GCD) of two numbers.
// Start
//     create a function
//     take two parameters
//     for each number get the divisor
//     compare both number's divisor which is common
//     multiply the common divisor
//     print the result
// End
// function GCD(num1,num2){

// }
function gcd(a, b) {
  if(b===0){
    return a;
  }else{
    return gcd(b, a%b);
  }
}
  let num1 = 24;
  let num2 = 14;
  console.log("The GCD of "+num1+" and "+num2+" is: "+gcd(num1,num2));
  