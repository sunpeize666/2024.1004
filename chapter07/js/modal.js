// 필요한 요소 가져오기.
// 버튼 2개, 모달박스
const open = document.querySelector("#open");
const close = document.querySelector("#close");

const modalBox = document.querySelector("#modal-box");

// open 버튼 클릭시 이벤트 설정.
open.addEventListener("click", () => {
  modalBox.classList.toggle("active");
});

// close 버튼 클릭시 이벤트 설정.
close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});
