function cPrime(){
    const res=document.getElementById("result");
    const n=parseInt(document.getElementById("input").value);

    if (isNaN(n) || n<=1){
        res.textContent="Enter a real number";
        res.style.color="red";
        return;
    
    }
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
            res.textContent=`${n} is a prime number`;
            res.style.color="green";
            
        }else{
            res.textContent=`${n} is a non- prime number`;
            res.style.color="red";
            

        }

    
    }