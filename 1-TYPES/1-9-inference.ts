{
  // Type inference


  // 아래처럼 할당하면 타입을 정의해주지 않아도 알아서 추론함
  let text = 'hello';
  // text = 1 ❌ error


  // 함수 인자의 경우 타입을 명시해주지 않으면 any로 추론하기 때문에 명시해주는 것이 좋다
  // 만약 default parameter가 있다면 알아서 추론
  function print(message = 'hello'){
    console.log(message)
  }


  // 함수의 결과도 추론이 됨
  function add(x: number, y: number) {
    return x + y;
  }


  // 추론되고 있는 함수의 결과의 할당도 역시 추론이 됨
  const result = add(1, 2);

  // 그렇다면 타입 추론은 해도 되는 것일까?
  // 답은 No !
  // 예제의 경우 간단한 코드라 상관없을지 몰라도 실무에서는 명확하게 표현해주는 것이 좋음
  // 다만 primitve 타입 처럼 너무 명백한 것은 생략해도 무방

}