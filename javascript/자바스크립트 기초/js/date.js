var today = new Date();
var nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();

document.write("년도 : " + today.getFullYear(),"<br>");
document.write("월 : "+(nowMonth +1),"<br>");
document.write("일 : " + nowDate,"<br>");
document.write("요일 : " + nowDay,"<br>");