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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){setScrollPosition(window.pageYOffset);}},[props.modalVisible]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}else{}},[props.modalVisible]);var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState2[0],setsubscriptionState=_useState2[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:95,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},p:\"20\",borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{top:scrollPosition,width:\"80%\",height:\"80%\",borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:173,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"UZcFk2Z5L4x5hmbOl5nGKmy7S7I=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRCxjQUE0Q2YsK0NBQVEsQ0FBQyxDQUFELENBQXBELENBQU9nQixjQUFQLGNBQXVCQyxpQkFBdkIsY0FFQWxCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQU1tQixDQUFBQSxJQUFJLENBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQ0EsR0FBSUYsSUFBSixDQUFVLENBRVJELGlCQUFpQixDQUFDSSxNQUFNLENBQUNDLFdBQVIsQ0FBakIsQ0FDRCxDQUNGLENBTlEsQ0FNTixDQUFDUCxLQUFLLENBQUNRLFlBQVAsQ0FOTSxDQUFULENBUUF4QixnREFBUyxDQUFDLFVBQU0sQ0FDZCxHQUFJZ0IsS0FBSyxDQUFDUSxZQUFWLENBQXdCLENBQ3RCckIscURBQVUsQ0FBQyxDQUNUc0IsTUFBTSxDQUFFckIsd0RBQWEsQ0FBQ0UsbUVBQUQsQ0FBZUMsOEVBQWYsQ0FEWixDQUVUcUIsUUFBUSxDQUFFdkIsMkVBRkQsQ0FBRCxDQUFWLENBS0QsQ0FORCxJQU1PLENBRU4sQ0FDRixDQVZRLENBVU4sQ0FBQ1csS0FBSyxDQUFDUSxZQUFQLENBVk0sQ0FBVCxDQWVBLGVBQWtEdkIsK0NBQVEsQ0FDeEQsOEJBRHdELENBQTFELENBQU82QixpQkFBUCxlQUEwQkMsb0JBQTFCLGVBR0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLENBQWlDSCxpQkFBakMsRUFFQSxHQUFNSSxDQUFBQSxRQUFRLENBQUcsUUFBWEEsQ0FBQUEsUUFBVyxDQUFDQyxLQUFELENBQW1CLENBQ2xDSixvQkFBb0IsQ0FBQyw4QkFBRCxDQUFwQixDQUNBLEdBQU1LLENBQUFBLElBQUksQ0FBRzVCLHNEQUFPLEVBQXBCLENBQ0FDLG9FQUFxQixDQUFDMkIsSUFB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dWJzY3JpYmVNb2RhbC50c3g/M2U5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwibmF0aXZlLWJhc2VcIjtcbmltcG9ydCB7IHRyYWNrRXZlbnQsIGNvbXBvc2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGliL2d0YWdcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMsIGFjdGlvbnMsIG9iamVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FuYWx5dGljc0RlZmluaXRpb25zXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBzZW5kU2lnbkluTGlua1RvRW1haWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWN0aW9uQ29kZVNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IEF3YWl0aW5nU3Vic2NyaXB0aW9uIGZyb20gXCIuL0F3YWl0aW5nU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgZnJvbSBcIi4vU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3RcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyBmcm9tIFwiLi9TdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1wiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RGYWlsXCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmlydWRodnNwL2hhY2std2l0aC1uYXRpdmViYXNlLXRyYWRlYm9vay9ibG9iL2YzZWI4ZWQ2OWYwZjNjMGE0NTBiZmQ0OTI1Nzc0MmYxZjAxMzk1ZGQvcGFnZS9Mb2dpbi5qc3hcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbW9kYWxWaXNpYmxlOiBib29sZWFuO1xuICBzZXRNb2RhbFZpc2libGU6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxudHlwZSBTdWJzY3JpcHRpb25TdGF0ZSA9XG4gIHwgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIHwgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpYmVNb2RhbChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBpZiAoaHRtbCkge1xuICAgICAgLy8gaHRtbC5zdHlsZS5vdmVyZmxvdyA9IHByb3BzLm1vZGFsVmlzaWJsZSA/IFwiaGlkZGVuXCIgOiBcImF1dG9cIjtcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7IC8vIGNvbmRpdGlvbiB0byB3YXRjaCB0byBwZXJmb3JtIHNpZGUgZWZmZWN0XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMubW9kYWxWaXNpYmxlKSB7XG4gICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgYWN0aW9uOiBjb21wb3NlQWN0aW9uKGFjdGlvbnMuVklFVywgb2JqZWN0cy5TVUJTQ1JJQkVfTU9EQUwpLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TVUJTQ1JJQkUsXG4gICAgICB9KTtcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcbiAgICB9XG4gIH0sIFtwcm9wcy5tb2RhbFZpc2libGVdKTtcblxuICAvLyBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlPFN1YnNjcmlwdGlvblN0YXRlPihcbiAgLy8gICBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgLy8gKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gICAgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgKTtcbiAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZW1haWw6IHN0cmluZykgPT4ge1xuICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCIpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIGVtYWlsIGxvY2FsbHkgc28geW91IGRvbid0IG5lZWQgdG8gYXNrIHRoZSB1c2VyIGZvciBpdCBhZ2FpblxuICAgICAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbEZvclNpZ25JblwiLCBlbWFpbCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIik7XG5cbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yQ29kZVwiLCBlcnJvckNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yTWVzc2FnZVwiLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdHJ5QWdhaW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb3dcIik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ2hpbGQgPSAoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEF3YWl0aW5nU3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIjpcbiAgICAgICAgcmV0dXJuIDxTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCAvPjtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXG4gICAgICAgICAgICBvbkRvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsXG4gICAgICAgICAgICBvblRyeUFnYWluPXt0cnlBZ2Fpbn1cbiAgICAgICAgICAgIG9uR2V0SGVscD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZSBpZiB5b3UgY2FuIGdldCB0aGUgd2luZG93IHdpZHRoIGFuZCBoZWlnaHQgYW5kIHVzZSB0aGF0IHRvIHNldCB0aGUgY29udGVudCBoZWlnaHQgYW5kIHdpZHRoXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIC8vIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgLy8gdG9wPVwiMFwiXG4gICAgICAvLyBib3R0b209XCIwXCJcbiAgICAgIC8vIHdpZHRoPVwiMTAwJVwiXG4gICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgIC8vIHotaW5kZXg9XCI5OTk5XCJcbiAgICAgIC8vIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGlzT3Blbj17cHJvcHMubW9kYWxWaXNpYmxlfVxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIGF2b2lkS2V5Ym9hcmRcbiAgICAgIHNpemU9XCJmdWxsXCJcbiAgICAgIC8vIHNpemU9XCJsZ1wiXG4gICAgICBfYmFja2Ryb3A9e3tcbiAgICAgICAgX2Rhcms6IHtcbiAgICAgICAgICBiZzogXCJibGFja1wiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICAvLyBwPVwiMjBcIlxuICAgICAgcD1cIjIwXCJcbiAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgYm9yZGVyQ29sb3I9e1wicmVkLjUwMFwifVxuICAgID5cbiAgICAgIHsvKiB0aGUgbGluZSBiZWxvdyBuZWVkcyB0byBiZSBkeW5hbWljIHNvbWVob3cgKi99XG4gICAgICB7LyogPE1vZGFsLkNvbnRlbnQgcG9zaXRpb249XCJzdGlja3lcIiBtYXJnaW5Ub3A9ezB9IHRvcD1cIjIzNVwiIGJvdHRvbT1cIjIzNVwiPiAqL31cbiAgICAgIDxNb2RhbC5Db250ZW50XG4gICAgICAgIC8vIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICB0b3A9e3Njcm9sbFBvc2l0aW9ufVxuICAgICAgICAvLyBib3R0b209XCIwXCJcbiAgICAgICAgLy8gdG9wPVwiMTBcIlxuICAgICAgICAvLyBib3R0b209XCIxMFwiXG4gICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgaGVpZ2h0PVwiODAlXCJcbiAgICAgICAgLy8gei1pbmRleD1cIjk5OTlcIlxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wiYmx1ZS41MDBcIn1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgIHtyZW5kZXJDaGlsZChzdWJzY3JpcHRpb25TdGF0ZSl9XG4gICAgICAgICAgey8qIHtzdWJzY3JpcHRpb25TdGF0ZSA9PSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEF3YWl0aW5nU3Vic2NyaXB0aW9uIG9uU3VibWl0PXtvblN1Ym1pdH0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0gKi99XG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInRyYWNrRXZlbnQiLCJjb21wb3NlQWN0aW9uIiwiY2F0ZWdvcmllcyIsImFjdGlvbnMiLCJvYmplY3RzIiwiZ2V0QXV0aCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsIkF3YWl0aW5nU3Vic2NyaXB0aW9uIiwiU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QiLCJTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyIsIlN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIiwiU3Vic2NyaWJlTW9kYWwiLCJwcm9wcyIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJtb2RhbFZpc2libGUiLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});