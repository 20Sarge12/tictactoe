var matrixJs = [[3,3,3],[3,3,3],[3,3,3]];
console.log(matrixJs);

function btnClick(event){
    var id = (event.target.id+"").split("btn")[1];
    console.log(id);
    var p =id.split("");
    matrixJs[p[0]][p[1]]= 0;
    console.log(matrixJs);
}