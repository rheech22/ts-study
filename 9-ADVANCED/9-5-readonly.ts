{
  type ToDo = {
    title: string;
    description: string;
  };

  // 직접 매핑을 위한 타입을 정의해도 되지만
  // 타입스크립트에서 제공하는 유틸리티 타입이 이미 있다면 이것을 사용
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // ❌
  }

}

