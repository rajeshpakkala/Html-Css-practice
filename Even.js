function evennums()
{
   let start=document.getElementById("num1").value;
   let end=document.getElementById("2").value;
   
    for(let i=start;i<=end;i++){
    if(i%2===0)
    {
    document.getElementById("demo").innerHTML=document.getElementById("demo").innerHTML+""+ " "+parseInt(i);
    }
}
}

function sum()
{
  let a=document.getElementById("num1").value;
  let b=document.getElementById("2").value;
  let c=a+b;
  document.getElementById("demo").innerHTML=c;
}

function prime(){
  let a=document.getElementById("num1").value;
 
  for(var i=2;i<=a/2;i++){
    if(i%a==0){
      document.getElementById("demo").innerHTML="prime";
    }
    else{
      document.getElementById("demo").innerHTML="not prime";
    }

  }
}
