 function friends(n){

    if(n==1)
    return 1;

    if(n==2)
    return 2;


    let a=friends(n-1);
    let b= friends(n-2);

    return a+(n-1)*b;

 }

 console.log(friends(4));