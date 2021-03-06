/**
 * Let's make a calculator ๐งฎ
 */

{ 
  // command์ ์ฌ ์ ์๋ string์ ์ ํด์ ธ ์์ผ๋ฏ๋ก union์ผ๋ก ํ์ ์ ์ธ
  type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

  function calculate(command: Command, a: number, b: number): number | null {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      case 'remainder':
        return a % b;
      default:
        // ๋ชจ๋  ๊ฒฝ์ฐ์ ํด๋นํ์ง ์์ผ๋ฉด ์๋ฌ ๋์ง
        throw new Error('unknown command');
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
