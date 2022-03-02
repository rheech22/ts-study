{
  
  // 이렇게 만든 에러 클래스를 catch 구문에서 사용하려고 해도
  // error instanceOf TimeoutError 와 같은 검증이 불가능함
  // catch(error)에서 error는 any타입이기 때문
  // 다음 섹션처럼 error state를 타입 정의 해줌으로써 예외 처리를 해줄 수 있음
  class TimeoutError extends Error {};
  class OfflineError extends Error {};

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {};

    login(){
      // 에러를 잡고 나서 우아하게 처리할 수 없다면 catch하지 않는 것이 낫다.
      // 에러 잡고 나서 여기서 할 게 있나?
      // try {
      //   this.client.tryConnect();
      // } catch(error){
      //   console.log('caught!');
      // }
      this.client.tryConnect();
      // login...
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);

  // service.login();

  class App {
    constructor(private userService: UserService) {};
    run() {
      try {
        this.userService.login();
      } catch(error){
        // do sth
        // show dialog to user

      }
    }
  }

  const app = new App(service);
  app.run();
  
  
}
