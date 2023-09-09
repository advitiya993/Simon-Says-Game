let gameSeq=[];
let userSeq=[];
let highScore=0;
let highSc=document.querySelector("#highScore");

let btns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2= document.querySelector("h2");
document.addEventListener("keypress", function(){
   if(started==false){
    console.log("Game started!");
    started= true;

    levelUp();
   }

});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

};

function checkAns(idx){
   
    
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! <br>Your score was <b>${level}</b> <br> Press any key to start`;
        if(highScore<level){
            highScore=level;
            highSc.innerHTML=`Highest score:${highScore}`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white"}
        ,300);
        reset();

    }
};

function btnPress(){ 
    userFlash(this);
    userSeq.push(this.id);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    started= false;
    level=0;
    gameSeq=[];
    userSeq=[];
}


