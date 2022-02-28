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

    constructor(
      coffeeBeans: number, 
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void{
      console.log('Steaming some milk... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void{
      console.log('Steaming some milk very softly... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void{
      console.log('Steaming some milk coldly... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class BlackSuagrMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  
  // CoffeeMachine 클래스를 좀 더 추상화시키고, 메서드를 오버로드하면 
  // 아래 것들은 더 이상 필요하지 않음

  // class LatteMachine extends CoffeeMachine {
  //   constructor(
  //     beans: number,
  //     public readonly serialNumber: string,
  //     private milkFrother: MilkFrother
  //   ){
  //     super(beans);
  //   }

  //   makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       return this.milkFrother.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(
  //     private beans: number,
  //     private sugar: SugarProvider
  //   ){
  //     super(beans);
  //   };
  //   makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       return this.sugar.addSugar(coffee);
  //   }
  // }

  // class SweetLatteMachine extends CoffeeMachine {
  //   constructor(
  //     private beans: number,
  //     private sugar: SugarProvider,
  //     private milk: MilkFrother,
  //   ){
  //     super(beans);
  //   };
  //   makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       const sugarAdded = this.sugar.addSugar(coffee);
  //       return this.milk.makeMilk(sugarAdded);
  //   }
  // }

  // 서로 강하게 의존하고 있는 관계를 interface를 통해 de-coupling

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const blackSugar = new BlackSuagrMixer();
  const noSugar = new NoSugar();


  // 
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, blackSugar);
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, candySugar);

  // 상속이 너무 깊다면 컴포지션을 활용해서 개선할 수 있음
  // 컴포지션을 통해서 재사용성을 높이고 유지보수성을 높일 수 있음
}
