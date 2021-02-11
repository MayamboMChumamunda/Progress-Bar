
function run(){

var myBar= document.getElementById("myBar");
var width= 0;
var timeInt = setInterval(frame, 30);

function frame(){
    if (width>=50){
        clearInterval(timeInt) 

    }
    
    else{
        width++;
        myBar.style.width = width + "%";
        myBar.innerHTML= width + "%";
    }
}
}