$(function(){

  $("#mypw").on("keyup",function(){
      if( $(this).val().length < 6 || $(this).val().length > 12){
          $(".pwvaild").text("비밀번호 6~ 12자 입니다.");
      }else{
          $(".pwvaild").text('비밀번호 안전');
      }
  })

  $("#myphone").on("keyup",function(){
    var num = $(this).val(); 

    num.replace()

    // 문자열으 기본구조가 배열의 구조이지만, 자바스크립트에서 문자열 객체로 사용되기
    // 떄문에 객체전용 합수가 따로 존재한다
    // if($nam.length>=4){
    // num=num.splice(0,3)+"-"+num.splice(3);
    // $(this).val(num);
    // }
    // if($nam.length == 9){
    //     num=num.splice(0,8)+"-"+num.splice(7);
    //     $(this).val(num);
    // }
  });

  $("#join").on("click",function(){

      if( $("#myid").val() == '' ){
          alert("아이디를 입력하세요");
          $("#myid").focus();
      }
      if( $("#mypw").val() != $("#pwre").val() ){
          alert("비밀번호가 같지않습니다.");
          $("#mypw").val('');
          $("#pwre").val('');
          $("#mypw").focus();
      }

  });
});
