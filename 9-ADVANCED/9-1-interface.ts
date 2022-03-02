{
  type PositionType = {
    x: number;
    y: number;
  };


  // 구현 대상이 아닌 데이터의 타입을 정의할 뿐이기 때문에 type을 사용하는 것이 바람직
  interface PositionInterface {
    x: number;
    y: number;
  }

  // both
  
  // object
  const obj1: PositionType = {
    x:1,
    y:1
  };

  const obj2: PositionInterface = {
    x:2,
    y:2
  };

  // class

  class Pos1 implements PositionType {
    x: number;
    y: number;
  };

  class Pos2 implements PositionInterface {
    prev: number;
    z: number;
    x: number;
    y: number;
  };

  // extends (type은 intersection을 통해서 함)
  interface ZPositionInterface extends PositionInterface{
    z?: number;
  };

  type ZPositionType = PositionType & {z?: number};


  // only interfaces can be merge
  interface PositionInterface {
    prev?: number;
  }

  // only type alias can use computed properties
  type Person = {
    name: string,
    age: number
  }

  type Name = Person['name'];


  // only type can define new type
  type NumberType = number;

  // only type can use union
  type Direction = 'left' | 'right';
}
