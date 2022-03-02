console.log(this); // window

function simpleFunc() {
  console.log(this);
}

window.simpleFunc(); // window
simpleFunc(); // window

console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter

// 사전 지식
// 전역 환경에서 함수를 선언하면 전역 객체 즉, window객체에서 함수에 접근 가능
// 반면 변수를 선언하는 경우 전역 객체에서 접근 불가능
// 단 var로 선언하는 변수의 경우 window 에서 접근 가능, But 사용 안함

// window.caller ❌
// const caller = counter.increase;
// caller(); // undefined

// this를 바인딩해주기 위해선
const caller = counter.increase.bind(counter);
caller(); // Counter

class Bob { }

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob


// 결국 this는 호출되는 문맥에 따라서 가리키는 대상이 달라짐


// 클래스 안에서 화살표 함수로 선언하게 되면 
// 굳이 바인딩하지 않아도 this의 연결이 유지됨
// 선언될 당시의 문맥을 유지함
class Counter2 {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter2 = new Counter2();

const caller2 = counter2.increase;

caller2();

// 기존에 알던 내용과 부합하는가?
// 화살표 함수는 this 바인딩 과정이 생략되어
// 스코프체인상 가장 가까운 this에 접근한다
