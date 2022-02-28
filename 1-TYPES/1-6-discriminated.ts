{
  // 공통된 속성 정의
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;


  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      }
    }
  }

  // discriminated union

  function printLoginState(state: LoginState): void{
    if(state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }

}
