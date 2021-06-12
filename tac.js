var matrixJs = [[3,3,3],[3,3,3],[3,3,3]];
console.log(matrixJs);

window.onload = funcStart;

function btnClick(event){
    var id = (event.target.id+"").split("btn")[1];
    console.log(id);
    matrixJs[id.split("")[0]][id.split("")[1]]= 0;
    console.log(matrixJs);
   
}
function funcStart(){
    var p1 = window.prompt("Enter player1's name");
    var p2 = window.prompt("Enter player2's name");
     document.querySelector(".player1Div p").textContent = p1;
     document.querySelector(".player2Div p").textContent = p2;
     var player1Sign = Math.floor(Math.random()*2);
     var player2Sign = player1Sign?0:1;
     document.querySelector(".player1Sign").textContent = player1Sign;
     document.querySelector(".player2Sign").textContent = player2Sign;
}

