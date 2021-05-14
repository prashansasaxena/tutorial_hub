function func(){
    document.getElementById("signup").style.display="none";

document.getElementById("login").style.display="block";
}
function func2(){
    document.getElementById("login").style.display="none";
    document.getElementById("signup").style.display="block";
}
function validateform(){
    var name=document.myform.username.value;
    var pass=document.myform.password.value;
    var v=0;
    
    if(!name){
        document.getElementById("alert1").innerHTML="username cannot be empty";
    
     v=1;
     }
    
     else
     document.getElementById("alert1").innerHTML=" ";
    if(!pass){
    
        document.getElementById("alert2").innerHTML="password cannot be empty";
      v=1;

      }
      else 
      document.getElementById("alert2").innerHTML=" ";
      if(v==1)
      return false;

 return true;
}
function signupValidate(){
   var un =document.form2.username.value;
   var pass1=document.form2.password1.value;
   var pass2=document.form2.password2.value;
   var regularExpression  = /^[a-zA-Z]$/;
   var c;
    if(!un)
    {
       document.getElementById("usernamealert").innerHTML="username cannot be empty ";
        c=1;
    }
    else if(un.charAt[0]>=0&&un.charAt[0]<=9){
        document.getElementById("usernamealert").innerHTML="username cannot start with a digit"
        c=1;
    }
    else
    document.getElementById("usernamealert").innerHTML=" ";
    if(!pass1)
    {
        document.getElementById("passalert1").innerHTML="password cannot be empty ";
        c=1;
    }
    else if(pass1.length<8)
      {
        document.getElementById("passalert1").innerHTML="password length should be atleast 8 characters <br> should contain atleast one number and one special character"
        c=1;
      }
      
      else{
        document.getElementById("passalert1").innerHTML=" ";
          if(!pass2)
          {
            document.getElementById("passalert2").innerHTML="reneter password";
            c=1;
          }
    if(pass2!=pass1)
    {
        document.getElementById("passalert2").innerHTML="password do not match";
        c=1;
    }

}
    if(c==1)
    return false;
    return true;
}
function welcome(){

    document.getElementById("show").innerHTML="Welcome "+ document.myform.username.value;
}