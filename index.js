let myScore =0;
let computerScore =0;

const options =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let myscorenow =  document.querySelector("#myScore");
let compscorenow = document.querySelector("#computerScore");

const showwin = (userWin)=>{
    if(userWin){
        console.log("You Won!!!");
        msg.innerText= "You Won!!!";
        msg.style.backgroundColor = "green";
        myScore++;
        myscorenow.innerText=myScore;

    }
    else {
        console.log("Sorry, You Lost :(");
        msg.innerText= "Sorry, You Lost :(";
        msg.style.backgroundColor = "red";
        computerScore++;
        compscorenow.innerText=computerScore;
    }
}

const draw = () => {
    console.log("OHH! It's a draw");
    msg.innerText ="OHH! It's a draw";
    msg.style.backgroundColor ="white";
    msg.style.color="black";
}

const getComputerChoice = () => {
    const alternatives = ["r","p","s"];
  const randomIndex= Math.floor( Math.random()*3);
     return alternatives[randomIndex];
};

const playGame = (choiceOfUser) => {
    console.log("user's choice is ", choiceOfUser)
    //generate comp choice
    const compChoice = getComputerChoice();
    console.log("Computer's choice is ", compChoice);

    if(choiceOfUser===compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(choiceOfUser=== "r"){
            userWin = compChoice === "p"? false : true;
        }
        else if(choiceOfUser=== "p") 
            userWin = compChoice === "s"? false : true;
        
        else if(choiceOfUser=== "s")
            userWin = compChoice === "r"? false : true;
        
     showwin(userWin);
        }
};

options.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const choiceOfUser = choice.getAttribute("id");
        playGame(choiceOfUser);
    });
});

