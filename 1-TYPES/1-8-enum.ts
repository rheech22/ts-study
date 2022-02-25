{
  // Enum 여러 상수 값들을 한 곳에 모아서 정리할 수 있게 도와주는 타입

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  // JS에는 Enum이 없기 때문에 아래와 같은 방식으로 비슷하게 구현할 수 있음
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 앞글자만 대문자로 작성
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  // 값을 정하지 않으면 자동으로 0부터 인덱싱
  // 문자열로 정해줄 수 있음, 단 모든 속성에 값을 정해줘야 함
  console.log(Days.Thursday);
  const day = Days.Saturday;
  console.log(day);

  // enum은 사용이 지양되고 있음
  // 그 이유는 enum으로 지정된 변수에 다른 어떤 값도 할당이 될 수 있기 때문
  // line 30에서 const day: Day가 생략되어 있음
  // 이후에 day = Days.Tuesday라고 재할당도 가능함
  // 이후에 day = 1 이라고 재할당도 가능함...😅

  // 이처럼 enum을 쓰게 되면 타입이 보장되기 어려움
  // Union 및 String Literal로 대체 가능한 경우가 많음
  type DaysOfWeek = 'Monday' | 'TuesDay' | 'WednesDay';

  // 근데 아래와 같이 union으로 정의해줄 때보다 간결하고 숫자로 매핑되는 경우가 아닐 때는 괜찮은듯?
  enum Errors {
     Short = 'error message simple version',
     Long = 'error message complicated version',
     Detail = 'error message complicated detail version'
  }
}