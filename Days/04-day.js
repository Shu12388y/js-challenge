//day 04
//spread operation

const names=['shubham','kunnal',1,'nasha']

const nice=[
    {
    film:'jack and jill',
    rate:5,
    score:12.9

    },
    {
        film:'Tom and jerry',
        rate:7,
        score:20.9
    },
    {
        film:'Hunter',
        rate:6,
        score:2.9
    }
]

let namr= {...names}
let i=0;

let scores= names.filter(fun=>fun===1 )

console.log(scores, names[3])


//rest operation


const number=(...nums)=>{
    console.log(...nums)
   
}

//number(1,2,3,4,5,6,7,8,9,10,11,12)


let sum=0;
let array = [];

for(let i=0; i<20; i++){
  array[i]=array.push(i);
 
}
console.log(array);

