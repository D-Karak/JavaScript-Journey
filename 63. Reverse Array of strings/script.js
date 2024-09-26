//Create a function that takes an array of strings and returns an array where each string is reversed.

const fruits=["Apple","Banana","Orange"]
function result(array){
    return array.map(function(value){
        return value.split('').reverse().join('');
    })
}
// for the first value "Apple"
// .split("")=['A','p','p','l','e'] then // split method make an array from string
// .reverse()=['e','l','p','p','A'] then
// .join("")="elppA" // join method join array elements to a string

console.log(result(fruits)) //Output: [ 'elppA', 'ananaB', 'egnarO' ]
