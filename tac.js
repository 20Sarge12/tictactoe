var matrixJs = [[3,3,3],[3,3,3],[3,3,3]];
console.log(matrixJs);

function btnClick(event){
    var id = (event.target.id+"").split("btn")[1];
    console.log(id);
}