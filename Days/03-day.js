// array methods


//forEach method
const number=[1,2,3,4,45,8,9,0,2];


console.log("this is foreach() method");
number.forEach(function(el)
{
console.log(el*2);
})

 // using arrow function
number.forEach(  (el)=>{
   console.log(el);

});

//map methods
console.log("this is map() method");
const double=number.map(function(numbers){

    console.log(numbers*2)
})


///print even numbers
console.log("even numbers")
const even = number.map(function (el){
  if(el%2==0){
        console.log(el);
    }
})

const few=number.map((el)=>{
  if(el%2==0){
    console.log(el);
}
})

//arrow functions

let newfun=(x,y) =>{
    return (x+y)*2
}

const hello=(el)=>{
    console.log("this is a arrow function");
}

hello()
//console.log("this is arrow function ", newfun(1,1) )*/


const name=(el)=>{
    console.log(`this is a arrow function ${el}`);
}


name('hello')

//settimeout
setTimeout(()=>{
    console.log('this is time out function')
},2000);

//setinterval
let Id=setInterval(() => {
    console.log("hi")
    
}, 1000);
clearInterval(Id)
//Filter method
const nums=[1.2,3,4,5,4,66,7,7,9];

const newNum=nums.filter(n=> n%2===0)

console.log(newNum)