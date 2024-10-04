// btn1을 누르면 배경 바꾸기
const button1 = document.querySelector("#btn1");

button1.onclick = function() {
    document.body.style.backgroundColor = "green";
}

// btn2를 누르면 배경 바꾸기 - 배경 함수 따로 생성.
const button2 = document.querySelector("#btn2");

// 배경 바꾸는 함수
function changeBG() {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "white";
}

button2.onclick = changeBG;

// 두 가지 이벤트 처리하기 1
// html 버튼에서도 onclick를 사용하고, 여기서도 onclick를 사용했다.
// on이벤트 프로퍼티는 하나만 사용 가능하다.
// 따라서 배경 색만 바뀐다.
const button3 = document.querySelector("#btn3");

button3.onclick = () => {
    document.body.style.backgroundColor = "orange";
}


// 두 가지 이벤트 처리하기 2
// 이벤트 리스너를 사용하여 해결한다.
const button4 = document.querySelector("#btn4");

button4.addEventListener("click", () => {
    document.body.style.backgroundColor = "tomato";
})


// 배경과 글자색 토글하기
const button5 = document.querySelector("#btn5");

button5.addEventListener("click", () => {
    document.body.style = "";
    document.body.classList.toggle("convert");
})


// 텍스트 필드에 입력한 글자 수 알아내기
const button6 = document.querySelector("#btn6");

button6.addEventListener("click", () => {
    // 텍스트 상자의 내용을 가져 온다.
    const word = document.querySelector("#word").value;

    // 결과를 표시할 영역을 가져 온다.
    const result = document.querySelector("#result");

    // 문자열의 길이를 가져 온다.
    let count = word.length;

    // 결과를 result영역에 표시한다.
    result.innerText = `${count}`;
})