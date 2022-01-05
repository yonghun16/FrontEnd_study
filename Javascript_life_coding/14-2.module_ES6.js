// 1. export default - >export할 모듈이 하나 밖에 없을 때는 이걸 이용하면 된다.
/* a1.js

var a = function() {
    console.log("Hello");
}
export default a;

*/

// 2. named export  -> export할 모듈이 여러개 있을 때는 이걸 이용하면 된다.
/* a2.js

var a = function() {
    console.log("Hello");
}
var b = function() {
    console.log("Bye");
}
export const hi = a;
export const bye = b;

*/

import ABC from './a1.js';         // 1.방법 -> import 할 때 이름을 임의로 원하는 것으로 지정할 수 있다.
import { hi, bye } from './a2.js'; // 2.방법 -> import 할 때 이름이 'export에서 지정한 이름과 같아야'하며 반드시 {} 안에 적어야한다.
import * as say from './a.js';     // 2.방법 -> 모든 모듈 한번에 불러오기 
say.hi()