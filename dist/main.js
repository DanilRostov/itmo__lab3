/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Component Author\nvar author = document.body.appendChild(document.createElement('h4'));\nauthor.id = 'author';\nauthor.title = 'GossJS';\nauthor.textContent = 'Данил Ростов'; // Component TransformString\n\nvar input = document.body.appendChild(document.createElement('input'));\nvar resultBox = document.body.appendChild(document.createElement('span'));\nresultBox.textContent = 'Результат: ';\nvar resultLine = document.body.appendChild(document.createElement('span'));\n\ninput.oninput = function () {\n\tresultLine.textContent = generateStr(input.value);\n};\n\nvar generateStr = function generateStr(str) {\n\tvar _ref, _ref2, _ref3, _str;\n\n\tvar result = (_ref = (_ref2 = (_ref3 = (_str = str, upperCase(_str)), toLength(_ref3)), multiplyer(_ref2)), reverse(_ref));\n\treturn result;\n};\n\nvar upperCase = function upperCase(str) {\n\treturn str.toUpperCase();\n};\n\nvar toLength = function toLength(str) {\n\twhile (str.length < 10) {\n\t\tstr += '*';\n\t}\n\n\treturn str;\n};\n\nvar multiplyer = function multiplyer(str) {\n\treturn str + str;\n};\n\nvar reverse = function reverse(str) {\n\tvar result = '';\n\n\tfor (var i = str.length; i > 0; i--) {\n\t\tresult += str[i - 1];\n\t}\n\n\treturn result;\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });