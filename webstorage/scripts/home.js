"use strict"

const enterBtn = document.getElementById("enterBtn");


window.onload = function(){

    enterBtn.onclick = onEnterBtn;
}

function onEnterBtn (){
    let nameInfo = document.getElementById("nameInput").value;

    localStorage.setItem("lastProduct", nameInfo);

    let radioValue = document.querySelector('input[name="studentOrInstructor"]:checked').value;

    localStorage.setItem("lastProduct", radioValue);

    location.href = "info.html"; 
}