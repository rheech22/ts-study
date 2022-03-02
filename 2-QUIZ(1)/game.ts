/**
 * Let's make a game 🕹
 */

const position = {
  x: 0,
  y: 0
}

type Command = 'up' | 'down' | 'left' | 'right';

function move(command: Command){
  switch (command){
    case 'up':
      position.y += 1;
      return
    case 'down':
      position.y -= 1;
      return
    case 'left':
      position.x -= 1;
      return
    case 'right':
      position.x += 1;
      return
    default:
      const invalid: never = command; 
      throw new Error(`Not Valid Command: ${invalid}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
