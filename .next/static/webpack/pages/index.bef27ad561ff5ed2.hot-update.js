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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},p:\"20\",borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{position:\"sticky\",bottom:\"20\",width:\"100%\",height:\"100%\",borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"k2oWsTNHIIGUVBbj5jtBkIhqszw=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRGhCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlnQixLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJkLHFEQUFVLENBQUMsQ0FDVGUsTUFBTSxDQUFFZCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRjLFFBQVEsQ0FBRWhCLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNXLEtBQUssQ0FBQ0MsWUFBUCxDQVBNLENBQVQsQ0FZQSxjQUFrRGhCLCtDQUFRLENBQ3hELDhCQUR3RCxDQUExRCxDQUFPc0IsaUJBQVAsY0FBMEJDLG9CQUExQixjQUdBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixDQUFpQ0gsaUJBQWpDLEVBRUEsR0FBTUksQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsQ0FBQ0MsS0FBRCxDQUFtQixDQUNsQ0osb0JBQW9CLENBQUMsOEJBQUQsQ0FBcEIsQ0FDQSxHQUFNSyxDQUFBQSxJQUFJLENBQUdyQixzREFBTyxFQUFwQixDQUNBQyxvRUFBcUIsQ0FBQ29CLElBQUQsQ0FBT0QsS0FBUCxDQUFjbEIsbUVBQWQsQ0FBckIsQ0FDR29CLElBREgsQ0FDUSxVQUFNLENBRVZOLG9CQUFvQixDQUFDLDhCQUFELENBQXBCLENBSUFPLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDTCxLQUE5QyxFQUNELENBUkgsV0FTUyxTQUFDTSxLQUFELENBQVcsQ0FDaEJWLG9CQUFvQixDQUFDLDJCQUFELENBQXBCLENBRUEsR0FBTVcsQ0FBQUEsU0FBUyxDQUFHRCxLQUFLLENBQUNFLElBQXhCLENBQ0EsR0FBTUMsQ0FBQUEsWUFBWSxDQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBRUFiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBeUJTLFNBQXpCLEVBQ0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBNEJXLFlBQTVCLEVBQ0QsQ0FqQkgsRUFrQkQsQ0FyQkQsQ0F1QkEsR0FBTUUsQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsRUFBTSxDQUNyQmQsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUNELENBRkQsQ0FJQSxHQUFNYyxDQUFBQSxXQUFXLENBQUcsUUFBZEEsQ0FBQUEsV0FBYyxDQUFDakIsaUJBQUQsQ0FBMEMsQ0FDNUQsT0FBUUEsaUJBQVIsRUFDRSxJQUFLLHNCQUFMLENBQ0UsTUFDRSw0REFBQyw2REFBRCxFQUNFLFFBQVEsQ0FBRUksUUFEWixDQUVFLFFBQVEsQ0FBRSxtQkFBTSxDQUNkWCxLQUFLLENBQUN5QixlQUFOLENBQXNCLEtBQXRCLEVBQ0QsQ0FKSCw4RUFERixDQVFGLElBQUssOEJBQUwsQ0FDRSxNQUFPLDREQUFDLG1FQUFELCtFQUFQLENBQ0YsSUFBSyw4QkFBTCxDQUNFLE1BQ0UsNERBQUMsbUVBQUQsRUFDRSxNQUFNLENBQUUsaUJBQU0sQ0FDWnpCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUhILDhFQURGLENBT0YsSUFBSywyQkFBTCxDQUNFLE1BQ0UsNERBQUMsZ0VBQUQsRUFDRSxVQUFVLENBQUVGLFFBRGQsQ0FFRSxTQUFTLENBQUUsb0JBQU0sQ0FDZnZCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUpILDhFQURGLENBUUYsUUFDRSxNQUFPLEtBQVAsQ0E5QkosQ0FnQ0QsQ0FqQ0QsQ0FxQ0EsTUFDRSw0REFBQyw4Q0FBRCxFQVFFLE1BQU0sQ0FBRXpCLEtBQUssQ0FBQ0MsWUFSaEIsQ0FTRSxPQUFPLENBQUUseUJBQU1ELENBQUFBLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsQ0FBTixFQVRYLENBVUUsYUFBYSxLQVZmLENBV0UsSUFBSSxDQUFDLE1BWFAsQ0FhRSxTQUFTLENBQUUsQ0FDVEMsS0FBSyxDQUFFLENBQ0xDLEVBQUUsQ0FBRSxPQURDLENBRUxDLE9BQU8sQ0FBRSxHQUZKLENBREUsQ0FiYixDQW9CRSxDQUFDLENBQUMsSUFwQkosQ0FxQkUsV0FBVyxDQUFFLENBckJmLENBc0JFLFdBQVcsQ0FBRSxTQXRCZiw2RUEwQkUsMkRBQUMsc0RBQUQsRUFDRSxRQUFRLENBQUMsUUFEWCxDQUdFLE1BQU0sQ0FBQyxJQUhULENBSUUsS0FBSyxDQUFDLE1BSlIsQ0FLRSxNQUFNLENBQUMsTUFMVCxDQU1FLFdBQVcsQ0FBRSxDQU5mLENBT0UsV0FBVyxDQUFFLFVBUGYsNkVBU0UsMkRBQUMsMERBQUQsRUFDRSxNQUFNLENBQUUsQ0FDTkQsRUFBRSxDQUFFLFVBREUsQ0FFTkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkQsQ0FEVixDQU9FLFFBQVEsQ0FBRSxDQUNSSCxFQUFFLENBQUUsVUFESSxDQUVSRSxLQUFLLENBQUUsQ0FDTEMsS0FBSyxDQUFFLFlBREYsQ0FGQyxDQVBaLDZFQVRGLENBdUJFLDJEQUFDLG1EQUFELDhFQUVHTixXQUFXLENBQUNqQixpQkFBRCxDQUZkLENBdkJGLENBMUJGLENBREYsQ0F5RUQsSUEzSnVCUixrREFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJzY3JpYmUvU3Vic2NyaWJlTW9kYWwudHN4PzNlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIm5hdGl2ZS1iYXNlXCI7XG5pbXBvcnQgeyB0cmFja0V2ZW50LCBjb21wb3NlQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9ndGFnXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzLCBhY3Rpb25zLCBvYmplY3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hbmFseXRpY3NEZWZpbml0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgc2VuZFNpZ25JbkxpbmtUb0VtYWlsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFjdGlvbkNvZGVTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBBd2FpdGluZ1N1YnNjcmlwdGlvbiBmcm9tIFwiLi9Bd2FpdGluZ1N1YnNjcmlwdGlvblwiO1xuaW1wb3J0IFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IGZyb20gXCIuL1NlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0XCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3NcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCBmcm9tIFwiLi9TdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFwiO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5pcnVkaHZzcC9oYWNrLXdpdGgtbmF0aXZlYmFzZS10cmFkZWJvb2svYmxvYi9mM2ViOGVkNjlmMGYzYzBhNDUwYmZkNDkyNTc3NDJmMWYwMTM5NWRkL3BhZ2UvTG9naW4uanN4XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1vZGFsVmlzaWJsZTogYm9vbGVhbjtcbiAgc2V0TW9kYWxWaXNpYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uU3RhdGUgPVxuICB8IFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICB8IFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlTW9kYWwocHJvcHM6IFByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1vZGFsVmlzaWJsZSkge1xuICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgIGFjdGlvbjogY29tcG9zZUFjdGlvbihhY3Rpb25zLlZJRVcsIG9iamVjdHMuU1VCU0NSSUJFX01PREFMKSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU1VCU0NSSUJFLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG5cbiAgLy8gY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gIC8vICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIC8vICk7XG4gIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAgIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gICk7XG4gIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uU3RhdGVcIiwgc3Vic2NyaXB0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIik7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gVGhlIGxpbmsgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LiBJbmZvcm0gdGhlIHVzZXIuXG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiKTtcblxuICAgICAgICAvLyBTYXZlIHRoZSBlbWFpbCBsb2NhbGx5IHNvIHlvdSBkb24ndCBuZWVkIHRvIGFzayB0aGUgdXNlciBmb3IgaXQgYWdhaW5cbiAgICAgICAgLy8gaWYgdGhleSBvcGVuIHRoZSBsaW5rIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxGb3JTaWduSW5cIiwgZW1haWwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCIpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvckNvZGVcIiwgZXJyb3JDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvck1lc3NhZ2VcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRyeUFnYWluID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG93XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoaWxkID0gKHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgXCJBV0FJVElOR19TVUJDUklQVElPTlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCI6XG4gICAgICAgIHJldHVybiA8U2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgLz47XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1xuICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFxuICAgICAgICAgICAgb25UcnlBZ2Fpbj17dHJ5QWdhaW59XG4gICAgICAgICAgICBvbkdldEhlbHA9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICAvLyBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIC8vIHRvcD1cIjBcIlxuICAgICAgLy8gYm90dG9tPVwiMFwiXG4gICAgICAvLyB3aWR0aD1cIjEwMCVcIlxuICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAvLyB6LWluZGV4PVwiOTk5OVwiXG4gICAgICAvLyBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICBzaXplPVwiZnVsbFwiXG4gICAgICAvLyBzaXplPVwibGdcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgLy8gcD1cIjIwXCJcbiAgICAgIHA9XCIyMFwiXG4gICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgIGJvcmRlckNvbG9yPXtcInJlZC41MDBcIn1cbiAgICA+XG4gICAgICB7LyogdGhlIGxpbmUgYmVsb3cgbmVlZHMgdG8gYmUgZHluYW1pYyBzb21laG93ICovfVxuICAgICAgey8qIDxNb2RhbC5Db250ZW50IHBvc2l0aW9uPVwic3RpY2t5XCIgbWFyZ2luVG9wPXswfSB0b3A9XCIyMzVcIiBib3R0b209XCIyMzVcIj4gKi99XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICBwb3NpdGlvbj1cInN0aWNreVwiXG4gICAgICAgIC8vIHRvcD1cIjIwXCJcbiAgICAgICAgYm90dG9tPVwiMjBcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgIGJvcmRlckNvbG9yPXtcImJsdWUuNTAwXCJ9XG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICB7cmVuZGVyQ2hpbGQoc3Vic2NyaXB0aW9uU3RhdGUpfVxuICAgICAgICAgIHsvKiB7c3Vic2NyaXB0aW9uU3RhdGUgPT0gXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7KHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBd2FpdGluZ1N1YnNjcmlwdGlvbiBvblN1Ym1pdD17b25TdWJtaXR9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19ICovfVxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJ0cmFja0V2ZW50IiwiY29tcG9zZUFjdGlvbiIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIiwib2JqZWN0cyIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IiwiU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MiLCJTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJtb2RhbFZpc2libGUiLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});