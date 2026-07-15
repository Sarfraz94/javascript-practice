// fist we see operator precedence .. hight precedence to lower
//  1) ( ) baraces 
//  2) ++ -- increment or decrement also typeof (typeof a+b) first type then last add also ! logical operator
//  3) **  power
//  4) *,/,%
//  5) +,-
//  6)  Relational but comprsional operator but < > <= >=
//  7) Relational but sub type equality operator == != === !===
// 8) logical operators & ||






// ########### Arthemtic operators #######################################
// 1)addition       +
// 2)subtraction    -
// 3)Multiplication *
// 4)divsion        /
// 5)modules        %
// 6)power          **

// Note: All arthmetic operator change the diffrent datatype varible into number then the perform their Worker. it implicit change datatype
//        but only addition + can not change the it number because it work also as concatenate

// // task 2
// // String addition + method
// let num1="30"
// let num2=20
// let sum=num1+num2        //the work of + is concetenate and addition when it seen + before or after string it will concate
// console.log(sum)          // then if number then it perform addition but it always follow precedent first 

// console.log(num1+num2+20);     // when same operator same presendent it start from left son "30"+20= 3020   then 20 it become answer 302020
// console.log(num2+20+num1);       //4030
// console.log(num1+num2*2);        //30 same first 20*2=40    ans 3040

// Note= only + operator can not change the typepf its value into number but remaining all -,*,/,/ and many also compresional operator change datatype into number
 

// i always confuse ke main type kese use karon (typeof varible) or (typeof (varible)) there show perfect Worker
// console.log(typeof num1+num2)    //string20 last ko as concatenate kiya 
// console.log(typeof (num1+num2))


// console.log(10-"20") //-10
// console.log("-10"-5)  //-15

// console.log(10*true)   //10

// console.log(10/"2")  //5

// console.log(2**3) //8

// // but if we arthimatic operate with non digit then result Nan but typeof remain Number

// console.log(10-"ali")  //NaN

// // ######### Increament and decrement operator #######################################
// 1) ++
// 2)--
//       also both have pre and post
//       1)++a 
//       2)--a
//       3)a++
//       4)a--

//       this is shorthand of let a=1+a  == ++a
//       but you add more than one so use a=a+2

//       pre:--a,++a => this first print or assign value then it add or subtract 1 then again show result agin calling
//       post: a++,a-- => this first add value then give or assign value 

    //   let a=2;
    //   let b=4;
    //   let sum=a + a++ + ++b  + ++a + --b + a--  + --a + b++;
    //    //     2 + 2   + 5    + 4   +   4 + 4    + 2   + 4  = 27  +++ it provide error so in addition give space
    //   console.log(sum)

    //   Rule: javascript excute line by line and and also update values if anychanges before calling

    // let a=4;
    // let b=a++
    // console.log(a,b)  // a=5 b=4
    // // already told you ke phly javascript line by line excute krti hy phly us ne a ko 4 din jb b ne a++ tu as ne do kam
    // keye ak us ko phly a ke value 4 den then a ko 1 update kiya js se a ke original value bar 

    // note: ye incremtnt or decrement orignal value koo update kr deti he.

 
    // let a=5
    // console.log(a+1) //this add temporay 1 not orignal res:6
    // console.log(a)   //now orignla wil no effected res:5
    // console.log(++a)  //6  orignal also updated
    // console.log(a)    //6

// let a=1;
// console.log(++a*2) // incremetn decremt is precedence high

// #############  Relational Operators##############################3
//  also sub types
//   1)comparesion
//   2)equlity operator

//   comparisonal operator are < > <= >=
//   equlity operator ar == === != !===

//   Note: these also change the datatype in Numbers 

//   Null change into 0      but in equality operator Null can not change it value like 
//   (null<=0) true   but (null==0)  //false
//   undefined change into NaN
//   all comapreion false due to nan but (null==undefined) for both have no defined value

//   == this check only value not datatype so called loosly equility operator
//   (20=="20") //true

//   === this check also value and datatype called strong equility operator
//    (20==="20") //false


// ###################### logical opetator ####################################
// 1)&& and 
// 2)||  or 
// 3) !
 
// && in this both condition true then result is true (true && true)
// || in this one must be true then result will be true (false || true)
// ! it mean alternate !true=false !false=true

// console.log(2*-!false+3)
// alo it mean ! more presendence *


// ############################## Assignment operator##################################

// these are shortform of a=a+-*/%5 
// 1)=
// 2)+=
// 3)-=
// 4)*=
// 5)/=
// 6)%=
// 7)**=

// let a=5
//       a=a+5  //a=10
//  so it use shortform 
//      a+=5;

//     // it mean reassign value to orignial
//  let a=20;                
//    console.log(a+=5)
//    console.log(a)
//    console.log(a%=5)

// ############################# conditional ternery operator#################################
// tern mean 3
// condition ?  :
// it work like conditonal 
// syntaz  conditon? true value : false value
// console.log(1==true? "true": "false") //true
// // value only writen it will show no need to write again console.log(tre) isnide value
// let age=20
// console.log(age>=18? "able": "not able")


// ###################################Nullish Coalescing Operator###########################
//  ??  this is keyword fo Nulish
// if left side null or undefined then right side value take
//  it depend only null and undefined value
//  falsy= null,undefined
//  truty= true,number, anthing jo value me kuch ho 

//  note=> boolean are ture false are not falsy value beacuse it value 

//  ""=> this is faly if give space then not null " "
//  0=> this is value not false

//  (null??"guest") // it select true if first null then second name give
//  ("0"?? true)     //0

// console.log(null??"gest")  //gest
// console.log(undefined??"unknown") //unknown

// ######################### Optional Chaining Operator #############################
// this use for not give error if in object not any key and value so it is safty

let ob={
    name:"sarfraz",
    age:20,
    address:{
        city:"ratodero"
    }
}
console.log(ob)
console.log(ob.address?.city)  //sefty
// console.log(ob.contact.number)  //now this give error
console.log(ob.contact?.number) //undefined


