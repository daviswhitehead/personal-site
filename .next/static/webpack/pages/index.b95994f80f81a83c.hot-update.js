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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{\"z-index\":\"9999\",isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},p:\"20\",borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{position:\"sticky\",top:\"10\",bottom:\"10\",width:\"100%\",height:\"100%\",borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"k2oWsTNHIIGUVBbj5jtBkIhqszw=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRGhCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlnQixLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJkLHFEQUFVLENBQUMsQ0FDVGUsTUFBTSxDQUFFZCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRjLFFBQVEsQ0FBRWhCLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNXLEtBQUssQ0FBQ0MsWUFBUCxDQVBNLENBQVQsQ0FZQSxjQUFrRGhCLCtDQUFRLENBQ3hELDhCQUR3RCxDQUExRCxDQUFPc0IsaUJBQVAsY0FBMEJDLG9CQUExQixjQUdBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixDQUFpQ0gsaUJBQWpDLEVBRUEsR0FBTUksQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsQ0FBQ0MsS0FBRCxDQUFtQixDQUNsQ0osb0JBQW9CLENBQUMsOEJBQUQsQ0FBcEIsQ0FDQSxHQUFNSyxDQUFBQSxJQUFJLENBQUdyQixzREFBTyxFQUFwQixDQUNBQyxvRUFBcUIsQ0FBQ29CLElBQUQsQ0FBT0QsS0FBUCxDQUFjbEIsbUVBQWQsQ0FBckIsQ0FDR29CLElBREgsQ0FDUSxVQUFNLENBRVZOLG9CQUFvQixDQUFDLDhCQUFELENBQXBCLENBSUFPLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDTCxLQUE5QyxFQUNELENBUkgsV0FTUyxTQUFDTSxLQUFELENBQVcsQ0FDaEJWLG9CQUFvQixDQUFDLDJCQUFELENBQXBCLENBRUEsR0FBTVcsQ0FBQUEsU0FBUyxDQUFHRCxLQUFLLENBQUNFLElBQXhCLENBQ0EsR0FBTUMsQ0FBQUEsWUFBWSxDQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBRUFiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBeUJTLFNBQXpCLEVBQ0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBNEJXLFlBQTVCLEVBQ0QsQ0FqQkgsRUFrQkQsQ0FyQkQsQ0F1QkEsR0FBTUUsQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsRUFBTSxDQUNyQmQsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUNELENBRkQsQ0FJQSxHQUFNYyxDQUFBQSxXQUFXLENBQUcsUUFBZEEsQ0FBQUEsV0FBYyxDQUFDakIsaUJBQUQsQ0FBMEMsQ0FDNUQsT0FBUUEsaUJBQVIsRUFDRSxJQUFLLHNCQUFMLENBQ0UsTUFDRSw0REFBQyw2REFBRCxFQUNFLFFBQVEsQ0FBRUksUUFEWixDQUVFLFFBQVEsQ0FBRSxtQkFBTSxDQUNkWCxLQUFLLENBQUN5QixlQUFOLENBQXNCLEtBQXRCLEVBQ0QsQ0FKSCw4RUFERixDQVFGLElBQUssOEJBQUwsQ0FDRSxNQUFPLDREQUFDLG1FQUFELCtFQUFQLENBQ0YsSUFBSyw4QkFBTCxDQUNFLE1BQ0UsNERBQUMsbUVBQUQsRUFDRSxNQUFNLENBQUUsaUJBQU0sQ0FDWnpCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUhILDhFQURGLENBT0YsSUFBSywyQkFBTCxDQUNFLE1BQ0UsNERBQUMsZ0VBQUQsRUFDRSxVQUFVLENBQUVGLFFBRGQsQ0FFRSxTQUFTLENBQUUsb0JBQU0sQ0FDZnZCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUpILDhFQURGLENBUUYsUUFDRSxNQUFPLEtBQVAsQ0E5QkosQ0FnQ0QsQ0FqQ0QsQ0FxQ0EsTUFDRSw0REFBQyw4Q0FBRCxFQU1FLFVBQVEsTUFOVixDQVFFLE1BQU0sQ0FBRXpCLEtBQUssQ0FBQ0MsWUFSaEIsQ0FTRSxPQUFPLENBQUUseUJBQU1ELENBQUFBLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsQ0FBTixFQVRYLENBVUUsYUFBYSxLQVZmLENBV0UsSUFBSSxDQUFDLE1BWFAsQ0FhRSxTQUFTLENBQUUsQ0FDVEMsS0FBSyxDQUFFLENBQ0xDLEVBQUUsQ0FBRSxPQURDLENBRUxDLE9BQU8sQ0FBRSxHQUZKLENBREUsQ0FiYixDQW9CRSxDQUFDLENBQUMsSUFwQkosQ0FxQkUsV0FBVyxDQUFFLENBckJmLENBc0JFLFdBQVcsQ0FBRSxTQXRCZiw2RUEwQkUsMkRBQUMsc0RBQUQsRUFDRSxRQUFRLENBQUMsUUFEWCxDQUVFLEdBQUcsQ0FBQyxJQUZOLENBR0UsTUFBTSxDQUFDLElBSFQsQ0FJRSxLQUFLLENBQUMsTUFKUixDQUtFLE1BQU0sQ0FBQyxNQUxULENBTUUsV0FBVyxDQUFFLENBTmYsQ0FPRSxXQUFXLENBQUUsVUFQZiw2RUFTRSwyREFBQywwREFBRCxFQUNFLE1BQU0sQ0FBRSxDQUNORCxFQUFFLENBQUUsVUFERSxDQUVORSxLQUFLLENBQUUsQ0FDTEMsS0FBSyxDQUFFLFlBREYsQ0FGRCxDQURWLENBT0UsUUFBUSxDQUFFLENBQ1JILEVBQUUsQ0FBRSxVQURJLENBRVJFLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZDLENBUFosNkVBVEYsQ0F1QkUsMkRBQUMsbURBQUQsOEVBRUdOLFdBQVcsQ0FBQ2pCLGlCQUFELENBRmQsQ0F2QkYsQ0ExQkYsQ0FERixDQXlFRCxJQTNKdUJSLGtEQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3g/M2U5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwibmF0aXZlLWJhc2VcIjtcbmltcG9ydCB7IHRyYWNrRXZlbnQsIGNvbXBvc2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGliL2d0YWdcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMsIGFjdGlvbnMsIG9iamVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FuYWx5dGljc0RlZmluaXRpb25zXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBzZW5kU2lnbkluTGlua1RvRW1haWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWN0aW9uQ29kZVNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IEF3YWl0aW5nU3Vic2NyaXB0aW9uIGZyb20gXCIuL0F3YWl0aW5nU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgZnJvbSBcIi4vU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3RcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyBmcm9tIFwiLi9TdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1wiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RGYWlsXCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmlydWRodnNwL2hhY2std2l0aC1uYXRpdmViYXNlLXRyYWRlYm9vay9ibG9iL2YzZWI4ZWQ2OWYwZjNjMGE0NTBiZmQ0OTI1Nzc0MmYxZjAxMzk1ZGQvcGFnZS9Mb2dpbi5qc3hcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbW9kYWxWaXNpYmxlOiBib29sZWFuO1xuICBzZXRNb2RhbFZpc2libGU6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxudHlwZSBTdWJzY3JpcHRpb25TdGF0ZSA9XG4gIHwgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIHwgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpYmVNb2RhbChwcm9wczogUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMubW9kYWxWaXNpYmxlKSB7XG4gICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgYWN0aW9uOiBjb21wb3NlQWN0aW9uKGFjdGlvbnMuVklFVywgb2JqZWN0cy5TVUJTQ1JJQkVfTU9EQUwpLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TVUJTQ1JJQkUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5tb2RhbFZpc2libGVdKTtcblxuICAvLyBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlPFN1YnNjcmlwdGlvblN0YXRlPihcbiAgLy8gICBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgLy8gKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gICAgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgKTtcbiAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZW1haWw6IHN0cmluZykgPT4ge1xuICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCIpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIGVtYWlsIGxvY2FsbHkgc28geW91IGRvbid0IG5lZWQgdG8gYXNrIHRoZSB1c2VyIGZvciBpdCBhZ2FpblxuICAgICAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbEZvclNpZ25JblwiLCBlbWFpbCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIik7XG5cbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yQ29kZVwiLCBlcnJvckNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yTWVzc2FnZVwiLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdHJ5QWdhaW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb3dcIik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ2hpbGQgPSAoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEF3YWl0aW5nU3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIjpcbiAgICAgICAgcmV0dXJuIDxTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCAvPjtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXG4gICAgICAgICAgICBvbkRvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsXG4gICAgICAgICAgICBvblRyeUFnYWluPXt0cnlBZ2Fpbn1cbiAgICAgICAgICAgIG9uR2V0SGVscD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZSBpZiB5b3UgY2FuIGdldCB0aGUgd2luZG93IHdpZHRoIGFuZCBoZWlnaHQgYW5kIHVzZSB0aGF0IHRvIHNldCB0aGUgY29udGVudCBoZWlnaHQgYW5kIHdpZHRoXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIC8vIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgLy8gdG9wPVwiMFwiXG4gICAgICAvLyBib3R0b209XCIwXCJcbiAgICAgIC8vIHdpZHRoPVwiMTAwJVwiXG4gICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgIHotaW5kZXg9XCI5OTk5XCJcbiAgICAgIC8vIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGlzT3Blbj17cHJvcHMubW9kYWxWaXNpYmxlfVxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIGF2b2lkS2V5Ym9hcmRcbiAgICAgIHNpemU9XCJmdWxsXCJcbiAgICAgIC8vIHNpemU9XCJsZ1wiXG4gICAgICBfYmFja2Ryb3A9e3tcbiAgICAgICAgX2Rhcms6IHtcbiAgICAgICAgICBiZzogXCJibGFja1wiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICAvLyBwPVwiMjBcIlxuICAgICAgcD1cIjIwXCJcbiAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgYm9yZGVyQ29sb3I9e1wicmVkLjUwMFwifVxuICAgID5cbiAgICAgIHsvKiB0aGUgbGluZSBiZWxvdyBuZWVkcyB0byBiZSBkeW5hbWljIHNvbWVob3cgKi99XG4gICAgICB7LyogPE1vZGFsLkNvbnRlbnQgcG9zaXRpb249XCJzdGlja3lcIiBtYXJnaW5Ub3A9ezB9IHRvcD1cIjIzNVwiIGJvdHRvbT1cIjIzNVwiPiAqL31cbiAgICAgIDxNb2RhbC5Db250ZW50XG4gICAgICAgIHBvc2l0aW9uPVwic3RpY2t5XCJcbiAgICAgICAgdG9wPVwiMTBcIlxuICAgICAgICBib3R0b209XCIxMFwiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wiYmx1ZS41MDBcIn1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgIHtyZW5kZXJDaGlsZChzdWJzY3JpcHRpb25TdGF0ZSl9XG4gICAgICAgICAgey8qIHtzdWJzY3JpcHRpb25TdGF0ZSA9PSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEF3YWl0aW5nU3Vic2NyaXB0aW9uIG9uU3VibWl0PXtvblN1Ym1pdH0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0gKi99XG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInRyYWNrRXZlbnQiLCJjb21wb3NlQWN0aW9uIiwiY2F0ZWdvcmllcyIsImFjdGlvbnMiLCJvYmplY3RzIiwiZ2V0QXV0aCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsIkF3YWl0aW5nU3Vic2NyaXB0aW9uIiwiU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QiLCJTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyIsIlN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIiwiU3Vic2NyaWJlTW9kYWwiLCJwcm9wcyIsIm1vZGFsVmlzaWJsZSIsImFjdGlvbiIsIlZJRVciLCJTVUJTQ1JJQkVfTU9EQUwiLCJjYXRlZ29yeSIsIlNVQlNDUklCRSIsInN1YnNjcmlwdGlvblN0YXRlIiwic2V0c3Vic2NyaXB0aW9uU3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlbWFpbCIsImF1dGgiLCJ0aGVuIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0cnlBZ2FpbiIsInJlbmRlckNoaWxkIiwic2V0TW9kYWxWaXNpYmxlIiwiX2RhcmsiLCJiZyIsIm9wYWNpdHkiLCJfaWNvbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});