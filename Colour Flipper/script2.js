const arr = ["red", "green", "blue", "violet", "brown", "orange", "yellow", "pink", "aqua", "darkmagenta"];

let btnID = document.getElementById('btnID');
let codeID = document.getElementById('codeID');
// let topclass = document.getElementsByClassName("main");  --> just to tes

// funct to changeColour
function changeColour(){

    // topclass[0].style.background = "black";
    // document.body.style.background = "green";
    let color = getRandomNumber();
    document.body.style.background = arr[color];

    if(color == 0) codeID.innerText = "#FF0000";
    else if(color == 1) codeID.innerText = "#00FF00";
    else if(color == 2) codeID.innerText = "#0000FF";
    else if(color == 3) codeID.innerText = "#8F00FF";
    else if(color == 4) codeID.innerText = "#964B00";
    else if(color == 5) codeID.innerText = "#FFA500";
    else if(color == 6) codeID.innerText = "#FFFF00";
    else if(color == 7) codeID.innerText = "#FFC0CB";
    else if(color == 8) codeID.innerText = "#00FFFF";
    else if(color == 9) codeID.innerText = "#FF00FF";
    


}

// funct to get random number between 0 to 0.999999
// we will multiply it with length of array (i.e 4) to get random numbers between 0 to 3    (3 is last index)
function getRandomNumber(){
    return Math.floor(Math.random() *10);
}
