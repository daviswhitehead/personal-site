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

/***/ "./components/subscribe/SubscribeModal.tsx":
/*!*************************************************!*\
  !*** ./components/subscribe/SubscribeModal.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"AWAITING_SUBCRIPTION\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];console.log(\"subscriptionState\",subscriptionState);var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),email=_useState2[0],setEmail=_useState2[1];console.log(\"setEmail\",setEmail);var handleSubmit=function handleSubmit(){console.log(\"handleSubmit\");console.log(\"email\",email);var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"lg\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.Content,{position:\"sticky\",marginTop:0,top:\"235\",bottom:\"235\",__self:this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:9}},function(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:24}});}})));}_s(SubscribeModal,\"rF8kgaxEGyjjoNZ8YJWYR2gXKqc=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt1SUErQmUsUUFBU2EsQ0FBQUEsY0FBVCxDQUF3QkMsS0FBeEIsQ0FBc0MscUJBQ25EYixnREFBUyxDQUFDLFVBQU0sQ0FDZCxHQUFJYSxLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJYLHFEQUFVLENBQUMsQ0FDVFksTUFBTSxDQUFFWCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRXLFFBQVEsQ0FBRWIsMkVBRkQsQ0FBRCxDQUFWLENBSUQsQ0FDRixDQVBRLENBT04sQ0FBQ1EsS0FBSyxDQUFDQyxZQUFQLENBUE0sQ0FBVCxDQVNBLGNBQWtEYiwrQ0FBUSxDQUN4RCxzQkFEd0QsQ0FBMUQsQ0FBT21CLGlCQUFQLGNBQTBCQyxvQkFBMUIsY0FHQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosQ0FBaUNILGlCQUFqQyxFQUVBLGVBQTBCbkIsK0NBQVEsQ0FBQyxFQUFELENBQWxDLENBQU91QixLQUFQLGVBQWNDLFFBQWQsZUFDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixDQUF3QkUsUUFBeEIsRUFNQSxHQUFNQyxDQUFBQSxZQUFZLENBQUcsUUFBZkEsQ0FBQUEsWUFBZSxFQUFNLENBQ3pCSixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBcUJDLEtBQXJCLEVBRUEsR0FBTUcsQ0FBQUEsSUFBSSxDQUFHbkIsc0RBQU8sRUFBcEIsQ0FDQUMsb0VBQXFCLENBQUNrQixJQUFELENBQU9ILEtBQVAsQ0FBY2QsbUVBQWQsQ0FBckIsQ0FDR2tCLElBREgsQ0FDUSxVQUFNLENBSVZDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDUCxLQUE5QyxFQUVELENBUEgsV0FRUyxTQUFDUSxLQUFELENBQVcsQ0FDaEIsR0FBTUMsQ0FBQUEsU0FBUyxDQUFHRCxLQUFLLENBQUNFLElBQXhCLENBQ0EsR0FBTUMsQ0FBQUEsWUFBWSxDQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBRUFkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBeUJVLFNBQXpCLEVBQ0FYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBNEJZLFlBQTVCLEVBRUQsQ0FmSCxFQXdDRCxDQTdDRCxDQWlEQSxNQUNFLDREQUFDLDhDQUFELEVBQ0UsTUFBTSxDQUFFdEIsS0FBSyxDQUFDQyxZQURoQixDQUVFLE9BQU8sQ0FBRSx5QkFBTUQsQ0FBQUEsS0FBSyxDQUFDd0IsZUFBTixDQUFzQixLQUF0QixDQUFOLEVBRlgsQ0FHRSxhQUFhLEtBSGYsQ0FLRSxJQUFJLENBQUMsSUFMUCxDQU1FLFNBQVMsQ0FBRSxDQUNUQyxLQUFLLENBQUUsQ0FDTEMsRUFBRSxDQUFFLE9BREMsQ0FFTEMsT0FBTyxDQUFFLEdBRkosQ0FERSxDQU5iLDZFQWNFLDJEQUFDLHNEQUFELEVBQWUsUUFBUSxDQUFDLFFBQXhCLENBQWlDLFNBQVMsQ0FBRSxDQUE1QyxDQUErQyxHQUFHLENBQUMsS0FBbkQsQ0FBeUQsTUFBTSxDQUFDLEtBQWhFLDZFQUNFLDJEQUFDLDBEQUFELEVBQ0UsTUFBTSxDQUFFLENBQ05ELEVBQUUsQ0FBRSxVQURFLENBRU5FLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZELENBRFYsQ0FPRSxRQUFRLENBQUUsQ0FDUkgsRUFBRSxDQUFFLFVBREksQ0FFUkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkMsQ0FQWiw2RUFERixDQWVFLDJEQUFDLG1EQUFELDhFQUVHLFNBQUN0QixpQkFBRCxDQUEwQyxDQUN6QyxPQUFRQSxpQkFBUixFQUNFLElBQUssc0JBQUwsQ0FDRSxNQUFPLDREQUFDLDZEQUFELGdGQUFQLENBRkosQ0FJRCxDQVBILENBZkYsQ0FkRixDQURGLENBMENELElBakh1QlIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgSW5wdXQsXG4gIE1vZGFsLFxuICBTdGFjayxcbiAgVGV4dCxcbiAgQnV0dG9uLFxuICBWU3RhY2ssXG59IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbi8vIGltcG9ydCBIMyBmcm9tIFwiLi90eXBlb2dyYXBoeS9IM1wiO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tIFwiLi4vLi4vc3R5bGluZy9zcGFjaW5nXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBzZW5kU2lnbkluTGlua1RvRW1haWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWN0aW9uQ29kZVNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IEF3YWl0aW5nU3Vic2NyaXB0aW9uIGZyb20gXCIuL0F3YWl0aW5nU3Vic2NyaXB0aW9uXCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmlydWRodnNwL2hhY2std2l0aC1uYXRpdmViYXNlLXRyYWRlYm9vay9ibG9iL2YzZWI4ZWQ2OWYwZjNjMGE0NTBiZmQ0OTI1Nzc0MmYxZjAxMzk1ZGQvcGFnZS9Mb2dpbi5qc3hcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbW9kYWxWaXNpYmxlOiBib29sZWFuO1xuICBzZXRNb2RhbFZpc2libGU6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxudHlwZSBTdWJzY3JpcHRpb25TdGF0ZSA9XG4gIHwgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIHwgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpYmVNb2RhbChwcm9wczogUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMubW9kYWxWaXNpYmxlKSB7XG4gICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgYWN0aW9uOiBjb21wb3NlQWN0aW9uKGFjdGlvbnMuVklFVywgb2JqZWN0cy5TVUJTQ1JJQkVfTU9EQUwpLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TVUJTQ1JJQkUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5tb2RhbFZpc2libGVdKTtcblxuICBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlKFxuICAgIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICApO1xuICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zb2xlLmxvZyhcInNldEVtYWlsXCIsIHNldEVtYWlsKTtcblxuICAvLyBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZVN1Ym1pdFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIGVtYWlsKTtcblxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgc2VuZFNpZ25JbkxpbmtUb0VtYWlsKGF1dGgsIGVtYWlsLCBhY3Rpb25Db2RlU2V0dGluZ3MpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBsaW5rIHdhcyBzdWNjZXNzZnVsbHkgc2VudC4gSW5mb3JtIHRoZSB1c2VyLlxuICAgICAgICAvLyBTYXZlIHRoZSBlbWFpbCBsb2NhbGx5IHNvIHlvdSBkb24ndCBuZWVkIHRvIGFzayB0aGUgdXNlciBmb3IgaXQgYWdhaW5cbiAgICAgICAgLy8gaWYgdGhleSBvcGVuIHRoZSBsaW5rIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxGb3JTaWduSW5cIiwgZW1haWwpO1xuICAgICAgICAvLyAuLi5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvckNvZGVcIiwgZXJyb3JDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvck1lc3NhZ2VcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgLy8gLi4uXG4gICAgICB9KTtcblxuICAgIC8vIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgLy8gY29uc3QgeyBzZXNzaW9uLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduVXAoe1xuICAgIC8vICAgZW1haWw6IGVtYWlsLFxuICAgIC8vICAgcGFzc3dvcmQ6IGVtYWlsLnNwbGl0KFwiQFwiKVswXSxcbiAgICAvLyB9KTtcbiAgICAvLyBpZiAoIWVycm9yIHx8IGVycm9yLm1lc3NhZ2UgPT09IFwiVXNlciBhbHJlYWR5IHJlZ2lzdGVyZWRcIikge1xuICAgIC8vICAgY29uc29sZS5sb2codXNlciwgc2Vzc2lvbiwgZXJyb3IpO1xuICAgIC8vICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW4oe1xuICAgIC8vICAgICBlbWFpbCxcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgdG9hc3Quc2hvdyh7XG4gICAgLy8gICAgIHRpdGxlOiBcIkxvZ2luIExpbmsgc2VudCB0byBlbWFpbFwiLFxuICAgIC8vICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0b2FzdC5zaG93KHtcbiAgICAvLyAgICAgdGl0bGU6IGVycm9yLm1lc3NhZ2UsXG4gICAgLy8gICAgIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKHN1cGFiYXNlLmF1dGguY3VycmVudFVzZXIpO1xuICB9O1xuXG4gIC8vIFNlZSBpZiB5b3UgY2FuIGdldCB0aGUgd2luZG93IHdpZHRoIGFuZCBoZWlnaHQgYW5kIHVzZSB0aGF0IHRvIHNldCB0aGUgY29udGVudCBoZWlnaHQgYW5kIHdpZHRoXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17cHJvcHMubW9kYWxWaXNpYmxlfVxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIGF2b2lkS2V5Ym9hcmRcbiAgICAgIC8vIHNpemU9XCJmdWxsXCJcbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICBfYmFja2Ryb3A9e3tcbiAgICAgICAgX2Rhcms6IHtcbiAgICAgICAgICBiZzogXCJibGFja1wiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIHRoZSBsaW5lIGJlbG93IG5lZWRzIHRvIGJlIGR5bmFtaWMgc29tZWhvdyAqL31cbiAgICAgIDxNb2RhbC5Db250ZW50IHBvc2l0aW9uPVwic3RpY2t5XCIgbWFyZ2luVG9wPXswfSB0b3A9XCIyMzVcIiBib3R0b209XCIyMzVcIj5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgIHsoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHN1YnNjcmlwdGlvblN0YXRlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJBV0FJVElOR19TVUJDUklQVElPTlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8QXdhaXRpbmdTdWJzY3JpcHRpb24gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidHJhY2tFdmVudCIsImNvbXBvc2VBY3Rpb24iLCJjYXRlZ29yaWVzIiwiYWN0aW9ucyIsIm9iamVjdHMiLCJnZXRBdXRoIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiQXdhaXRpbmdTdWJzY3JpcHRpb24iLCJTdWJzY3JpYmVNb2RhbCIsInByb3BzIiwibW9kYWxWaXNpYmxlIiwiYWN0aW9uIiwiVklFVyIsIlNVQlNDUklCRV9NT0RBTCIsImNhdGVnb3J5IiwiU1VCU0NSSUJFIiwic3Vic2NyaXB0aW9uU3RhdGUiLCJzZXRzdWJzY3JpcHRpb25TdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiYXV0aCIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});