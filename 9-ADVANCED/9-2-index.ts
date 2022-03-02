{
  const obj = {
    name: 'ellie',
  }

  obj.name // ellie
  obj['name'] // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female'
  

  // 이게 좀 특이한듯?
  type Keys = keyof Animal // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  }

  const person: Person = {
    name: 'elice',
    gender: 'male',
  }

}
