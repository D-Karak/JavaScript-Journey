//  Create a function that checks if a given number is prime.

function prime(number){
if(number<1){
    return false;
}
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let num = 2; // Change this number to test different values

if (prime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}