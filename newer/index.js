// array different method


let array =[1,2,3,4,5,6,7,8,9,10,"shubham","shubham","shubham","shubham","shubham"]


// foreach method 

array.forEach((el)=>{
    console.log(el)
})

const movies = [
    {
        title: 'parsite',
        score: 100
    },
    {
        title: 'stand by me',
        score: 89
    },
    {
        title: "alien",
        score: 90

    }
]

setTimeout((el)=>{
    console.log("nice time")
},2000)
movies.forEach((el)=>{
    console.log(el.title)
    console.log(el.score)
})


// map function 

let treats=["chocolate","sugar candy","orange","peanut butter"]

const caps=treats.map((el)=>{
  return el.toUpperCase()
})


console.log(caps)


// Filter an array 

let treatss=["chocolate","sugar candy","orange","peanut butter"]

const fills=treats.filter(names=>names==="chocolate")
console.log(fill)

const number=[1,2,3,4,5,6,7,8,9,10]

const evenNumber=number.filter(el=>el%2===0)
console.log(evenNumber)

const oddNumber=number.filter(el=>el%2!=0)
console.log(oddNumber)

const numbers=evenNumber+oddNumber;
console.log(numbers)

// some and every method 


const words=["dog","dig","log","brag","wrag"]
const result=words.every(word=>{
    return word.length===3;
})

console.log(result)

const results=words.some(word=>{
    return word.length===3;
})

console.log(results)

// reduce method 

let numberer=[1,2,3,4,5];
const fill=number.reduce((first,second)=>{
    return first+second;
})
console.log(fill)


// spread 

const max=Math.max(...number)
console.log(max)


// destructiong 

const names=["shubham","nasha","restish"]

const [paul,she,news]=names
console.log(paul)
console.log(she)
console.log(news)


const user={
    email:'harvey@gmail.com',
    password:123456,
    firstname:'harvey',
    lastname:'milk',
    born:1930,
    died:1978,
    bio:'Harvey Bernad millk was an amercian politican',
    city:'San Francisco',
    state:'california',
}

const{firstname,lastname}=user
console.log(firstname,lastname)

console.log(user.firstname,user.lastname)