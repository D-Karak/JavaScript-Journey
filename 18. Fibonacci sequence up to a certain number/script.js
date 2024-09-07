//Write a program that prints the Fibonacci sequence up to a certain number of terms.(0,1,2,3,5,8,13....)
var limit;
limit = 10;
var a = 0; //fibnacci first term
var b = 1; //fibonacci second term

console.log(a);
console.log(b);
for (let i = 0; i <= limit; i++) {
    var c = a + b;
    console.log(c);
    a = b;
    b = c;
}