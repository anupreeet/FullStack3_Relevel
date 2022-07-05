

let counter=0;

function toh(n,s,h,d)
{
     if(n == 1)
     { counter++;
        console.log("disc transferred from "+s+" to "+ d);
        return;
     }
    toh(n-1,s,d ,h);
    counter++;
    console.log("disc transferred from "+s+" to "+ d);
    toh(n-1,h,s,d);

}
let n=3;
toh(n,"S","H","D");
console.log(counter);



















































