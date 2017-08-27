webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _counter = __webpack_require__(1);

test();
(0, _counter.increaseCounter)();
(0, _counter.increaseCounter)();
(0, _counter.increaseCounter)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by IlyaLitvinov on 10.04.17.
 */
// import './styles.styl';
var counter = 0;

// Callback function
function increaseCounter() {
  counter = counter + 1;
  console.log(counter);
}

function test() {
  console.log('TEST');
}

exports.increaseCounter = increaseCounter;

/***/ })
],[0]);