const button=document.getElementById("submit")
const plate01=document.getElementById("plate__01")
const plate02=document.getElementById("plate__02")
const plate03=document.getElementById("plate__03")
const plate04=document.getElementById("plate__04")
const span01=document.getElementById("value01")

button.addEventListener('click',()=>{
    
plate01.style.backgroundColor=color01()
 plate02.style.backgroundColor=color02()
 plate03.style.backgroundColor=color03()
 plate04.style.backgroundColor=color04()
 plate01.innerText=color01()
 plate02.innerText=color02()
 plate03.innerText=color03()
 plate04.innerText=color04()
})

const color01=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    const newColor=`rgb(${r},${g},${b})`;
    return newColor

}
const color02=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    const newColor01=`rgb(${r}+2,${g},${b})`;
    return newColor01

}
    
const color03=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    const newColor02=`rgb(${b},${r},${g})`;
    return newColor02

}
    
const color04=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    const newColor03=`rgb(${r},${b},${g})`;
    return newColor03

}
    

