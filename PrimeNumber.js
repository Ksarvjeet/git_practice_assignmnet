//check given number is prime or not

let num=13;


let count=0;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==0){
        console.log("Yes");
    }else{
        console.log("No");
    }