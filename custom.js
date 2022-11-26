const timeOutEvent= new Event("timeout");
const fName = document.getElementById("fname").value
const Password = document.getElementById("password").value
function submitForm()
{
    if(confirm("Sure to submit ?")){
        location.assign("index1.html")
    }
    event.preventDefault();
}
window.addEventListener("timeout",function(){
   
    if(!fName&&!Password){
        alert("please enter your info")
    }
})

setInterval(function(){
    if(!fName&&!Password){
        window.dispatchEvent(timeOutEvent)
    }
}
,3000);
