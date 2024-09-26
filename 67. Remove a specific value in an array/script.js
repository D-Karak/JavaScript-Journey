//Create a function that removes all occurrences of a specific value from an array

const arr=[1,2,5,3,5,4,5]

function remove(array,oValue){
    return array.filter(function(value){
        return value!==oValue
    })
}
console.log(remove(arr,5))