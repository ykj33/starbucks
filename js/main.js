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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 브라우저 창을 의미
// lodash 라이브러리를 사용, 한번에 수십개가 실행될 때 부하를 막기 위해 시간제한을 두고 실행시킴
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지요소를 숨김
    //gsap 라이브러리를 사용하여 애니메이션 사용
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    // 배지를 보여줌
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    // 화면의 위치를 0픽셀 부분으로 이동한다.
    scrollTo: 0
  });
});

const fadEls = document.querySelectorAll('.visual .fade-in');
// fadeEl을 받는다. index는 반복회수
fadEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    // delay는 해당 시간만큼 뒤에 실행된다.
    // index는 0부터 시작, 0.7, 1.4, 2.1....
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay를 객체로 값을 주면 여러 옵션을 줄 수 있다.
  // autoplay: {
  //   delay: 5000 // 5초
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gasp.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // y축으로 얼마나 움직일 것인가.
      repeat: -1, // 무한으로 진행
      yoyo: true, // 다시 돌아온다.
      ease: Power1.easeInOut, // 애니메이션의 움직이는 속도 조절
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // 현재 어떤 위치에 있는지 스크롤 감시하고 클래스를 넣었다 빼고 컨트롤러를 추가한다.
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 저장
      triggerHook: .8 // viewport는 맨 위가 0, 맨 아래가 1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
// 현재 년도의 정보를 반환
thisYear.textContent = new Date().getFullYear();