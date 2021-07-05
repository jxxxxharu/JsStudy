# 시계 만들기 [setInterval(), setTimeout()] [Date  object] [padStart()]

작성일시: 2021년 7월 5일 오후 8:11
작성자: 동현 고
최종 편집일시: 2021년 7월 5일 오후 8:30

date 객체

interval과 timeout

# setInterval()

: 함수를 시간 간격으로 실행하는 tool

### Interval

: 매번 일어나야 하는 무언가

- 예를 들어 매 2초마다 무언가를 일어나게 하고 싶을 때

```jsx
// 두가지 argument를 받는다.

[기본형] setInterval(실행하고자 하는 함수, function을 호출할 간격(ms; millisecons));

// 예시. 1초마다 getClock 함수를 실행
setInterval(getClock, 1000);
```

# setTimeout()

: 일정시간 후에 함수를 한 번만 실행

```jsx
// 두가지 argument를 받는다.

[기본형] setTimeout(호출할 함수, 몇 ms후에 실행할 것인지(ms));

// 예시. 5초마다 sayHello함수 실행
setTimeout(sayHello, 5000);
```

# Date object

- 콘솔 창에 `new Date()` 입력: 오늘 날짜를 가져옴

## Date object의 method

- date.getDate(): 오늘 날짜
- date.getDay(): 요일을 숫자로 표시(일요일이 0, 월요일부터 1)
- date.getFullYear(): 올해 년도
- date.getHours(): 현재 시간
- date.getMinutes(): 현재 분
- date.getSeconds(): 현재 초

날짜, 요일, 시간 등 현재 시각을 return

## 예시

```jsx
// html에서 id가 clock인 h2요소 가져오기
const clock = document.querySelector("#clock");

// 현재 시간 분, 초를 표시하는 함수 작성
function getClock() {
	// Date 객체 생성
	const date = newDate();
	// 현재 시간, 분, 초를 변수에 저장
	// String()으로 감싸 문자열로 변환
	// padStart()로 문자열 길이와 추가할 문자열 조정
	const hours = String(date.getHours).padStart(2, "0");
	const minutes = String(date.getMinutes).padStart(2, "0");
	const seconds = String(date.getSeconds).padStart(2, "0");
	// h2의 내용 변경
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// html이 열리자마자 함수를 실행해 시간 표시
getClock();
// 매 초마다 함수 실행
setInterval(getClock, 1000);
```