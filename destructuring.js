/*
Destructuring in Javascript is an expression that makes it achievable to unpack values 
from properties from objects. We can extract the data from objects and assign them to
 distinct variables. The value that should be unpacked from the sourced variable is defined on the left-hand side.
*/

// let class_details ={
//     Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'
// };

// let Class= class_details.Class;
// let school =class_details.school;
// let classTeacher = class_details.classTeacher;

// console.log(Class, school , classTeacher);


// let {Class , school , classTeacher} = {  Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'}
//  console.log(Class, school , classTeacher);


 
// let {Class , school , classTeacher} =  {
//     Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'
// };
// console.log(Class, school , classTeacher);

// when we are declaring variables before destructuring

// let Class, school, classTeacher;

// ({Class, school, classTeacher} = class_details);
// console.log(Class)
// console.log(school)
// console.log(classTeacher);




// let class_details ={
//     Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'
// };

// let   Class, sch, classTeacher;

// ({Class, sch , classTeacher}= class_details);
// console.log(Class)
// console.log(sch)
// console.log(classTeacher);



// let class_details ={
//     Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'
// };

// let Class, school, classTeacher;
// ({ Class : my_class , school : my_school, classTeacher : my_teacher}=class_details);
// console.log(Class , my_school , my_teacher );



//  assigning default values

// let class_details ={
//     Class : 'seventh',
//     school :  'dps',
//     classTeacher : 'riya'
// };

// let { Class='fifth' , school = ' dpsss', Teacher= ' ram'}= class_details;
    

// class = fifth;
// school = dpss;
// classTeacher= ram;

//console.log(Class , school , Teacher);

// using computed property
let class_details ={
    Class : 'seventh',
    school :  'dps',
    classTeacher : 'riya'
};

let my_class= "Class";

let {[my_class] : myyy_classs}={
    Class : 'seventh',
    school :  'dps',
    classTeacher : 'riya'
};

console.log(myyy_classs);



















// Function that returns index of row
// with maximum number of 1s.
var R = 4 ;
var C  = 4 ;
function rowWithMax1s(mat)
{
 
    // Initialize max values
    var rowIndex = -1 ;
    var maxCount = 0 ;
     
    for(let i = 0 ; i < R ; i++){
        var count = 0 ;
        for(let j = 0 ; j < C ; j++ ){
            if(mat[i][j] == 1){
                count++ ;
            }
        }
        if(count > maxCount){
            maxCount = count ;
            rowIndex = i ;
        }
    }
     
    return rowIndex ;
}
 
    // Driver Code
        var mat = [[0, 0, 0, 1],
                [0, 1, 1, 1],
                [1, 1, 1, 1],
                [0, 0, 0, 0]];
    console.log("Index of row with maximum 1s is " + rowWithMax1s(mat));
 

    //multiplication

