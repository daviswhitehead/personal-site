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

/***/ "./lib/firebaseConfig.ts":
/*!*******************************!*\
  !*** ./lib/firebaseConfig.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": function() { return /* binding */ app; },\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"analytics\": function() { return /* binding */ analytics; },\n/* harmony export */   \"actionCodeSettings\": function() { return /* binding */ actionCodeSettings; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar firebaseConfig={apiKey:\"AIzaSyDjFrHa1mUNe--gsBntGv7mSM4qJ1IBtrs\",authDomain:\"daviswhitehead-d876f.firebaseapp.com\",projectId:\"daviswhitehead-d876f\",storageBucket:\"daviswhitehead-d876f.appspot.com\",messagingSenderId:\"188268351581\",appId:\"1:188268351581:web:6a4aaa4b1e091cce46bdb4\",measurementId:\"G-4GTZVBD2XF\"};var app=(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);var analytics=(0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);var actionCodeSettings={url:\"http://localhost:3000/auth/confirmsubscription\",handleCodeInApp:true};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2VDb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVQSxHQUFNRyxDQUFBQSxjQUFjLENBQUcsQ0FDckJDLE1BQU0sQ0FBRUMseUNBRGEsQ0FFckJHLFVBQVUsQ0FBRUgsc0NBRlMsQ0FHckJLLFNBQVMsQ0FBRUwsc0JBSFUsQ0FJckJPLGFBQWEsQ0FBRVAsa0NBSk0sQ0FLckJTLGlCQUFpQixDQUFFVCxjQUxFLENBTXJCVyxLQUFLLENBQUVYLDJDQU5jLENBT3JCYSxhQUFhLENBQUViLGNBUE0sQ0FBdkIsQ0FXTyxHQUFNZSxDQUFBQSxHQUFHLENBQUdwQiwyREFBYSxDQUFDRyxjQUFELENBQXpCLENBQ0EsR0FBTWtCLENBQUFBLElBQUksQ0FBR25CLHNEQUFPLENBQUNrQixHQUFELENBQXBCLENBQ0EsR0FBTUUsQ0FBQUEsU0FBUyxDQUFHckIsZ0VBQVksQ0FBQ21CLEdBQUQsQ0FBOUIsQ0FFQSxHQUFNRyxDQUFBQSxrQkFBa0IsQ0FBRyxDQUdoQ0MsR0FBRyxDQUFFLGdEQUgyQixDQUtoQ0MsZUFBZSxDQUFFLElBTGUsQ0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpcmViYXNlQ29uZmlnLnRzP2I3YzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0NPTkZJR19BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQ09ORklHX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0NPTkZJR19TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0NPTkZJR19NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQ09ORklHX0FQUF9JRCxcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQ09ORklHX01FQVNVUkVNRU5UX0lELFxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25Db2RlU2V0dGluZ3MgPSB7XG4gIC8vIFVSTCB5b3Ugd2FudCB0byByZWRpcmVjdCBiYWNrIHRvLiBUaGUgZG9tYWluICh3d3cuZXhhbXBsZS5jb20pIGZvciB0aGlzXG4gIC8vIFVSTCBtdXN0IGJlIGluIHRoZSBhdXRob3JpemVkIGRvbWFpbnMgbGlzdCBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZS5cbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL2NvbmZpcm1zdWJzY3JpcHRpb25cIixcbiAgLy8gVGhpcyBtdXN0IGJlIHRydWUuXG4gIGhhbmRsZUNvZGVJbkFwcDogdHJ1ZSxcbn07XG4vLyBleHBvcnQgY29uc3QgYWN0aW9uQ29kZVNldHRpbmdzID0ge1xuLy8gICAvLyBVUkwgeW91IHdhbnQgdG8gcmVkaXJlY3QgYmFjayB0by4gVGhlIGRvbWFpbiAod3d3LmV4YW1wbGUuY29tKSBmb3IgdGhpc1xuLy8gICAvLyBVUkwgbXVzdCBiZSBpbiB0aGUgYXV0aG9yaXplZCBkb21haW5zIGxpc3QgaW4gdGhlIEZpcmViYXNlIENvbnNvbGUuXG4vLyAgIHVybDogJ2h0dHBzOi8vd3d3LmRhdmlzd2hpdGVoZWFkLmNvbS9zY3JhdGNoJyxcbi8vICAgLy8gVGhpcyBtdXN0IGJlIHRydWUuXG4vLyAgIGhhbmRsZUNvZGVJbkFwcDogdHJ1ZSxcbi8vIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0NPTkZJR19NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9DT05GSUdfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0NPTkZJR19NRUFTVVJFTUVOVF9JRCIsImFwcCIsImF1dGgiLCJhbmFseXRpY3MiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJ1cmwiLCJoYW5kbGVDb2RlSW5BcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebaseConfig.ts\n");

/***/ })

});