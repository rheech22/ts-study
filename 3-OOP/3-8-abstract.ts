{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 클래스로는 인스턴스를 만들 수 없음
  // 부모 클래스로서 필요한 것들을 정의해놓음
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans; 
    }

    clean(): void {
        console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    // abstarct를 상속받아 정의해야 되기 때문에 protected로 접근 제어자 설정
    // abstract 메서드는 사용하는 클래스에서 구현되어야 하기 때문에 {} 구현 부분은 생략
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class LatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string){
      super(beans)
    }

    private steamMilk(): void {
      console.log('Steaming some milk...');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new LatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new LatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine=> {
    console.log('------------------------------');
    machine.makeCoffee(1);
  })
}
