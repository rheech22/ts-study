{
  // Union Type: OR

  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }
  move('right')

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      }
    }
  }

  // printLoginState(state)
  // success => π body
  // fail => π reason

  // μ€ν¨ μ¬λ‘
  // function printLoginState(state: LoginState): void{
  //   if(state.response) {
  //     console.log(state.response.body);
  //     return
  //   }

  //   if(state.reason){
  //     console.log(state.reason);
  //     return
  //   }
  // }

  // in νμ© μ¬λ‘ β κΆμ₯νμ§ μμ => descriminated union νμ©

  function printLoginState(state: LoginState): void{
    // if('response' in state) {
    //   console.log(state.response.body);
    // } else {
    //   console.log(state.reason);
    // }
    console.log(typeof state)
  }

  printLoginState({response: {body: 'good'}});
}
