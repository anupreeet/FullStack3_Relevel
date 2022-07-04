// MATRICES ADDITION AND MULTIPLICATION


/*
       0 1 2
mat1=[[1,2,3],  0      
      [4,5,6],  1
      [7,8,9]]; 2
      //rows * column
      //3 * 3
       0 1 2
mat2=[[1,2,3], 0   (0,0)
      [4,5,6], 1
      [7,8,9]]; 2



      result=[[2,4,6],
              [8,10,12], 
              [14,16,18]];  
              */
            

                    //     function addition (mat1,mat2,result)
                    //     {
                    //         for(let i=0;i<N;i++)
                    //         {
                    //             for(let j=0;j<N;j++)
                    //             res[i][j]=mat1[i][j]+mat2[i][j];
                    //         }
                    //     }
                    //  //   (0,0)(0,1)(0,2)

                    //  var N=3;

                    //  var mat1=[[1,2,3],
                    //            [4,5,6], 
                    //            [7,8,9]]; 
       
                    //  var mat2=[[1,2,3], 
                    //            [4,5,6], 
                    //            [7,8,9]]; 
                               
                 // please complete the remaining  code


                 // multiplication

                 /*
                        j- 0 1 2 3
                var mat1=[[1,1,1,1], 0  i         
                          [2,2,2,2], 1                                                    1          4
                          [3,3,3,3], 2                                                    1          3
                          [4,4,4,4]] 3                                                    1          2
                                                                                          1          1              
      i=0 ,j= 0 ,k=0-1-2                          1*1 + 1*2 + 1*3 + 1*4    k=0,1,2,3
                           0 1 2 3
                var mat2=[[1,1,1,1], 0 j                                            k- no of col     k-no of row
                          [2,2,2,2], 1
                          [3,3,3,3], 2
                          [4,4,4,4]] 3

                        
                           let i =0 ; j=0 ; k=0


                           res[i][j]==[0][0] = 

                                    multiplication=          [[10, , , ], 0            
                                                              [  , , , ], 1
                                                              [  , , , ], 2
                                                              [ ,  , , ]] 3


     res[i][j]=  res[i][j] +( mat1[i][k]* mat2[k][j] )

    */


     //code for multiplication -

     
//     const N = 4;
  
// // This function multiplies
// // mat1[][] and mat2[][], and
// // stores the result in res[][]
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
//     let i, j;
//     let res = new Array(3);//1d
//     for (let k = 0; k < 3; k++)
//         res[k] = new Array(N); //2d
          
//     let mat1 = [ [ 1, 1, 1, 1 ],
//                        [ 2, 2, 2, 2 ],
//                        [ 3, 3, 3, 3 ],
//                        [ 4, 4, 4, 4 ] ];
  
//     let mat2 = [ [ 1, 1, 1, 1 ],
//                        [ 2, 2, 2, 2 ],
//                        [ 3, 3, 3, 3 ],
//                        [ 4, 4, 4, 4 ] ];
  
//     multiply(mat1, mat2, res);
  
//    //
//     for (i = 0; i < N; i++) {
//         for (j = 0; j < N; j++)
//             process.stdout.write(res[i][j] + " ");
//             console.log()
      
//     }




function checkIfReverseSubarraySortsArray(arr){
       let start =0;
       let end = arr.length - 1;
   
       let temp = [];
       for(start=0; start<arr.length; start++) {
           temp[start] =  arr[start];
       }
       temp.sort();
       // 1,2,4,5,3,7,2
       // 1,2,2,3,4,5,7
       // 1,2,3,4,5,7
   
       console.log(temp);
   
       for(start=0; start<arr.length; start++) {
           if(arr[start] != temp[start]) {
               break;
           }
       }
   
       for(end=arr.length-1; end>=0; end--) {
           if(arr[end] != temp[end]) {
               break;
           }
       }

       

function subarrayReverse(array) {
       let temp = array.sort()

        temp =[ 2,1,5,6,7]
        temp=[1,2,5,6,7]



       for (start = 0; start <= array.length - 1; start++) {
           if (array[start] != temp[start]) {
               break }
       }
       for (end = array.length - 1; end >= 0; end--) {
           if (array[end] != temp[end]) {
               break }
       }
       if (start >= end) {
            return true }
       do {
           if (array[start] < array[start+1]) {
                return false;
               }
           console.log(start)
       } while (start != end)
   Buvaneshwari T20:02
   return true
   }
   console.log(subarrayReverse([1,2,4,6,3,5]))
//    learn finance with satish20:04
//    1d-array-into-2d-array/ did code but again not able to code completely.   
