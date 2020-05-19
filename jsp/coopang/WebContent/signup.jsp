<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    body{
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    #logo{
        width: 195px;
        height: 50px;
    }
    img{
        width: 50px;
        height: 50px;
    }
    input{
        width: 420px;
        height: 50px;
        margin-top: 10px;
    }
    #btn{
        width: 470px;
        background: #0074E9;
        color: white;
        font-size: 17px;
    }
    #gg{
        width: 470px;
        margin: 0 auto;
        font-size: 12px;
    }
    #line{
        text-decoration: underline;
    }
</style>
</head>
<body>
    <img id="logo" src="img/coopang.png" alt="쿠팡">
<div id="tie">

    <form action="" method="post">

        <div><img src="img/email.png" alt=""><input type="text" name="email"></div><br>
        <img src="img/password.png" alt=""><input type="password" name="pw" ng-model="text"><br>
        <img src="img/password.png" alt=""><input type="password" name="pwc"><br>
        <img src="img/name.png" alt=""><input type="text" name="name"><br>
        <img src="img/phone.png" alt=""><input type="text" name="phone"><br>
        <input id="btn" type="submit" value="동의하고 가입하기">
        <div id="gg">본인은 <strong>만 14세 이상</strong>이며, <span id="line">쿠팡 이용약관</span>,
            <span id="line">전자금융거래이용약관</span>,
            <span id="line">개인정보 수집 및 이용</span>,
            <span id="line">개인정보 제공 내용</span>을
            확인 하였으며, <strong>동의합니다</strong>.</div>
    </form>

</div>
<footer>
    ©Coupang Corp. All rights reserved.
</footer>
</body>
</html>