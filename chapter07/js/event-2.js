// 마우스 이벤트에서 클릭 위치 가져오기
const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});


// 키보드 이벤트에서 키 값 알아오는 위치와 결과 위치 가져오기
const body = document.body;
const result = document.querySelector("#result");

body.addEventListener("keydown", (e) => {
    result.innerText = `code : ${e.code}, key : ${e.key}`;
});