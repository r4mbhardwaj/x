webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      x = _ref.x,\n      y = _ref.y,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name;\n  console.log('woof', x, y);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(),\n      webamp = _useState[0],\n      setWebamp = _useState[1];\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webampConstructor, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webampConstructor = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              console.log('meow');\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webampConstructor);\n              _context.next = 10;\n              return webampConstructor.renderWhenReady(containerElement);\n\n            case 10:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webampConstructor, url, name);\n              return _context.abrupt(\"return\", webampConstructor);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webamp === null || webamp === void 0 ? void 0 : webamp.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      setWebamp(loadedWebamp);\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    console.log(webamp, x, y);\n    webamp === null || webamp === void 0 ? void 0 : webamp.onClose(onClose);\n    webamp === null || webamp === void 0 ? void 0 : webamp.onMinimize(onMinimize);\n  }, [x, y, webamp]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"MHRw76UTXYBqeRZ1eNXx9PZ9gkI=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJ1cGRhdGVQb3NpdGlvbiIsIngiLCJ5IiwiekluZGV4IiwibWluaW1pemVkIiwiZmlsZSIsInVybCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJ3ZWJhbXAiLCJzZXRXZWJhbXAiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwibG9hZFdlYmFtcCIsIldlYmFtcENvbnN0cnVjdG9yIiwid2ViYW1wQ29uc3RydWN0b3IiLCJ3ZWJhbXBPcHRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImN1cnJlbnQiLCJjbG9zZUVxdWFsaXplciIsInJlbmRlcldoZW5SZWFkeSIsImFwcGVuZEVsZW1lbnQiLCJmb2N1cyIsImxvYWRUcmFja09yU2tpbiIsInVzZUVmZmVjdCIsInRyeURpc3Bvc2UiLCJkaXNwb3NlIiwiX2V4Y2VwdGlvbiIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJzdHlsZXMiLCJ3aW5hbXAiLCJ0b3VjaENvbnRyb2xzIiwib25Ub3VjaEV2ZW50c09ubHkiLCJmb2N1c09uRHJhZyIsInZpc2liaWxpdHkiLCJsb2FkZXJPcHRpb25zIiwid2luZG93ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRSxHQURnQjtBQUV4QkMsT0FBSyxFQUFFO0FBRmlCLENBQTFCOztBQUtBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUMsUUFB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TUFEcEI7QUFFRSxVQUFNLEVBQUVDLDJEQUZWO0FBR0UsdUJBQW1CLEVBQUMsV0FIdEI7QUFJRSxrQkFBYyxFQUFFLEtBSmxCO0FBS0Usd0JBQW9CLEVBQUUsS0FMeEI7QUFNRSxVQUFNLEVBQUV0QyxNQU5WO0FBT0UsVUFBTSxFQUFFdUMsK0RBUFY7QUFRRSxlQUFXLEVBQUVDLDJEQVJmO0FBU0UsY0FBVSxFQUFFcEMsY0FUZDtBQVVFLFdBQU8sRUFBRUQsT0FWWDtBQVdFLFNBQUssRUFBRTtBQUFFSSxZQUFNLEVBQU5BLE1BQUY7QUFBVWtDLGdCQUFVLEVBQUVqQyxTQUFTLEdBQUcsUUFBSCxHQUFjO0FBQTdDLEtBWFQ7QUFBQSwyQkFhRTtBQUFTLFNBQUcsRUFBRVM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBdEVEOztHQUFNbEIsTTs7S0FBQUEsTTtBQXdFU0EscUVBQWY7QUFFTyxJQUFNMkMsYUFBYTtBQUN4QkMsVUFBUSxFQUFFO0FBRGMsR0FFckJsRCxpQkFGcUIsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2dyYW1zL1dpbmFtcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1Byb2dyYW1zL1dpbmFtcC5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2dyYW1zJztcbmltcG9ydCB0eXBlIHsgV2ViYW1wU3RvcmUgfSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvUHJvZ3JhbXMvd2luYW1wJztcblxuaW1wb3J0IHsgYXBwZW5kRWxlbWVudCwgZm9jdXNPbkRyYWcgfSBmcm9tICdAL3V0aWxzL2VsZW1lbnRzJztcbmltcG9ydCB7XG4gIGNsb3NlRXF1YWxpemVyLFxuICBsb2FkVHJhY2tPclNraW4sXG4gIHRvdWNoQ29udHJvbHMsXG4gIHdlYmFtcE9wdGlvbnNcbn0gZnJvbSAnQC91dGlscy93aW5hbXAnO1xuaW1wb3J0IHsgb25Ub3VjaEV2ZW50c09ubHkgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0RGltZW5zaW9ucyA9IHtcbiAgaGVpZ2h0OiAyMzIsXG4gIHdpZHRoOiAyNzVcbn07XG5cbmNvbnN0IGdldFdlYmFtcCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29uc3QgV2luYW1wOiBSZWFjdC5GQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgb25CbHVyLFxuICBvbkNsb3NlLFxuICBvbk1pbmltaXplLFxuICBvbkZvY3VzLFxuICB1cGRhdGVQb3NpdGlvbixcbiAgeCxcbiAgeSxcbiAgekluZGV4LFxuICBtaW5pbWl6ZWQsXG4gIGZpbGU6IHsgdXJsID0gJycsIG5hbWUgPSAnJyB9ID0ge31cbn0pID0+IHtcbiAgY29uc29sZS5sb2coJ3dvb2YnLHgseSk7XG4gIGNvbnN0IFt3ZWJhbXAsIHNldFdlYmFtcF0gPSB1c2VTdGF0ZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4oKTtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxvYWRXZWJhbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wQ29uc3RydWN0b3IgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyk7XG4gICAgY29uc3Qgd2ViYW1wQ29uc3RydWN0b3IgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5jb25zb2xlLmxvZygnbWVvdycpO1xuICAgIGNsb3NlRXF1YWxpemVyKHdlYmFtcENvbnN0cnVjdG9yKTtcbiAgICBhd2FpdCB3ZWJhbXBDb25zdHJ1Y3Rvci5yZW5kZXJXaGVuUmVhZHkoY29udGFpbmVyRWxlbWVudCk7XG4gICAgYXBwZW5kRWxlbWVudChjb250YWluZXJFbGVtZW50LCBnZXRXZWJhbXAoKSkuZm9jdXMoKTtcbiAgICBvbkZvY3VzKCk7XG4gICAgbG9hZFRyYWNrT3JTa2luKHdlYmFtcENvbnN0cnVjdG9yLCB1cmwsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHdlYmFtcENvbnN0cnVjdG9yO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJ5RGlzcG9zZSA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlYmFtcD8uZGlzcG9zZSgpO1xuICAgICAgfSBjYXRjaCAoX2V4Y2VwdGlvbikge1xuICAgICAgICAvKiBlc2xpbnQgbm8tZW1wdHk6IG9mZiAqL1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkV2ViYW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICBzZXRXZWJhbXAobG9hZGVkV2ViYW1wKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnlEaXNwb3NlO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3ZWJhbXAseCx5KVxuICAgIHdlYmFtcD8ub25DbG9zZShvbkNsb3NlKTtcbiAgICB3ZWJhbXA/Lm9uTWluaW1pemUob25NaW5pbWl6ZSk7XG4gIH0sIFt4LCB5LCB3ZWJhbXBdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmFtcH1cbiAgICAgIGNhbmNlbD17dG91Y2hDb250cm9sc31cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgZW5hYmxlUmVzaXppbmc9e2ZhbHNlfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbkRyYWc9e29uVG91Y2hFdmVudHNPbmx5fVxuICAgICAgb25EcmFnU3RhcnQ9e2ZvY3VzT25EcmFnfVxuICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgc3R5bGU9e3sgekluZGV4LCB2aXNpYmlsaXR5OiBtaW5pbWl6ZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmFtcDtcblxuZXhwb3J0IGNvbnN0IGxvYWRlck9wdGlvbnMgPSB7XG4gIHdpbmRvd2VkOiBmYWxzZSxcbiAgLi4uZGVmYXVsdERpbWVuc2lvbnNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})