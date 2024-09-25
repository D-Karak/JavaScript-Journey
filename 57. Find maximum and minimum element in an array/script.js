//Find the maximum value in an array using reduce()
const arr=[20,55,35,45];
let maximum=arr.reduce(maxfunction);
function maxfunction(max,value){
    if(value>max){
        return value
    }else{return max}
}

let minimum=arr.reduce(minfunction);
function minfunction(max,value){
    if(value<max){
        return value
    }else{return max}
}

console.log(`Maximum number is ${maximum} and Minimum no. is ${minimum}`)

//This is what happening in maxfunction
// let max=0;
// for(let i=0;i<arr.length;i++){
//     let value=arr[i]
//     if(value>max){
//        max=value;
//     }
// }
// console.log(max);