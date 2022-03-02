// import add, {print as newPrint} from './10-3-module1.js';

// console.log(add(1, 2));
// newPrint();

import * as calculator from './10-3-module1.js';

console.log(calculator.add(1, 2));

calculator.print();