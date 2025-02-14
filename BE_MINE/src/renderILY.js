//render for rejected.html
const byeBtn = document.getElementById('byeBtn');

byeBtn.onclick = returnHome;


function returnHome(){
    //go back to homepage
    window.location.href = "index.html";
}