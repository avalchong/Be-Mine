//render for rejected.html
const yesBtn = document.getElementById('yesBtn');
const yesBtn2 = document.getElementById('yesBtn2');

yesBtn.onclick = returnHome;
yesBtn2.onclick = returnHome;


function returnHome(){
    //go back to homepage
    window.location.href = "index.html";
}