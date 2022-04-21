
function register()
{
    var n = document.getElementById("inputname4").value;
    var e = document.getElementById("inputEmail4").value;
    var p = document.getElementById("inputPassword4").value;
    var d = document.getElementById("inputdate4").value;
    
    if(("localStorage" in window) && (window["localStorage"] != null))
        {
        localStorage.setItem('name',n);
            alert(localStorage.getItem('name'));
        localStorage.setItem('email',e);
        localStorage.setItem('password',p); 
        localStorage.setItem('date',d); 
        }
} 
   


function Login()
{
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("InputPassword1").value;
    
    var log = localStorage.getItem('email')
    var log1 = localStorage.getItem('password')
    if(log ==email && log1 ==password )
        {
            alert("Welcome User");
        }
    else 
        {
          alert("Please Write Correct Email OR Password");  
        }
}
 
