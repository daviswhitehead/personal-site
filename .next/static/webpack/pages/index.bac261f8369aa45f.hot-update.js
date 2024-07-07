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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* harmony import */ var styling_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styling/spacing */ \"./styling/spacing.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),windowHeight=_useState2[0],setWindowHeight=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){html.style.overflow=props.modalVisible?\"hidden\":\"auto\";setScrollPosition(window.pageYOffset);setWindowHeight(window.innerHeight);}},[props.modalVisible]);console.log(\"scrollPosition\",scrollPosition);console.log(\"windowHeight\",windowHeight);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),email=_useState3[0],setEmail=_useState3[1];var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),errorCode=_useState4[0],setErrorCode=_useState4[1];var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"AWAITING_SUBCRIPTION\"),subscriptionState=_useState5[0],setsubscriptionState=_useState5[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");setErrorCode(error.code);});};var onTextChange=function onTextChange(text){setEmail(text);};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onTextChange:onTextChange,onCancel:function onCancel(){props.setModalVisible(false);},email:email,__self:_this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},email:email,__self:_this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,errorCode:errorCode,__self:_this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:129,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Content,{position:\"fixed\",top:scrollPosition+windowHeight*0.2/2,width:{base:\"90%\",md:\"container.sm\"},height:\"40%\",alignItems:\"center\",justifyContent:\"center\",__self:this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:153,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Box,{maxW:\"container.sm\",__self:this,__source:{fileName:_jsxFileName,lineNumber:167,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Stack,{direction:\"column\",alignItems:\"center\",justifyContent:\"center\",space:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.md,py:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,px:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,__self:this,__source:{fileName:_jsxFileName,lineNumber:168,columnNumber:11}},renderChild(subscriptionState)))));}_s(SubscribeModal,\"cOYTb0+mt0jJLMQS3gL5o0wV3Ag=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7dUlBeUJlLFFBQVNtQixDQUFBQSxjQUFULENBQXdCQyxLQUF4QixDQUFzQyxxQkFFbkQsY0FBNENsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEQsQ0FBT21CLGNBQVAsY0FBdUJDLGlCQUF2QixjQUNBLGVBQXdDcEIsK0NBQVEsQ0FBQyxDQUFELENBQWhELENBQU9xQixZQUFQLGVBQXFCQyxlQUFyQixlQUNBdkIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBTXdCLENBQUFBLElBQUksQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJRixJQUFKLENBQVUsQ0FDUkEsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQVgsQ0FBc0JULEtBQUssQ0FBQ1UsWUFBTixDQUFxQixRQUFyQixDQUFnQyxNQUF0RCxDQUNBUixpQkFBaUIsQ0FBQ1MsTUFBTSxDQUFDQyxXQUFSLENBQWpCLENBQ0FSLGVBQWUsQ0FBQ08sTUFBTSxDQUFDRSxXQUFSLENBQWYsQ0FDRCxDQUNGLENBUFEsQ0FPTixDQUFDYixLQUFLLENBQUNVLFlBQVAsQ0FQTSxDQUFULENBUUFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLENBQThCZCxjQUE5QixFQUNBYSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQTRCWixZQUE1QixFQUdBdEIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBSW1CLEtBQUssQ0FBQ1UsWUFBVixDQUF3QixDQUN0QnhCLHFEQUFVLENBQUMsQ0FDVDhCLE1BQU0sQ0FBRTdCLHdEQUFhLENBQUNFLG1FQUFELENBQWVDLDhFQUFmLENBRFosQ0FFVDZCLFFBQVEsQ0FBRS9CLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNZLEtBQUssQ0FBQ1UsWUFBUCxDQVBNLENBQVQsQ0FVQSxlQUEwQjVC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QVNFLFVBQVUsQ0FBQyxRQVRiLENBVUUsY0FBYyxDQUFDLFFBVmpCLDZFQVlFLDJEQUFDLDJEQUFELEVBQ0UsTUFBTSxDQUFFLENBQ05ILEVBQUUsQ0FBRSxVQURFLENBRU5JLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZELENBRFYsQ0FPRSxRQUFRLENBQUUsQ0FDUkwsRUFBRSxDQUFFLFVBREksQ0FFUkksS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkMsQ0FQWiw2RUFaRixDQTBCRSwyREFBQyw2Q0FBRCxFQUFLLElBQUksQ0FBRSxjQUFYLDZFQUNFLDJEQUFDLCtDQUFELEVBQ0UsU0FBUyxDQUFDLFFBRFosQ0FFRSxVQUFVLENBQUMsUUFGYixDQUdFLGNBQWMsQ0FBQyxRQUhqQixDQUlFLEtBQUssQ0FBRS9DLHFEQUpULENBS0UsRUFBRSxDQUFFQSxxREFMTixDQU1FLEVBQUUsQ0FBRUEscURBTk4sOEVBUUd1QyxXQUFXLENBQUNaLGlCQUFELENBUmQsQ0FERixDQTFCRixDQVpGLENBREYsQ0FzREQsSUE1SnVCMUIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIE1vZGFsLCBTdGFjayB9IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcbmltcG9ydCBTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCBmcm9tIFwiLi9TZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdFwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcIjtcbmltcG9ydCB7IHNwYWNlIH0gZnJvbSBcInN0eWxpbmcvc3BhY2luZ1wiO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5pcnVkaHZzcC9oYWNrLXdpdGgtbmF0aXZlYmFzZS10cmFkZWJvb2svYmxvYi9mM2ViOGVkNjlmMGYzYzBhNDUwYmZkNDkyNTc3NDJmMWYwMTM5NWRkL3BhZ2UvTG9naW4uanN4XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1vZGFsVmlzaWJsZTogYm9vbGVhbjtcbiAgc2V0TW9kYWxWaXNpYmxlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uU3RhdGUgPVxuICB8IFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICB8IFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlTW9kYWwocHJvcHM6IFByb3BzKSB7XG4gIC8vIG1vZGFsIHBvc2l0aW9uaW5nXG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGh0bWwuc3R5bGUub3ZlcmZsb3cgPSBwcm9wcy5tb2RhbFZpc2libGUgPyBcImhpZGRlblwiIDogXCJhdXRvXCI7XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbih3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG4gIGNvbnNvbGUubG9nKFwic2Nyb2xsUG9zaXRpb25cIiwgc2Nyb2xsUG9zaXRpb24pO1xuICBjb25zb2xlLmxvZyhcIndpbmRvd0hlaWdodFwiLCB3aW5kb3dIZWlnaHQpO1xuXG4gIC8vIGFuYWx5dGljc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tb2RhbFZpc2libGUpIHtcbiAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICBhY3Rpb246IGNvbXBvc2VBY3Rpb24oYWN0aW9ucy5WSUVXLCBvYmplY3RzLlNVQlNDUklCRV9NT0RBTCksXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNVQlNDUklCRSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pO1xuXG4gIC8vIHN1YnNjcmlwdGlvbiBzdGF0ZVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JDb2RlLCBzZXRFcnJvckNvZGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICk7XG4gIC8vIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAvLyAgIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiXG4gIC8vICk7XG4gIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uU3RhdGVcIiwgc3Vic2NyaXB0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiKTtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9TVUNDRVNTXCIpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIGVtYWlsIGxvY2FsbHkgc28geW91IGRvbid0IG5lZWQgdG8gYXNrIHRoZSB1c2VyIGZvciBpdCBhZ2FpblxuICAgICAgICAvLyBpZiB0aGV5IG9wZW4gdGhlIGxpbmsgb24gdGhlIHNhbWUgZGV2aWNlLlxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbEZvclNpZ25JblwiLCBlbWFpbCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIik7XG5cbiAgICAgICAgc2V0RXJyb3JDb2RlKGVycm9yLmNvZGUpO1xuICAgICAgICAvLyBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25UZXh0Q2hhbmdlID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIHNldEVtYWlsKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IHRyeUFnYWluID0gKCkgPT4ge1xuICAgIC8vIHRvIGRvXG4gICAgY29uc29sZS5sb2coXCJoZWxsb3dcIik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ2hpbGQgPSAoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgY2FzZSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEF3YWl0aW5nU3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9e29uVGV4dENoYW5nZX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IC8+O1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3NcbiAgICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcbiAgICAgICAgICAgIG9uVHJ5QWdhaW49e3RyeUFnYWlufVxuICAgICAgICAgICAgZXJyb3JDb2RlPXtlcnJvckNvZGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgaXNPcGVuPXtwcm9wcy5tb2RhbFZpc2libGV9XG4gICAgICBvbkNsb3NlPXsoKSA9PiBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpfVxuICAgICAgYXZvaWRLZXlib2FyZFxuICAgICAgc2l6ZT1cImZ1bGxcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNb2RhbC5Db250ZW50XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAvLyBtdWx0aXBseWluZyBieSAwLjIgYmVjYXVzZSB0aGUgbW9kYWwgaXMgODAlIG9mIHRoZSBzY3JlZW5cbiAgICAgICAgdG9wPXtzY3JvbGxQb3NpdGlvbiArICh3aW5kb3dIZWlnaHQgKiAwLjIpIC8gMn1cbiAgICAgICAgd2lkdGg9e3tcbiAgICAgICAgICBiYXNlOiBcIjkwJVwiLFxuICAgICAgICAgIG1kOiBcImNvbnRhaW5lci5zbVwiLFxuICAgICAgICB9fVxuICAgICAgICBoZWlnaHQ9XCI0MCVcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8TW9kYWwuQ2xvc2VCdXR0b25cbiAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgIGJnOiBcInVuc3R5bGVkXCIsXG4gICAgICAgICAgICBfaWNvbjoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2UuMzAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgX3ByZXNzZWQ9e3tcbiAgICAgICAgICAgIGJnOiBcInVuc3R5bGVkXCIsXG4gICAgICAgICAgICBfaWNvbjoge1xuICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2UuNDAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggbWF4Vz17XCJjb250YWluZXIuc21cIn0+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjZT17c3BhY2UubWR9XG4gICAgICAgICAgICBweT17c3BhY2UueGx9XG4gICAgICAgICAgICBweD17c3BhY2UueGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlbmRlckNoaWxkKHN1YnNjcmlwdGlvblN0YXRlKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJNb2RhbCIsIlN0YWNrIiwidHJhY2tFdmVudCIsImNvbXBvc2VBY3Rpb24iLCJjYXRlZ29yaWVzIiwiYWN0aW9ucyIsIm9iamVjdHMiLCJnZXRBdXRoIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiQXdhaXRpbmdTdWJzY3JpcHRpb24iLCJTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCIsIlN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIiwiU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwiLCJzcGFjZSIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0IiwiaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJtb2RhbFZpc2libGUiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsIlZJRVciLCJTVUJTQ1JJQkVfTU9EQUwiLCJjYXRlZ29yeSIsIlNVQlNDUklCRSIsImVtYWlsIiwic2V0RW1haWwiLCJlcnJvckNvZGUiLCJzZXRFcnJvckNvZGUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwib25TdWJtaXQiLCJhdXRoIiwidGhlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvZGUiLCJvblRleHRDaGFuZ2UiLCJ0ZXh0IiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiYmFzZSIsIm1kIiwiX2ljb24iLCJjb2xvciIsInhsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});