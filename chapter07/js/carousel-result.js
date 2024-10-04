// 캐러셀 이미지가 보여지는 영역 가져오기
const container = document.querySelector("#container");

// 화살표 가져오기.
const arrows = document.querySelectorAll(".arrow");

// 이미지 배열 생성.
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

// 첫번째 이미지를 기본 이미지로 표시.
container.style.backgroundImage = `url(images/${pics[0]})`;

let i = 0; // 배열의 인덱스

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--; // 이전 이미지로 이동
      if (i < 0) {
        i = pics.length - 1; // 맨 마지막 이미지로 이동.
      }
    }
    if (e.target.id === "right") {
      i++; // 다음으로 이동
      if (i >= pics.length) {
        i = 0; // 첫 번째 이미지로 이동.
      }
    }
    // 현재 이미지 표시.
    container.style.backgroundImage = `url(images/${pics[i]})`;
  });
});
