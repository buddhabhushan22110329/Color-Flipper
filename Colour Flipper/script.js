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

    codeID.innerText = arr[color];

}

// funct to get random number between 0 to 0.999999
// we will multiply it with length of array (i.e 4) to get random numbers between 0 to 3    (3 is last index)
function getRandomNumber(){
    return Math.floor(Math.random() *10);
}
