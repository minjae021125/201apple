// 문자열
// 자바스크립트에서 문자열은 string객체 하는것으로 저장이되고
// 사용된다. string객체에는 다양한 문자열을 처리하기위한 메서드가 있다.

//1.문자열의 문자 갯수가 몇개냐??

var word = "member";
var len = word.length;
console.log('문자열 갯수: ${len}')

//2. 문자열에서 한글자만 가져오기 - charAt()

var at = word.charAt(4);
