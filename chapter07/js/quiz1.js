// 이벤트가 발생할 이미지 영역 가져오기
const imgBox = document.querySelector("#container img");

// 이미지 영역에 마우스를 올리면 6번 이미지 보여라.
imgBox.addEventListener("mouseover", () =>{
    imgBox.src = "images/pic-6.jpg";
});

// 이미지 영역에서 마우스를 빼면 1번 이미지 보여라.
imgBox.addEventListener("mouseout", () => {
    imgBox.src = "images/pic-1.jpg";
});