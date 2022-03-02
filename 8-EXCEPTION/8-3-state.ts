{ 

  // 충분히 예상 가능한 에러에 대해서 포괄적인 예외 처리로 핸들링해주기 보다는 별도의 상태로 정의해서 하나의 상태로 간주하며 관리해주고
  // 그 밖에 예상하기 어려운 에러에 대해서는 try-catch문을 활용한 예외처리를 활용해 볼 수 있음
  // 
  type NetWorkErrorState = {
    result: 'fail';
    reason: 'offline' | 'donw' | 'timeout';
  }

  type SuccessState = {
    result: 'success';
  };
  
  type ResultState = SuccessState | NetWorkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'timeout',
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {};

    login(){
      return this.client.tryConnect();
    }
  }

  
  class App {
    constructor(private userService: UserService) {};
    run() {
      try {
        const status = this.userService.login();
        if (status.result === 'fail') {
          // 에러 핸들링
        }
      } catch(error){
        // 예외 처리
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  
  
}
