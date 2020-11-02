webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor(-(width / 2) + window.innerWidth * 0.5),\n      y: Math.floor(-(height / 2) + window.innerHeight * 0.45)\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      console.log('onClose', {\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  console.log({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 145,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"7/dVr8p6VaMad/a1eqBeHszT6Xo=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsInVzZU1lbW8iLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZWZhdWx0WCIsImRlZmF1bHRZIiwid2luZG93T3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJvbkZvY3VzIiwib25CbHVyIiwiZXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzbGljZSIsInJldmVyc2UiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJmaWx0ZXIiLCJzdGFja0lkIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsInN0eWxlcyIsImFuaW1hdGVkV2luZG93cyIsImZvcmVncm91bmRaaW5kZXgiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTztBQUFBLFNBQUMsNktBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4RkFBUjtBQUFBO0FBQUEsY0FBUSwwQ0FBUjtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUVOLElBQU1FLFlBQVksR0FBR0MsMkRBQVUsR0FBR0MsbUVBQWtCLEdBQUdDLGdFQUF2RDs7QUFFQSxJQUFNQyxhQUFnQyxHQUFHLFNBQW5DQSxhQUFtQyxPQW9CbkM7QUFBQTs7QUFBQSx5QkFuQkpDLE1BbUJJO0FBQUEsTUFsQk1DLEdBa0JOLGVBbEJGRCxNQWtCRTtBQUFBLE1BakJGRSxnQkFpQkUsZUFqQkZBLGdCQWlCRTtBQUFBLDBDQWhCRkMsYUFnQkU7QUFBQSxNQWhCc0JDLFlBZ0J0Qix5QkFoQmVDLEtBZ0JmO0FBQUEsTUFoQjRDQyxhQWdCNUMseUJBaEJvQ0MsTUFnQnBDO0FBQUEsTUFkSkMsT0FjSSxRQWRKQSxPQWNJO0FBQUEsTUFiSUMsYUFhSixRQWJKRixNQWFJO0FBQUEsTUFaSkcsSUFZSSxRQVpKQSxJQVlJO0FB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R0xGLFdBQUssRUFBTEE7QUFISztBQUhULEtBUU0yRSw0RUFBb0IsQ0FBQztBQUN2QkwsWUFBUSxFQUFFbEMsU0FBUyxJQUFJUyxRQURBO0FBRXZCMEIsWUFBUSxFQUFFbEMsU0FBUyxJQUFJUyxRQUZBO0FBR3ZCOEIsYUFBUyxFQUNObkUsU0FBUyxJQUFJQyxTQUFiLElBQTBCLFFBQTNCLElBQ0NELFNBQVMsSUFBSSxXQURkLElBRUNDLFNBQVMsSUFBSSxXQUZkLElBR0EsT0FQcUI7QUFRdkJSLFVBQU0sRUFBTkEsTUFSdUI7QUFTdkJGLFNBQUssRUFBTEEsS0FUdUI7QUFVdkJlLEtBQUMsRUFBREEsQ0FWdUI7QUFXdkJDLEtBQUMsRUFBREEsQ0FYdUI7QUFZdkJKLGtCQUFjLEVBQWRBLGNBWnVCO0FBYXZCTCxpQkFBYSxFQUFiQTtBQWJ1QixHQUFELENBUjFCO0FBQUEsY0F3QkdPLFFBQVEsZ0JBQ1AscUVBQUMsTUFBRDtBQUNFLFVBQUksRUFBRVQsSUFEUjtBQUVFLFVBQUksRUFBRU0sSUFGUjtBQUdFLGFBQU8sRUFBRVIsT0FIWDtBQUlFLHFCQUFlLEVBQUVLLGVBSm5CO0FBS0UsZ0JBQVUsRUFBRXdCLElBQUksQ0FBQzFCLEVBQUQ7QUFMbEIsT0FNTXlDLGFBTk47QUFBQSw2QkFRRSxxRUFBQyxHQUFELGtDQUFTbEQsZ0JBQVQsR0FBK0JrRCxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVlQLHFFQUFDLEdBQUQsa0NBQVNsRCxnQkFBVCxHQUErQmtELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQ0osTUFDT3pDLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBaEtEOztHQUFNWixhOztNQUFBQSxhO0FBa0tTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlV2luZG93LCBnZXRNYXhEaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3V0aWxzL21vdGlvbnMnO1xuXG5jb25zdCBXaW5kb3cgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdycpKTtcblxuY29uc3Qgd2luZG93WmluZGV4ID0gYmFzZVppbmRleCArIHdpbmRvd3NaaW5kZXhMZXZlbCAqIHppbmRleExldmVsU2l6ZTtcblxuY29uc3QgUHJvY2Vzc1dpbmRvdzogUmVhY3QuRkM8UHJvY2Vzcz4gPSAoe1xuICBsb2FkZXI6IHtcbiAgICBsb2FkZXI6IEFwcCxcbiAgICBsb2FkZWRBcHBPcHRpb25zLFxuICAgIGxvYWRlck9wdGlvbnM6IHsgd2lkdGg6IGRlZmF1bHRXaWR0aCwgaGVpZ2h0OiBkZWZhdWx0SGVpZ2h0IH1cbiAgfSxcbiAgYmdDb2xvcixcbiAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICBpY29uLFxuICBpZCxcbiAgbGF1bmNoRWxlbWVudCxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBtYXhpbWl6ZWQsXG4gIG1pbmltaXplZCxcbiAgbmFtZSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gIHdpbmRvd2VkLFxuICB4LFxuICB5XG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbbWF4aW1pemVXaW5kb3csIHNldE1heGltaXplV2luZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1gsIHk6IHByZXZpb3VzWSB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgZGVmYXVsdFdpZHRoLFxuICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgbG9ja0FzcGVjdFJhdGlvXG4gICk7XG4gIGNvbnN0IHsgeDogZGVmYXVsdFgsIHk6IGRlZmF1bHRZIH0gPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB4OiBNYXRoLmZsb29yKC0od2lkdGggLyAyKSArIHdpbmRvdy5pbm5lcldpZHRoICogMC41KSxcbiAgICAgIHk6IE1hdGguZmxvb3IoLShoZWlnaHQgLyAyKSArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNDUpXG4gICAgfSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZShpZCksXG4gICAgb25NYXhpbWl6ZTogKCkgPT4gKG1heGltaXplZCA/IHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKSA6IG1heGltaXplKGlkKSksXG4gICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdvbkNsb3NlJyxcbiAgICAgICAge1xuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB4OiAhcHJldmlvdXNYID8gZGVmYXVsdFggKyB4IDogeCxcbiAgICAgICAgICB5OiAhcHJldmlvdXNZID8gZGVmYXVsdFkgKyB5IDogeVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeDogIXByZXZpb3VzWCA/IGRlZmF1bHRYICsgeCA6IHgsXG4gICAgICAgIHk6ICFwcmV2aW91c1kgPyBkZWZhdWx0WSArIHkgOiB5XG4gICAgICB9KTtcbiAgICAgIGNsb3NlKGlkKTtcbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IGZvcmVncm91bmQoaWQpLFxuICAgIG9uQmx1cjogKGV2ZW50OiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVQb3NpdGlvbjogcG9zaXRpb24oaWQpLFxuICAgIHpJbmRleDogd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKSxcbiAgICBtYXhpbWl6ZWQ6IG1heGltaXplV2luZG93LFxuICAgIG1pbmltaXplZCxcbiAgICBpZCxcbiAgICBoZWlnaHQsXG4gICAgd2lkdGhcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb3JlZ3JvdW5kSWQgPT09IGlkICYmIG1pbmltaXplZCkge1xuICAgICAgZm9yZWdyb3VuZChcbiAgICAgICAgZ2V0TmV4dFZpc2libGVXaW5kb3coXG4gICAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICAgIHN0YWNrT3JkZXIuZmlsdGVyKChzdGFja0lkKSA9PiBzdGFja0lkICE9PSBpZClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFzdGFja09yZGVyLmluY2x1ZGVzKGlkKSkge1xuICAgICAgZm9yZWdyb3VuZChnZXROZXh0VmlzaWJsZVdpbmRvdyhwcm9jZXNzZXMsIHN0YWNrT3JkZXIpKTtcbiAgICB9XG4gIH0sIFtmb3JlZ3JvdW5kSWQsIGlkLCBtaW5pbWl6ZWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1heGltaXplZCkge1xuICAgICAgc2V0TWF4aW1pemVXaW5kb3codHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtYXhpbWl6ZVdpbmRvdykge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gc2V0TWF4aW1pemVXaW5kb3coZmFsc2UpLFxuICAgICAgICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyAqIE1JTExJU0VDT05EU19JTl9TRUNPTkRcbiAgICAgICk7XG4gICAgfVxuICB9LCBbbWF4aW1pemVkXSk7XG5jb25zb2xlLmxvZyh7XG4gIGluaXRpYWxYOiBwcmV2aW91c1ggfHwgZGVmYXVsdFgsXG4gIGluaXRpYWxZOiBwcmV2aW91c1kgfHwgZGVmYXVsdFlcbn0pO1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogZm9yZWdyb3VuZElkID09PSBpZCA/IGZvcmVncm91bmRaaW5kZXggOiB3aW5kb3dPcHRpb25zLnpJbmRleCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfX1cbiAgICAgIHsuLi53aW5kb3dNb3Rpb25TZXR0aW5ncyh7XG4gICAgICAgIGluaXRpYWxYOiBwcmV2aW91c1ggfHwgZGVmYXVsdFgsXG4gICAgICAgIGluaXRpYWxZOiBwcmV2aW91c1kgfHwgZGVmYXVsdFksXG4gICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAobWF4aW1pemVkICYmIG1pbmltaXplZCAmJiAnbWF4bWluJykgfHxcbiAgICAgICAgICAobWF4aW1pemVkICYmICdtYXhpbWl6ZWQnKSB8fFxuICAgICAgICAgIChtaW5pbWl6ZWQgJiYgJ21pbmltaXplZCcpIHx8XG4gICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgdGFza2JhckVsZW1lbnQsXG4gICAgICAgIGxhdW5jaEVsZW1lbnRcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHt3aW5kb3dlZCA/IChcbiAgICAgICAgPFdpbmRvd1xuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemUoaWQpfVxuICAgICAgICAgIHsuLi53aW5kb3dPcHRpb25zfVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICAgIDwvV2luZG93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gey4uLndpbmRvd09wdGlvbnN9IC8+XG4gICAgICApfVxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})