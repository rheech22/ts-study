{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      }
    }

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

    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        this.steamMilk();
        return {
          shots,
          hasMilk: true
        }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return {
          ...coffee,
          hasSugar: true,
        }
    }
  }


  // 내부적으로 구현된 다양한 객체들이 한 가지의 인터페이스로 구현됨
  // 공통된 API를 호출할 수 있다는 장점
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new LatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new LatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine=> {
    console.log('------------------------------');
    machine.makeCoffee(1);
  })
}
