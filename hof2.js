// // filter() -- higher order function

// const arr=[1,2,3,4,5];  //5%2

// function odd(x)  // x=3
// {
//     return  x%2;  //5%2  = 1
// }

//  const out = arr.filter(odd); // [1,3,5]
//  console.log(out);
//  //filter out even ele

 

// function even(x)  // x=24
// {
//     return  x%2===0; // 24%2  
// }

//  const o = arr.filter(even); // []
//  console.log(o);

//  //filter out the person who are eligible for voting
//  const age = [24,12,34,78,16];

//  function vote(a) //a=12
//  {
//            return a>=18;   // 12 >= 18 - 0
//  }

//       console.log(age.filter(vote));




// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];

// // filter out cities with population > 2500000

// let bigCitiesdata=[];
// for(let i=0;i< cities.length ; i++)
// {
//     if(cities[i].population > 2500000)
//          bigCitiesdata.push(cities[i]);
     
// }
// //console.log(bigCitiesdata);

// //using filter

//    console.log(cities.filter( function (c){
//      return  c.population > 2500000;

//    }));

//    //using arrow function 

//    console.log(cities.filter( c => c.population > 2500000 ));



   // reduce ()   -- 1 single value


const inp = [3,4,5,6,7,8];
   function sum(inp){

    let s=0;
    for(let i=0;i<inp.length;i++)
    {
         s+=inp[i];
    }
 return s;
   }
console.log(sum(inp));
  
// const inp = [3,4,5,6,7,8];
// s -- accumulator
// inp[i] -- curren_val
// inp.reduce(function(s,current_val)
//     {
//           s= s + current_val;
//     } ,0);

  //  inp.reduce ( callback_fun , initialization_val);

//   var arrray= [130,140, 160,780];

//   var avg = array.reduce((sum,curr)=>{
//      return sum+curr; 
//   },0)/array.length;

//   console.log(avg);

