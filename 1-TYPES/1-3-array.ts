{
  // Array
  const fruits: string[] = ['🍊, 🍓'];
  const scores: number[] = [1, 2, 3, 4];

  function printArray(fruits: readonly string[]) {}

  // 아래 방식은 readonly를 적용할 수 없음 => 일관성있는 코드 작성을 위해 위 방식을 추천
  const fruits2: Array<string> = ['🍊, 🍓'];
  const scores2: Array<number> = [1, 2, 3, 4];

  // Tuple 권장하지 않음, 인덱스로 접근하는 방식 자체가 가독성에 좋지 않음 => interface, type alias, class 등을 활용
  let student: [string, number];
  student = ['name', 1234];
  student[0] // name
  student[1] // 123

  // 굳이 쓴다면 destructure 활용
  const [name, age] = student;
  
}