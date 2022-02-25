{  
  // Primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array....

  // number
  const num:number = -6

  // string
  const str:string = 'hello';

  // boolean
  const boal:boolean = false;

  // undefined
  let name: undefined; // 단독으로 ❌
  let age: number | undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 단독으로 ❌
  let person2: string | null;

  // unknown ❌
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any ❌
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // ❌

  // never
  function throwError(message: string): never {
    // message => server (log)
    throw new Error(message);
  }

  function neverEnding(): never {
    while(true){
        //
    }
  }

  let neverEnded: never; // ❌


  // object ❌
  // 원시타입을 제외한 모든 object 타입 할당 가능
  let obj: object;
  function acceptSomeObject(obj: object){}
  acceptSomeObject({name: 'ellie'});
  acceptSomeObject({animal: 'dog'});

}