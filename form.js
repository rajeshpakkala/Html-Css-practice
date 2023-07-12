function validateform(){
    var name=document.myform.uname.value;
    var pword=document.myform.pword.value;
if(name==null || name=="")
{
    alert("enter full name");
    return false;
}
else if(pword==null||pword=="")
{
    alert("enter password more than 6 chars");
    return false;
}
else if(email==null ||email=="")
{
    alert("full mail");
    return false;
}
}