//Write a function that returns the factorial of a given number using recursion.
function giveFactorial(factorial) {
    var startValue = 1;
    for (let i = 1; i <= factorial; i++) {
        startValue *= i//startValue=startValue*i
    }
    return console.log(startValue);
}

giveFactorial(4)