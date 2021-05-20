/*
import myLog, {sum,Color} from './module'

console.log(sum(1,1));
myLog.show();
 */


import * as Module from './module.mjs'

console.log(Module.Color);
console.log(Module.sum(1, 1));
console.log(Module.default.show());