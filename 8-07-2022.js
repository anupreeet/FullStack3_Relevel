
function permute(i,arr,ans)
{ let temp=[];
  if(i==arr.length)
  {  
    for(let i=0;i<arr.length;i++)
    {temp.push(arr[i]);} // temp - [1,2,3]

    ans.push(temp);
     // [ [1,2,3]]
    return;

  }

// i=0; j=i
for(let j=i;j<arr.length;j++)
{
    swap(i,j,arr);
    permute(i+1,arr,ans);
    swap(i,j,arr); // backtrack

}

}

function swap(i,j,arr)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

let arr=[1,2,3];
let ans=[];
permute(0,arr,ans);
console.log(ans);