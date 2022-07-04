


// function spiralPrint(arr, rows, cols) {
//     let i,
//       e = 0,
//       g = 0;
//     // e  // - starting row index
  
//     // g  // - starting column index
  
//     // i  // - iterator
//     while (e < rows && g < cols) {
//       // print the first row
//       for (i = g; i < cols; ++i) {
//         console.log(arr[e][i] + " ");
//       }
//       e++;
//       // print the last column
//       for (i = e; i < rows; ++i) {
//         console.log(arr[i][cols - 1] + " ");
//       }
//       cols--;
//       // print the last row
//       if (e < rows) {
//         for (i = cols - 1; i >= g; --i) {
//           console.log(arr[rows - 1][i] + " ");
//         }
//         rows--;
//       }
//       // print the first column
//       if (g < cols) {
//         for (i = rows - 1; i >= e; --i) {
//           console.log(arr[i][g] + " ");
//         }
//         g++;
//       }
//     }
//   }
  
//   let arr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//   ];
  
// spiralPrint(arr, 4, 5);



/*

Input: arr[] = {2, 3, 4, 5, 6}
Output: arr[] = {6, 8, 15, 24, 30}

// We get the above output using following
// arr[] = {2*3, 2*4, 3*5, 4*6, 5*6} 

*/





//const arr=['a','b','c','a','d','b','r'];

// const removeDuplicate = (arr) => {
//     const obj = {};
//     arr.map(item => {
//         if (0)  // a   
//            { obj[item] += 1; console.log("hi");}
//         else
//             obj[item] = 0;
//     })
//     console.log(obj);
//     return Object.keys(obj);
// }

// // a:0 , b:0 ,
// const arr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
// console.log(removeDuplicate(arr));

//n=5
// *****   0
// *   *   1
// *   *   2
// *   *   3
// *****   4

//if(i==0 || i == n-1)


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop // i-0 / 1 /2
//   for(let j = 0; j < n; j++) { // internal loop // j=0 /1
//     if(i === 0 || i === n - 1) {
//       string += "*";  //string=string + "*";  
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*"; // string = "*    *"
//       }
//       else {
//         string += " ";   
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);


const N = 4;
  
// This function multiplies
// mat1[][] and mat2[][], and
// stores the result in res[][]
// function multiply(mat1, mat2, res)
// {
//     let i, j, k;
//     for (i = 0; i < N; i++) {
//         for (j = 0; j < N; j++) {
//             res[i][j] = 0;
//             for (k = 0; k < N; k++)
//                 res[i][j] += mat1[i][k] * mat2[k][j];
//         }
//     }
// }
  
// let mat1 = [ [ 1, 1, 1, 1 ],
//                        [ 2, 2, 2, 2 ],
//                        [ 3, 3, 3, 3 ],
//                        [ 4, 4, 4, 4 ] ];
  
//     let mat2 = [ [ 1, 1, 1, 1 ],
//                        [ 2, 2, 2, 2 ],
//                        [ 3, 3, 3, 3 ],
//                        [ 4, 4, 4, 4 ] ];
 
//     result = 
// // Driver Code
//     let i, j;
      
//     // To store result
//     let res = new Array(N);
//     for (let k = 0; k < N; k++)
//         res[k] = new Array(N);
          

  
//     multiply(mat1, mat2, res);
  
//     document.write("Result matrix is <br>");
//     for (i = 0; i < N; i++) {
//         for (j = 0; j < N; j++)
//             document.write(res[i][j] + " ");
//         document.write("<br>");

// how many swaps are required to bring elements less than or equal to  x
// Input:  arr[] = {2, 1, 5, 6, 3}, x = 3
// Output: 1
//arr[] = {2, 7, 9, 5, 8, 7, 4} x=5
//output-2



// var arr = [0,2,3,4,5,6,7,8,9]; // [0,6,]
// for(let i=1;i<arr.length-2;i++)
// {;. 
//     arr[i] = (arr[i]*arr[i+1]) + (arr[i]*arr[i-1]);
//     console.log(arr[i]);
// }
//[0,6,18,]
//  for(var i=0;i<arr.length;i++){
//   //let j = 0;
//   if(i===0){
//    { arr[i] = arr[i]*arr[i]+arr[i]*arr[i+1];
//     console.log(arr[i]);}

//   }else if(i==arr.length-1){
//        {arr[i] = arr[i]*arr[i]+arr[i]*arr[i-1];  console.log(arr[i]);}


//   }else{      
//        arr[i] = arr[i]*arr[i-1]+arr[i]*arr[i+1];
//        console.log(arr[i]);
//   }
 

//  }

                
//   var arr = [0,1,2,3,4,5,6,7,8,9]; 
 
//  for(let i=0;i<arr.length;i++){
//   let j = 0;
//  if(i==0){
//    arr[j] = arr[i]*arr[i]+arr[i]*arr[i+1];
 
//  }else if(i==arr.length-1){
//       arr[j] = arr[i]*arr[i]+arr[i]*arr[i-1];
 
//  }else{
//       arr[j] = arr[i]*arr[i-1]+arr[i]*arr[i+1];
 
 
 
//  }
//    console.log(arr[j]);
//   j++;
 
 
//  } 

 //0
// 2
// 8
// 18
// 32
// 50
// 72
// 98
// 128
// 153
