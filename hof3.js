//composability 

// const multiply = (price) => price * 30;

// // const divide = (price) => price/10;

// // console.log(divide(multiply(20)));


// let arr=[1,2,3,4,5];  
// // filter() map()

// // filter even numbers from array then square the values -- [2,4] -- [4,16] -- average

// const average = (arr) => {
//     return arr.reduce((a,b) => a+b)/arr.length;
// } 
// console.log(average(arr.filter( integer => integer % 2 ===0 ).map( evenInteger => evenInteger * evenInteger)));                                    [4, 16]

            
// // currying
// //function(a,b,c,d)  -- 4 - arity

// // non curried
// const add = (a,b,c) => {
//     return a+b+c;
// }

// console.log(add(2,3,4));

// // curry

// const add_curry= (a)=>
// {
//     return (b) => {

//         return (c)=> {
//             return a+b+c;
//         }
//     }
// }

// add_curry(2)(3)(4);

// // check if stocks exist
// // check warehouse 
// // deduct the amt of particular stock

// function checkStock(Id){  
 
//        if(Id== null)
//        {
//          console.log(" no stock")
//        }

//        return (w_Id) => 
//        {
//             if(w_Id == null)
//             console.log("nothing in warehouse");

//             return (num) =>
//             {
//                 return  " the product having "+ Id + " with " + w_Id  + " is reduced by " + num;
//             }

//        }



//     }


//     let order = checkStock('AZ123');

//     let final = order('W89');

//     console.log(final(6));

// // or console.log(checkStock('AZ123)('W89')(6));
   
    
    



const removeDuplicate = (arr) => {
    const obj = {};
    arr.map(item => {
        if(obj[item])
        { obj[item]+=1; console.log("hi")}
        
        else
        {obj[item]=0; console.log("bye")}

    })

      console.log(obj);
    return Object.keys(obj);
}

const arr= [ 'a','b','c','a','c','d','a','e'];
console.log(removeDuplicate(arr));




























