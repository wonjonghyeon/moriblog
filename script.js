function showYear(year) {
    // 모든 갤러리 콘텐츠 숨기기
    const allContents = document.querySelectorAll('.gallery-content');
    allContents.forEach(content => {
        content.classList.remove('active');
    });

    // 모든 버튼 비활성화
    const allButtons = document.querySelectorAll('.year-button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 선택된 연도 갤러리 표시
    document.getElementById(`gallery-${year}`).classList.add('active');

    // 선택된 버튼 활성화
    event.target.classList.add('active');
}