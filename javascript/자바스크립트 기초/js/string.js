var fileName = new String("a.b.c.txt");
document.write(fileName+"<br>");
document.write(fileName.lastIndexOf(".")+"<br>");
var lastDotPosition = fileName.lastIndexOf(".");
document.write(fileName.substr(lastDotPosition+1)+"<br>");

var arr = fileName.split(".");
for (let index = 0; index < arr.length; index++) {
    document.write(arr[index],"<br>");
}
document.write(arr[arr.length-1],"<br>");