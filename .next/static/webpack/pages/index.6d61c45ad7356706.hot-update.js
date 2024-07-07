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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){setScrollPosition(window.pageYOffset);console.log(\"scrollPosition\",scrollPosition);}},[props.modalVisible]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}else{}},[props.modalVisible]);var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState2[0],setsubscriptionState=_useState2[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{bottom:scrollPosition,width:\"80%\",height:\"80%\",borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:148,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:161,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:175,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"UZcFk2Z5L4x5hmbOl5nGKmy7S7I=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRCxjQUE0Q2YsK0NBQVEsQ0FBQyxDQUFELENBQXBELENBQU9nQixjQUFQLGNBQXVCQyxpQkFBdkIsY0FFQWxCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQU1tQixDQUFBQSxJQUFJLENBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQ0EsR0FBSUYsSUFBSixDQUFVLENBRVJELGlCQUFpQixDQUFDSSxNQUFNLENBQUNDLFdBQVIsQ0FBakIsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosQ0FBOEJSLGNBQTlCLEVBQ0QsQ0FDRixDQVBRLENBT04sQ0FBQ0QsS0FBSyxDQUFDVSxZQUFQLENBUE0sQ0FBVCxDQVNBMUIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBSWdCLEtBQUssQ0FBQ1UsWUFBVixDQUF3QixDQUN0QnZCLHFEQUFVLENBQUMsQ0FDVHdCLE1BQU0sQ0FBRXZCLHdEQUFhLENBQUNFLG1FQUFELENBQWVDLDhFQUFmLENBRFosQ0FFVHVCLFFBQVEsQ0FBRXpCLDJFQUZELENBQUQsQ0FBVixDQUtELENBTkQsSUFNTyxDQUVOLENBQ0YsQ0FWUSxDQVVOLENBQUNXLEtBQUssQ0FBQ1UsWUFBUCxDQVZNLENBQVQsQ0FlQSxlQUFrRHpCLCtDQUFRLENBQ3hELDhCQUR3RCxDQUExRCxDQUFPK0IsaUJBQVAsZUFBMEJDLG9CQUExQixlQUdBVCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixDQUFpQ08saUJBQWpDLEVBRUEsR0FBTUUsQ0FBQUEsUUFBUSxDQUFHLFFBQVhBLENBQUFBLFFBQVcsQ0FBQ0MsS0FBRCxDQUFtQixDQUNsQ0Ysb0JBQW9CLENBQUMsOEJBQUQsQ0FBcEIsQ0FDQSxHQUFNRyxDQUFBQSxJ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X05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcbmltcG9ydCBTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCBmcm9tIFwiLi9TZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdFwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuaXJ1ZGh2c3AvaGFjay13aXRoLW5hdGl2ZWJhc2UtdHJhZGVib29rL2Jsb2IvZjNlYjhlZDY5ZjBmM2MwYTQ1MGJmZDQ5MjU3NzQyZjFmMDEzOTVkZC9wYWdlL0xvZ2luLmpzeFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHNldE1vZGFsVmlzaWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvblN0YXRlID1cbiAgfCBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgfCBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGlmIChodG1sKSB7XG4gICAgICAvLyBodG1sLnN0eWxlLm92ZXJmbG93ID0gcHJvcHMubW9kYWxWaXNpYmxlID8gXCJoaWRkZW5cIiA6IFwiYXV0b1wiO1xuICAgICAgc2V0U2Nyb2xsUG9zaXRpb24od2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsUG9zaXRpb25cIiwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pOyAvLyBjb25kaXRpb24gdG8gd2F0Y2ggdG8gcGVyZm9ybSBzaWRlIGVmZmVjdFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1vZGFsVmlzaWJsZSkge1xuICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgIGFjdGlvbjogY29tcG9zZUFjdGlvbihhY3Rpb25zLlZJRVcsIG9iamVjdHMuU1VCU0NSSUJFX01PREFMKSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU1VCU0NSSUJFLFxuICAgICAgfSk7XG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG5cbiAgLy8gY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gIC8vICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIC8vICk7XG4gIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAgIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gICk7XG4gIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uU3RhdGVcIiwgc3Vic2NyaXB0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIik7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gVGhlIGxpbmsgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LiBJbmZvcm0gdGhlIHVzZXIuXG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiKTtcblxuICAgICAgICAvLyBTYXZlIHRoZSBlbWFpbCBsb2NhbGx5IHNvIHlvdSBkb24ndCBuZWVkIHRvIGFzayB0aGUgdXNlciBmb3IgaXQgYWdhaW5cbiAgICAgICAgLy8gaWYgdGhleSBvcGVuIHRoZSBsaW5rIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxGb3JTaWduSW5cIiwgZW1haWwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCIpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvckNvZGVcIiwgZXJyb3JDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvck1lc3NhZ2VcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRyeUFnYWluID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG93XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoaWxkID0gKHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgXCJBV0FJVElOR19TVUJDUklQVElPTlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCI6XG4gICAgICAgIHJldHVybiA8U2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgLz47XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1xuICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFxuICAgICAgICAgICAgb25UcnlBZ2Fpbj17dHJ5QWdhaW59XG4gICAgICAgICAgICBvbkdldEhlbHA9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICAvLyBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIC8vIHRvcD1cIjBcIlxuICAgICAgLy8gYm90dG9tPVwiMFwiXG4gICAgICAvLyB3aWR0aD1cIjEwMCVcIlxuICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAvLyB6LWluZGV4PVwiOTk5OVwiXG4gICAgICAvLyBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICBzaXplPVwiZnVsbFwiXG4gICAgICAvLyBzaXplPVwibGdcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgLy8gcD1cIjIwXCJcbiAgICAgIC8vIHA9XCIyMFwiXG4gICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgIGJvcmRlckNvbG9yPXtcInJlZC41MDBcIn1cbiAgICA+XG4gICAgICB7LyogdGhlIGxpbmUgYmVsb3cgbmVlZHMgdG8gYmUgZHluYW1pYyBzb21laG93ICovfVxuICAgICAgey8qIDxNb2RhbC5Db250ZW50IHBvc2l0aW9uPVwic3RpY2t5XCIgbWFyZ2luVG9wPXswfSB0b3A9XCIyMzVcIiBib3R0b209XCIyMzVcIj4gKi99XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICAvLyBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgLy8gdG9wPXtzY3JvbGxQb3NpdGlvbn1cbiAgICAgICAgYm90dG9tPXtzY3JvbGxQb3NpdGlvbn1cbiAgICAgICAgLy8gYm90dG9tPVwiMFwiXG4gICAgICAgIC8vIHRvcD1cIjEwXCJcbiAgICAgICAgLy8gYm90dG9tPVwiMTBcIlxuICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgIGhlaWdodD1cIjgwJVwiXG4gICAgICAgIC8vIHotaW5kZXg9XCI5OTk5XCJcbiAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgIGJvcmRlckNvbG9yPXtcImJsdWUuNTAwXCJ9XG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICB7cmVuZGVyQ2hpbGQoc3Vic2NyaXB0aW9uU3RhdGUpfVxuICAgICAgICAgIHsvKiB7c3Vic2NyaXB0aW9uU3RhdGUgPT0gXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7KHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBd2FpdGluZ1N1YnNjcmlwdGlvbiBvblN1Ym1pdD17b25TdWJtaXR9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19ICovfVxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJ0cmFja0V2ZW50IiwiY29tcG9zZUFjdGlvbiIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIiwib2JqZWN0cyIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IiwiU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MiLCJTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY29uc29sZSIsImxvZyIsIm1vZGFsVmlzaWJsZSIsImFjdGlvbiIsIlZJRVciLCJTVUJTQ1JJQkVfTU9EQUwiLCJjYXRlZ29yeSIsIlNVQlNDUklCRSIsInN1YnNjcmlwdGlvblN0YXRlIiwic2V0c3Vic2NyaXB0aW9uU3RhdGUiLCJvblN1Ym1pdCIsImVtYWlsIiwiYXV0aCIsInRoZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInRyeUFnYWluIiwicmVuZGVyQ2hpbGQiLCJzZXRNb2RhbFZpc2libGUiLCJfZGFyayIsImJnIiwib3BhY2l0eSIsIl9pY29uIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});