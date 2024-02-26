let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO = true;

const winpattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

const resetgame = ()  =>{
turnO=true;
enablebtn();
msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;

      checkwinner();
    });
});

const disablebtn = () => {
  for(box of boxes){
    box.disabled = true;
  }
}

const enablebtn = () => {
  for(box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}


const showwinner = (winner) =>{
msg.innerText = `congtatulation, Winner is, ${winner} `;
msgContainer.classList.remove("hide");
disablebtn();
}




checkwinner =  () => {

for(let pattern of winpattern){
let pos1val=boxes[pattern[0]].innerText;
let pos2val=boxes[pattern[1]].innerText;
let pos3val=boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val !="" && pos3val!=""){

if(pos1val===pos2val && pos2val===pos3val){
 
  console.log("winnner",pos1val);
showwinner(pos1val);
}
}
}
};


newGamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
