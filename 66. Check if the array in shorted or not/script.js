// Write a function that checks whether an array is sorted
const arr=[1,2,3,4,5]
function check(array){
    const ascending=array.toSorted(function(a,b){return a-b});
    const descending=array.toSorted(function(a,b){return b-a})
if(array.join()===ascending.join())
    {
    console.log("Ascending");
}else if(array.join()===descending.join()){ //we can not directly compare two arrays in statements using === operator 
   console.log("Descending");               //ither we have to use loop and check element by element or 
}                                           //conver both arrays into string and compare them.
else{console.log("Not Sorted");}
}
check(arr);