// array methods


//forEach method
const number=[1,2,3,4,45,8,9,0,2];


/*console.log("this is foreach() method");
number.forEach(function(el)
{
console.log(el);
})

 //  using arrow function
number.forEach(  (el)=>{
    console.log(el);

});

//map methods

console.log("this is map() method");
/*const double=number.map(function(numbers){

    console.log(numbers*2)
})*/


//print even numbers
console.log("even numbers")
const even = number.map(function (el){
    if(el%2==0){
        console.log(el);
    }
})

//arrow functions

let newfun=(x,y) =>{
    return (x+y)*2
}


console.log("this is arrow function ", newfun(1,1) )