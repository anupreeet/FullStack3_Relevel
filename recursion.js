 // print name from n times using recursion

 // n=10   // i=1
//  function print_name(i,n)     //(11,10)
//  {
//     if(i>n)  //i=11 > 10 (11>10)
//     return;

//     console.log("bhavesh");
//     print_name(i+1,n)

//  }
//  print_name(1,10);

 /*

                 print_name(1,10)
                 /
                 print_name(2,10)
                 /
                 .
                 
                 
            /print_name(10,10)
            /
             print_name(11,10)

 */

// print numbers n to 1

// function  fun(n){

//     if(n<1)
//     return;
//     console.log(n)

//     fun(n-1);

// }

// fun(10);

// // print 1 to n;

// function f(i)
// {
//   if(i<1)
//   return; 
//     f(i-1)
//     console.log(i);
// }

// f(5);



//find sum  n to 1 // 5 to 1

// function s(i,sum)
// {
//      if(i<1)
//      {  console.log(sum);  
//         return;
//      }
//     s(i-1,sum+i)

// }

// s(5,0)
// i=5  5 4 3 2 1
// sum = sum + i







// function printSum(sum,num){
//         if(num < 0) {console.log(sum);      return;}     
//         printSum(sum+num,num-1)
               
// }
// printSum(0,5)

// const arr = [9, 5, 10, 2, 24, -1, -48];
// const arr= [ -23, 4, -3, 8, -12 ];
// function adjacentElementsProduct(array) {
//    let maxProduct = array[0] * array[1];
//    for (let i = 1; i < array.length; i++) {
//       product = array[i] * array[i + 1];
//       if (product > maxProduct)
//          maxProduct = product;
//    }
//    return maxProduct;
// };
// console.log(adjacentElementsProduct(arr));



// const customSort = (order, arr) => {
//      const numberObj = {};
//      const resArr = [];
//      order.split('').map((item, index) => {
//      numberObj[item] = {
//      value: [],
//      order: index
//      };
//      })
//       console.log(numberObj)
//      arr.map(item => { // [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
//         //  console.log(numberObj[item])
//       numberObj[item].value.push(item);
//      });
//      console.log(numberObj);
//      const sortedObj = Object.values(numberObj).sort((a, b) => a.order -
//      b.order);
//      // sort((a, b) => a-b);
//      console.log(sortedObj);
//      Object.values(sortedObj).map(item => {
//      resArr.push(...item.value)
//      });
//       console.log(resArr);
//      console.log( resArr.join(' '))
//      return resArr.join(' ');
//      }
 
//      const order = '2356481790';
//      // [ 2,3,5,6,4,8,1,7,9,0]
//      const arr = [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
//      console.log(customSort(order, arr));








// //arr= 2 2 1 8 5 2 6
//  // {2:true, 1:true, 8:true, 5:true, 6:true}

// const duplicate = (arr) => {
// 	const obj = {};
// 	const newArr = []; // [2,1,8,5,6]
//     for (let i = 0; i < arr.length; i++) {
//      //console.log(obj[i]);
//         if (!obj[i]) {
//         	obj[arr[i]] = true;
//             newArr.push(arr[i]);
//         }
//     }
//     //console.log(obj);
//     return newArr
// }

// const inp= [2, 2 ,1 ,8 ,5 ,2 ,6]
// let op = duplicate(inp);
// console.log(op);

// var fruits =[1,2,3];
// fruits.push(6);
// console.log(fruits);
