
// 1 2 3 6 5 4 -- input  arr1
// 0 1 2 3 4 5
// i
// 1 2 3 4 5 6        arr2

//arr1[i]==arr2[i];

// 6 9 8 7 5



// 1  2  3  9  8 7 6 5 10 --arr          if( arr[front] != temp[front]) break;
    
// 1  2  3 5 6 7 8  9  10  -- temp 
// 9 8 -- 8 9


//  9 8 7 -- 7 8 9
// 1 2 3  8  9 10

//  3 4 6 9 8 7 12 15    -- [9,8,7] -- 7,8,9


function checkSorted(arr) {
                    
    // store in a temp array
    let temp = [];
    for(let i=0; i< arr.length; i++) { i=0, 1
        temp[i] = arr[i];

    }
   // temp - [ 1,2,3,9,8,10  ]
    // input - 1,2,3,6,5,4
    temp.sort();
    // temp - 1,2,3,8,9,10

    //find first mismatch, we will start from begining
    let front ;
    for(front=0; front<arr.length; front++) { 
        if(arr[front] != temp[front]) {
            break;
        }
    }

    let back;
    for(back = arr.length-1; back>=0; back--) {
        if(arr[back] != temp[back]) {
            break;
        }
    }   
    //front is greater than or equal to back
    if(front >= back) {
        return true;
    }


    f=3 ; b=7
    // front is < back
    do {
        front++;  f=7
        if(arr[front-1] < arr[front]) {
            return false;
        } 
    }while(front != back);

     return true;
}
// 0  1  2  3  4  5 6 7 8               b=7 f=3
// 1  2  3  9  8  7 6 5 10 --arr          
// f  f  f  f  f  f f fb
// 1  2  3  5  6  7 8 9 10  -- temp 

let input = [1,2,3,6,4,5];
let isPossible = true;
if(isPossible){
    console.log("Possible");
} else {
    console.log("Not Possible");
}




                  

// write a program to check whether on reversing a subarray whole array becomes sorted or not

// 4 5 6 7 8 9  -- arr
// e e e e e e 
// f f f f f f
// 4 5 6 7 8 9  -- temp

// f=5
// e=0 
// f>e 



// 3 4 5 9 6 8  10
// f f f f f  e   e
// 3 4 5 6 8 9 10















