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

//4.closure with this
///here in first loop it is block scope so it will remember the i vlaue sand it wil prtint 1,2,3,4,5,after settimeout
// but ini var that is function scoped in below loop by the time settimepouyt is executed the value of i will be 5 and numbs[5] is undefined so o/p will be undefined 5 tiumess
let nums = [1, 2, 3, 4, 5]
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(nums[i])
    })
}
for (var j = 0; j < 5; j++) {
    setTimeout(() => {
        console.log(nums[j])

    })
}

//5
const objc = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // here this points to global obkject and that is a empty string                           
  }                          //if youy want that to be fixed use normal function
};

objc.greet();

///
// console.log(a);
// let a=10

///hoisting
function abc(){
    console.log(any,l,c);
    var any=10;
    let l=11;
    const c=12; ///temporal dead zone they are in the scope but they are not yet declare,
}               //The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted 
                // to the top of its scope and when it is actually initialized.

abc()