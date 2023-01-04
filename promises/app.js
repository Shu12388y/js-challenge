const newer=async()=>{
    try{


     await("this is first")
     await("this is second")
     await("this is third")
     await("this is fourth")
    }
    catch{
        console.error("Something went wrong")
    }
}
setTimeout(()=>{
    newer
},1000)
