webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name;\n  var webamp;\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webampConstructor, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webampConstructor = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webampConstructor);\n              _context.next = 9;\n              return webampConstructor.renderWhenReady(containerElement);\n\n            case 9:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webampConstructor, url, name);\n              return _context.abrupt(\"return\", webampConstructor);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webamp.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var _webamp, _webamp2;\n\n    console.log('useEffect: onClose, onMinimize');\n    (_webamp = webamp) === null || _webamp === void 0 ? void 0 : _webamp.onClose(onClose);\n    (_webamp2 = webamp) === null || _webamp2 === void 0 ? void 0 : _webamp2.onMinimize(onMinimize);\n  }, [onClose, onMinimize]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"EEXc9qBw9N+PAPgIpSDvpi+sxE4=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJ1cGRhdGVQb3NpdGlvbiIsInpJbmRleCIsIm1pbmltaXplZCIsImZpbGUiLCJ1cmwiLCJuYW1lIiwid2ViYW1wIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsImxvYWRXZWJhbXAiLCJXZWJhbXBDb25zdHJ1Y3RvciIsIndlYmFtcENvbnN0cnVjdG9yIiwid2ViYW1wT3B0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJjdXJyZW50IiwiY2xvc2VFcXVhbGl6ZXIiLCJyZW5kZXJXaGVuUmVhZHkiLCJhcHBlbmRFbGVtZW50IiwiZm9jdXMiLCJsb2FkVHJhY2tPclNraW4iLCJ1c2VFZmZlY3QiLCJ0cnlEaXNwb3NlIiwiZGlzcG9zZSIsIl9leGNlcHRpb24iLCJ0aGVuIiwibG9hZGVkV2ViYW1wIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwidmlzaWJpbGl0eSIsImxvYWRlck9wdGlvbnMiLCJ3aW5kb3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLEdBRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7O0FBS0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBTjtB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QTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQW5FRDs7R0FBTVosTTs7S0FBQUEsTTtBQXFFU0EscUVBQWY7QUFFTyxJQUFNdUMsYUFBYTtBQUN4QkMsVUFBUSxFQUFFO0FBRGMsR0FFckI5QyxpQkFGcUIsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2dyYW1zL1dpbmFtcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1Byb2dyYW1zL1dpbmFtcC5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2dyYW1zJztcbmltcG9ydCB0eXBlIHsgV2ViYW1wU3RvcmUgfSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvUHJvZ3JhbXMvd2luYW1wJztcblxuaW1wb3J0IHsgYXBwZW5kRWxlbWVudCwgZm9jdXNPbkRyYWcgfSBmcm9tICdAL3V0aWxzL2VsZW1lbnRzJztcbmltcG9ydCB7XG4gIGNsb3NlRXF1YWxpemVyLFxuICBsb2FkVHJhY2tPclNraW4sXG4gIHRvdWNoQ29udHJvbHMsXG4gIHdlYmFtcE9wdGlvbnNcbn0gZnJvbSAnQC91dGlscy93aW5hbXAnO1xuaW1wb3J0IHsgb25Ub3VjaEV2ZW50c09ubHkgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHREaW1lbnNpb25zID0ge1xuICBoZWlnaHQ6IDIzMixcbiAgd2lkdGg6IDI3NVxufTtcblxuY29uc3QgZ2V0V2ViYW1wID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmFtcCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5jb25zdCBXaW5hbXA6IFJlYWN0LkZDPEFwcENvbXBvbmVudD4gPSAoe1xuICBvbkJsdXIsXG4gIG9uQ2xvc2UsXG4gIG9uTWluaW1pemUsXG4gIG9uRm9jdXMsXG4gIHVwZGF0ZVBvc2l0aW9uLFxuICB6SW5kZXgsXG4gIG1pbmltaXplZCxcbiAgZmlsZTogeyB1cmwgPSAnJywgbmFtZSA9ICcnIH0gPSB7fVxufSkgPT4ge1xuICBsZXQgd2ViYW1wOiBXZWJhbXAgJiBXZWJhbXBTdG9yZTtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxvYWRXZWJhbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wQ29uc3RydWN0b3IgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyk7XG4gICAgY29uc3Qgd2ViYW1wQ29uc3RydWN0b3IgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5cbiAgICBjbG9zZUVxdWFsaXplcih3ZWJhbXBDb25zdHJ1Y3Rvcik7XG4gICAgYXdhaXQgd2ViYW1wQ29uc3RydWN0b3IucmVuZGVyV2hlblJlYWR5KGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGFwcGVuZEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCwgZ2V0V2ViYW1wKCkpLmZvY3VzKCk7XG4gICAgb25Gb2N1cygpO1xuICAgIGxvYWRUcmFja09yU2tpbih3ZWJhbXBDb25zdHJ1Y3RvciwgdXJsLCBuYW1lKTtcblxuICAgIHJldHVybiB3ZWJhbXBDb25zdHJ1Y3RvcjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyeURpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3ZWJhbXAuZGlzcG9zZSgpO1xuICAgICAgfSBjYXRjaCAoX2V4Y2VwdGlvbikge1xuICAgICAgICAvKiBlc2xpbnQgbm8tZW1wdHk6IG9mZiAqL1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkV2ViYW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICB3ZWJhbXAgPSBsb2FkZWRXZWJhbXA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ5RGlzcG9zZTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3VzZUVmZmVjdDogb25DbG9zZSwgb25NaW5pbWl6ZScpO1xuICAgIHdlYmFtcD8ub25DbG9zZShvbkNsb3NlKTtcbiAgICB3ZWJhbXA/Lm9uTWluaW1pemUob25NaW5pbWl6ZSk7XG4gIH0sIFtvbkNsb3NlLCBvbk1pbmltaXplXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um5kXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5hbXB9XG4gICAgICBjYW5jZWw9e3RvdWNoQ29udHJvbHN9XG4gICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiZHJhZ2dhYmxlXCJcbiAgICAgIGVuYWJsZVJlc2l6aW5nPXtmYWxzZX1cbiAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIHN0eWxlPXt7IHpJbmRleCwgdmlzaWJpbGl0eTogbWluaW1pemVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfX1cbiAgICA+XG4gICAgICA8YXJ0aWNsZSByZWY9e2VsZW1lbnRSZWZ9IC8+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5hbXA7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXJPcHRpb25zID0ge1xuICB3aW5kb3dlZDogZmFsc2UsXG4gIC4uLmRlZmF1bHREaW1lbnNpb25zXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})