
let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.getElementById("new-btn");

let turn=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

    const enableBoxes=()=>{
        for(let box of boxes){
                box.disabled=false;
                box.innerText="";
        }
    }
    
    const resetGame=()=>{
        turn=true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        // box.innerText="Abcd";
        if(turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPatterns){

    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("winner "+pos1Val);
            showWinner(pos1Val);
            disabledBoxes();
        }
    }
};
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const disabledBoxes=()=>{
    for(let box of boxes){
            box.disabled=true;
    }
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);