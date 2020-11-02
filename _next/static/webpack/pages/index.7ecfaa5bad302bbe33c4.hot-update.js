webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name;\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              if (onClose) webamp.onClose(onClose);\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var webamp;\n\n    var tryDispose = function tryDispose() {\n      try {\n        webamp.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return tryDispose;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsIm1pbmltaXplZCIsImZpbGUiLCJ1cmwiLCJuYW1lIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImxvYWRXZWJhbXAiLCJXZWJhbXBDb25zdHJ1Y3RvciIsIndlYmFtcCIsIndlYmFtcE9wdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiY3VycmVudCIsImNsb3NlRXF1YWxpemVyIiwicmVuZGVyV2hlblJlYWR5IiwiYXBwZW5kRWxlbWVudCIsImZvY3VzIiwibG9hZFRyYWNrT3JTa2luIiwidXNlRWZmZWN0IiwidHJ5RGlzcG9zZSIsImRpc3Bvc2UiLCJfZXhjZXB0aW9uIiwidGhlbiIsImxvYWRlZFdlYmFtcCIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwidmlzaWJpbGl0eSIsImxvYWRlck9wdGlvbnMiLCJ3aW5kb3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLEdBRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7O0FBS0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBTjtBQUFBLENBQWxCOztBQUVBLElBQU1DLE1BQThCLEdBQUcsU0FB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QUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3JhbXMvV2luYW1wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvUHJvZ3JhbXMvV2luYW1wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgV2ViYW1wIGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvZ3JhbXMnO1xuaW1wb3J0IHR5cGUgeyBXZWJhbXBTdG9yZSB9IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9Qcm9ncmFtcy93aW5hbXAnO1xuXG5pbXBvcnQgeyBhcHBlbmRFbGVtZW50LCBmb2N1c09uRHJhZyB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHtcbiAgY2xvc2VFcXVhbGl6ZXIsXG4gIGxvYWRUcmFja09yU2tpbixcbiAgdG91Y2hDb250cm9scyxcbiAgd2ViYW1wT3B0aW9uc1xufSBmcm9tICdAL3V0aWxzL3dpbmFtcCc7XG5pbXBvcnQgeyBvblRvdWNoRXZlbnRzT25seSB9IGZyb20gJ0AvdXRpbHMvZXZlbnRzJztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdERpbWVuc2lvbnMgPSB7XG4gIGhlaWdodDogMjMyLFxuICB3aWR0aDogMjc1XG59O1xuXG5jb25zdCBnZXRXZWJhbXAgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViYW1wJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbmNvbnN0IFdpbmFtcDogUmVhY3QuRkM8QXBwQ29tcG9uZW50PiA9ICh7XG4gIG9uQmx1cixcbiAgb25DbG9zZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25Gb2N1cyxcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHpJbmRleCxcbiAgbWluaW1pemVkLFxuICBmaWxlOiB7IHVybCA9ICcnLCBuYW1lID0gJycgfSA9IHt9XG59KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBsb2FkV2ViYW1wID0gYXN5bmMgKCk6IFByb21pc2U8V2ViYW1wICYgV2ViYW1wU3RvcmU+ID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IFdlYmFtcENvbnN0cnVjdG9yIH0gPSBhd2FpdCBpbXBvcnQoJ3dlYmFtcCcpO1xuICAgIGNvbnN0IHdlYmFtcCA9IG5ldyBXZWJhbXBDb25zdHJ1Y3Rvcih3ZWJhbXBPcHRpb25zKSBhcyBXZWJhbXAgJiBXZWJhbXBTdG9yZTtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lckVsZW1lbnQgfSA9IGVsZW1lbnRSZWYgYXMge1xuICAgICAgY3VycmVudDogSFRNTEVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGlmIChvbkNsb3NlKSB3ZWJhbXAub25DbG9zZShvbkNsb3NlKTtcbiAgICBpZiAob25NaW5pbWl6ZSkgd2ViYW1wLm9uTWluaW1pemUob25NaW5pbWl6ZSk7XG4gICAgY2xvc2VFcXVhbGl6ZXIod2ViYW1wKTtcbiAgICBhd2FpdCB3ZWJhbXAucmVuZGVyV2hlblJlYWR5KGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGFwcGVuZEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCwgZ2V0V2ViYW1wKCkpLmZvY3VzKCk7XG4gICAgb25Gb2N1cygpO1xuICAgIGxvYWRUcmFja09yU2tpbih3ZWJhbXAsIHVybCwgbmFtZSk7XG5cbiAgICByZXR1cm4gd2ViYW1wO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgdHJ5RGlzcG9zZSA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlYmFtcC5kaXNwb3NlKCk7XG4gICAgICB9IGNhdGNoIChfZXhjZXB0aW9uKSB7XG4gICAgICAgIC8qIGVzbGludCBuby1lbXB0eTogb2ZmICovXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvYWRXZWJhbXAoKS50aGVuKChsb2FkZWRXZWJhbXApID0+IHtcbiAgICAgIHdlYmFtcCA9IGxvYWRlZFdlYmFtcDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnlEaXNwb3NlO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um5kXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5hbXB9XG4gICAgICBjYW5jZWw9e3RvdWNoQ29udHJvbHN9XG4gICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiZHJhZ2dhYmxlXCJcbiAgICAgIGVuYWJsZVJlc2l6aW5nPXtmYWxzZX1cbiAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIHN0eWxlPXt7IHpJbmRleCwgdmlzaWJpbGl0eTogbWluaW1pemVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfX1cbiAgICA+XG4gICAgICA8YXJ0aWNsZSByZWY9e2VsZW1lbnRSZWZ9IC8+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5hbXA7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXJPcHRpb25zID0ge1xuICB3aW5kb3dlZDogZmFsc2UsXG4gIC4uLmRlZmF1bHREaW1lbnNpb25zXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})