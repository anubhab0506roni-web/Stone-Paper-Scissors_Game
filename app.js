let choices=document.querySelectorAll(".items");
let countWin=0;
let countLose=0;
let you=document.querySelector("#you");
let compu=document.querySelector("#compu");
let msg=document.querySelector(".msg");
let comChoice=()=>{
    let arr=["scissors","paper","rock"];
    let idx=Math.floor(Math.random()*3);
    // console.log(arr[idx]);
    return arr[idx];
};

let changeMsg=(userWin,draw)=>{
    if(draw){
        msg.innerText="Draw!"
    }
    else{
        if(userWin){
            msg.innerText="You win";
        }else{
            msg.innerText="You lose";
        }
    }
    
};
let changeScore=()=>{
    you.innerText=countWin;
    compu.innerText=countLose;
};
let playGame=(userChoice,msg)=>{
    let userWin=true;
    let draw=false;
    let compChoice=comChoice();
    console.log(userChoice);
    console.log(compChoice);
    if(userChoice===compChoice){
        draw=true;
        console.log("Match is draw");
    }
    else if(userChoice==="rock"){
        if(compChoice=="scissor"){
            countWin++;
            console.log("User wins");
        }
        else{
            countLose++;
            userWin=false;
            console.log("comp wins");
        }
    }
    else if(userChoice==="paper"){
        if(compChoice=="rock"){
            countWin++;
            console.log("User wins");
        }
        else{
            countLose++;
            userWin=false;
            console.log("comp wins");
        }
    }
    else if(userChoice==="scissors"){
        if(compChoice=="paper"){
            countWin++;
            console.log("User wins");
        }
        else{
            countLose++;
            userWin=false;
            console.log("comp wins");
        }
    }
    changeMsg(userWin,draw);
    changeScore();
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
})