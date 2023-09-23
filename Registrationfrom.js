function validate()
{
    if(firstname==null || firstname==""){
    alert("Eneter your name")
}
elseif(lastname==null || lastname==""){
    alert("Eneter your name")
}
elseif(password==null ||password==""){
    alert("password contatin 8 characters")
}

}

var a=document.getElementsByClassName("lab");
console.log(a[0]);
for(var i=0;i<a.length;i++){
console.log(a[i]);

}
function passshow(){
    var x=document.getElementById("pswd");
    var y=document.getElementById("para");
    y.innerHTML=y.innerHTML+"Hello World!";
    console.log(x);
    console.log(x.name);
    if( document.body.style.backgroundColor==="black" ){
        document.body.style.backgroundColor="white";
    }else{
        document.body.style.backgroundColor="black";
    }
    if(document.getElementById("pswd").type==="password"){
        document.getElementById("pswd").type="text";

    }else{
        document.getElementById("pswd").type="password";
    }
}