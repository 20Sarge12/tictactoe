var matrixJs = [[3,3,3],[3,3,3],[3,3,3]];

var player1Obj={
    player1Name:"",
    player1Sign:6
}
var player2Obj={
    player2Name:"",
    player2Sign:6
}

window.onload = funcStart;

var activePlayer ={
} 

function btnClick(event){
    document.querySelector(`#${event.target.id}`).textContent = activePlayer[Object.keys(activePlayer)[1]];
    var id = (event.target.id+"").split("btn")[1];
    console.log(id);
    matrixJs[id.split("")[0]][id.split("")[1]]= 0;
    console.log(matrixJs);
    //changeActivePlayerFunction();
}

function changeActivePlayerFunction(){

}

function funcStart(){
     player1Obj.player1Name = window.prompt("Enter player1's name");
     player2Obj.player2Name = window.prompt("Enter player2's name");
     document.querySelector(".player1Div p").textContent = player1Obj.player1Name;
     document.querySelector(".player2Div p").textContent = player2Obj.player2Name;
     player1Obj.player1Sign = Math.floor(Math.random()*2);
     player2Obj.player2Sign = player1Obj.player1Sign?0:1;
     document.querySelector(".player1Sign").textContent = player1Obj.player1Sign;
     document.querySelector(".player2Sign").textContent = player2Obj.player2Sign;
     Object.assign(activePlayer,(Math.floor(Math.random()*2) == player1Obj.player1Sign)?player1Obj:player2Obj);
     console.log(`activeplayer: ${activePlayer[Object.keys(activePlayer)[0]]}`);
     document.querySelector(".playerTurn").textContent = activePlayer[Object.keys(activePlayer)[0]];
}

