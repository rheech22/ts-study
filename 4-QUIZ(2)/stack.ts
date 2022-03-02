{
  interface Stack {
    readonly size: number;
    push: (value: string) => void;
    pop: () => string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }

  class StackImpl implements Stack {
    // 내부에서 쓰이는 동일한 이름은 언더바를 사용
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {};

    get size(){
      return this._size;
    }

    push(value: string){
      if(this.size === this.capacity){
        throw new Error('Stack is full!');
      }
      // 새로운 데이터를 만들고 head에 할당된(head가 참조하고 있는) 데이터를 next에 할당
      const node: StackNode = {value, next: this.head};
      // head는 이제 이전 데이터가 아닌 새롭게 생성된 node를 참조
      this.head = node;
      this._size++;
    }

    pop(): string {
      if(this.head == null) throw new Error('Stack is empty!');
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while(stack.size !== 0){
    console.log(stack.pop());
  }
  stack.pop();
}