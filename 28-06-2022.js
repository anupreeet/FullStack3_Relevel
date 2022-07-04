// function subset(arr, res , i)
// {

//     if(i== arr.length)
//     {
//         console.log(res);
//         return;
//     }

//     subset(arr,res +" " + arr[i], i+1);
//     subset(arr,res,i+1);
// }

// subset([4,9],"",0);


// let grades = [
//     {
//       name: "John",
//       grade: 8,
//       sex: "M",
//     },
//     {
//       name: "Mohit",
//       grade: 10,
//       sex: "M",
//     },
//     {
//       name: "Esha",
//       grade: 10,
//       sex: "F",
//     },
//     {
//       name: "Buvaneshwari",
//       grade: 9,
//       sex: "F",
//     },
//   ];
  
//   let classSum = 0,
//     classAvg,
//     boysSum = 0,
//     boysAvg,
//     girlsSum = 0,
//     girlsAvg,
//     highest = 0,
//     lowest = 0;
  
//   let boysCount = 0,
//     girlsCount = 0;
  
//   for (let i = 0; i < grades.length; i++) {
//     classSum += grades[i].grade;
//     if (grades[i].sex === "M") {
//       boysSum += grades[i].grade;
//       boysCount++;
//     }
//     if (grades[i].sex === "F") {
//       girlsSum += grades[i].grade;
//       girlsCount++;
//     }
  
//     if (grades[i].grade > highest) highest = grades[i].grade;
//     if (grades[i].grade < lowest) lowest = grades[i].grade;
//   }
  
//   classAvg = classSum / grades.length;
//   boysAvg = boysSum / boysCount;
//   girlsAvg = girlsSum / girlsCount;
//   console.log(classAvg);
//   console.log(boysAvg);
//   console.log(girlsAvg);
//   console.log(highest);
//   console.log(lowest);

