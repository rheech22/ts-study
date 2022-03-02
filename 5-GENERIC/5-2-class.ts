{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4,5);
  either.left();
  either.right();
  const best = new SimpleEither({name: 'aiden'}, 'hello');
  best.left();
  best.right();
}
