let side = 1

document.body.addEventListener("keydown", add);

function add (){

    side ++

    if(side === 2){
        img = document.querySelector(".dice").src = "img/side2.svg"
    }
    
    else if(side === 3){
        img = document.querySelector(".dice").src = "img/side3.svg"
    }

    else if(side === 4){
        img = document.querySelector(".dice").src = "img/side4.svg"
    }

    else if(side === 5){
        img = document.querySelector(".dice").src = "img/side5.svg"
    }

    else if (side === 6){
        img = document.querySelector(".dice").src = "img/side6.svg"
    }

    else {
        img = document.querySelector(".dice").src = "img/side1.svg"
    }

}
