//render for letterpage.html
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');

openBtn.onclick = redirectToLetter;
backBtn.onclick = returnHome;


function returnHome(){
    //go back to homepage
    window.location.href = "index.html";
}

function redirectToLetter(){
    //go to open letter
    window.location.href = "letter.html";
}