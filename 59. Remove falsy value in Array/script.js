// Remove falsy values (false, null, 0, "", undefined, and NaN) from an array.

const arrOne=[0,1,NaN,5,false,undefined,8,null,10,""]
const newarr=arrOne.filter(myfunctionOne)
function myfunctionOne(value){
    if(value){
         return value
    }
}
console.log(newarr)//output: [ 1, 5, 8, 10 ]

////////////////////////////////by using forEach
const arrTwo=[0,4,NaN,7,false,undefined,15,null,25,""]
const arr=[]
arrTwo.forEach(myfunctionTwo)
function myfunctionTwo(value,index,array){
  if(value){
    arr.push(value)
  }
}
console.log(arr)//output: [ 4, 7, 15, 25 ]
