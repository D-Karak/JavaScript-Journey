//Flatten a multidimensional array into a one-dimensional array
const arr=[[1,2],[3,4],[5,6]] //this is an array of arrays
const flatarr=arr.flat(); // flat method creates a new array with sub-array elements and concated to a specific depth
console.log(flatarr);// output: [ 1, 2, 3, 4, 5, 6 ]