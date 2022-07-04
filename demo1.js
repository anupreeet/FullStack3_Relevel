// // Coding Challenge #1

// /*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 
// BMI= mass / (height * height). 
// (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀
// */


// var massMark=78;
// var heightMark=1.69
// var massJohn=92
// var heightJohn=1.95

// var BMI_mark=massMark / (heightMark **2);
// var BMI_john = massJohn / (heightJohn * heightJohn);

// console.log("BMI OF MARK = " + BMI_mark );
// console.log("BMI OF JOHN = " + BMI_john);
                   
// var markHigherBMI = BMI_mark > BMI_john;
// console.log(markHigherBMI);

// //creating function

// function BMI(mass=78,height=1.69,name=mark)
// {
//     var bmi=mass/(height*height);
//     console.log(bmi + " of " + name );
// }
// BMI(78,1.69,"mark")
// BMI(92,1.95,"john");


// var sum=0;

// for( let i=1;i<21;i++){
//     sum=sum+i;
// }
// console.log(sum);

// var one=0;
// one+='10';
// console.log(one);


// function f(x,y) {
//     if((x%2===0) && (y%2===0)){
//         return x+y;
//     }
//     else {
//         return 2*x - y*y
//     }
//     }
//     var a = f(2,4);
//     console.log(a)



/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 
times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print
 it to the console. Don't forget that there can be a draw, so test for that as well (draw 
    means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only
 wins if it has a higher score than the other team, and the same time a score of at least
  100 points. HINT: Use a logical operator to test for minimum score, as well as multiple 
  else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams 
have the same score and both have a score greater or equal 100 points. Otherwise, no team 
wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/



/*
 
0 1 2 3 4  5 6 7 8 9 
* * * *-*-*-* * * *  0                              *-*-*-*-*-*-*-*-*-*
* * * *---   * * * *  1                             *-*-*-*-----*-*-*-*
* * *          * * *  2                             *-*-*----------*-*-*         
* *              * *  3                             *-*--------------*-*
*                  *  4                             *------------------*
                                                   
*                  *  5                             *                  *
* *              * *  6
* * *          * * *  7            
* * * *       * * * * 8             
* * * * *  * * * *  * 9             
                                                             

*/

// //n=5
// function hollow_diamond(n)
// {
//   for(let i=0;i<n;i++)  // 0,1 ,2 ,3,4
//   {
//       for(let j=0;j<(2*n);j++)
//       {
//         //if(i+j<=n-1)              
//         // print *
//         // else
//         // print(" ")
       
//         // if(i+n <= j)   
//         // print *
//         // else
//         // print (" ")

//       }
//       console.log();
//   }

//   for(let i=0;i<n;i++)
//   {
//       for(let j=0;i<(2*n);j++)
//       {
//           // code for lower portion

//       }

//       console.log();
//   }

// }



// console.log("Hollow Square Patter");
// function HollowSquare(num) {
//     i = 0, j = 0;
//     for (i = 1; i <= num; i++) {
//         str1 = "";
//         for (j=1;j<=num;j++){
//             if (i===1 || i===num){
//                 //if (j===1 || j===num){
//                     str1=str1+"*";
//                
//                 else{
//                     str1=str1+" ";
//                 }
//             }
//             console.log(str1);
//         }
//         console.log("\n");
//     }
// }
// HollowSquare(5)


// *****
// *   *
// *   *
// *   *
// *****
// var n=5
// var str=""
// for( let i=1;i<=n;i++)
// {
//     for(let j=1;j<=n;j++)                     
//     {
//         if(i==1 || i==n)
//         str=str+"*";    // str = *****

//         else
//         {
//             if(j== 1 || j== n)
//             str=str+"*";
//             else
//             str=str+" ";

//         }
//     }
    
//     console.log(str);
// }

//var program;
// var x;
// console.log(x)

var n=4;
var a=0;
var b=1;
var c=1;

while(c<n)
{
  b=b*c
  a=a+(b/c)
  c=c+1

}

console.log(a)