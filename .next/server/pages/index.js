"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Header(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/React.createElement(\"h1\", null, title ? title : 'Default Header');\n}\n\nfunction handleClick() {\n  setLikes(likes + 1);\n}\n\nfunction App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      likes = _useState2[0],\n      setLikes = _useState2[1];\n\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(\"div\", null, \"Total Likes:(\", likes, \")\"), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: handleClick\n  }, \"Like(\", likes, \")\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0MsTUFBVCxPQUF5QjtFQUFBLElBQVJDLEtBQVEsUUFBUkEsS0FBUTtFQUN2QixvQkFBTyxnQ0FBS0EsS0FBSyxHQUFHQSxLQUFILEdBQVcsZ0JBQXJCLENBQVA7QUFDRDs7QUFHRCxTQUFTQyxXQUFULEdBQXNCO0VBQ3BCQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFHYyxTQUFTQyxHQUFULEdBQWM7RUFDN0IsZ0JBQTBCTiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7RUFBQTtFQUFBLElBQU9LLEtBQVA7RUFBQSxJQUFjRCxRQUFkOztFQUNFLG9CQUNFLDhDQUNFLG9CQUFDLE1BQUQsT0FERixlQUVFLGlDQUFLLGVBQUwsRUFBbUJDLEtBQW5CLEVBQXlCLEdBQXpCLENBRkYsZUFHRTtJQUFRLE9BQU8sRUFBRUY7RUFBakIsR0FBOEIsT0FBOUIsRUFBb0NFLEtBQXBDLEVBQTBDLEdBQTFDLENBSEYsQ0FERjtBQU9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnl0ZWJ1ZGRpZXMvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoe3RpdGxlfSkge1xuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgSGVhZGVyJ308L2gxPjtcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVDbGljaygpe1xuICBzZXRMaWtlcyhsaWtlcyArIDEpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpe1xuY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdj5Ub3RhbCBMaWtlczooe2xpa2VzfSk8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2Uoe2xpa2VzfSk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaGFuZGxlQ2xpY2siLCJzZXRMaWtlcyIsImxpa2VzIiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();