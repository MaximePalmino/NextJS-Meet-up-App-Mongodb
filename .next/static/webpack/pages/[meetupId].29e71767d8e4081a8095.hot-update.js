webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/maximepalmino/Documents/02 - Personal/Playground_Dev/NextCourse/NextJS-Meet-up-App-Mongodb/pages/[meetupId]/index.js\",\n    _this = undefined;\n\n\n\nvar MeetupDetails = function MeetupDetails(props) {\n  var deleteMeetupHandler = /*#__PURE__*/function () {\n    var _ref = Object(_Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var response, data;\n      return _Users_maximepalmino_Documents_02_Personal_Playground_Dev_NextCourse_NextJS_Meet_up_App_Mongodb_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('/api/delete-meetup', {\n                method: 'DELETE',\n                body: JSON.stringify(enteredMeetUpDatas),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 2:\n              response = _context.sent;\n              _context.next = 5;\n              return response.json();\n\n            case 5:\n              data = _context.sent;\n              console.log(data);\n              router.push('/');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function deleteMeetupHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      img: props.meetupData.image,\n      title: props.meetupData.title,\n      adress: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsImRlbGV0ZU1lZXR1cEhhbmRsZXIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW50ZXJlZE1lZXRVcERhdGFzIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicHVzaCIsIm1lZXR1cERhdGEiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFFL0IsTUFBTUMsbUJBQW1CO0FBQUEsd1pBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFS0MsS0FBSyxDQUFDLG9CQUFELEVBQXVCO0FBQy9DQyxzQkFBTSxFQUFFLFFBRHVDO0FBRS9DQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsa0JBQWYsQ0FGeUM7QUFHL0NDLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWDtBQUhzQyxlQUF2QixDQUZWOztBQUFBO0FBRVpDLHNCQUZZO0FBQUE7QUFBQSxxQkFTQ0EsUUFBUSxDQUFDQyxJQUFULEVBVEQ7O0FBQUE7QUFTWkMsa0JBVFk7QUFVbEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBRyxvQkFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjs7QUFYa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJkLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFlRSxzQkFDSTtBQUFBLDRCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVJLHFFQUFDLHdFQUFEO0FBQWMsU0FBRyxFQUFFRCxLQUFLLENBQUNnQixVQUFOLENBQWlCQyxLQUFwQztBQUEyQyxXQUFLLEVBQUVqQixLQUFLLENBQUNnQixVQUFOLENBQWlCRSxLQUFuRTtBQUEwRSxZQUFNLEVBQUVsQixLQUFLLENBQUNnQixVQUFOLENBQWlCRyxPQUFuRztBQUE0RyxpQkFBVyxFQUFFbkIsS0FBSyxDQUFDZ0IsVUFBTixDQUFpQkk7QUFBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFNSCxDQXZCRDs7S0FBTXJCLGE7O0FBbUVTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZH0gZnJvbSAnbW9uZ29kYidcblxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGRlbGV0ZU1lZXR1cEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZW50ZXJlZE1lZXRVcERhdGFzKVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kZWxldGUtbWVldHVwJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXRVcERhdGFzKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPE1lZXR1cERldGFpbCBpbWc9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9IHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfSBhZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc30gZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vTWF4aW1lOjZSTjFPR0ZGdzVtR1B1VHpAY2x1c3RlcjAud3hvcWkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMX0pLnRvQXJyYXkoKSBcbiAgY2xpZW50LmNsb3NlKClcblxuICAgIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgfSBcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vIEZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxuXG5jb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkXG5jb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL01heGltZTo2Uk4xT0dGRnc1bUdQdVR6QGNsdXN0ZXIwLnd4b3FpLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbmNvbnN0IGRiID0gY2xpZW50LmRiKClcbmNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXG5jb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pXG5jb25zb2xlLmxvZyhzZWxlY3RlZE1lZXR1cClcbmNsaWVudC5jbG9zZSgpXG5cbnJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXG4gICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICB9XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

})