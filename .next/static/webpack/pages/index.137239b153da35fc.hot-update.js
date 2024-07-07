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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),windowHeight=_useState2[0],setWindowHeight=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){html.style.overflow=props.modalVisible?\"hidden\":\"auto\";setScrollPosition(window.pageYOffset);setWindowHeight(window.innerHeight);}},[props.modalVisible]);console.log(\"scrollPosition\",scrollPosition);console.log(\"windowHeight\",windowHeight);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState3[0],setsubscriptionState=_useState3[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{position:\"fixed\",top:scrollPosition+windowHeight*0.2/2,width:\"80%\",height:\"80%\",borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:148,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:162,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:176,columnNumber:9}},renderChild(subscriptionState))));}_s(SubscribeModal,\"8U4Ki4BD18E+eRn9sBBejvzBa9U=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUF3QmUsUUFBU2dCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRCxjQUE0Q2YsK0NBQVEsQ0FBQyxDQUFELENBQXBELENBQU9nQixjQUFQLGNBQXVCQyxpQkFBdkIsY0FDQSxlQUF3Q2pCLCtDQUFRLENBQUMsQ0FBRCxDQUFoRCxDQUFPa0IsWUFBUCxlQUFxQkMsZUFBckIsZUFFQXBCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQU1xQixDQUFBQSxJQUFJLENBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQ0EsR0FBSUYsSUFBSixDQUFVLENBQ1JBLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxRQUFYLENBQXNCVCxLQUFLLENBQUNVLFlBQU4sQ0FBcUIsUUFBckIsQ0FBZ0MsTUFBdEQsQ0FDQVIsaUJBQWlCLENBQUNTLE1BQU0sQ0FBQ0MsV0FBUixDQUFqQixDQUNBUixlQUFlLENBQUNPLE1BQU0sQ0FBQ0UsV0FBUixDQUFmLENBQ0QsQ0FDRixDQVBRLENBT04sQ0FBQ2IsS0FBSyxDQUFDVSxZQUFQLENBUE0sQ0FBVCxDQVFBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixDQUE4QmQsY0FBOUIsRUFDQWEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUE0QlosWUFBNUIsRUFFQW5CLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlnQixLQUFLLENBQUNVLFlBQVYsQ0FBd0IsQ0FDdEJ2QixxREFBVSxDQUFDLENBQ1Q2QixNQUFNLENBQUU1Qix3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVQ0QixRQUFRLENBQUU5QiwyRUFGRCxDQUFELENBQVYsQ0FJRCxDQUNGLENBUFEsQ0FPTixDQUFDVyxLQUFLLENBQUNVLFlBQVAsQ0FQTSxDQUFULENBWUEsZUFBa0R6Qiwr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LEVBQUUsQ0FBRSxVQURFLENBRU5FLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZELENBRFYsQ0FPRSxRQUFRLENBQUUsQ0FDUkgsRUFBRSxDQUFFLFVBREksQ0FFUkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkMsQ0FQWiw2RUFkRixDQTRCRSwyREFBQyxtREFBRCw4RUFFR04sV0FBVyxDQUFDZCxpQkFBRCxDQUZkLENBNUJGLENBMUJGLENBREYsQ0E4RUQsSUE5S3VCdEIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJuYXRpdmUtYmFzZVwiO1xuaW1wb3J0IHsgdHJhY2tFdmVudCwgY29tcG9zZUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgYWN0aW9ucywgb2JqZWN0cyB9IGZyb20gXCIuLi8uLi9saWIvYW5hbHl0aWNzRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcbmltcG9ydCBTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCBmcm9tIFwiLi9TZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdFwiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzXCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuaXJ1ZGh2c3AvaGFjay13aXRoLW5hdGl2ZWJhc2UtdHJhZGVib29rL2Jsb2IvZjNlYjhlZDY5ZjBmM2MwYTQ1MGJmZDQ5MjU3NzQyZjFmMDEzOTVkZC9wYWdlL0xvZ2luLmpzeFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHNldE1vZGFsVmlzaWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvblN0YXRlID1cbiAgfCBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgfCBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGh0bWwuc3R5bGUub3ZlcmZsb3cgPSBwcm9wcy5tb2RhbFZpc2libGUgPyBcImhpZGRlblwiIDogXCJhdXRvXCI7XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbih3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7IC8vIGNvbmRpdGlvbiB0byB3YXRjaCB0byBwZXJmb3JtIHNpZGUgZWZmZWN0XG4gIGNvbnNvbGUubG9nKFwic2Nyb2xsUG9zaXRpb25cIiwgc2Nyb2xsUG9zaXRpb24pO1xuICBjb25zb2xlLmxvZyhcIndpbmRvd0hlaWdodFwiLCB3aW5kb3dIZWlnaHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1vZGFsVmlzaWJsZSkge1xuICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgIGFjdGlvbjogY29tcG9zZUFjdGlvbihhY3Rpb25zLlZJRVcsIG9iamVjdHMuU1VCU0NSSUJFX01PREFMKSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU1VCU0NSSUJFLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG5cbiAgLy8gY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gIC8vICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIC8vICk7XG4gIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAgIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gICk7XG4gIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uU3RhdGVcIiwgc3Vic2NyaXB0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIik7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gVGhlIGxpbmsgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LiBJbmZvcm0gdGhlIHVzZXIuXG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiKTtcblxuICAgICAgICAvLyBTYXZlIHRoZSBlbWFpbCBsb2NhbGx5IHNvIHlvdSBkb24ndCBuZWVkIHRvIGFzayB0aGUgdXNlciBmb3IgaXQgYWdhaW5cbiAgICAgICAgLy8gaWYgdGhleSBvcGVuIHRoZSBsaW5rIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxGb3JTaWduSW5cIiwgZW1haWwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCIpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvckNvZGVcIiwgZXJyb3JDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvck1lc3NhZ2VcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRyeUFnYWluID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG93XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoaWxkID0gKHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgXCJBV0FJVElOR19TVUJDUklQVElPTlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCI6XG4gICAgICAgIHJldHVybiA8U2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgLz47XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1xuICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFxuICAgICAgICAgICAgb25UcnlBZ2Fpbj17dHJ5QWdhaW59XG4gICAgICAgICAgICBvbkdldEhlbHA9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICAvLyBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIC8vIHRvcD1cIjBcIlxuICAgICAgLy8gYm90dG9tPVwiMFwiXG4gICAgICAvLyB3aWR0aD1cIjEwMCVcIlxuICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAvLyB6LWluZGV4PVwiOTk5OVwiXG4gICAgICAvLyBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICBzaXplPVwiZnVsbFwiXG4gICAgICAvLyBzaXplPVwibGdcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgLy8gcD1cIjIwXCJcbiAgICAgIC8vIHA9XCIyMFwiXG4gICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgIGJvcmRlckNvbG9yPXtcInJlZC41MDBcIn1cbiAgICA+XG4gICAgICB7LyogdGhlIGxpbmUgYmVsb3cgbmVlZHMgdG8gYmUgZHluYW1pYyBzb21laG93ICovfVxuICAgICAgey8qIDxNb2RhbC5Db250ZW50IHBvc2l0aW9uPVwic3RpY2t5XCIgbWFyZ2luVG9wPXswfSB0b3A9XCIyMzVcIiBib3R0b209XCIyMzVcIj4gKi99XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgdG9wPXtzY3JvbGxQb3NpdGlvbiArICh3aW5kb3dIZWlnaHQgKiAwLjIpIC8gMn1cbiAgICAgICAgLy8gdG9wPXtzY3JvbGxQb3NpdGlvbiArIDIwfVxuICAgICAgICAvLyBib3R0b209e3Njcm9sbFBvc2l0aW9ufVxuICAgICAgICAvLyBib3R0b209XCIwXCJcbiAgICAgICAgLy8gdG9wPVwiMTBcIlxuICAgICAgICAvLyBib3R0b209XCIxMFwiXG4gICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgaGVpZ2h0PVwiODAlXCJcbiAgICAgICAgLy8gei1pbmRleD1cIjk5OTlcIlxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wiYmx1ZS41MDBcIn1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgIHtyZW5kZXJDaGlsZChzdWJzY3JpcHRpb25TdGF0ZSl9XG4gICAgICAgICAgey8qIHtzdWJzY3JpcHRpb25TdGF0ZSA9PSBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsoc3Vic2NyaXB0aW9uU3RhdGU6IFN1YnNjcmlwdGlvblN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEF3YWl0aW5nU3Vic2NyaXB0aW9uIG9uU3VibWl0PXtvblN1Ym1pdH0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0gKi99XG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsInRyYWNrRXZlbnQiLCJjb21wb3NlQWN0aW9uIiwiY2F0ZWdvcmllcyIsImFjdGlvbnMiLCJvYmplY3RzIiwiZ2V0QXV0aCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsIkF3YWl0aW5nU3Vic2NyaXB0aW9uIiwiU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QiLCJTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyIsIlN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIiwiU3Vic2NyaWJlTW9kYWwiLCJwcm9wcyIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3dIZWlnaHQiLCJzZXRXaW5kb3dIZWlnaHQiLCJodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsIm1vZGFsVmlzaWJsZSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uIiwiVklFVyIsIlNVQlNDUklCRV9NT0RBTCIsImNhdGVnb3J5IiwiU1VCU0NSSUJFIiwic3Vic2NyaXB0aW9uU3RhdGUiLCJzZXRzdWJzY3JpcHRpb25TdGF0ZSIsIm9uU3VibWl0IiwiZW1haWwiLCJhdXRoIiwidGhlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidHJ5QWdhaW4iLCJyZW5kZXJDaGlsZCIsInNldE1vZGFsVmlzaWJsZSIsIl9kYXJrIiwiYmciLCJvcGFjaXR5IiwiX2ljb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});