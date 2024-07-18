const content = "Welcome to Holland!";
const text = document.querySelector(".text");
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "br": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 250)

document.addEventListener('DOMContentLoaded', () => {
  const hoverImg = document.querySelector('.cuser');
  const hoverBg = document.querySelector('.headerbg');

  // 마우스가 notice 영역에 들어올 때 이미지를 보이게 하고 위치를 업데이트
  hoverBg.addEventListener('mousemove', (event) => {
    const rect = hoverBg.getBoundingClientRect(); // notice 영역의 좌표를 가져옴
    const mouseX = event.clientX - rect.left; // notice 내부에서의 마우스 X 좌표
    const mouseY = event.clientY - rect.top;  // notice 내부에서의 마우스 Y 좌표

    const cursorHalfWidth = hoverImg.clientWidth / 2;
    const cursorHalfHeight = hoverImg.clientHeight / 2;

    hoverImg.style.left = `${mouseX - cursorHalfWidth}px`;
    hoverImg.style.top = `${mouseY - cursorHalfHeight}px`;
    hoverImg.style.display = 'block'; // 이미지를 보이도록 설정
});

// 마우스가 notice 영역을 벗어날 때 이미지를 숨기기
hoverBg.addEventListener('mouseleave', () => {
    hoverImg.style.display = 'none';
});

// 마우스 커서를 숨기고 이미지만 보이게 설정
hoverBg.style.cursor = 'none'; // 전체 문서에서 마우스 커서 숨기기
  hoverImg.style.display = 'none'; // 초기에 이미지 숨기기
})