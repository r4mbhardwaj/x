webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/DirectoryIconEntry.tsx":
/*!**************************************************************!*\
  !*** ./components/System/FileManager/DirectoryIconEntry.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime.js */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/System/Icon */ \"./components/System/Icon.tsx\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/DirectoryIconEntry.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar DirectoryIconEntry = function DirectoryIconEntry(_ref) {\n  _s();\n\n  var icon = _ref.icon,\n      name = _ref.name,\n      kind = _ref.kind,\n      path = _ref.path,\n      url = _ref.url,\n      navRef = _ref.navRef,\n      onDoubleClick = _ref.onDoubleClick;\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(new _utils_events__WEBPACK_IMPORTED_MODULE_2__[\"ClickHandler\"]({\n    doubleClick: onDoubleClick({\n      path: path,\n      url: url,\n      icon: icon,\n      name: name\n    })\n  }).clickHandler, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li, {\n    drag: true,\n    dragConstraints: navRef,\n    onClick: onClick,\n    tabIndex: -1 // title={`${name}${kind ? `\\r\\nType: ${kind}` : ''}`}\n    // {...desktopIconDragSettings}\n    // {...desktopIconMotionSettings}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        src: icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, path, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DirectoryIconEntry, \"bUqifs7h7EVXqFrOnyVIJNrl0EY=\");\n\n_c = DirectoryIconEntry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"memo\"])(DirectoryIconEntry));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DirectoryIconEntry\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRGlyZWN0b3J5SWNvbkVudHJ5LnRzeD9hMjUwIl0sIm5hbWVzIjpbIkRpcmVjdG9yeUljb25FbnRyeSIsImljb24iLCJuYW1lIiwia2luZCIsInBhdGgiLCJ1cmwiLCJuYXZSZWYiLCJvbkRvdWJsZUNsaWNrIiwib25DbGljayIsInVzZUNhbGxiYWNrIiwiQ2xpY2tIYW5kbGVyIiwiZG91YmxlQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLElBQU1BLGtCQUFpQyxHQUFHLFNBQXBDQSxrQkFBb0MsT0FRcEM7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxHQUdJLFFBSEpBLEdBR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQ3pCLElBQUlDLDBEQUFKLENBQWlCO0FBQ2ZDLGVBQVcsRUFBRUosYUFBYSxDQUFDO0FBQUVILFVBQUksRUFBSkEsSUFBRjtBQUFRQyxTQUFHLEVBQUhBLEdBQVI7QUFBYUosVUFBSSxFQUFKQSxJQUFiO0FBQW1CQyxVQUFJLEVBQUpBO0FBQW5CLEtBQUQ7QUFEWCxHQUFqQixFQUVHVSxZQUhzQixFQUl6QixFQUp5QixDQUEzQjtBQU9BLHNCQUNFLHdFQUFDLG9EQUFELENBQVEsRUFBUjtBQUVFLFFBQUksTUFGTjtBQUdFLG1CQUFlLEVBQUVOLE1BSG5CO0FBSUUsV0FBTyxFQUFFRSxPQUpYO0FBS0UsWUFBUSxFQUFFLENBQUMsQ0FMYixDQU1FO0FBQ0E7QUFDQTtBQVJGO0FBQUEsMkJBVUU7QUFBQSw4QkFDRSx3RUFBQywrREFBRDtBQUFNLFdBQUcsRUFBRVA7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixLQUNPRSxJQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWpDRDs7R0FBTUosa0I7O0tBQUFBLGtCO0FBbUNTLGtGQUFBYSxrREFBSSxDQUFDYixrQkFBRCxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0RpcmVjdG9yeUljb25FbnRyeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ljb24nO1xuaW1wb3J0IHsgQ2xpY2tIYW5kbGVyIH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuaW1wb3J0IHtcbiAgZGVza3RvcEljb25EcmFnU2V0dGluZ3MsXG4gIGRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3Ncbn0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IERpcmVjdG9yeUljb25FbnRyeTogUmVhY3QuRkM8YW55PiA9ICh7XG4gIGljb24sXG4gIG5hbWUsXG4gIGtpbmQsXG4gIHBhdGgsXG4gIHVybCxcbiAgbmF2UmVmLFxuICBvbkRvdWJsZUNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICBuZXcgQ2xpY2tIYW5kbGVyKHtcbiAgICAgIGRvdWJsZUNsaWNrOiBvbkRvdWJsZUNsaWNrKHsgcGF0aCwgdXJsLCBpY29uLCBuYW1lIH0pXG4gICAgfSkuY2xpY2tIYW5kbGVyLFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmxpXG4gICAgICBrZXk9e3BhdGh9XG4gICAgICBkcmFnXG4gICAgICBkcmFnQ29uc3RyYWludHM9e25hdlJlZn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgICAvLyB0aXRsZT17YCR7bmFtZX0ke2tpbmQgPyBgXFxyXFxuVHlwZTogJHtraW5kfWAgOiAnJ31gfVxuICAgICAgLy8gey4uLmRlc2t0b3BJY29uRHJhZ1NldHRpbmdzfVxuICAgICAgLy8gey4uLmRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3N9XG4gICAgPlxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPEljb24gc3JjPXtpY29ufSAvPlxuICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L21vdGlvbi5saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRGlyZWN0b3J5SWNvbkVudHJ5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/FileManager/DirectoryIconEntry.tsx\n");

/***/ })

})