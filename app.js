//part1: Coding Questions:
//(1):
// let x="123";
// let y=7;
// console.log(Number(x)+y);

//----------------------------------------------
//(2):
// let x=0;
// if(!x){
//     console.log("invalid");
// }else{
//     console.log("valid");
// };
//------------------------------------
//(3):
// for(let i=1;i<=9;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }
//----------------------------------------------------
//(4):
// const numbers=[1,2,3,4,5];
// const even_numbers= numbers.filter((n)=>n%2===0);
// console.log(even_numbers);
//--------------------------------------------------
//(5):
// const arr1 =[1,2,3];
// const arr2 =[4,5,6];
// const arr =[...arr1,...arr2];
// console.log(arr);
//-------------------------------------------------
//(6):
// let day =2;
// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Enter valid number");  

// };
//--------------------------------------------------------
//(7):
// const FirstArray=["a","ab","abc"];
// const LengthArray=FirstArray.map((num)=>num.length);
// console.log(LengthArray);
//-----------------------------------------------------
//(8):
// function checknumber(number){
//      if(number%3===0 && number%5===0){
//         return "Divisible by both";
//      }else{
//         return "Can not Divisible by both";
//      };
// }
// console.log(checknumber(15));
//---------------------------------------------------
//(9):
// const SquareOfNumber=((number)=>number**2);
// console.log(SquareOfNumber(10));
//-----------------------------------------------
//(10):
// function Destructing({name,age}){
//     return `${name} is ${age} years old`;
// }
// console.log(Destructing(
//    {
//     name: 'John', 
//     age: 25
//    }
 
// ));
//--------------------------------------------------
//(11):
// function Summation(...number){
//     return number.reduce((total,num)=>total+=num,0);
// };
// console.log(Summation(1,2,3,4,5));
//----------------------------------------------
//(12):
// function Fn(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve("sucssess")
//         },3000);
//     })
// }
// async function Test() {
//     try {
//         let Message=await Fn()
//         console.log(Message)
//     } catch (error) {
//         console.log("error")
//     }
// }
// Test()
//---------------------------------------------
//(13):
// function LargeNum(arr){
//     let temp =arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>temp){
//             temp=arr[i];
//         }
//     };
//     return temp;
// };
// console.log(LargeNum([1,2,7,4]));
//----------------------------------------------
//(14):
// function obj(test){
// return (Object.keys(test));
// };
// console.log(obj({
// name:"john",
// age:30
// }));
//-----------------------------------------------------
//(15):
// function Divide(words){
//     return words.split(" ");
// }
// console.log(Divide("the quick brown fox"));
//---------------------------------------------------------
// Part 2: Essay Questions:
//(1):What is the difference between forEach and for...of?
/**forEach:apply in array method(callback fuction),
 * dosnt support break,continue,
 * in async,await:dosnt wait
 * ------------------
 */
/**forEach:apply in loop statement,
 * support break,continue,
 * in async,await:wait for each await
 */

//----------------------------------------
//(2):What is hoisting and what is the Temporal Dead Zone (TDZ)? 
//hoisting:declarations are processed before code execution within their scope.
/**eg: (in var :it hoisted and initialized with undefined).
(in let,const: hoisted but cannot be accessed before their declaration).*/

//TDZ: the period between entering a scope and reaching the variable declaration.
/**eg:let,const cannot be accessed */

//----------------------------------------
//3. What are the main differences between == and ===?
//(==)=>compare value by value
//(===)=>compare value by value and dataype
//--------------------------------------------- 
//4.Explain how try-catch works and why it is important in async operations?
/**try:	Execute code
catch:	Handle errors
async/await	: Handle rejected Promises*/
//--------------------------------------------------
//5. What’s the difference between type conversion and coercion? Provide examples of each. 
/**type conversion:the devolper converts types manually
 * type coersion:java script converts types automatically
 */
