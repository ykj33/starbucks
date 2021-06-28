const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// searchEl을 클릭하면 포커스가 된다. 
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 클래스 정보를 추가하겠다.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 속성 부여
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 블러되었을 때 이벤트 추가
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // 속성 부여
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
// 현재 년도의 정보를 반환
thisYear.textContent = new Date().getFullYear();