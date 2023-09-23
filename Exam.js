function fun(){
    /*var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=a*b;
    document.getElementById("demo").innerHTML=c;
    const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;*/
    var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    if(a>b & a>c){
        document.getElementById("demo").innerHTML="big is "+a;

    }
    else if(b>c & b>a){
        document.getElementById("demo").innerHTML="big is "+b;

    }
    else{
        document.getElementById("demo").innerHTML="big is "+c;

    }
   /* let flag=true;
    if(a==1){
        document.getElementById("demo").innerHTML="no prime and composite";
    }
    else if(a>1){
    for(let i=2;i<a;i++){
    if(a%2==0){
        document.getElementById("demo").innerHTML="no";
        flag=false;
        break;

    }
    if(flag){
        document.getElementById("demo").innerHTML="yes";
    }
    else{
        document.getElementById("demo").innerHTML="no";
    }
}
    }
else{
        document.getElementById("demo").innerHTML="no";

    }*/

}
   