// q1.function declaration?

// function square|(num){
//     return num *num
// }   
// this is function decalkartion also callewd as fn defnetion or fnc statement 
    //its just a way to declare a function 
    // they are hoisted

// 2. when you store a function inside a variable it becomeds a function expression

// const square=function(num){
//     return num*num   //thery are nnnot not hised
// }

//3. the function with  no name is called first class function

//4 where a function can be tretaed as a variable there function is called fcf
//  in this casws fdunction can be passed to anaothe rfunction retuern
// You can treat a function like a variable.
// You can store it in a variable.
// You can pass it as an argument to another function.
// You can return it from another function. 

// 5.iifee

// fubnction square(num){             
//     return num *num
// }
// square(5)

// (function square(num){
//     retuern num*num
// })(5)\\

// (function(x){
//  return (function(y){  //this will op 1
//  console.log(x);
//  })(2)
// })(1)

// //spread to srpead the array ,and rest is to combine,
//  const fn=(a,x,y,...numbers)=>{
//     console.log(x,y,numbers);
//  };
//  fn(5,6,3,7,8,9,)


 //clousure is a function along with its refference to its outer envirounment bundeled to gether 
//  var e=10;
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))

// closure 1
// let count=0;
// (function printCount(){
//     if(count===0){
//         let count=1;
//         console.log(count);//1
//     }
//     console.log(count);//0
// })()

//write a function that would allow you to do this

// function createBase(num){
//     return function(innernum){
//         // console.log(innernum+num);
//     }
// }
// var addFive=createBase(6);
// addFive(10)//return 15
// addFive(20)//return 15

// function find() {
//     let a = []
//     for (let i = 0; i < 10000000; i++) {
//         a[i] = i * i;
//     }
//     return function (index) {
//         // console.log(a[index])
//     }
// // 
// }
// const closure=find()
// console.time("6")
// // closure(6)
// console.timeEnd("6")
// // console.time("61")
// closure(61)
// console.timeEnd("61")



// function a(){
//     for(var i=0;i<3;i++){
//   function closure(i){
//     setTimeout(()=>{
// console.log(i);
//   },i*1500)
//   }
//   closure(i)
//     }
// }
// a()  /// the op will 333 coz buy thte time setimeput is completed  the i=3
// we can use either l;et or iife tehn we can acheive 0,1,2

///closure tpo priovate counter

//HOW WILL you create a private counter using closure 

function counter(){
    var _counter=0;
    function add(incr){
        _counter=_counter+incr
    }
    function retr(){
        return "Counter="+_counter
    }
    return{
        add,
        retr
    }
}

let c=counter()
c.add(5)
console.log(c.retr());