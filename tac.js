var matrixJs = [[3,3,3],[3,3,3],[3,3,3]];
console.log(matrixJs);

function btnClick(event){
    var id = (event.target.id+"").split("btn")[1];
    console.log(id);
    matrixJs[id.split("")[0]][id.split("")[1]]= 0;
    console.log(matrixJs);
}