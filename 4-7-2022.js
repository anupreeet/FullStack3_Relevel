/* 
You are given a large integer represented as an integer
 array digits, where each digits[i] is the ith digit 
 of the integer. 

 Increment the large integer by one and return 
 the resulting array of digits.

 Input: digits = [1,2,3] // 123 + 1 = 124
Output: [1,2,4]

//  999 = 1000
//  119 = 120
1-8 
// 9 - 10
// 19  - 20
   i

    20
  // 999 
     i
      000

      [ 1 , 0 ,0 ,0 ];
    // 99  
       i
      00
  // [1, 0 ,0  ]

  // 989
       i
    //   990
     0 at one's place




Input: digits = [9]
Output: [1,0]

*/

// 189 + 1 = 190
// 190
// i
// 989 + 1 = 990
   
//   990

//  199999
//  200000
 
// 999
   
var plusOne = function (digits)
{
  for(let i = digits.length-1;i>=0;i--)
  { if(digits[i]<9)
    {
        digits[i]++;
        return digits;
    }
    digits[i]=0;

  }
  
  var arr= new Array(digits.length+1);
  arr[0]=1;
  // [ 1 , , , ]
  for(let i=1;i<arr.length;i++)
   arr[i]= digits[i-1];
   // arr[1]= digits[0];
   // arr[2] = digits[1];

  

}


let digits = [ 1,9,9];
console.log(plusOne(digits));

























/* 

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

  I V  - 4       X L - 40 
  V I  - 6     

For example, 2 is written as II in Roman numeral, 
just two ones added together. 12 is written as XII,
 which is simply X + II. The number 27 is written as
  XXVII, which is XX + V + II.

 I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.


Input: s = "LVIII"
//  [50 , 5 , 1 , 1, 1]
//    ans = 58
Output: 58

 s= " III " - 3

Input: s = "MCMXCIV"
 [ 1000 , 100 , 1000 , 10 , 100 , 1 , 5]                                    i  
//  ans = 0 + 1000  - 100 = 900 + 1000 = 1900 - 10 = 1890 + 100 = 1990 -1 
//   1989 + 5 = 1994


Output: 1994



*/


function conversion(s){
 // s - MCMXCIV
         
  var nums=[]
   for( let i=0; i<s.length;i++)
   {  // i - 0 / 1

       switch( s.charAt(i)) 
       {

        case 'M' : { nums.push(1000); break;}
        case 'C' : { nums.push(100); break;}
        case 'I' :{nums.push(1); break;}
        case 'V' :  {nums.push(5); break;}
          case 'L':  {nums.push(50); break;}
            case 'D':  {nums.push(500); break;}
              case 'X': {nums.push(10); break;}

       }

   }

   var ans=0;
   for(let i=0;i<nums.length-1;i++)
   {

    if(nums[i] < nums[i+1])
     ans= ans - nums[i];
     else
     ans=ans+nums[i];
   }

   var final = ans + nums[nums.length-1];
   console.log(final);
    
 
}


let s= "MCMXCIV"
conversion(s);
























