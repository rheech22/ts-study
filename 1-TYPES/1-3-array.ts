{
  // Array
  const fruits: string[] = ['π, π'];
  const scores: number[] = [1, 2, 3, 4];

  function printArray(fruits: readonly string[]) {}

  // μλ λ°©μμ readonlyλ₯Ό μ μ©ν  μ μμ => μΌκ΄μ±μλ μ½λ μμ±μ μν΄ μ λ°©μμ μΆμ²
  const fruits2: Array<string> = ['π, π'];
  const scores2: Array<number> = [1, 2, 3, 4];

  // Tuple κΆμ₯νμ§ μμ, μΈλ±μ€λ‘ μ κ·Όνλ λ°©μ μμ²΄κ° κ°λμ±μ μ’μ§ μμ => interface, type alias, class λ±μ νμ©
  let student: [string, number];
  student = ['name', 1234];
  student[0] // name
  student[1] // 123

  // κ΅³μ΄ μ΄λ€λ©΄ destructure νμ©
  const [name, age] = student;
  
}
