{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // private 외부로부터의 접근 금지
  // public 외부 접근 허용
  // protected 자식 클래스에서만 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans; 
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

  
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
  console.log(maker);

  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Ellie';
  console.log(user.fullName);


  class User2 {
    firstName: string;
    lastName: string;

    // getter는 메서드와 같이 생겼지만, 접근할 때는 멤버 변수에 접근하듯이 user2.fullname
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user2 = new User2('Steve', 'Jobs');
  console.log(user2.fullName);
  user2.firstName = 'Ellie';
  console.log(user2.fullName);


  class User3 {
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number{
      return this.internalAge;
    }

    set age(num: number){
      this.internalAge = num;
    }

    // 생성자에 접근 제어자를 붙여주면 바로 멤버 변수로 설정 가능 (위에서 멤버 변수를 선언해줄 필요 없음)
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user3 = new User3('Steve', 'Jobs');
  console.log(user3)
  user3.age = 6;
  console.log(user3)
}
