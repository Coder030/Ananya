"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Typewriter.jsx":
/*!***************************************!*\
  !*** ./app/components/Typewriter.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/Typewriter.js\n\nconst Typewriter = (param)=>{\n    let { words, typingSpeed = 150, deletingSpeed = 100, delay = 600 } = param;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [wordIndex, setWordIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [charIndex, setCharIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer;\n        if (isDeleting) {\n            timer = setTimeout(()=>{\n                setText(words[wordIndex].substring(0, charIndex - 1));\n                setCharIndex(charIndex - 1);\n            }, deletingSpeed);\n        } else {\n            timer = setTimeout(()=>{\n                setText(words[wordIndex].substring(0, charIndex + 1));\n                setCharIndex(charIndex + 1);\n            }, typingSpeed);\n        }\n        if (!isDeleting && charIndex === words[wordIndex].length) {\n            setTimeout(()=>setIsDeleting(true), delay);\n        } else if (isDeleting && charIndex === 0) {\n            setIsDeleting(false);\n            setWordIndex((prev)=>(prev + 1) % words.length);\n        }\n        return ()=>clearTimeout(timer);\n    }, [\n        charIndex,\n        isDeleting,\n        words,\n        wordIndex,\n        typingSpeed,\n        deletingSpeed,\n        delay\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/bikramgarg/Ananya/app/components/Typewriter.jsx\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Typewriter, \"X850SBrNIL2wNlah3VsZP5KAxH4=\");\n_c = Typewriter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typewriter);\nvar _c;\n$RefreshReg$(_c, \"Typewriter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGV3cml0ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDJCQUEyQjtBQUNpQjtBQUU1QyxNQUFNRSxhQUFhO1FBQUMsRUFDbEJDLEtBQUssRUFDTEMsY0FBYyxHQUFHLEVBQ2pCQyxnQkFBZ0IsR0FBRyxFQUNuQkMsUUFBUSxHQUFHLEVBQ1o7O0lBQ0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLElBQUllO1FBQ0osSUFBSU4sWUFBWTtZQUNkTSxRQUFRQyxXQUFXO2dCQUNqQlIsUUFBUUwsS0FBSyxDQUFDUSxVQUFVLENBQUNNLFNBQVMsQ0FBQyxHQUFHSixZQUFZO2dCQUNsREMsYUFBYUQsWUFBWTtZQUMzQixHQUFHUjtRQUNMLE9BQU87WUFDTFUsUUFBUUMsV0FBVztnQkFDakJSLFFBQVFMLEtBQUssQ0FBQ1EsVUFBVSxDQUFDTSxTQUFTLENBQUMsR0FBR0osWUFBWTtnQkFDbERDLGFBQWFELFlBQVk7WUFDM0IsR0FBR1Q7UUFDTDtRQUVBLElBQUksQ0FBQ0ssY0FBY0ksY0FBY1YsS0FBSyxDQUFDUSxVQUFVLENBQUNPLE1BQU0sRUFBRTtZQUN4REYsV0FBVyxJQUFNTixjQUFjLE9BQU9KO1FBQ3hDLE9BQU8sSUFBSUcsY0FBY0ksY0FBYyxHQUFHO1lBQ3hDSCxjQUFjO1lBQ2RFLGFBQWEsQ0FBQ08sT0FBUyxDQUFDQSxPQUFPLEtBQUtoQixNQUFNZSxNQUFNO1FBQ2xEO1FBRUEsT0FBTyxJQUFNRSxhQUFhTDtJQUM1QixHQUFHO1FBQ0RGO1FBQ0FKO1FBQ0FOO1FBQ0FRO1FBQ0FQO1FBQ0FDO1FBQ0FDO0tBQ0Q7SUFFRCxxQkFBTyw4REFBQ2U7a0JBQU1kOzs7Ozs7QUFDaEI7R0E1Q01MO0tBQUFBO0FBOENOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGV3cml0ZXIuanN4P2ZjMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGNvbXBvbmVudHMvVHlwZXdyaXRlci5qc1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUeXBld3JpdGVyID0gKHtcbiAgd29yZHMsXG4gIHR5cGluZ1NwZWVkID0gMTUwLFxuICBkZWxldGluZ1NwZWVkID0gMTAwLFxuICBkZWxheSA9IDYwMCxcbn0pID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRJbmRleCwgc2V0V29yZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhckluZGV4LCBzZXRDaGFySW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXI7XG4gICAgaWYgKGlzRGVsZXRpbmcpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRleHQod29yZHNbd29yZEluZGV4XS5zdWJzdHJpbmcoMCwgY2hhckluZGV4IC0gMSkpO1xuICAgICAgICBzZXRDaGFySW5kZXgoY2hhckluZGV4IC0gMSk7XG4gICAgICB9LCBkZWxldGluZ1NwZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGV4dCh3b3Jkc1t3b3JkSW5kZXhdLnN1YnN0cmluZygwLCBjaGFySW5kZXggKyAxKSk7XG4gICAgICAgIHNldENoYXJJbmRleChjaGFySW5kZXggKyAxKTtcbiAgICAgIH0sIHR5cGluZ1NwZWVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRGVsZXRpbmcgJiYgY2hhckluZGV4ID09PSB3b3Jkc1t3b3JkSW5kZXhdLmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0RlbGV0aW5nKHRydWUpLCBkZWxheSk7XG4gICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIGNoYXJJbmRleCA9PT0gMCkge1xuICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XG4gICAgICBzZXRXb3JkSW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSB3b3Jkcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXG4gICAgY2hhckluZGV4LFxuICAgIGlzRGVsZXRpbmcsXG4gICAgd29yZHMsXG4gICAgd29yZEluZGV4LFxuICAgIHR5cGluZ1NwZWVkLFxuICAgIGRlbGV0aW5nU3BlZWQsXG4gICAgZGVsYXksXG4gIF0pO1xuXG4gIHJldHVybiA8c3Bhbj57dGV4dH08L3NwYW4+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlR5cGV3cml0ZXIiLCJ3b3JkcyIsInR5cGluZ1NwZWVkIiwiZGVsZXRpbmdTcGVlZCIsImRlbGF5IiwidGV4dCIsInNldFRleHQiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsIndvcmRJbmRleCIsInNldFdvcmRJbmRleCIsImNoYXJJbmRleCIsInNldENoYXJJbmRleCIsInRpbWVyIiwic2V0VGltZW91dCIsInN1YnN0cmluZyIsImxlbmd0aCIsInByZXYiLCJjbGVhclRpbWVvdXQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Typewriter.jsx\n"));

/***/ })

});