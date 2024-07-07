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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscribeModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! native-base */ \"./node_modules/native-base/lib/module/index.js\");\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ \"./lib/gtag.ts\");\n/* harmony import */ var _lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/analyticsDefinitions */ \"./lib/analyticsDefinitions.ts\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ \"./components/Avatar.tsx\");\n/* harmony import */ var _styling_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styling/spacing */ \"./styling/spacing.ts\");\n/* harmony import */ var _LinkWithIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LinkWithIcon */ \"./components/LinkWithIcon.tsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/firebaseConfig */ \"./lib/firebaseConfig.ts\");\n/* harmony import */ var _AwaitingSubscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AwaitingSubscription */ \"./components/subscribe/AwaitingSubscription.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName=\"/Users/daviswhitehead/Documents/github/daviswhitehead.com/components/subscribe/SubscribeModal.tsx\",_s=$RefreshSig$();function SubscribeModal(props){_s();var _this=this;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(props.modalVisible){(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.trackEvent)({action:(0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.composeAction)(_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.actions.VIEW,_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.objects.SUBSCRIBE_MODAL),category:_lib_analyticsDefinitions__WEBPACK_IMPORTED_MODULE_2__.categories.SUBSCRIBE});}},[props.modalVisible]);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"AWAITING_SUBCRIPTION\"),subscriptionState=_useState[0],setsubscriptionState=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),email=_useState2[0],setEmail=_useState2[1];var handleSubmit=function handleSubmit(){console.log(\"handleSubmit\");console.log(\"email\",email);var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();(0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.sendSignInLinkToEmail)(auth,email,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__.actionCodeSettings).then(function(){window.localStorage.setItem(\"emailForSignIn\",email);})[\"catch\"](function(error){var errorCode=error.code;var errorMessage=error.message;console.log(\"errorCode\",errorCode);console.log(\"errorMessage\",errorMessage);});};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal,{isOpen:props.modalVisible,onClose:function onClose(){return props.setModalVisible(false);},avoidKeyboard:true,size:\"lg\",_backdrop:{_dark:{bg:\"black\",opacity:0.9}},__self:this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:5}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Content,{position:\"sticky\",marginTop:0,top:\"235\",bottom:\"235\",__self:this,__source:{fileName:_jsxFileName,lineNumber:120,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.CloseButton,{_hover:{bg:\"unstyled\",_icon:{color:\"orange.300\"}},_pressed:{bg:\"unstyled\",_icon:{color:\"orange.400\"}},__self:this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:9}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Modal.Body,{__self:this,__source:{fileName:_jsxFileName,lineNumber:135,columnNumber:9}},function(subscriptionState){switch(subscriptionState){case\"AWAITING_SUBCRIPTION\":return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AwaitingSubscription__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:24}});}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Stack,{direction:\"column\",alignItems:\"center\",space:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.md,py:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.xl,px:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.xl,__self:this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{m:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.xl,__self:this,__source:{fileName:_jsxFileName,lineNumber:150,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.VStack,{__self:this,__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Text,{fontFamily:\"heading\",fontWeight:\"500\",fontSize:\"md\",textAlign:\"center\",__self:this,__source:{fileName:_jsxFileName,lineNumber:152,columnNumber:15}},\"Stay up to date with Davis\"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Text,{fontFamily:\"body\",fontWeight:\"200\",fontSize:\"sm\",textAlign:\"center\",__self:this,__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:15}},\"Reflections on living intentionally -- product pitches, life experiments, and personal vignettes.\")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.VStack,{space:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.sm,__self:this,__source:{fileName:_jsxFileName,lineNumber:170,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.FormControl,{mt:\"3\",p:_styling_spacing__WEBPACK_IMPORTED_MODULE_4__.space.sm,borderColor:\"orange.400\",__self:this,__source:{fileName:_jsxFileName,lineNumber:171,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Input,{placeholder:\"Type your email...\",type:\"text\",_hover:{borderColor:\"orange.300\"},_focus:{borderColor:\"orange.300\",bg:\"unstyled\",borderWidth:\"1\"},focusOutlineColor:\"orange.300\",borderColor:\"orange.300\",value:email,onChangeText:function onChangeText(e){setEmail(e);},InputRightElement:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Button,{rounded:\"none\",w:\"1/6\",h:\"100%\",p:0,px:10,bg:\"orange.300\",_hover:{bg:\"orange.300\"},_pressed:{bg:\"orange.400\"},onPress:handleSubmit,__self:this,__source:{fileName:_jsxFileName,lineNumber:192,columnNumber:21}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_9__.Text,{color:\"black\",__self:this,__source:{fileName:_jsxFileName,lineNumber:208,columnNumber:23}},\"Subscribe\")),__self:this,__source:{fileName:_jsxFileName,lineNumber:172,columnNumber:17}})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkWithIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{onPress:function onPress(){props.setModalVisible(false);},copy:\"No thanks\",target:\"_blank\",fontSize:\"sm\",__self:this,__source:{fileName:_jsxFileName,lineNumber:213,columnNumber:15}}))))));}_s(SubscribeModal,\"rF8kgaxEGyjjoNZ8YJWYR2gXKqc=\");_c=SubscribeModal;var _c;$RefreshReg$(_c,\"SubscribeModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS9TdWJzY3JpYmVNb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1SUFrQ2UsUUFBU3NCLENBQUFBLGNBQVQsQ0FBd0JDLEtBQXhCLENBQXNDLHFCQUNuRHRCLGdEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlzQixLQUFLLENBQUNDLFlBQVYsQ0FBd0IsQ0FDdEJkLHFEQUFVLENBQUMsQ0FDVGUsTUFBTSxDQUFFZCx3REFBYSxDQUFDRSxtRUFBRCxDQUFlQyw4RUFBZixDQURaLENBRVRjLFFBQVEsQ0FBRWhCLDJFQUZELENBQUQsQ0FBVixDQUlELENBQ0YsQ0FQUSxDQU9OLENBQUNXLEtBQUssQ0FBQ0MsWUFBUCxDQVBNLENBQVQsQ0FTQSxjQUFrRHRCLCtDQUFRLENBQ3hELHNCQUR3RCxDQUExRCxDQUFPNEIsaUJBQVAsY0FBMEJDLG9CQUExQixjQUlBLGVBQTBCN0IsK0NBQVEsQ0FBQyxFQUFELENBQWxDLENBQU84QixLQUFQLGVBQWNDLFFBQWQsZUFPQSxHQUFNQyxDQUFBQSxZQUFZLENBQUcsUUFBZkEsQ0FBQUEsWUFBZSxFQUFNLENBQ3pCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBcUJKLEtBQXJCLEVBRUEsR0FBTUssQ0FBQUEsSUFBSSxDQUFHbkIsc0RBQU8sRUFBcEIsQ0FDQUMsb0VBQXFCLENBQUNrQixJQUFELENBQU9MLEtBQVAsQ0FBY1osbUVBQWQsQ0FBckIsQ0FDR2tCLElBREgsQ0FDUSxVQUFNLENBSVZDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZ0JBQTVCLENBQThDVCxLQUE5QyxFQUVELENBUEgsV0FRUyxTQUFDVSxLQUFELENBQVcsQ0FDaEIsR0FBTUMsQ0FBQUEsU0FBUyxDQUFHRCxLQUFLLENBQUNFLElBQXhCLENBQ0EsR0FBTUMsQ0FBQUEsWUFBWSxDQUFHSCxLQUFLLENBQUNJLE9B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Q0FBRSxDQUNOVCxFQUFFLENBQUUsWUFERSxDQVBWLENBVUUsUUFBUSxDQUFFLENBQ1JBLEVBQUUsQ0FBRSxZQURJLENBVlosQ0FhRSxPQUFPLENBQUVmLFlBYlgsOEVBZ0JFLDJEQUFDLDZDQUFELEVBQU0sS0FBSyxDQUFFLE9BQWIsOEVBQXNCLFdBQXRCLENBaEJGLENBcEJKLDhFQURGLENBREYsQ0EyQ0UsMkRBQUMscURBQUQsRUFDRSxPQUFPLENBQUUsa0JBQU0sQ0FDYlgsS0FBSyxDQUFDd0IsZUFBTixDQUFzQixLQUF0QixFQUNELENBSEgsQ0FJRSxJQUFJLENBQUMsV0FKUCxDQUtFLE1BQU0sQ0FBQyxRQUxULENBTUUsUUFBUSxDQUFDLElBTlgsOEVBM0NGLENBM0JGLENBUkYsQ0FmRixDQWRGLENBREYsQ0EwSEQsSUFoTXVCekIsa0RBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Vic2NyaWJlL1N1YnNjcmliZU1vZGFsLnRzeD8zZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgSW5wdXQsXG4gIE1vZGFsLFxuICBTdGFjayxcbiAgVGV4dCxcbiAgQnV0dG9uLFxuICBWU3RhY2ssXG4gIC8vIHVzZVRvYXN0LFxufSBmcm9tIFwibmF0aXZlLWJhc2VcIjtcbmltcG9ydCB7IHRyYWNrRXZlbnQsIGNvbXBvc2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGliL2d0YWdcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXMsIGFjdGlvbnMsIG9iamVjdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FuYWx5dGljc0RlZmluaXRpb25zXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9BdmF0YXJcIjtcbi8vIGltcG9ydCBIMyBmcm9tIFwiLi90eXBlb2dyYXBoeS9IM1wiO1xuaW1wb3J0IHsgc3BhY2UgfSBmcm9tIFwiLi4vLi4vc3R5bGluZy9zcGFjaW5nXCI7XG5pbXBvcnQgTGlua1dpdGhJY29uIGZyb20gXCIuLi9MaW5rV2l0aEljb25cIjtcbmltcG9ydCB7IGdldEF1dGgsIHNlbmRTaWduSW5MaW5rVG9FbWFpbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhY3Rpb25Db2RlU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgQXdhaXRpbmdTdWJzY3JpcHRpb24gZnJvbSBcIi4vQXdhaXRpbmdTdWJzY3JpcHRpb25cIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuaXJ1ZGh2c3AvaGFjay13aXRoLW5hdGl2ZWJhc2UtdHJhZGVib29rL2Jsb2IvZjNlYjhlZDY5ZjBmM2MwYTQ1MGJmZDQ5MjU3NzQyZjFmMDEzOTVkZC9wYWdlL0xvZ2luLmpzeFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHNldE1vZGFsVmlzaWJsZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvblN0YXRlID1cbiAgfCBcIkFXQUlUSU5HX1NVQkNSSVBUSU9OXCJcbiAgfCBcIlNFTkRJTkdfU1VCU0NSSVBUSU9OX1JFUVVFU1RcIlxuICB8IFwiU1VCU0NSSVBUSU9OX1JFUVVFU1RfU1VDQ0VTU1wiXG4gIHwgXCJTVUJTQ1JJUFRJT05fUkVRVUVTVF9GQUlMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZU1vZGFsKHByb3BzOiBQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tb2RhbFZpc2libGUpIHtcbiAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICBhY3Rpb246IGNvbXBvc2VBY3Rpb24oYWN0aW9ucy5WSUVXLCBvYmplY3RzLlNVQlNDUklCRV9NT0RBTCksXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNVQlNDUklCRSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1vZGFsVmlzaWJsZV0pO1xuXG4gIGNvbnN0IFtzdWJzY3JpcHRpb25TdGF0ZSwgc2V0c3Vic2NyaXB0aW9uU3RhdGVdID0gdXNlU3RhdGUoXG4gICAgXCJBV0FJVElOR19TVUJDUklQVElPTlwiXG4gICk7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc29sZS5sb2coXCJzZXRFbWFpbFwiLCBzZXRFbWFpbCk7XG5cbiAgLy8gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVTdWJtaXRcIik7XG4gICAgY29uc29sZS5sb2coXCJlbWFpbFwiLCBlbWFpbCk7XG5cbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIHNlbmRTaWduSW5MaW5rVG9FbWFpbChhdXRoLCBlbWFpbCwgYWN0aW9uQ29kZVNldHRpbmdzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgbGluayB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuIEluZm9ybSB0aGUgdXNlci5cbiAgICAgICAgLy8gU2F2ZSB0aGUgZW1haWwgbG9jYWxseSBzbyB5b3UgZG9uJ3QgbmVlZCB0byBhc2sgdGhlIHVzZXIgZm9yIGl0IGFnYWluXG4gICAgICAgIC8vIGlmIHRoZXkgb3BlbiB0aGUgbGluayBvbiB0aGUgc2FtZSBkZXZpY2UuXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsRm9yU2lnbkluXCIsIGVtYWlsKTtcbiAgICAgICAgLy8gLi4uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JDb2RlXCIsIGVycm9yQ29kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlXCIsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIC8vIC4uLlxuICAgICAgfSk7XG5cbiAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vIGNvbnN0IHsgc2Vzc2lvbiwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnblVwKHtcbiAgICAvLyAgIGVtYWlsOiBlbWFpbCxcbiAgICAvLyAgIHBhc3N3b3JkOiBlbWFpbC5zcGxpdChcIkBcIilbMF0sXG4gICAgLy8gfSk7XG4gICAgLy8gaWYgKCFlcnJvciB8fCBlcnJvci5tZXNzYWdlID09PSBcIlVzZXIgYWxyZWFkeSByZWdpc3RlcmVkXCIpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHVzZXIsIHNlc3Npb24sIGVycm9yKTtcbiAgICAvLyAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluKHtcbiAgICAvLyAgICAgZW1haWwsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHRvYXN0LnNob3coe1xuICAgIC8vICAgICB0aXRsZTogXCJMb2dpbiBMaW5rIHNlbnQgdG8gZW1haWxcIixcbiAgICAvLyAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICAgIC8vICAgfSk7XG4gICAgLy8gICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdG9hc3Quc2hvdyh7XG4gICAgLy8gICAgIHRpdGxlOiBlcnJvci5tZXNzYWdlLFxuICAgIC8vICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhzdXBhYmFzZS5hdXRoLmN1cnJlbnRVc2VyKTtcbiAgfTtcblxuICAvLyBTZWUgaWYgeW91IGNhbiBnZXQgdGhlIHdpbmRvdyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCB1c2UgdGhhdCB0byBzZXQgdGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB3aWR0aFxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e3Byb3BzLm1vZGFsVmlzaWJsZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHByb3BzLnNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG4gICAgICBhdm9pZEtleWJvYXJkXG4gICAgICAvLyBzaXplPVwiZnVsbFwiXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgX2JhY2tkcm9wPXt7XG4gICAgICAgIF9kYXJrOiB7XG4gICAgICAgICAgYmc6IFwiYmxhY2tcIixcbiAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiB0aGUgbGluZSBiZWxvdyBuZWVkcyB0byBiZSBkeW5hbWljIHNvbWVob3cgKi99XG4gICAgICA8TW9kYWwuQ29udGVudCBwb3NpdGlvbj1cInN0aWNreVwiIG1hcmdpblRvcD17MH0gdG9wPVwiMjM1XCIgYm90dG9tPVwiMjM1XCI+XG4gICAgICAgIDxNb2RhbC5DbG9zZUJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBfcHJlc3NlZD17e1xuICAgICAgICAgICAgYmc6IFwidW5zdHlsZWRcIixcbiAgICAgICAgICAgIF9pY29uOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZS40MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgey8qIENPTVBPTkVOVFMgSEVSRSAqL31cbiAgICAgICAgICB7KHN1YnNjcmlwdGlvblN0YXRlOiBTdWJzY3JpcHRpb25TdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiQVdBSVRJTkdfU1VCQ1JJUFRJT05cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPEF3YWl0aW5nU3Vic2NyaXB0aW9uIC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBzcGFjZT17c3BhY2UubWR9XG4gICAgICAgICAgICBweT17c3BhY2UueGx9XG4gICAgICAgICAgICBweD17c3BhY2UueGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEF2YXRhciBtPXtzcGFjZS54bH0gLz5cbiAgICAgICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cImhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGF5IHVwIHRvIGRhdGUgd2l0aCBEYXZpc1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cImJvZHlcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWZsZWN0aW9ucyBvbiBsaXZpbmcgaW50ZW50aW9uYWxseSAtLSBwcm9kdWN0IHBpdGNoZXMsIGxpZmVcbiAgICAgICAgICAgICAgICBleHBlcmltZW50cywgYW5kIHBlcnNvbmFsIHZpZ25ldHRlcy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICA8VlN0YWNrIHNwYWNlPXtzcGFjZS5zbX0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD1cIjNcIiBwPXtzcGFjZS5zbX0gYm9yZGVyQ29sb3I9XCJvcmFuZ2UuNDAwXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbC4uLlwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwib3JhbmdlLjMwMFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIF9mb2N1cz17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJvcmFuZ2UuMzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGJnOiBcInVuc3R5bGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBmb2N1c091dGxpbmVDb2xvcj1cIm9yYW5nZS4zMDBcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJvcmFuZ2UuMzAwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIElucHV0UmlnaHRFbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB3PVwiMS82XCJcbiAgICAgICAgICAgICAgICAgICAgICBoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgcD17MH1cbiAgICAgICAgICAgICAgICAgICAgICBweD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcIm9yYW5nZS4zMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIF9wcmVzc2VkPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZzogXCJvcmFuZ2UuNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvblByZXNzPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gb25QcmVzcz17KCkgPT4gY29uc29sZS5sb2coXCJwcmVzc2VkXCIpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1wiYmxhY2tcIn0+U3Vic2NyaWJlPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8TGlua1dpdGhJY29uXG4gICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvcHk9XCJObyB0aGFua3NcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybUNvbnRyb2wiLCJJbnB1dCIsIk1vZGFsIiwiU3RhY2siLCJUZXh0IiwiQnV0dG9uIiwiVlN0YWNrIiwidHJhY2tFdmVudCIsImNvbXBvc2VBY3Rpb24iLCJjYXRlZ29yaWVzIiwiYWN0aW9ucyIsIm9iamVjdHMiLCJBdmF0YXIiLCJzcGFjZSIsIkxpbmtXaXRoSWNvbiIsImdldEF1dGgiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJBd2FpdGluZ1N1YnNjcmlwdGlvbiIsIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJtb2RhbFZpc2libGUiLCJhY3Rpb24iLCJWSUVXIiwiU1VCU0NSSUJFX01PREFMIiwiY2F0ZWdvcnkiLCJTVUJTQ1JJQkUiLCJzdWJzY3JpcHRpb25TdGF0ZSIsInNldHN1YnNjcmlwdGlvblN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwidGhlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0TW9kYWxWaXNpYmxlIiwiX2RhcmsiLCJiZyIsIm9wYWNpdHkiLCJfaWNvbiIsImNvbG9yIiwibWQiLCJ4bCIsInNtIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe/SubscribeModal.tsx\n");

/***/ })

});