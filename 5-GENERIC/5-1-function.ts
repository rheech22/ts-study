{
  // 만약 다른 타입의 인자라면?
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) throw new Error('not valid number');
    return arg;
  }
  
  // any는 타입을 보장해주지 않음
  function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null) throw new Error('not valid number');
    return arg;
  }

  // generic을 사용하면 null이 아닌 경우에만 같은 타입을 리턴하는 식으로 구현할 수 있음
  // 보통 대문자 T와 같은 식으로 간단하게 작성함
  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) throw new Error('not valid number');
    return arg;
  }
  // 사용하는 시점에 타입이 결정됨
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}