//render for roses.html
const rose1 = document.getElementById('rose1');
const rose2 = document.getElementById('rose2');
const rose3 = document.getElementById('rose3');
const rose4 = document.getElementById('rose4');
const rose5 = document.getElementById('rose5');
const done = document.getElementById('done');

rose1.onclick = readLove1;
rose2.onclick = readLove2;
rose3.onclick = readLove3;
rose4.onclick = readLove4;
rose5.onclick = readLove5;
done.onclick = redirectToILY;
//set a counter to keep track of buttons pressed
counter = 0;
function readLove1(){
    rose1.disabled = true;
    counter++;
    if(counter === 5){
        document.getElementById("done").style.display = "inline-block";
    }
}
function readLove2(){
    rose2.disabled = true;
    counter++;
    if(counter === 5){
        document.getElementById("done").style.display = "inline-block";
    }
}
function readLove3(){
    rose3.disabled = true;
    counter++;
    if(counter === 5){
        document.getElementById("done").style.display = "inline-block";
    }
}
function readLove4(){
    rose4.disabled = true;
    counter++;
    if(counter === 5){
        document.getElementById("done").style.display = "inline-block";
    }
}
function readLove5(){
    rose5.disabled = true;
    counter++;
    if(counter === 5){
        document.getElementById("done").style.display = "inline-block";
    }
}

function redirectToILY(){
    window.location.href = "iloveyou.html";
}




