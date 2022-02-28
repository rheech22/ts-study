{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }


  class CoffeeMaker {
    // 멤버 변수
    static BEANS_GRAM_PER_SHOT: number = 7; // class level: 클래스와 연결되어 인스턴스마다 생성되지 않음
    coffeeBeans: number = 0; // instance(object) level

    // 인스턴스가 생성될 때 호출되는 함수 => constructor
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 메서드

    // 생성자 함수가 아닌 생성자의 스태틱 메서드로 머신 생성하는 법
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(12)
  console.log(maker3);
}
