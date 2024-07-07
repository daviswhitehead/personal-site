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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* harmony import */ var _SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SendingSubscriptionRequest */ \"./components/subscribe/SendingSubscriptionRequest.tsx\");\n/* harmony import */ var _SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubscriptionRequestSuccess */ \"./components/subscribe/SubscriptionRequestSuccess.tsx\");\n/* harmony import */ var _SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubscriptionRequestFail */ \"./components/subscribe/SubscriptionRequestFail.tsx\");\n/* harmony import */ var styling_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styling/spacing */ \"./styling/spacing.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),scrollPosition=_useState[0],setScrollPosition=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),windowHeight=_useState2[0],setWindowHeight=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var html=document.querySelector(\"html\");if(html){html.style.overflow=props.modalVisible?\"hidden\":\"auto\";setScrollPosition(window.pageYOffset);setWindowHeight(window.innerHeight);}},[props.modalVisible]);console.log(\"scrollPosition\",scrollPosition);console.log(\"windowHeight\",windowHeight);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"SENDING_SUBSCRIPTION_REQUEST\"),subscriptionState=_useState3[0],setsubscriptionState=_useState3[1];console.log(\"subscriptionState\",subscriptionState);var onSubmit=function onSubmit(email){setsubscriptionState(\"SENDING_SUBSCRIPTION_REQUEST\");var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.actionCodeSettings).then(function(){setsubscriptionState(\"SUBSCRIPTION_REQUEST_SUCCESS\");window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){setsubscriptionState(\"SUBSCRIPTION_REQUEST_FAIL\");var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};var tryAgain=function tryAgain(){console.log(\"hellow\");};var renderChild=function renderChild(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onSubmit:onSubmit,onCancel:function onCancel(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:11}});case\"SENDING_SUBSCRIPTION_REQUEST\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SendingSubscriptionRequest__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:16}});case\"SUBSCRIPTION_REQUEST_SUCCESS\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestSuccess__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{onDone:function onDone(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:11}});case\"SUBSCRIPTION_REQUEST_FAIL\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubscriptionRequestFail__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{onTryAgain:tryAgain,onGetHelp:function onGetHelp(){props.setModalVisible(false);},__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:11}});default:return null;}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"full\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},borderWidth:2,borderColor:\"purple.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Content,{flex:1,position:\"fixed\",top:scrollPosition+windowHeight*0.2/2,width:\"80%\",height:\"80%\",borderWidth:2,borderColor:\"orange.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:137,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},borderWidth:2,borderColor:\"green.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Modal.Body,{flex:1,borderWidth:2,borderColor:\"blue.500\",height:\"100%\",__self:this,__source:{fileName:_jsxFileName,lineNumber:163,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_10__.Stack,{height:\"100%\",direction:\"column\",alignItems:\"center\",justifyContent:\"center\",space:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.md,py:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,px:styling_spacing__WEBPACK_IMPORTED_MODULE_9__.space.xl,borderWidth:2,borderColor:\"red.500\",__self:this,__source:{fileName:_jsxFileName,lineNumber:169,columnNumber:11}},renderChild(subscriptionState)))));}_s(SubscribeModal,\"8U4Ki4BD18E+eRn9sBBejvzBa9U=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7dUlBeUJlLFFBQVNrQixDQUFBQSxjQUFULENBQXdCQyxLQUF4QixDQUFzQyxxQkFDbkQsY0FBNENqQiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEQsQ0FBT2tCLGNBQVAsY0FBdUJDLGlCQUF2QixjQUNBLGVBQXdDbkIsK0NBQVEsQ0FBQyxDQUFELENBQWhELENBQU9vQixZQUFQLGVBQXFCQyxlQUFyQixlQUVBdEIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBTXVCLENBQUFBLElBQUksQ0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWIsQ0FDQSxHQUFJRixJQUFKLENBQVUsQ0FDUkEsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFFBQVgsQ0FBc0JULEtBQUssQ0FBQ1UsWUFBTixDQUFxQixRQUFyQixDQUFnQyxNQUF0RCxDQUNBUixpQkFBaUIsQ0FBQ1MsTUFBTSxDQUFDQyxXQUFSLENBQWpCLENBQ0FSLGVBQWUsQ0FBQ08sTUFBTSxDQUFDRSxXQUFSLENBQWYsQ0FDRCxDQUNGLENBUFEsQ0FPTixDQUFDYixLQUFLLENBQUNVLFlBQVAsQ0FQTSxDQUFULENBUUFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLENBQThCZCxjQUE5QixFQUNBYSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQTRCWixZQUE1QixFQUVBckIsZ0RBQVMsQ0FBQyxVQUFNLENBQ2QsR0FBSWtCLEtBQUssQ0FBQ1UsWUFBVixDQUF3QixDQUN0QnhCLHFEQUFVLENBQUMsQ0FDVDhCLE1BQU0sQ0FBRTdCLHdEQUFhLENBQUNFLG1FQUFELENBQWVDLDhFQUFmLENBRFosQ0FFVDZCLFFBQVEsQ0FBRS9CLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNZLEtBQUssQ0FBQ1UsWUFBUCxDQVBNLENBQVQsQ0FZQSxlQUFrRDNC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LE1BQU0sQ0FBRSxDQUNObUMsRUFBRSxDQUFFLFVBREUsQ0FFTkUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FBRSxZQURGLENBRkQsQ0FEVixDQU9FLFFBQVEsQ0FBRSxDQUNSSCxFQUFFLENBQUUsVUFESSxDQUVSRSxLQUFLLENBQUUsQ0FDTEMsS0FBSyxDQUFFLFlBREYsQ0FGQyxDQVBaLENBYUUsV0FBVyxDQUFFLENBYmYsQ0FjRSxXQUFXLENBQUUsV0FkZiw2RUFWRixDQTBCRSwyREFBQyxvREFBRCxFQUNFLElBQUksQ0FBRSxDQURSLENBRUUsV0FBVyxDQUFFLENBRmYsQ0FHRSxXQUFXLENBQUUsVUFIZixDQUlFLE1BQU0sQ0FBQyxNQUpULDZFQU1FLDJEQUFDLCtDQUFELEVBQ0UsTUFBTSxDQUFDLE1BRFQsQ0FFRSxTQUFTLENBQUMsUUFGWixDQUdFLFVBQVUsQ0FBQyxRQUhiLENBSUUsY0FBYyxDQUFDLFFBSmpCLENBS0UsS0FBSyxDQUFFM0MscURBTFQsQ0FNRSxFQUFFLENBQUVBLHFEQU5OLENBT0UsRUFBRSxDQUFFQSxxREFQTixDQVFFLFdBQVcsQ0FBRSxDQVJmLENBU0UsV0FBVyxDQUFFLFNBVGYsOEVBWUdxQyxXQUFXLENBQUNkLGlCQUFELENBWmQsQ0FORixDQTFCRixDQWRGLENBREYsQ0FpRUQsSUFqS3VCdEIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgU3RhY2sgfSBmcm9tIFwibmF0aXZlLWJhc2VcIjtcbmltcG9ydCB7IHRyYWNrRXZlbnQsIGNvbXBvc2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGliL2d0YWdcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMsIGFjdGlvbnMsIG9iamVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FuYWx5dGljc0RlZmluaXRpb25zXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBzZW5kU2lnbkluTGlua1RvRW1haWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWN0aW9uQ29kZVNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IEF3YWl0aW5nU3Vic2NyaXB0aW9uIGZyb20gXCIuL0F3YWl0aW5nU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgZnJvbSBcIi4vU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3RcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyBmcm9tIFwiLi9TdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1wiO1xuaW1wb3J0IFN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIGZyb20gXCIuL1N1YnNjcmlwdGlvblJlcXVlc3RGYWlsXCI7XG5pbXBvcnQgeyBzcGFjZSB9IGZyb20gXCJzdHlsaW5nL3NwYWNpbmdcIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuaXJ1ZGh2c3AvaGFjay13aXRoLW5hdGl2ZWJhc2UtdHJhZGVib29rL2Jsb2IvZjNlYjhlZDY5ZjBmM2MwYTQ1MGJmZDQ5MjU3NzQyZjFmMDEzOTVkZC9wYWdlL0xvZ2luLmpzeFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHNldE1vZGFsVmlzaWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvblN0YXRlID1cbiAgfCBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgfCBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2luZG93SGVpZ2h0LCBzZXRXaW5kb3dIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGh0bWwuc3R5bGUub3ZlcmZsb3cgPSBwcm9wcy5tb2RhbFZpc2libGUgPyBcImhpZGRlblwiIDogXCJhdXRvXCI7XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbih3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgICAgc2V0V2luZG93SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7IC8vIGNvbmRpdGlvbiB0byB3YXRjaCB0byBwZXJmb3JtIHNpZGUgZWZmZWN0XG4gIGNvbnNvbGUubG9nKFwic2Nyb2xsUG9zaXRpb25cIiwgc2Nyb2xsUG9zaXRpb24pO1xuICBjb25zb2xlLmxvZyhcIndpbmRvd0hlaWdodFwiLCB3aW5kb3dIZWlnaHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1vZGFsVmlzaWJsZSkge1xuICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgIGFjdGlvbjogY29tcG9zZUFjdGlvbihhY3Rpb25zLlZJRVcsIG9iamVjdHMuU1VCU0NSSUJFX01PREFMKSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU1VCU0NSSUJFLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMubW9kYWxWaXNpYmxlXSk7XG5cbiAgLy8gY29uc3QgW3N1YnNjcmlwdGlvblN0YXRlLCBzZXRzdWJzY3JpcHRpb25TdGF0ZV0gPSB1c2VTdGF0ZTxTdWJzY3JpcHRpb25TdGF0ZT4oXG4gIC8vICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gIC8vICk7XG4gIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGU8U3Vic2NyaXB0aW9uU3RhdGU+KFxuICAgIFwiU0VORElOR19TVUJTQ1JJUFRJT05fUkVRVUVTVFwiXG4gICk7XG4gIGNvbnNvbGUubG9nKFwic3Vic2NyaXB0aW9uU3RhdGVcIiwgc3Vic2NyaXB0aW9uU3RhdGUpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBzZXRzdWJzY3JpcHRpb25TdGF0ZShcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIik7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICBzZW5kU2lnbkluTGlua1RvRW1haWwoYXV0aCwgZW1haWwsIGFjdGlvbkNvZGVTZXR0aW5ncylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gVGhlIGxpbmsgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LiBJbmZvcm0gdGhlIHVzZXIuXG4gICAgICAgIHNldHN1YnNjcmlwdGlvblN0YXRlKFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiKTtcblxuICAgICAgICAvLyBTYXZlIHRoZSBlbWFpbCBsb2NhbGx5IHNvIHlvdSBkb24ndCBuZWVkIHRvIGFzayB0aGUgdXNlciBmb3IgaXQgYWdhaW5cbiAgICAgICAgLy8gaWYgdGhleSBvcGVuIHRoZSBsaW5rIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxGb3JTaWduSW5cIiwgZW1haWwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0c3Vic2NyaXB0aW9uU3RhdGUoXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCIpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvckNvZGVcIiwgZXJyb3JDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvck1lc3NhZ2VcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRyeUFnYWluID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG93XCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoaWxkID0gKHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgXCJBV0FJVElOR19TVUJDUklQVElPTlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBd2FpdGluZ1N1YnNjcmlwdGlvblxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTRU5ESU5HX1NVQlNDUklQVElPTl9SRVFVRVNUXCI6XG4gICAgICAgIHJldHVybiA8U2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QgLz47XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2Vzc1xuICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfRkFJTFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdWJzY3JpcHRpb25SZXF1ZXN0RmFpbFxuICAgICAgICAgICAgb25UcnlBZ2Fpbj17dHJ5QWdhaW59XG4gICAgICAgICAgICBvbkdldEhlbHA9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICBzaXplPVwiZnVsbFwiXG4gICAgICBfYmFja2Ryb3A9e3tcbiAgICAgICAgX2Rhcms6IHtcbiAgICAgICAgICBiZzogXCJibGFja1wiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgIGJvcmRlckNvbG9yPXtcInB1cnBsZS41MDBcIn1cbiAgICA+XG4gICAgICA8TW9kYWwuQ29udGVudFxuICAgICAgICBmbGV4PXsxfVxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgLy8gbXVsdGlwbHlpbmcgYnkgMC4yIGJlY2F1c2UgdGhlIG1vZGFsIGlzIDgwJSBvZiB0aGUgc2NyZWVuXG4gICAgICAgIHRvcD17c2Nyb2xsUG9zaXRpb24gKyAod2luZG93SGVpZ2h0ICogMC4yKSAvIDJ9XG4gICAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgICAgaGVpZ2h0PVwiODAlXCJcbiAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgIGJvcmRlckNvbG9yPXtcIm9yYW5nZS41MDBcIn1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkNsb3NlQnV0dG9uXG4gICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICBiZzogXCJ1bnN0eWxlZFwiLFxuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlLjQwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGJvcmRlcldpZHRoPXsyfVxuICAgICAgICAgIGJvcmRlckNvbG9yPXtcImdyZWVuLjUwMFwifVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwuQm9keVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e1wiYmx1ZS41MDBcIn1cbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjZT17c3BhY2UubWR9XG4gICAgICAgICAgICBweT17c3BhY2UueGx9XG4gICAgICAgICAgICBweD17c3BhY2UueGx9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgICAgIGJvcmRlckNvbG9yPXtcInJlZC41MDBcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQ09NUE9ORU5UUyBIRVJFICovfVxuICAgICAgICAgICAge3JlbmRlckNoaWxkKHN1YnNjcmlwdGlvblN0YXRlKX1cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJTdGFjayIsInRyYWNrRXZlbnQiLCJjb21wb3NlQWN0aW9uIiwiY2F0ZWdvcmllcyIsImFjdGlvbnMiLCJvYmplY3RzIiwiZ2V0QXV0aCIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsIkF3YWl0aW5nU3Vic2NyaXB0aW9uIiwiU2VuZGluZ1N1YnNjcmlwdGlvblJlcXVlc3QiLCJTdWJzY3JpcHRpb25SZXF1ZXN0U3VjY2VzcyIsIlN1YnNjcmlwdGlvblJlcXVlc3RGYWlsIiwic3BhY2UiLCJTdWJzY3JpYmVNb2RhbCIsInByb3BzIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsIndpbmRvd0hlaWdodCIsInNldFdpbmRvd0hlaWdodCIsImh0bWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93IiwibW9kYWxWaXNpYmxlIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwib25TdWJtaXQiLCJlbWFpbCIsImF1dGgiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0cnlBZ2FpbiIsInJlbmRlckNoaWxkIiwic2V0TW9kYWxWaXNpYmxlIiwiX2RhcmsiLCJiZyIsIm9wYWNpdHkiLCJfaWNvbiIsImNvbG9yIiwibWQiLCJ4bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});