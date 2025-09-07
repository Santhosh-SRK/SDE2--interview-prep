//Interview Question:
// 1.write a program that a function shld take string as a input and return the same string  to captialise the first letter of the word andthe rest wil be lowercase as shown below
// inpu= hi i am santhosh  output:Hi I AM Santhosh

let captiallizeLetter=function(str){
return str.trim()
.split(/\s+/)
.map((word)=>{
    return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
}).join(" ")

}

let input=("     hi i am santhosh    ")
console.log(captiallizeLetter(input));


//2.
let obj={x:5,y:10}
let obj1=obj
obj1.x=20
console.log(obj.x);  // will output 20 since ob1=obj whicvh are refferencing to same object 