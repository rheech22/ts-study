{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface: 의사소통을 위한 규약을 명시해놓은 계약서와 같다
  // Convention:
  // 1_인터페이스 앞에 I라는 prefix를 붙여서 인터페이스임을 명시(ICOffeeMaker)
  // 2_구현하는 클래스의 뒤에 Impl를 붙여주는 방식 (class coffeeMakerImpl)
  // 3_구현하는 클래스의 이름을 다른 방식으로 지어 줌 (class coffeeMachine)

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 인터페이스 CoffeeMaker를 구현하는 클래스임을 명시
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

  
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // 접근 제어자를 통해 사용자에게 필요한 메서드만 접근할 수 있도록 만든다.
  // 즉 캡슐화를 통한 정보 은닉으로 객체의 적절한 사용법을 명시하고 유도할 수 있다.
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);  

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);  
  maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amatuer = new AmateurUser(maker3);
  const propfessional = new ProBarista(maker3);
  amatuer.makeCoffee();
}


// 참고 
// 단순히 private, public 제어자를 붙이는 이런 캡슐화가 추상화다로고는 볼 수 없는것이...
// 추상화라는것은 외부에서 이 클래스를 사용할때 어떻게, 무엇을 사용할 것인가?
// 이 부분을 고민하면서 클래스에서 기능을 내부 기능과 외부에서 필요한 기능을 나누고 사용자가 사용하기 편한,
// 의미가 맞는 함수의 형태로 노출하는 작업, 이런 프로세스 자체를 추상화라고 부르기 때문이죠
