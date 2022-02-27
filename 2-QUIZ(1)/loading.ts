{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loginState: ResourceLoadState) => {
    const { state } = loginState;

    if ( state === 'loading') {
      console.log('loading...');
      return
    }

    if ( state === 'success') {
      const { body } = loginState.response;
      console.log(body);
      return
    }

    if ( state === 'fail') {
      const { reason } = loginState;
      console.log(reason);
      return
    }

    console.log('not valid state...');
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
