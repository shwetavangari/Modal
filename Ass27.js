var btns=document.querySelector(".btns");

var fname=document.querySelector("#fname");
var lname=document.querySelector("#lname");
var email=document.querySelector("#email");
var mobile=document.querySelector("#mobile");

btns.addEventListener("click",function(){
    if(fname.value=="" || lname.value=="" || email.value=="" || mobile.value==""){
        // console.log("Mandatory..")
        errormsg.innerHTML="All fields are mandtory..";
        errormsg.style.color="red"
        if(fname.value==""){
            fname.style.animation="errorAnimation linear 1s";
            fname.classList.add("anim");
        }
        else if(lname.value==""){
            lname.style.animation="errorAnimation linear 1s";
            lname.classList.add("anim");
        }
        else if(email.value==""){
            email.style.animation="errorAnimation linear 1s";
            email.classList.add("anim");
        }
        else if(mobile.value==""){
            mobile.style.animation="errorAnimation linear 1s";
            mobile.classList.add("anim");
        }
    }else{
        // errormsg.style.color="green";
        // errormsg.innerHTML="Register Success...";
       var fade=document.querySelector(".fade");
       var popUp=document.querySelector(".popUp");


       fade.style.visibility="visible";
       popUp.style.visibility="visible";
    }
})

function closed(){
    var fade=document.querySelector(".fade");
    var popUp=document.querySelector(".popUp");
    fade.style.visibility="hidden";
    popUp.style.visibility="hidden";
}