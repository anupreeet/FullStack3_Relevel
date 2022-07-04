/* 
 HOF - if it takes a function as arguement 
     - if it returns any function

     then it is known as higher order function.
*/

// function x(){
//     console.log(" hello ");
// }
//passing function x as a parameter to fun y
// function y(x)  // y -- higher order function  x -- callback fun
// {
//      //console.log(" hello ");
// }

// y(x);



// const radius=[4,2,1,6,7];

// const calarea= function(radius){

//     const output=[];
//     for(let i=0;i<radius.length;i++)
//       {
//               output.push(Math.PI*radius[i]*radius[i]);
//       }
//       return output;

// }
// console.log(calarea(radius));



// const calcircum= function(radius){

//     const output=[];
//     for(let i=0;i<radius.length;i++)
//       {
//               output.push(2*Math.PI*radius[i]);
//       }
//       return output;

// }
// console.log(calcircum(radius));



// const caldia= function(radius){

//     const output=[];
//     for(let i=0;i<radius.length;i++)
//       {
//               output.push(2*radius[i]);
//       }
//       return output;

// }
// console.log(caldia(radius));

//DRY -- DON'T REPEAT YOURSELF
// repetation of code

const radius=[3,6,7,8,9]; 
const area=  function(r) // 1 val of radius
{
    return Math.PI*r*r;
}

const circumference=  function(r) // 1 val of radius
{
    return 2*Math.PI*r;
}

// const cal= function(radius,calculator_fun) //calculator_fun- callback fun
// { 

//     const output=[]; //empty array
//     for(let i=0;i<radius.length;i++) //iterate over radius array
//     {
//             output.push(calculator_fun(radius[i]));  //calculator_fun(3); //cal area
//     }

//     return output;

// }

// console.log(cal(radius,area));
// console.log(cal(radius,circumference));
//map(), filter()

const output1=radius.map(area); //map return array;
console.log(output1);

//map-- used to transform an array.
//  input_arr=  [5,1,3,6,7]
//  double = [10,2,6,12,14];
//  triple = [15,3,15,24,21];



 const inp= [5,1,3,6,7];
// function double(x) // 5
// {
//     return 2*x;
// }
// const ans = inp.map(double);   //[10,2,6,12,14]
// console.log(ans);


const a=inp.map((x) => x*2);
console.log(a);
