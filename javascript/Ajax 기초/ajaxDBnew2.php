<?php
header("access-control-allow-origin: *"); //cross domain 허용

//데이터형식과 인코딩방식 지정 / 이거는 json
header("Content-Type: text/json; charset=UTF-8");

$mysql_hostname = 'localhost'; //서버주소
$mysql_username = 'koalakid'; //DB계정의 이름
$mysql_password = 'a539715!'; //DB계정의 비밀번호
$mysql_database = 'koalakid'; //DB의 이름
$mysql_port = '3306'; //포트번호
$mysql_charset = 'utf8'; //인코딩방식

//1. DB 연결하는 함수 (JDBC에서 연결하듯이)
$connect = mysqli_connect($mysql_hostname, $mysql_username, $mysql_password);


//연결이 되면 connect객체가 생성이 됨
if(!$connect){

    //echo:출력을 해주는 함수(java의 system.out.print/javascript의 document.write와 같은 기능)
    echo '[연결실패] : '.mysqli_error().'<br>';


    // 함수이름이 die임 연결안되면 이 메세지를 호출하고 그 다음으로 넘어가지않음
    die('MySQL 서버에 연결할 수 없습니다.');


}

//2. DB 선택 / 실패하면 or -> die
mysqli_select_db($connect,$mysql_database) or die('DB 선택 실패');

//3. 문자셋 지정
mysqli_query($connect,' SET NAMES '.$mysql_charset);

//4. 쿼리 생성 product라는 테이블에서 name과 price를 가져옴
$query = 'select name,price from products;';

//5. 쿼리 실행하는 함수가 mysql_query()임, 결과가 result에 저장이 됨
$result = mysqli_query($connect,$query);


//6. 결과 처리
//json파일을 보면 알겠지만 데이터 내용안에서
//객체가 끝나는 쪽에 , (콤마)를 잘 읽어오기 위해
//if 문으로 콤마에 대해 제어함
$output=''; //output에 아무것도 없다고 하고

//커서를 처리해주는 함수 mysql_fetch_arry() result에서 값을 가져옴/ java학사rs.next()랑 비슷
while($row = mysqli_fetch_array($result))
{
    //처음에는 ','을 안붙이고, 두번째부터 ','를 붙여서 객체를 연결하기위해
    if($output!="") //output이 아무것도 없으면 (!=)
    {
        $output.=","; //그 값 끝에 콤마를 붙여줌 (.=를 이용)
    }
    $output.='{"name":"'.$row['name'].'","price":"'.$row['price'].'"}';
}

$output='['.$output.']';


echo $output;

//6. 연결 종료
mysqli_close($connect);

?>