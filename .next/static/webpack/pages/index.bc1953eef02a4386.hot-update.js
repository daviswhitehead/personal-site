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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* harmony import */ var styling_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styling/spacing */ \"./styling/spacing.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),windowHeight=_useState2[0],setWindowHeight=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){html.style.overflow=props.modalVisible?\"hidden\":\"auto\";setScrollPosition(window.pageYOffset);setWindowHeight(window.innerHeight);}},[props.modalVisible]);console.log(\"scrollPosition\",scrollPosition);console.log(\"windowHeight\",windowHeight);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState3[0],setsubscriptionState=_useState3[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Content,{position:\"fixed\",top:scrollPosition+windowHeight*0.2/2,width:\"80%\",height:\"80%\",__self:this,__source:{fileName:_jsxFileName,lineNumber:135,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:142,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:156,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Stack,{height:\"100%\",direction:\"column\",alignItems:\"center\",justifyContent:\"center\",space:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.md,py:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,px:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:11}},renderChild(subscriptionState)))));}_s(SubscribeModal,\"8U4Ki4BD18E+eRn9sBBejvzBa9U=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7dUlBeUJlLFFBQVNrQixDQUFBQSxjQUFULENBQXdCQyxLQUF4QixDQUFzQyxxQkFDbkQsY0FBNENqQiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEQsQ0FBT2tCLGNBQVAsY0FBdUJDLGlCQUF2QixjQUNBLGVBQXdDbkIsK0NBQVEsQ0FBQyxDQUFELENBQWhELENBQU9vQixZQUFQLGVBQXFCQyxlQUFyQixlQUVBdEIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBTXVCLENBQUFBLElBQUksQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJRixJQUFKLENBQVUsQ0FDUkEsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQVgsQ0FBc0JULEtBQUssQ0FBQ1UsWUFBTixDQUFxQixRQUFyQixDQUFnQyxNQUF0RCxDQUNBUixpQkFBaUIsQ0FBQ1MsTUFBTSxDQUFDQyxXQUFSLENBQWpCLENBQ0FSLGVBQWUsQ0FBQ08sTUFBTSxDQUFDRSxXQUFSLENBQWYsQ0FDRCxDQUNGLENBUFEsQ0FPTixDQUFDYixLQUFLLENBQUNVLFlBQVAsQ0FQTSxDQUFULENBUUFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLENBQThCZCxjQUE5QixFQUNBYSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQTRCWixZQUE1QixFQUVBckIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBSWtCLEtBQUssQ0FBQ1UsWUFBVixDQUF3QixDQUN0QnhCLHFEQUFVLENBQUMsQ0FDVDhCLE1BQU0sQ0FBRTdCLHdEQUFhLENBQUNFLG1FQUFELENBQWVDLDhFQUFmLENBRFosQ0FFVDZCLFFBQVEsQ0FBRS9CLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNZLEtBQUssQ0FBQ1UsWUFBUCxDQVBNLENBQVQsQ0FZQSxlQUFrRDNC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LEVBQUUsQ0FBRSxVQURJLENBRVJFLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZDLENBUFosNkVBUEYsQ0FxQkUsMkRBQUMsb0RBQUQsOEVBQ0UsMkRBQUMsK0NBQUQsRUFDRSxNQUFNLENBQUMsTUFEVCxDQUVFLFNBQVMsQ0FBQyxRQUZaLENBR0UsVUFBVSxDQUFDLFFBSGIsQ0FJRSxjQUFjLENBQUMsUUFKakIsQ0FLRSxLQUFLLENBQUUzQyxxREFMVCxDQU1FLEVBQUUsQ0FBRUEscURBTk4sQ0FPRSxFQUFFLENBQUVBLHFEQVBOLENBUUUsV0FBVyxDQUFFLENBUmYsQ0FTRSxXQUFXLENBQUUsU0FUZiw4RUFZR3FDLFdBQVcsQ0FBQ2QsaUJBQUQsQ0FaZCxDQURGLENBckJGLENBWkYsQ0FERixDQXFERCxJQXJKdUJ0QixrREFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJzY3JpYmUvU3Vic2NyaWJlTW9kYWwudHN4PzNlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBTdGFjayB9IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcbmltcG9ydCBTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCBmcm9tIFwiLi9TZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdFwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcIjtcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSBcInN0eWxpbmcvc3BhY2luZ1wiO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5pcnVkaHZzcC9oYWNrLXdpdGgtbmF0aXZlYmFzZS10cmFkZWJvb2svYmxvYi9mM2ViOGVkNjlmMGYzYzBhNDUwYmZkNDkyNTc3NDJmMWYwMTM5NWRkL3BhZ2UvTG9naW4uanN4XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1vZGFsVmlzaWJsZTogYm9vbGVhbjtcbiAgc2V0TW9kYWxWaXNpYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uU3RhdGUgPVxuICB8IFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICB8IFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlTW9kYWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBpZiAoaHRtbCkge1xuICAgICAgaHRtbC5zdHlsZS5vdmVyZmxvdyA9IHByb3BzLm1vZGFsVmlzaWJsZSA/IFwiaGlkZGVuXCIgOiBcImF1dG9cIjtcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uKHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgICBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5tb2RhbFZpc2libGVdKTsgLy8gY29uZGl0aW9uIHRvIHdhdGNoIHRvIHBlcmZvcm0gc2lkZSBlZmZlY3RcbiAgY29uc29sZS5sb2coXCJzY3JvbGxQb3NpdGlvblwiLCBzY3JvbGxQb3NpdGlvbik7XG4gIGNvbnNvbGUubG9nKFwid2luZG93SGVpZ2h0XCIsIHdpbmRvd0hlaWdodCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMubW9kYWxWaXNpYmxlKSB7XG4gICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgYWN0aW9uOiBjb21wb3NlQWN0aW9uKGFjdGlvbnMuVklFVywgb2JqZWN0cy5TVUJTQ1JJQkVfTU9EQUwpLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TVUJTQ1JJQkUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5tb2RhbFZpc2libGVdKTtcblxuICAvLyBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlPFN1YnNjcmlwdGlvblN0YXRlPihcbiAgLy8gICBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgLy8gKTtcbiAgY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gICAgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgKTtcbiAgY29uc29sZS5sb2coXCJzdWJzY3JpcHRpb25TdGF0ZVwiLCBzdWJzY3JpcHRpb25TdGF0ZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZW1haWw6IHN0cmluZykgPT4ge1xuICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCIpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIGVtYWlsIGxvY2FsbHkgc28geW91IGRvbid0IG5lZWQgdG8gYXNrIHRoZSB1c2VyIGZvciBpdCBhZ2FpblxuICAgICAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbEZvclNpZ25JblwiLCBlbWFpbCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIik7XG5cbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yQ29kZVwiLCBlcnJvckNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yTWVzc2FnZVwiLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdHJ5QWdhaW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb3dcIik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ2hpbGQgPSAoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEF3YWl0aW5nU3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIjpcbiAgICAgICAgcmV0dXJuIDxTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCAvPjtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXG4gICAgICAgICAgICBvbkRvbmU9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsXG4gICAgICAgICAgICBvblRyeUFnYWluPXt0cnlBZ2Fpbn1cbiAgICAgICAgICAgIG9uR2V0SGVscD17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZSBpZiB5b3UgY2FuIGdldCB0aGUgd2luZG93IHdpZHRoIGFuZCBoZWlnaHQgYW5kIHVzZSB0aGF0IHRvIHNldCB0aGUgY29udGVudCBoZWlnaHQgYW5kIHdpZHRoXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17cHJvcHMubW9kYWxWaXNpYmxlfVxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIGF2b2lkS2V5Ym9hcmRcbiAgICAgIHNpemU9XCJmdWxsXCJcbiAgICAgIF9iYWNrZHJvcD17e1xuICAgICAgICBfZGFyazoge1xuICAgICAgICAgIGJnOiBcImJsYWNrXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgLy8gbXVsdGlwbHlpbmcgYnkgMC4yIGJlY2F1c2UgdGhlIG1vZGFsIGlzIDgwJSBvZiB0aGUgc2NyZWVuXG4gICAgICAgIHRvcD17c2Nyb2xsUG9zaXRpb24gKyAod2luZG93SGVpZ2h0ICogMC4yKSAvIDJ9XG4gICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgaGVpZ2h0PVwiODAlXCJcbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgc3BhY2U9e3NwYWNlLm1kfVxuICAgICAgICAgICAgcHk9e3NwYWNlLnhsfVxuICAgICAgICAgICAgcHg9e3NwYWNlLnhsfVxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgICBib3JkZXJDb2xvcj17XCJyZWQuNTAwXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICAgIHtyZW5kZXJDaGlsZChzdWJzY3JpcHRpb25TdGF0ZSl9XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiU3RhY2siLCJ0cmFja0V2ZW50IiwiY29tcG9zZUFjdGlvbiIsImNhdGVnb3JpZXMiLCJhY3Rpb25zIiwib2JqZWN0cyIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IiwiU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MiLCJTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCIsInNwYWNlIiwiU3Vic2NyaWJlTW9kYWwiLCJwcm9wcyIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3dIZWlnaHQiLCJzZXRXaW5kb3dIZWlnaHQiLCJodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsIm1vZGFsVmlzaWJsZSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uIiwiVklFVyIsIlNVQlNDUklCRV9NT0RBTCIsImNhdGVnb3J5IiwiU1VCU0NSSUJFIiwic3Vic2NyaXB0aW9uU3RhdGUiLCJzZXRzdWJzY3JpcHRpb25TdGF0ZSIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciIsIm1kIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});