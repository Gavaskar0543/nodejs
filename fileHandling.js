const file = require('fs')

// file.readFile('file.txt' , 'utf8',(err,data)=>{
//     console.log(err,data)
// }) 

 
// const a= file.readFileSync ('file.txt')

// console.log(a.toString())
const a=file.readFile("fileWrite.txt",(err,data)=>{
    console.log(err,data )
})
console.log(a.toString)

console.log("im the first");