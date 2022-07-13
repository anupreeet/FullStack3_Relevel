// function f(n)
// {
//     if(n<=1)
//     return;

//     for(let i=1;i<=n;i++) // O(N)
//      for(j=1;j<=n;j++)  // O(1)
//      {
//         console.log("hi");
//         break;
//      }
// }

// // TC - 

// i=1
//  inner loop - 1 iteration

//  i=2; 
//  inner loop - 1


//  i=3
//   1 iteration

//   for(let i=1;i<=n;i++) // O(N)
//   for(j=1;j<=n;j++)  // O(1)
//   {
//      console.log("hi");
//      break;
//   }



//   for(let i=1;i<=n;i++)
//    console.log("hi");


// O( n ! ) > O(2^n) >  O(n^2) > O(n logn) > O(n) > log(n) > O(1)

// function fun(n)
// {
//     let i,j,k, c=0;   - line 1  - O(1)

//     for( i = n/2; i<=n;i++)   - line 2 - O(N)
//     for(j=1; j+n/2 <= n;j++)  - line 3  - O(N)              (n^2 LOGN)
//      for(k=1;k<=n;k=k*2)      - line 4  - O(log n )
//      {
//         c++;    - line 5
//      }
// }
//  n= 4 
//  i=4/2 =2

//  1st iter     n/2
// 2nd           n/2 + 1 
// 3rd           n/2 +  1  + 1
 

// m iterations   i= n/2 + (m-1) = n

// n/2 + (m-1) = n
//  m-1= n - n/2
//  m-1 = (2n-n)/2;
//  m-1= n/2
//  m= n/2 + 1
   
//  O(n)


//  for(j=1; j+n/2 <= n;j++) 

// 1st iter   j=1
// 2nd         j=2


// mth iter   j=m  = n/2
          

// j+n/2 <= n
// j <= n - n/2  = n/2

// - O(N)


// // for(k=1;k<=n;k=k*z)  k = 1*2 =2 


//  1st       k=1  = 2^0 = 1
//   2nd      k =2 = 2^1
//   3rd      k= 4 = 2^2
//   4th      k=8  = 2^3


//   mth iteration    k = 2 ^ (m-1) =n

//        2 ^ (m-1) =n
//     logn = log(2^(m-1))
//     log (n) =  m-1 log(2)
//     logn = m-1 * (1)
//     m= log(n) + 1  // O(log (n))


//     // TC = O(n^2 (logn))





// 

// n=1    "1"
// n=2   one 1  =  " 1 1"
// n=3   two 1's  =  " 2 1 "
// n=4     one 2 one 1 = "1211"
// n=5     one 1 one 2 two 1 = "111221"
// n=6      three 1's  two 2's one 1 = "312211"


// n=1  o/p ="1"

//  111221
//       i 
// i-1 & i
//  c=1
//  i=
// temp= "31"
//  temp = temp + " 3"+"charAt(i-1)"

//  temp = temp + " 2"+"charAt(i-1)"
//            "31" + "2" +"2" = "3122"




