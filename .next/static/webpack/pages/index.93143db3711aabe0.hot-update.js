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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"AWAITING_SUBCRIPTION\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQSUBSCRIPTION_REQUEST_FAILUEST_SUCCESS\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SendingSubscriptionRequest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"lg\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.Content,{position:\"sticky\",marginTop:0,top:\"235\",bottom:\"235\",__self:this,__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_6__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"Yg3pF49nef+tMSJrG93yFGd0c6I=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt1SUFxQmUsUUFBU2EsQ0FBQUEsY0FBVCxDQUF3QkMsS0FBeEIsQ0FBc0MscUJBQ25EYixnREFBUyxDQUFDLFVBQU0sQ0FDZCxHQUFJYSxLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJYLHFEQUFVLENBQUMsQ0FDVFksTUFBTSxDQUFFWCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRXLFFBQVEsQ0FBRWIsMkVBRkQsQ0FBRCxDQUFWLENBSUQsQ0FDRixDQVBRLENBT04sQ0FBQ1EsS0FBSyxDQUFDQyxZQUFQLENBUE0sQ0FBVCxDQVNBLGNBQWtEYiwrQ0FBUSxDQUN4RCxzQkFEd0QsQ0FBMUQsQ0FBT21CLGlCQUFQLGNBQTBCQyxvQkFBMUIsY0FHQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosQ0FBaUNILGlCQUFqQyxFQUVBLEdBQU1JLENBQUFBLFFBQVEsQ0FBRyxRQUFYQSxDQUFBQSxRQUFXLENBQUNDLEtBQUQsQ0FBbUIsQ0FDbENKLG9CQUFvQixDQUFDLDhCQUFELENBQXBCLENBQ0EsR0FBTUssQ0FBQUEsSUFBSSxDQUFHbEIsc0RBQU8sRUFBcEIsQ0FDQUMsb0VBQXFCLENBQUNpQixJQUFELENBQU9ELEtBQVAsQ0FBY2YsbUVBQWQsQ0FBckIsQ0FDR2lCLElBREgsQ0FDUSxVQUFNLENBRVZOLG9CQUFvQixDQUFDLDhCQUFELENBQXBCLENBSUFPLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDTCxLQUE5QyxFQUNELENBUkgsV0FTUyxTQUFDTSxLQUFELENBQVcsQ0FDaEJWLG9CQUFvQixDQUNsQix1REFEa0IsQ0FBcEIsQ0FJQSxHQUFNVyxDQUFBQSxTQUFTLENBQUdELEtBQUssQ0FBQ0UsSUFBeEIsQ0FDQSxHQUFNQyxDQUFBQSxZQUFZLENBQUdILEtBQUssQ0FBQ0ksT0FBM0IsQ0FFQWIsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixDQUF5QlMsU0FBekIsRUFDQVYsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUE0QlcsWUFBNUIsRUFDRCxDQW5CSCxFQW9CRCxDQXZCRCxDQXlCQSxHQUFNRSxDQUFBQSxXQUFXLENBQUcsUUFBZEEsQ0FBQUEsV0FBYyxDQUFDaEIsaUJBQUQsQ0FBMEMsQ0FDNUQsT0FBUUEsaUJBQVIsRUFDRSxJQUFLLHNCQUFMLENBQ0UsTUFDRSw0REFBQyw2REFBRCxFQUNFLFFBQVEsQ0FBRUksUUFEWixDQUVFLFFBQVEsQ0FBRSxtQkFBTSxDQUNkWCxLQUFLLENBQUN3QixlQUFOLENBQXNCLEtBQXRCLEVBQ0QsQ0FKSCw4RUFERixDQVFGLElBQUssOEJBQUwsQ0FDRSxNQUFPLDREQUFDLDBCQUFELCtFQUFQLENBQ0YsSUFBSyw4QkFBTCxDQUNFLE1BQ0UsNERBQUMsNkRBQUQsRUFDRSxRQUFRLENBQUViLFFBRFosQ0FFRSxRQUFRLENBQUUsbUJBQU0sQ0FDZFgsS0FBSyxDQUFDd0IsZUFBTixDQUFzQixLQUF0QixFQUNELENBSkgsOEVBREYsQ0FRRixJQUFLLDJCQUFMLENBQ0UsTUFDRSw0REFBQyw2REFBRCxFQUNFLFFBQVEsQ0FBRWIsUUFEWixDQUVFLFFBQVEsQ0FBRSxtQkFBTSxDQUNkWCxLQUFLLENBQUN3QixlQUFOLENBQXNCLEtBQXRCLEVBQ0QsQ0FKSCw4RUFERixDQVFGLFFBQ0UsTUFBTyxLQUFQLENBL0JKLENBaUNELENBbENELENBc0NBLE1BQ0UsNERBQUMsOENBQUQsRUFDRSxNQUFNLENBQUV4QixLQUFLLENBQUNDLFlBRGhCLENBRUUsT0FBTyxDQUFFLHlCQUFNRCxDQUFBQSxLQUFLLENBQUN3QixlQUFOLENBQXNCLEtBQXRCLENBQU4sRUFGWCxDQUdFLGFBQWEsS0FIZixDQUtFLElBQUksQ0FBQyxJQUxQLENBTUUsU0FBUyxDQUFFLENBQ1RDLEtBQUssQ0FBRSxDQUNMQyxFQUFFLENBQUUsT0FEQyxDQUVMQyxPQUFPLENBQUUsR0FGSixDQURFLENBTmIsNkVBY0UsMkRBQUMsc0RBQUQsRUFBZSxRQUFRLENBQUMsUUFBeEIsQ0FBaUMsU0FBUyxDQUFFLENBQTVDLENBQStDLEdBQUcsQ0FBQyxLQUFuRCxDQUF5RCxNQUFNLENBQUMsS0FBaEUsNkVBQ0UsMkRBQUMsMERBQUQsRUFDRSxNQUFNLENBQUUsQ0FDTkQsRUFBRSxDQUFFLFVBREUsQ0FFTkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkQsQ0FEVixDQU9FLFFBQVEsQ0FBRSxDQUNSSCxFQUFFLENBQUUsVUFESSxDQUVSRSxLQUFLLENBQUUsQ0FDTEMsS0FBSyxDQUFFLFlBREYsQ0FGQyxDQVBaLDZFQURGLENBZUUsMkRBQUMsbURBQUQsOEVBRUdOLFdBQVcsQ0FBQ2hCLGlCQUFELENBRmQsQ0FmRixDQWRGLENBREYsQ0FxREQsSUFuSXVCUixrREFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJzY3JpYmUvU3Vic2NyaWJlTW9kYWwudHN4PzNlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIm5hdGl2ZS1iYXNlXCI7XG5pbXBvcnQgeyB0cmFja0V2ZW50LCBjb21wb3NlQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9ndGFnXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzLCBhY3Rpb25zLCBvYmplY3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hbmFseXRpY3NEZWZpbml0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgc2VuZFNpZ25JbkxpbmtUb0VtYWlsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFjdGlvbkNvZGVTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBBd2FpdGluZ1N1YnNjcmlwdGlvbiBmcm9tIFwiLi9Bd2FpdGluZ1N1YnNjcmlwdGlvblwiO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5pcnVkaHZzcC9oYWNrLXdpdGgtbmF0aXZlYmFzZS10cmFkZWJvb2svYmxvYi9mM2ViOGVkNjlmMGYzYzBhNDUwYmZkNDkyNTc3NDJmMWYwMTM5NWRkL3BhZ2UvTG9naW4uanN4XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1vZGFsVmlzaWJsZTogYm9vbGVhbjtcbiAgc2V0TW9kYWxWaXNpYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uU3RhdGUgPVxuICB8IFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICB8IFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlTW9kYWwocHJvcHM6IFByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1vZGFsVmlzaWJsZSkge1xuICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgIGFjdGlvbjogY29tcG9zZUFjdGlvbihhY3Rpb25zLlZJRVcsIG9iamVjdHMuU1VCU0NSSUJFX01PREFMKSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU1VCU0NSSUJFLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG5cbiAgY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZShcbiAgICBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgKTtcbiAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZW1haWw6IHN0cmluZykgPT4ge1xuICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCIpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIGVtYWlsIGxvY2FsbHkgc28geW91IGRvbid0IG5lZWQgdG8gYXNrIHRoZSB1c2VyIGZvciBpdCBhZ2FpblxuICAgICAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbEZvclNpZ25JblwiLCBlbWFpbCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICBcIlNVQlNDUklQVElPTl9SRVFTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMVUVTVF9TVUNDRVNTXCJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JDb2RlXCIsIGVycm9yQ29kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlXCIsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGlsZCA9IChzdWJzY3JpcHRpb25TdGF0ZTogU3Vic2NyaXB0aW9uU3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKHN1YnNjcmlwdGlvblN0YXRlKSB7XG4gICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IC8+O1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICAvLyBzaXplPVwiZnVsbFwiXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiB0aGUgbGluZSBiZWxvdyBuZWVkcyB0byBiZSBkeW5hbWljIHNvbWVob3cgKi99XG4gICAgICA8TW9kYWwuQ29udGVudCBwb3NpdGlvbj1cInN0aWNreVwiIG1hcmdpblRvcD17MH0gdG9wPVwiMjM1XCIgYm90dG9tPVwiMjM1XCI+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICB7cmVuZGVyQ2hpbGQoc3Vic2NyaXB0aW9uU3RhdGUpfVxuICAgICAgICAgIHsvKiB7c3Vic2NyaXB0aW9uU3RhdGUgPT0gXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7KHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBd2FpdGluZ1N1YnNjcmlwdGlvbiBvblN1Ym1pdD17b25TdWJtaXR9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19ICovfVxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJ0cmFja0V2ZW50IiwiY29tcG9zZUFjdGlvbiIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIiwib2JqZWN0cyIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJtb2RhbFZpc2libGUiLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmVuZGVyQ2hpbGQiLCJzZXRNb2RhbFZpc2libGUiLCJfZGFyayIsImJnIiwib3BhY2l0eSIsIl9pY29uIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});