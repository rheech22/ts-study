{

  type Video = {
    title: string;
    author: string;
    description: string;
  };
  
  // 아래와 같이 불필요한 타입 재선언을 할 필요가 없음
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }
  
  type Optional<T> = {
    // 타입 T의 키를 순회하면서 타입 매핑 (T[P]는 value)
    [P in keyof T]?: T[P] // === (for...in)
  };
  
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'only title'
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'only name'
  };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const videoReadOnly: ReadOnly<Video> = {
    title: 'title',
    author: 'author',
    description: 'description'
  };

  // videoReadOnly.author = 'new author'; ❌

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const videoNullable: Nullable<Video> = {
    title: 'title',
    author: null,
    description: null
  };
  
  // advanced map

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> ={
    [P in keyof T]: Proxy<T[P]>;
  };

}
