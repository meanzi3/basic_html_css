// "left_scroll_button"을 클릭했을 떄 스크롤
function scroll_Left(button) {
  var rowPosters = button.parentElement.querySelector(".row_posters");
  rowPosters.scrollLeft -= 500; // 100px 만큼 왼쪽으로 스크롤
}

// "right_scroll_button"을 클릭했을 때 스크롤 이동 함수
function scroll_Right(button) {
  var rowPosters = button.parentElement.querySelector(".row_posters");
  rowPosters.scrollLeft += 500;
}

// 스크롤 버튼 가시성 토글 함수
function toggleScrollButtons(scrollContainer) {
  var scrollableWidth =
    scrollContainer.scrollWidth - scrollContainer.clientWidth;
  var scrollLeft = scrollContainer.scrollLeft;
  var leftButton =
    scrollContainer.nextElementSibling.querySelector(".leftButton");
  var rightButton =
    scrollContainer.nextElementSibling.querySelector(".rightButton");

  // 스크롤이 끝에 도달했을 때 버튼 가시성 조절
  if (scrollLeft === 0) {
    leftButton.style.display = "none"; // 왼쪽 버튼 숨김
  } else {
    leftButton.style.display = "block"; // 왼쪽 버튼 표시
  }

  if (scrollLeft >= scrollableWidth) {
    rightButton.style.display = "none"; // 오른쪽 버튼 숨김
  } else {
    rightButton.style.display = "block"; // 오른쪽 버튼 표시
  }
}

// 초기화 시에도 버튼 상태 갱신
toggleScrollButtons();

// 스크롤 이벤트 발생 시에도 버튼 상태 갱신
document
  .querySelector(".row_posters")
  .addEventListener("scroll", toggleScrollButtons);
