//render for letter.html
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.onclick = redirectToRoses;
noBtn.onclick = redirectToRejection;


function redirectToRoses(){
    //go to roses page
    window.location.href = "roses.html";
}

function redirectToRejection(){
    //go to rejection page
    window.location.href = "rejected.html";
}