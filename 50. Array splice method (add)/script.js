//Insert elements at a specific index in an array (splice).

const fruits=["Apple", "Banana", "Orange"];
fruits.splice(1,0,"Papaya","Guava");//splice add new items to an array 1 is index no. where to start and 0 indicates 
                                    //how many element should be remove
                                    
console.log(fruits);//output: [ 'Apple', 'Papaya', 'Guava', 'Banana', 'Orange' ]
