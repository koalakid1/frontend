var arr = [30, "따르릉", true];

document.write("<h3> 배열값 가져오기 - 1 </h3>");
document.write(arr[0],"<br>");
document.write(arr[1],"<br>");
document.write(arr[2],"<br>");

document.write("<h3> 배열값 가져오기 - 2 </h3>");
for (let index = 0; index < arr.length; index++) {
    document.write(arr[index], "<br>");
}