// // // // q1.function declaration?

// // // // function square|(num){
// // // //     return num *num
// // // // }   
// // // // this is function decalkartion also callewd as fn defnetion or fnc statement 
// // //     //its just a way to declare a function 
// // //     // they are hoisted

// // // // 2. when you store a function inside a variable it becomeds a function expression

// // // // const square=function(num){
// // // //     return num*num   //thery are nnnot not hised
// // // // }

// // // //3. the function with  no name is called first class function

// // // //4 where a function can be tretaed as a variable there function is called fcf
// // // //  in this casws fdunction can be passed to anaothe rfunction retuern
// // // // You can treat a function like a variable.
// // // // You can store it in a variable.
// // // // You can pass it as an argument to another function.
// // // // You can return it from another function. 

// // // // 5.iifee

// // // // fubnction square(num){             
// // // //     return num *num
// // // // }
// // // // square(5)

// // // // (function square(num){
// // // //     retuern num*num
// // // // })(5)\\

// // // // (function(x){
// // // //  return (function(y){  //this will op 1
// // // //  console.log(x);
// // // //  })(2)
// // // // })(1)

// // // // //spread to srpead the array ,and rest is to combine,
// // // //  const fn=(a,x,y,...numbers)=>{
// // // //     console.log(x,y,numbers);
// // // //  };
// // // //  fn(5,6,3,7,8,9,)


// // //  //clousure is a function along with its refference to its outer envirounment bundeled to gether 
// // // //  var e=10;
// // // // function sum(a){
// // // //     return function(b){
// // // //         return function(c){
// // // //             return a+b+c
// // // //         }
// // // //     }
// // // // }
// // // // console.log(sum(1)(2)(3))

// // // // closure 1
// // // // let count=0;
// // // // (function printCount(){
// // // //     if(count===0){
// // // //         let count=1;
// // // //         console.log(count);//1
// // // //     }
// // // //     console.log(count);//0
// // // // })()

// // // //write a function that would allow you to do this

// // // // function createBase(num){
// // // //     return function(innernum){
// // // //         // console.log(innernum+num);
// // // //     }
// // // // }
// // // // var addFive=createBase(6);
// // // // addFive(10)//return 15
// // // // addFive(20)//return 15

// // // // function find() {
// // // //     let a = []
// // // //     for (let i = 0; i < 10000000; i++) {
// // // //         a[i] = i * i;
// // // //     }
// // // //     return function (index) {
// // // //         // console.log(a[index])
// // // //     }
// // // // // 
// // // // }
// // // // const closure=find()
// // // // console.time("6")
// // // // // closure(6)
// // // // console.timeEnd("6")
// // // // // console.time("61")
// // // // closure(61)
// // // // console.timeEnd("61")



// // // // function a(){
// // // //     for(var i=0;i<3;i++){
// // // //   function closure(i){
// // // //     setTimeout(()=>{
// // // // console.log(i);
// // // //   },i*1500)
// // // //   }
// // // //   closure(i)
// // // //     }
// // // // }
// // // // a()  /// the op will 333 coz buy thte time setimeput is completed  the i=3
// // // // we can use either l;et or iife tehn we can acheive 0,1,2

// // // ///closure tpo priovate counter

// // // //HOW WILL you create a private counter using closure 

// // // function counter(){
// // //     var _counter=0;
// // //     function add(incr){
// // //         _counter=_counter+incr
// // //     }
// // //     function retr(){
// // //         return "Counter="+_counter
// // //     }
// // //     return{
// // //         add,
// // //         retr
// // //     }
// // // }

// // // let c=counter()
// // // c.add(5)
// // // console.log(c.retr());

// // // ///module pattern ?
// // // //module pattern is ntng but a way fof creatinf private variable and function which cannot be
// // // //  acced directly it only be acces inside punblic(what we want -public api) whicj is a closure 
// // // let module=(function(){
// // //     let pr=5
// // //     function private(){
// // //         console.log("private");
        
// // //     }
// // //     return{
// // //         publc:function(){
// // //             console.log("public", pr);
// // //             private()
// // //         }
// // //     }
// // // })();
// // // module.publc()
// // // // module.private()

