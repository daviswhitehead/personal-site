"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/subscribe/SubscriptionRequestFail.tsx":
/*!**********************************************************!*\
  !*** ./components/subscribe/SubscriptionRequestFail.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var styling_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styling/spacing */ \"./styling/spacing.ts\");\n/* harmony import */ var lib_socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/socials */ \"./lib/socials.tsx\");\n/* harmony import */ var components_LinkWithIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/LinkWithIcon */ \"./components/LinkWithIcon.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscriptionRequestFail.tsx\",_this=undefined;var SubscriptionRequestFail=function SubscriptionRequestFail(_ref){var onTryAgain=_ref.onTryAgain,error=_ref.error;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.Stack,{direction:\"column\",alignItems:\"center\",space:styling_spacing__WEBPACK_IMPORTED_MODULE_1__.space.lg,py:styling_spacing__WEBPACK_IMPORTED_MODULE_1__.space.xl,px:styling_spacing__WEBPACK_IMPORTED_MODULE_1__.space.xl,__self:_this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.VStack,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.Text,{fontFamily:\"heading\",fontWeight:\"500\",fontSize:\"md\",textAlign:\"center\",__self:_this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:9}},\"Oops, something went wrong\"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.Text,{fontFamily:\"body\",fontWeight:\"200\",fontSize:\"sm\",textAlign:\"center\",__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:9}},\"We were unable to successfully subscribe you. Building a great product is hard and sometimes we make mistakes!\")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.VStack,{space:styling_spacing__WEBPACK_IMPORTED_MODULE_1__.space.md,__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.Button,{py:1,px:styling_spacing__WEBPACK_IMPORTED_MODULE_1__.space.lg,bg:\"orange.300\",_hover:{bg:\"orange.300\"},_pressed:{bg:\"orange.400\"},onPress:onTryAgain,__self:_this,__source:{fileName:_jsxFileName,lineNumber:44,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_4__.Text,{color:\"black\",__self:_this,__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:11}},\"Retry\")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_LinkWithIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{url:lib_socials__WEBPACK_IMPORTED_MODULE_2__[\"default\"].email.link+\"?subject=I need help with my subscription to daviswhitehead.com\",copy:\"Get help from Davis\",target:\"_blank\",fontSize:\"sm\",__self:_this,__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:9}})));};_c=SubscriptionRequestFail;/* harmony default export */ __webpack_exports__[\"default\"] = (SubscriptionRequestFail);var _c;$RefreshReg$(_c,\"SubscriptionRequestFail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpcHRpb25SZXF1ZXN0RmFpbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OElBV0EsR0FBTVEsQ0FBQUEsdUJBQXVCLENBQUcsUUFBMUJBLENBQUFBLHVCQUEwQixNQUdJLElBRmxDQyxDQUFBQSxVQUVrQyxNQUZsQ0EsVUFFa0MsQ0FEbENDLEtBQ2tDLE1BRGxDQSxLQUNrQyxDQUNsQyxNQUNFLDREQUFDLDhDQUFELEVBQ0UsU0FBUyxDQUFDLFFBRFosQ0FFRSxVQUFVLENBQUMsUUFGYixDQUdFLEtBQUssQ0FBRUwscURBSFQsQ0FJRSxFQUFFLENBQUVBLHFEQUpOLENBS0UsRUFBRSxDQUFFQSxxREFMTiw2RUFPRSwyREFBQywrQ0FBRCw4RUFDRSwyREFBQyw2Q0FBRCxFQUNFLFVBQVUsQ0FBQyxTQURiLENBRUUsVUFBVSxDQUFDLEtBRmIsQ0FHRSxRQUFRLENBQUMsSUFIWCxDQUlFLFNBQVMsQ0FBQyxRQUpaLDZFQUtDLDRCQUxELENBREYsQ0FTRSwyREFBQyw2Q0FBRCxFQUNFLFVBQVUsQ0FBQyxNQURiLENBRUUsVUFBVSxDQUFDLEtBRmIsQ0FHRSxRQUFRLENBQUMsSUFIWCxDQUlFLFNBQVMsQ0FBQyxRQUpaLDZFQUtDLGdIQUxELENBVEYsQ0FQRixDQTBCRSwyREFBQywrQ0FBRCxFQUFRLEtBQUssQ0FBRUEscURBQWYsNkVBQ0UsMkRBQUMsK0NBQUQsRUFDRSxFQUFFLENBQUUsQ0FETixDQUVFLEVBQUUsQ0FBRUEscURBRk4sQ0FHRSxFQUFFLENBQUMsWUFITCxDQUlFLE1BQU0sQ0FBRSxDQUNOUyxFQUFFLENBQUUsWUFERSxDQUpWLENBT0UsUUFBUSxDQUFFLENBQ1JBLEVBQUUsQ0FBRSxZQURJLENBUFosQ0FVRSxPQUFPLENBQUVMLFVBVlgsNkVBWUUsMkRBQUMsNkNBQUQsRUFBTSxLQUFLLENBQUUsT0FBYiw4RUFBc0IsT0FBdEIsQ0FaRixDQURGLENBZUUsMkRBQUMsK0RBQUQsRUFDRSxHQUFHLENBQ0RILDhEQUFBLENBQ0EsaUVBSEosQ0FLRSxJQUFJLENBQUMscUJBTFAsQ0FNRSxNQUFNLENBQUMsUUFOVCxDQU9FLFFBQVEsQ0FBQyxJQVBYLDZFQWZGLENBMUJGLENBREYsQ0FzREQsQ0ExREQsSUFBTUUsd0JBNEROLCtEQUFlQSx1QkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpcHRpb25SZXF1ZXN0RmFpbC50c3g/NTI2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFRleHQsIFN0YWNrLCBWU3RhY2sgfSBmcm9tIFwibmF0aXZlLWJhc2VcIjtcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSBcInN0eWxpbmcvc3BhY2luZ1wiO1xuaW1wb3J0IHNvY2lhbHMgZnJvbSBcImxpYi9zb2NpYWxzXCI7XG5pbXBvcnQgTGlua1dpdGhJY29uIGZyb20gXCJjb21wb25lbnRzL0xpbmtXaXRoSWNvblwiO1xuXG50eXBlIFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsUHJvcHMgPSB7XG4gIG9uVHJ5QWdhaW46ICgpID0+IHZvaWQ7XG4gIGVycm9yOiBzdHJpbmc7XG59O1xuXG5jb25zdCBTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCA9ICh7XG4gIG9uVHJ5QWdhaW4sXG4gIGVycm9yLFxufTogU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgc3BhY2U9e3NwYWNlLmxnfVxuICAgICAgcHk9e3NwYWNlLnhsfVxuICAgICAgcHg9e3NwYWNlLnhsfVxuICAgID5cbiAgICAgIDxWU3RhY2s+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgZm9udEZhbWlseT1cImhlYWRpbmdcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgZm9udEZhbWlseT1cImJvZHlcIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgIGZvbnRTaXplPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBXZSB3ZXJlIHVuYWJsZSB0byBzdWNjZXNzZnVsbHkgc3Vic2NyaWJlIHlvdS4gQnVpbGRpbmcgYSBncmVhdCBwcm9kdWN0XG4gICAgICAgICAgaXMgaGFyZCBhbmQgc29tZXRpbWVzIHdlIG1ha2UgbWlzdGFrZXMhXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvVlN0YWNrPlxuICAgICAgPFZTdGFjayBzcGFjZT17c3BhY2UubWR9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcHk9ezF9XG4gICAgICAgICAgcHg9e3NwYWNlLmxnfVxuICAgICAgICAgIGJnPVwib3JhbmdlLjMwMFwiXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJvcmFuZ2UuMzAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25QcmVzcz17b25UcnlBZ2Fpbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPXtcImJsYWNrXCJ9PlJldHJ5PC9UZXh0PlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmtXaXRoSWNvblxuICAgICAgICAgIHVybD17XG4gICAgICAgICAgICBzb2NpYWxzLmVtYWlsLmxpbmsgK1xuICAgICAgICAgICAgXCI/c3ViamVjdD1JIG5lZWQgaGVscCB3aXRoIG15IHN1YnNjcmlwdGlvbiB0byBkYXZpc3doaXRlaGVhZC5jb21cIlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb3B5PVwiR2V0IGhlbHAgZnJvbSBEYXZpc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBmb250U2l6ZT1cInNtXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlRleHQiLCJTdGFjayIsIlZTdGFjayIsInNwYWNlIiwic29jaWFscyIsIkxpbmtXaXRoSWNvbiIsIlN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIiwib25UcnlBZ2FpbiIsImVycm9yIiwibGciLCJ4bCIsIm1kIiwiYmciLCJlbWFpbCIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe/SubscriptionRequestFail.tsx\n");

/***/ })

});