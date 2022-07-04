// let cnt=0;
//  function decToBinary(n){ // n=4
// let arr=[]
// let i=0;
// while(n>0)
// { 

//     arr[i]=n%2;
//     n= Math.floor(n/2); 
//     i++;     
// }

//  for(let j=i-1;j>=0;j--)
//  {
//     if(arr[j]==1)
//     cnt+=1;       
//  }

//  }

//  let N=5;
//  for(let i=1;i<=N;i++)
//  {
//     decToBinary(i);

//  }

//  console.log(cnt);




/*Chef has to travel to another place. For this, he can avail any
 one of two cab services. The first cab service charges XX rupees.
  The second cab service charges YY rupees. Chef wants to spend the
   minimum amount of money. Which cab service should Chef take? */ 
   
//  let  xx=12
//   let  yy=60


//    switch(true)
//    {

//     case xx<yy :{ console.log("xx"); break;}
//     case yy<xx : {console.log("yy"); break;}
//     case xx==yy: {console.log("pay any"); break;}
//    }


function Sol(arr, n){     let last = -1;  
       let result; 
           for(let i = 0; i < n; i++){    
                 if(last < arr[i] ){      
                    result = last   
                     last = arr[i]  
                                           }       
          if(result < arr[i] && result < last && arr[i] < last){     
                    result = arr[i]  }   }  
                       return result } 
                       
 const arr = [12,35,1,10,34,1]; 
const n = arr.length; console.log(Sol(arr,n))
  
arr.sort((a,b)=>(a-b));


 11, 1 , 12, 32 , 112



