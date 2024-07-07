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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{position:\"sticky\",top:\"0\",bottom:\"0\",width:\"100%\",height:\"100%\",__self:this,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:137,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"k2oWsTNHIIGUVBbj5jtBkIhqszw=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRGhCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlnQixLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJkLHFEQUFVLENBQUMsQ0FDVGUsTUFBTSxDQUFFZCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRjLFFBQVEsQ0FBRWhCLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNXLEtBQUssQ0FBQ0MsWUFBUCxDQVBNLENBQVQsQ0FZQSxjQUFrRGhCLCtDQUFRLENBQ3hELDhCQUR3RCxDQUExRCxDQUFPc0IsaUJBQVAsY0FBMEJDLG9CQUExQixjQUdBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixDQUFpQ0gsaUJBQWpDLEVBRUEsR0FBTUksQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsQ0FBQ0MsS0FBRCxDQUFtQixDQUNsQ0osb0JBQW9CLENBQUMsOEJBQUQsQ0FBcEIsQ0FDQSxHQUFNSyxDQUFBQSxJQUFJLENBQUdyQixzREFBTyxFQUFwQixDQUNBQyxvRUFBcUIsQ0FBQ29CLElBQUQsQ0FBT0QsS0FBUCxDQUFjbEIsbUVBQWQsQ0FBckIsQ0FDR29CLElBREgsQ0FDUSxVQUFNLENBRVZOLG9CQUFvQixDQUFDLDhCQUFELENBQXBCLENBSUFPLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDTCxLQUE5QyxFQUNELENBUkgsV0FTUyxTQUFDTSxLQUFELENBQVcsQ0FDaEJWLG9CQUFvQixDQUFDLDJCQUFELENBQXBCLENBRUEsR0FBTVcsQ0FBQUEsU0FBUyxDQUFHRCxLQUFLLENBQUNFLElBQXhCLENBQ0EsR0FBTUMsQ0FBQUEsWUFBWSxDQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBRUFiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBeUJTLFNBQXpCLEVBQ0FWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBNEJXLFlBQTVCLEVBQ0QsQ0FqQkgsRUFrQkQsQ0FyQkQsQ0F1QkEsR0FBTUUsQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsRUFBTSxDQUNyQmQsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUNELENBRkQsQ0FJQSxHQUFNYyxDQUFBQSxXQUFXLENBQUcsUUFBZEEsQ0FBQUEsV0FBYyxDQUFDakIsaUJBQUQsQ0FBMEMsQ0FDNUQsT0FBUUEsaUJBQVIsRUFDRSxJQUFLLHNCQUFMLENBQ0UsTUFDRSw0REFBQyw2REFBRCxFQUNFLFFBQVEsQ0FBRUksUUFEWixDQUVFLFFBQVEsQ0FBRSxtQkFBTSxDQUNkWCxLQUFLLENBQUN5QixlQUFOLENBQXNCLEtBQXRCLEVBQ0QsQ0FKSCw4RUFERixDQVFGLElBQUssOEJBQUwsQ0FDRSxNQUFPLDREQUFDLG1FQUFELCtFQUFQLENBQ0YsSUFBSyw4QkFBTCxDQUNFLE1BQ0UsNERBQUMsbUVBQUQsRUFDRSxNQUFNLENBQUUsaUJBQU0sQ0FDWnpCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUhILDhFQURGLENBT0YsSUFBSywyQkFBTCxDQUNFLE1BQ0UsNERBQUMsZ0VBQUQsRUFDRSxVQUFVLENBQUVGLFFBRGQsQ0FFRSxTQUFTLENBQUUsb0JBQU0sQ0FDZnZCLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsRUFDRCxDQUpILDhFQURGLENBUUYsUUFDRSxNQUFPLEtBQVAsQ0E5QkosQ0FnQ0QsQ0FqQ0QsQ0FxQ0EsTUFDRSw0REFBQyw4Q0FBRCxFQVFFLE1BQU0sQ0FBRXpCLEtBQUssQ0FBQ0MsWUFSaEIsQ0FTRSxPQUFPLENBQUUseUJBQU1ELENBQUFBLEtBQUssQ0FBQ3lCLGVBQU4sQ0FBc0IsS0FBdEIsQ0FBTixFQVRYLENBVUUsYUFBYSxLQVZmLENBV0UsSUFBSSxDQUFDLE1BWFAsQ0FhRSxTQUFTLENBQUUsQ0FDVEMsS0FBSyxDQUFFLENBQ0xDLEVBQUUsQ0FBRSxPQURDLENBRUxDLE9BQU8sQ0FBRSxHQUZKLENBREUsQ0FiYiw2RUFzQkUsMkRBQUMsc0RBQUQsRUFDRSxRQUFRLENBQUMsUUFEWCxDQUVFLEdBQUcsQ0FBQyxHQUZOLENBR0UsTUFBTSxDQUFDLEdBSFQsQ0FJRSxLQUFLLENBQUMsTUFKUixDQUtFLE1BQU0sQ0FBQyxNQUxULDZFQU9FLDJEQUFDLDBEQUFELEVBQ0UsTUFBTSxDQUFFLENBQ05ELEVBQUUsQ0FBRSxVQURFLENBRU5FLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZELENBRFYsQ0FPRSxRQUFRLENBQUUsQ0FDUkgsRUFBRSxDQUFFLFVBREksQ0FFUkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkMsQ0FQWiw2RUFQRixDQXFCRSwyREFBQyxtREFBRCw4RUFFR04sV0FBVyxDQUFDakIsaUJBQUQsQ0FGZCxDQXJCRixDQXRCRixDQURGLENBbUVELElBckp1QlIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcbmltcG9ydCBTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCBmcm9tIFwiLi9TZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdFwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuaXJ1ZGh2c3AvaGFjay13aXRoLW5hdGl2ZWJhc2UtdHJhZGVib29rL2Jsb2IvZjNlYjhlZDY5ZjBmM2MwYTQ1MGJmZDQ5MjU3NzQyZjFmMDEzOTVkZC9wYWdlL0xvZ2luLmpzeFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHNldE1vZGFsVmlzaWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvblN0YXRlID1cbiAgfCBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgfCBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKHByb3BzOiBQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tb2RhbFZpc2libGUpIHtcbiAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICBhY3Rpb246IGNvbXBvc2VBY3Rpb24oYWN0aW9ucy5WSUVXLCBvYmplY3RzLlNVQlNDUklCRV9NT0RBTCksXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNVQlNDUklCRSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pO1xuXG4gIC8vIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAvLyAgIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICAvLyApO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlPFN1YnNjcmlwdGlvblN0YXRlPihcbiAgICBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICApO1xuICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCIpO1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgc2VuZFNpZ25JbkxpbmtUb0VtYWlsKGF1dGgsIGVtYWlsLCBhY3Rpb25Db2RlU2V0dGluZ3MpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBsaW5rIHdhcyBzdWNjZXNzZnVsbHkgc2VudC4gSW5mb3JtIHRoZSB1c2VyLlxuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIik7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgZW1haWwgbG9jYWxseSBzbyB5b3UgZG9uJ3QgbmVlZCB0byBhc2sgdGhlIHVzZXIgZm9yIGl0IGFnYWluXG4gICAgICAgIC8vIGlmIHRoZXkgb3BlbiB0aGUgbGluayBvbiB0aGUgc2FtZSBkZXZpY2UuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsRm9yU2lnbkluXCIsIGVtYWlsKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiKTtcblxuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JDb2RlXCIsIGVycm9yQ29kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlXCIsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0cnlBZ2FpbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvd1wiKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGlsZCA9IChzdWJzY3JpcHRpb25TdGF0ZTogU3Vic2NyaXB0aW9uU3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKHN1YnNjcmlwdGlvblN0YXRlKSB7XG4gICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IC8+O1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3NcbiAgICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcbiAgICAgICAgICAgIG9uVHJ5QWdhaW49e3RyeUFnYWlufVxuICAgICAgICAgICAgb25HZXRIZWxwPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VlIGlmIHlvdSBjYW4gZ2V0IHRoZSB3aW5kb3cgd2lkdGggYW5kIGhlaWdodCBhbmQgdXNlIHRoYXQgdG8gc2V0IHRoZSBjb250ZW50IGhlaWdodCBhbmQgd2lkdGhcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgLy8gcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAvLyB0b3A9XCIwXCJcbiAgICAgIC8vIGJvdHRvbT1cIjBcIlxuICAgICAgLy8gd2lkdGg9XCIxMDAlXCJcbiAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgLy8gei1pbmRleD1cIjk5OTlcIlxuICAgICAgLy8gZGlzcGxheT1cImZsZXhcIlxuICAgICAgaXNPcGVuPXtwcm9wcy5tb2RhbFZpc2libGV9XG4gICAgICBvbkNsb3NlPXsoKSA9PiBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpfVxuICAgICAgYXZvaWRLZXlib2FyZFxuICAgICAgc2l6ZT1cImZ1bGxcIlxuICAgICAgLy8gc2l6ZT1cImxnXCJcbiAgICAgIF9iYWNrZHJvcD17e1xuICAgICAgICBfZGFyazoge1xuICAgICAgICAgIGJnOiBcImJsYWNrXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7LyogdGhlIGxpbmUgYmVsb3cgbmVlZHMgdG8gYmUgZHluYW1pYyBzb21laG93ICovfVxuICAgICAgey8qIDxNb2RhbC5Db250ZW50IHBvc2l0aW9uPVwic3RpY2t5XCIgbWFyZ2luVG9wPXswfSB0b3A9XCIyMzVcIiBib3R0b209XCIyMzVcIj4gKi99XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICBwb3NpdGlvbj1cInN0aWNreVwiXG4gICAgICAgIHRvcD1cIjBcIlxuICAgICAgICBib3R0b209XCIwXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICB7cmVuZGVyQ2hpbGQoc3Vic2NyaXB0aW9uU3RhdGUpfVxuICAgICAgICAgIHsvKiB7c3Vic2NyaXB0aW9uU3RhdGUgPT0gXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7KHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBd2FpdGluZ1N1YnNjcmlwdGlvbiBvblN1Ym1pdD17b25TdWJtaXR9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19ICovfVxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJ0cmFja0V2ZW50IiwiY29tcG9zZUFjdGlvbiIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIiwib2JqZWN0cyIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IiwiU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MiLCJTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJtb2RhbFZpc2libGUiLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});