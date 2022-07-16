// Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate 
// positive and negative numbers without changing the relative order of positive and negative numbers. 
//Note: Array should start with positive number. 
//   Example 1:  Input:  N = 9 Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2} 
//                                       i
//                             Output:  9 -2 4 -1 5 -5 0 -3 2


// arr1= [ 9,4,5,0,2]
//                 i
// arr2 = [-2,-1,-5,-3]
//                   j

// {9, 4, -2, -1, 5, 0, -5, -3, 2} - arr
//  k

// function fun(arr,n)
// {
//    let arr1=[]; //positive numbers
//    let arr2=[]; // negative numbers

//    for(let i=0;i<n;i++)
//    {
//     if(arr[i]<0)
//     arr2.push(arr[i]);

//     else
//     arr1.push(arr[i]);
//    }

//    console.log(arr1);
//    console.log(arr2);
//    let  i=0,j=0,k=0;

//    while(j<arr2.length && i<arr1.length)
//    {
//     // k=0 i=0 // next iteration k= 2 i=1
//     arr[k++]=arr1[i++];
   
//     //  k= 1 i=1
//     // arr[1]=arr2[0]
//     arr[k++]= arr2[j++];
    
//     //k=2  j=1
//    }

// console.log(arr);
//    while(i<arr1.length){ arr[k++] = arr1[i++]; }

//    while(j<arr2.length) {arr[k++]= arr2[j++];}

// }


// let n = 9;
// let arr= [9, 4, -2, -1, 5, 0, -5, -3, 2];
//  fun(arr,n);
//  console.log(arr);


// perfect number 

// 10 
// 1,2,5 : 1+2+5 = 8 ie 8!=10
// 6 - 1,2,3,4,5
// 1 , 2 , 3 :   1+ 2+ 3 = 6

//  i =2 to i<num
//  for 6
//  sum = 1;
// 2,3,4,5

// 6%2 == 0
// sum = sum+ i // 1+2=3;

// 6%3 == 0
// sum = sum + i; // 3+3=6
 
// 6%4 != 0

// 6%5 !=0 

// if(sum == num)
// print - perfect num 
// else
// print - not perfect


// instead of iterating n times we can iterate sq root (n)


function perfect_num(num)
{
     let sum = 1;
    for(i=2; i*i <= num;i++)
    {
        if(num%i == 0 )
        { sum = sum+i+num/i; console.log(sum)} ;


    }
    if(num == sum)
    console.log("perfect number")
    else
    {console.log("not a perfect number")}

  
    // A  is divisor of number B
    // then B/A is also a divisor of number B


    // 2 is divisor of 6
    // then  6/2 is also a divisor of number 6.
}

let num = 28;
perfect_num(num);

// 28 
// sum = 1
// i=2
//  sum = sum + i + 28/2; // 14 = 
//  // sum = 17
//    sum = 17 + i //4 + 28/4 - 7 = 28

  





