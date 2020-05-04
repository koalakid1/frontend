// document.write("<h1> 문제 1~4번 </h1>");
// var korean = prompt("국어 점수를 입력하세요", 0);
// var math = prompt("수학 점수를 입력하세요", 0);
// var english = prompt("영어 점수를 입력하세요", 0);

// var scores = new Array(korean,math,english);

// for (let index = 0; index < scores.length; index++) {
//     document.write(scores[index]+"<br>");
// }

// var avg = (korean * 1 + math * 1 + english * 1)/3;

// function name(scores) {
//     var sum = 0;
//     for (let index = 0; index < scores.length; index++) {
//         sum += scores[index]*1;
//     }
//     return sum/scores.length;
// }


// document.write("<h1> 문제 5번 </h1>");
// var id = "hongkildong";
// document.write(id.length);

// document.write("<h1> 문제 6번 </h1>");
// var id = "950925-1234567";
// document.write(id.substr(0,id.indexOf('-',0)));

// document.write("<h1> 문제 7번 </h1>");
// var phone = "010-1234-5678";
// split = phone.split("-");
// for (let index = 0; index < split.length; index++) {
//     document.write(split[index]+"<br>");
// }

// document.write("<h1> 문제 8번 </h1>");
// var phone = "010-1234-5678";
// split = phone.split("-");
// var newphone = "";
// for (let index = 0; index < split.length; index++) {
//     newphone += split[index];
// }
// document.write(newphone);

// document.write("<h1> 문제 9번 </h1>");
// var id = prompt("id를 입력하세요");
// var pw = prompt("pw를 입력하세요");
// var name = prompt("name을 입력하세요");
// var data = id+","+pw+","+name;
// document.write(data.split(",")[0]+"<br>"+data.split(",")[1]+"<br>"+data.split(",")[2]);

// document.write("<h1> 문제 10번 </h1>");
// var agent = navigator.userAgent.toLowerCase();
// if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
//     document.write("IE를 지원하지 않습니다.");// ie일 경우
// }

// document.write("<h1> 문제 11번 </h1>");
// var today = new Date();
// var hourToday = today.getHours();

// if (hourToday<19){
//     location.href = "http://www.naver.com";
// }else{
//     location.href = "http://www.google.co.kr";
// }

document.write("<h1> 문제 12번 </h1>");

function Search(){
    keyword = document.querySelector('input[name:search]');
}

location.href = "https://book.naver.com/search/search.nhn?query=" + keyword;