// // // //oince
// // // let view;
// // // function likeVideo() {
// // //     let called = 0;
// // //     return function () {
// // //         if (called > 0) {
// // //             console.log("already called");
// // //         } else {
// // //             view = "Santhosh.....,..";
// // //             console.log("subnvugbn", view);
// // //             called++
// // //         }
// // //     }
// // // }
// // //    let iss= likeVideo()
// // // iss()
// // // iss()
// // // iss()
// // // iss()

// // // //once polyfil

// // // function once(func,context){
// // //     let ran;
// // //     return function(){
// // //         if(func){
// // //             ran=func.apply(context || this,arguments)
// // //             func=null
// // //         }
// // //         return ran
// // //     }
// // // }
// // // const hello=once(()=>console.log("helooooooo"))

// // // hello()
// // // hello()
// // // hello()
// // // hello()
// // // hello()

// // // //memoize
// // // function myMemoise(fn,context){
// // //     const res={};
// // //     return function(...args){
// // //         var argscache=JSON.stringify(args);
// // //         if(!res[argscache]){
// // //      res[argscache]=fn.call(context || this,...args)
// // //         }
// // //             // return res[argscache]h 
// // //     }
// // // }

// // // // function (a,b){
// // // // console.log(a,b);
// // // // }

// // // function f(a){
// // //     return function(b){
// // //         return `${a},${b}`;
// // //     }
// // // }
// // // console.log(f(5)(8));
// // // //currying means tranforming a function that takes muyltipple arguments into series of function each taking a single arguement.
// // // //sum(2)(6)(1)

// // // function sum(a){
// // //     return function(b){
// // //         return function(c){
// // //             return a+b+c;
// // //         }
// // //     }   
// // // }
// // // console.log(sum(1)(2)(3));

// // // ///here a value is orriden by there and output only ahas three and b 9in ecma object allowes duplicate keys but it sziis iver ridden 
// // // const obj={
// // //     a:"one",
// // //     b:"two",
// // //     a:"three"
// // // }
// // // console.log(obj)

// // // const user={
// // //     name:"santhosh",
// // //     age:28,
// // //     isAwesome:true,
// // // }

// // // for (obj in user){
// // //     console.log(obj +" : "+ user[obj])
// // // }


// // // //to create a function that multiplyes by two
// // // let nums={
// // //     a:100,
// // //     b:200,
// // //     title:"my nums",
// // // };

// // // multiplyBYTwo(nums);

// // // function multiplyBYTwo(obj){
// // //     for(key in obj){
// // //         if(typeof obj[key]==="number"){
// // //             obj[key]*=2
// // //         }
// // //     }
// // // }

// // // console.log(nums)


// // //call() is a method in JavaScript used to invoke a function immediately. 
// // // It allows you to set what this refers to inside the function by passing an object. 
// // // Also, you can pass additional arguments separately after the this object.”
// // const obje={name:"santhosnh"}

// // function sayhello(age){
// //     return "Hello" + " "+this.name + "    is"+ "  " +age
// // }
// // console.log(sayhello.call(obje,  27));


// // //what is apply same as call it take sthe arguement as anarray  array   
// // const person={
// //     name:"santhsoshh.",
// //     age:28,
// //     DOB:1998
// // }

// // function persons(city,piuncode){
// //     console.log(`Hi Iam ${this.name} my age  is${this.age}  and cits is ${city} and code ${piuncode}`);
// // }
// // persons.apply(person,["bangalore",56000016])

// // //bind will retuern a new function  that can be exuted sepoerately 
// // // and trhe this wil refefer to the object that was declared 

// // const prsn={name:"santhuuuu"};

// // function sayHi(age){
// //     return `${this.name} is ${age} old`
// // }

// // console.log(sayHi.call(prsn,28));
// // bounded=sayHi.bind(prsn,24555)
// // console.log(bounded());



// // /// 
// // const age=10;

// // let person={
// //     name:"santhosh",
// //     age:20,
// //     getAge:function(){
// //         return this.age;
// //     },
// // }
// // let person2={age:21};
// // console.log(person.getAge.bind(person2)());

// //6.
// var status="😋";

// setTimeout(()=>{
//     const status="😂"

//     const data={
//         status:"🐞",
//         getStatus(){
//             return this.status;
//         },
//     }
//     console.log(data.getStatus());//here bug will output
//     console.log(data.getStatus.call(this));//this never points to a function it points to global here so we wil get the 😋 in op
// })