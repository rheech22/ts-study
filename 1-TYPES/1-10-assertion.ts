{
  // Type Assertion

  // 가능하면 안쓰는 것이 좋음
  // 불가피하게 써야 하는 경우가 있음

  function jsStrFunc(): any {
    return 2;
  }

  // any 타입을 반환하도록 작성된 함수이지만, 어떤 타입으로 반환하는지 장담할 수 있을 때 사용
  // 1. 근데 만약 아니라면? 타입스크립트 에러가 발생하지 않음, 지금 이 경우에는 undefined 출력

  const result = jsStrFunc();
  console.log((result as string).length); // ❌
  console.log((<string>result).length); // ❌


  // 2. 근데 만약 아니라면? 타입스크립트 에러가 발생하지 않음, 에러 출력 wrong.push is not a function

  const wrong: any = 5;

  console.log((wrong as Array<number>).push(1)); // ❌
 
  
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // 느낌표를 넣으면 완전히 확신하는 것, 무조건 null이 아니다
  const numbers = findNumbers()!;
  numbers.push(2);

  // 메서드 호출 시에 넣어줘도 됨
  const numbers2 = findNumbers();
  numbers2!.push(2);


  // querySelector는 null일 수도 있기 때문에 조건문을 써야 함
  // const button = document.querySelector('class');
  // if(button) {
  //   button.nodeValue;
  // }
  
  // 이럴때 느낌표를 쓸 수 있음
  const button = document.querySelector('class');
  button!.nodeValue

}
