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

//3.minnimum winfdow substring level:Hard 
var minWindow = function (s, t) {
    let map = new Map()
    for (let letter of t) {
        if (!map.has(letter)) {
            map.set(letter, 1)
        } else {
            map.set(letter, map.get(letter) + 1)
        }
    }
    let left=0;
    let right=0;
    let count=map.size;
    let len=Infinity;
    let minWindow=""

    while(right<s.length){
        let rLetter=s[right];
        if(map.has(rLetter)){
            map.set(rLetter,map.get(rLetter)-1)
            if(map.get(rLetter)===0) count--
        }
        right++
        while(count===0){
            if(right-left<len){
                len=right-left
                minWindow=s.slice(left,right)
            }
            let lLetter=s[left]
            if(map.has(lLetter)){
                map.set(lLetter,map.get(lLetter)+1)
                if(map.get(lLetter)>0) count++
            }
            left++
        }
        
    }
    return minWindow
}
