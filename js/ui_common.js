$(function () {
  // 변수 선언
  const txt = document.querySelector('.txt_title');
  const content = '안녕하세요! \n발전해나가는 \n신입 웹퍼블리셔 김예빈입니다 :)';
  let contentIndex = 0;

  // typing 함수
  let typing = function () {
    txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === '\n') {
      txt.innerHTML += '<br />';
      contentIndex++;
    }
    if (contentIndex > content.length) {
      txt.textContent = '';
      contentIndex = 0;
    }
  };

  // 0.2초간격으로 typing 함수 실행
  setInterval(typing, 130);
});
