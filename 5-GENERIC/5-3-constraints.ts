{
  interface Employee {
    pay(): void;

  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full Time!`);
    }
    workFullTime(){

    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time`);
    }
    workPartTime(){

    }
  }
  
  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않음
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // 제네릭은 너무 일반적이라 E만 명시하는 경우 pay()를 알지 못함, 특정 타입에서 확장시켜줄 필요가 있음
  function pay<E extends Employee>(employee: E): E{
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPayBad = payBad(ellie);
  const bobAfterPayBad = payBad(bob);

  // ellieAfterPayBad.workFullTime(); // ❌
  // bobAfterPayBad.workPartTime(); // ❌

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);  

  ellieAfterPay.workFullTime();
  bobAfterPay.workPartTime();

  const obj = {
    name: 'elice',
    age: 20,
  };

  const obj2 = {
    animal: '🦮'
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // ellie
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // 🦮

  
}
