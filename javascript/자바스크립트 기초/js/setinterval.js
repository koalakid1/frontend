var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function(){
    addNum++;
    console.log("addNum:" + addNum);
}, 3000); 
// 콘솔창에서만 나옴. html에서는 안나옴

var auto_2 = setInterval(function(){
    subNum--;
    console.log("subNum:" + subNum);
}, 3000); 

function func1(){
    document.write("hello <br>")
}
setInterval(func1, 3000);
