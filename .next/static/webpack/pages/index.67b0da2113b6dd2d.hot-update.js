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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* harmony import */ var styling_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styling/spacing */ \"./styling/spacing.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),windowHeight=_useState2[0],setWindowHeight=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){html.style.overflow=props.modalVisible?\"hidden\":\"auto\";setScrollPosition(window.pageYOffset);setWindowHeight(window.innerHeight);}},[props.modalVisible]);console.log(\"scrollPosition\",scrollPosition);console.log(\"windowHeight\",windowHeight);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState3[0],setsubscriptionState=_useState3[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal,{flex:1,isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},borderWidth:2,borderColor:\"purple.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Content,{position:\"fixed\",top:scrollPosition+windowHeight*0.2/2,width:\"80%\",height:\"80%\",borderWidth:2,borderColor:\"orange.500\",alignItems:\"center\",justifyContent:\"center\",__self:this,__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},borderWidth:2,borderColor:\"green.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Box,{borderWidth:2,borderColor:\"blue.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:167,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Stack,{direction:\"column\",alignItems:\"center\",justifyContent:\"center\",space:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.md,py:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,px:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:173,columnNumber:11}},renderChild(subscriptionState)))));}_s(SubscribeModal,\"8U4Ki4BD18E+eRn9sBBejvzBa9U=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7dUlBeUJlLFFBQVNtQixDQUFBQSxjQUFULENBQXdCQyxLQUF4QixDQUFzQyxxQkFDbkQsY0FBNENsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEQsQ0FBT21CLGNBQVAsY0FBdUJDLGlCQUF2QixjQUNBLGVBQXdDcEIsK0NBQVEsQ0FBQyxDQUFELENBQWhELENBQU9xQixZQUFQLGVBQXFCQyxlQUFyQixlQUVBdkIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBTXdCLENBQUFBLElBQUksQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJRixJQUFKLENBQVUsQ0FDUkEsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQVgsQ0FBc0JULEtBQUssQ0FBQ1UsWUFBTixDQUFxQixRQUFyQixDQUFnQyxNQUF0RCxDQUNBUixpQkFBaUIsQ0FBQ1MsTUFBTSxDQUFDQyxXQUFSLENBQWpCLENBQ0FSLGVBQWUsQ0FBQ08sTUFBTSxDQUFDRSxXQUFSLENBQWYsQ0FDRCxDQUNGLENBUFEsQ0FPTixDQUFDYixLQUFLLENBQUNVLFlBQVAsQ0FQTSxDQUFULENBUUFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLENBQThCZCxjQUE5QixFQUNBYSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQTRCWixZQUE1QixFQUVBdEIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBSW1CLEtBQUssQ0FBQ1UsWUFBVixDQUF3QixDQUN0QnhCLHFEQUFVLENBQUMsQ0FDVDhCLE1BQU0sQ0FBRTdCLHdEQUFhLENBQUNFLG1FQUFELENBQWVDLDhFQUFmLENBRFosQ0FFVDZCLFFBQVEsQ0FBRS9CLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNZLEtBQUssQ0FBQ1UsWUFBUCxDQVBNLENBQVQsQ0FZQSxlQUFrRDVC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V0UsY0FBYyxDQUFDLFFBWGpCLDZFQWFFLDJEQUFDLDJEQUFELEVBQ0UsTUFBTSxDQUFFLENBQ05tQyxFQUFFLENBQUUsVUFERSxDQUVORSxLQUFLLENBQUUsQ0FDTEMsS0FBSyxDQUFFLFlBREYsQ0FGRCxDQURWLENBT0UsUUFBUSxDQUFFLENBQ1JILEVBQUUsQ0FBRSxVQURJLENBRVJFLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsWUFERixDQUZDLENBUFosQ0FhRSxXQUFXLENBQUUsQ0FiZixDQWNFLFdBQVcsQ0FBRSxXQWRmLDZFQWJGLENBNkJFLDJEQUFDLDZDQUFELEVBRUUsV0FBVyxDQUFFLENBRmYsQ0FHRSxXQUFXLENBQUUsVUFIZiw2RUFNRSwyREFBQywrQ0FBRCxFQUdFLFNBQVMsQ0FBQyxRQUhaLENBSUUsVUFBVSxDQUFDLFFBSmIsQ0FLRSxjQUFjLENBQUMsUUFMakIsQ0FNRSxLQUFLLENBQUUzQyxxREFOVCxDQU9FLEVBQUUsQ0FBRUEscURBUE4sQ0FRRSxFQUFFLENBQUVBLHFEQVJOLENBU0UsV0FBVyxDQUFFLENBVGYsQ0FVRSxXQUFXLENBQUUsU0FWZiw4RUFhR3FDLFdBQVcsQ0FBQ2QsaUJBQUQsQ0FiZCxDQU5GLENBN0JGLENBZkYsQ0FERixDQXNFRCxJQXRLdUJ0QixrREFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJzY3JpYmUvU3Vic2NyaWJlTW9kYWwudHN4PzNlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgTW9kYWwsIFN0YWNrIH0gZnJvbSBcIm5hdGl2ZS1iYXNlXCI7XG5pbXBvcnQgeyB0cmFja0V2ZW50LCBjb21wb3NlQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYi9ndGFnXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzLCBhY3Rpb25zLCBvYmplY3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hbmFseXRpY3NEZWZpbml0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgc2VuZFNpZ25JbkxpbmtUb0VtYWlsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGFjdGlvbkNvZGVTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBBd2FpdGluZ1N1YnNjcmlwdGlvbiBmcm9tIFwiLi9Bd2FpdGluZ1N1YnNjcmlwdGlvblwiO1xuaW1wb3J0IFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IGZyb20gXCIuL1NlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0XCI7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3MgZnJvbSBcIi4vU3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3NcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbCBmcm9tIFwiLi9TdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFwiO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tIFwic3R5bGluZy9zcGFjaW5nXCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmlydWRodnNwL2hhY2std2l0aC1uYXRpdmViYXNlLXRyYWRlYm9vay9ibG9iL2YzZWI4ZWQ2OWYwZjNjMGE0NTBiZmQ0OTI1Nzc0MmYxZjAxMzk1ZGQvcGFnZS9Mb2dpbi5qc3hcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbW9kYWxWaXNpYmxlOiBib29sZWFuO1xuICBzZXRNb2RhbFZpc2libGU6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxudHlwZSBTdWJzY3JpcHRpb25TdGF0ZSA9XG4gIHwgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIHwgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCJcbiAgfCBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpYmVNb2RhbChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3dpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGlmIChodG1sKSB7XG4gICAgICBodG1sLnN0eWxlLm92ZXJmbG93ID0gcHJvcHMubW9kYWxWaXNpYmxlID8gXCJoaWRkZW5cIiA6IFwiYXV0b1wiO1xuICAgICAgc2V0U2Nyb2xsUG9zaXRpb24od2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pOyAvLyBjb25kaXRpb24gdG8gd2F0Y2ggdG8gcGVyZm9ybSBzaWRlIGVmZmVjdFxuICBjb25zb2xlLmxvZyhcInNjcm9sbFBvc2l0aW9uXCIsIHNjcm9sbFBvc2l0aW9uKTtcbiAgY29uc29sZS5sb2coXCJ3aW5kb3dIZWlnaHRcIiwgd2luZG93SGVpZ2h0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tb2RhbFZpc2libGUpIHtcbiAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICBhY3Rpb246IGNvbXBvc2VBY3Rpb24oYWN0aW9ucy5WSUVXLCBvYmplY3RzLlNVQlNDUklCRV9NT0RBTCksXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNVQlNDUklCRSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pO1xuXG4gIC8vIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAvLyAgIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIlxuICAvLyApO1xuICBjb25zdCBbc3Vic2NyaXB0aW9uU3RhdGUsIHNldHN1YnNjcmlwdGlvblN0YXRlXSA9IHVzZVN0YXRlPFN1YnNjcmlwdGlvblN0YXRlPihcbiAgICBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICApO1xuICBjb25zb2xlLmxvZyhcInN1YnNjcmlwdGlvblN0YXRlXCIsIHN1YnNjcmlwdGlvblN0YXRlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCIpO1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgc2VuZFNpZ25JbkxpbmtUb0VtYWlsKGF1dGgsIGVtYWlsLCBhY3Rpb25Db2RlU2V0dGluZ3MpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIFRoZSBsaW5rIHdhcyBzdWNjZXNzZnVsbHkgc2VudC4gSW5mb3JtIHRoZSB1c2VyLlxuICAgICAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIik7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgZW1haWwgbG9jYWxseSBzbyB5b3UgZG9uJ3QgbmVlZCB0byBhc2sgdGhlIHVzZXIgZm9yIGl0IGFnYWluXG4gICAgICAgIC8vIGlmIHRoZXkgb3BlbiB0aGUgbGluayBvbiB0aGUgc2FtZSBkZXZpY2UuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsRm9yU2lnbkluXCIsIGVtYWlsKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiKTtcblxuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JDb2RlXCIsIGVycm9yQ29kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlXCIsIGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0cnlBZ2FpbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvd1wiKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGlsZCA9IChzdWJzY3JpcHRpb25TdGF0ZTogU3Vic2NyaXB0aW9uU3RhdGUpID0+IHtcbiAgICBzd2l0Y2ggKHN1YnNjcmlwdGlvblN0YXRlKSB7XG4gICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXdhaXRpbmdTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRpbmdTdWJzY3JpcHRpb25SZXF1ZXN0IC8+O1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX1NVQ0NFU1NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdFN1Y2Nlc3NcbiAgICAgICAgICAgIG9uRG9uZT17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNVQlNDUklQVElPTl9SRVFVRVNUX0ZBSUxcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3Vic2NyaXB0aW9uUmVxdWVzdEZhaWxcbiAgICAgICAgICAgIG9uVHJ5QWdhaW49e3RyeUFnYWlufVxuICAgICAgICAgICAgb25HZXRIZWxwPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VlIGlmIHlvdSBjYW4gZ2V0IHRoZSB3aW5kb3cgd2lkdGggYW5kIGhlaWdodCBhbmQgdXNlIHRoYXQgdG8gc2V0IHRoZSBjb250ZW50IGhlaWdodCBhbmQgd2lkdGhcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgZmxleD17MX1cbiAgICAgIGlzT3Blbj17cHJvcHMubW9kYWxWaXNpYmxlfVxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIGF2b2lkS2V5Ym9hcmRcbiAgICAgIHNpemU9XCJmdWxsXCJcbiAgICAgIF9iYWNrZHJvcD17e1xuICAgICAgICBfZGFyazoge1xuICAgICAgICAgIGJnOiBcImJsYWNrXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgYm9yZGVyQ29sb3I9e1wicHVycGxlLjUwMFwifVxuICAgID5cbiAgICAgIDxNb2RhbC5Db250ZW50XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAvLyBtdWx0aXBseWluZyBieSAwLjIgYmVjYXVzZSB0aGUgbW9kYWwgaXMgODAlIG9mIHRoZSBzY3JlZW5cbiAgICAgICAgdG9wPXtzY3JvbGxQb3NpdGlvbiArICh3aW5kb3dIZWlnaHQgKiAwLjIpIC8gMn1cbiAgICAgICAgd2lkdGg9XCI4MCVcIlxuICAgICAgICBoZWlnaHQ9XCI4MCVcIlxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wib3JhbmdlLjUwMFwifVxuICAgICAgICAvLyBmbGV4PXsxfVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgLy8gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgICBib3JkZXJDb2xvcj17XCJncmVlbi41MDBcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIC8vIGZsZXg9ezF9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e1wiYmx1ZS41MDBcIn1cbiAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgLy8gZmxleD17MTAwfVxuICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTIwMFwiXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjZT17c3BhY2UubWR9XG4gICAgICAgICAgICBweT17c3BhY2UueGx9XG4gICAgICAgICAgICBweD17c3BhY2UueGx9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgICAgIGJvcmRlckNvbG9yPXtcInJlZC41MDBcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgICAge3JlbmRlckNoaWxkKHN1YnNjcmlwdGlvblN0YXRlKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWwuQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJNb2RhbCIsIlN0YWNrIiwidHJhY2tFdmVudCIsImNvbXBvc2VBY3Rpb24iLCJjYXRlZ29yaWVzIiwiYWN0aW9ucyIsIm9iamVjdHMiLCJnZXRBdXRoIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwiYWN0aW9uQ29kZVNldHRpbmdzIiwiQXdhaXRpbmdTdWJzY3JpcHRpb24iLCJTZW5kaW5nU3Vic2NyaXB0aW9uUmVxdWVzdCIsIlN1YnNjcmlwdGlvblJlcXVlc3RTdWNjZXNzIiwiU3Vic2NyaXB0aW9uUmVxdWVzdEZhaWwiLCJzcGFjZSIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0IiwiaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJtb2RhbFZpc2libGUiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsIlZJRVciLCJTVUJTQ1JJQkVfTU9EQUwiLCJjYXRlZ29yeSIsIlNVQlNDUklCRSIsInN1YnNjcmlwdGlvblN0YXRlIiwic2V0c3Vic2NyaXB0aW9uU3RhdGUiLCJvblN1Ym1pdCIsImVtYWlsIiwiYXV0aCIsInRoZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInRyeUFnYWluIiwicmVuZGVyQ2hpbGQiLCJzZXRNb2RhbFZpc2libGUiLCJfZGFyayIsImJnIiwib3BhY2l0eSIsIl9pY29uIiwiY29sb3IiLCJtZCIsInhsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});