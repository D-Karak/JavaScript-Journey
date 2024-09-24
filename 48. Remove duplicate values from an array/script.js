//Remove duplicate values from an array.

const a=[1,2,2,3]
const b=[...new Set(a)] //new set() creates an array with unique element and
                        // ...(spread) method  turns the set back into an array so that you can work with it just like any other array.

console.log(b)  //output: [1,2,3]

