"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/routes/profile/stepper-copy/second-step/index.tsx":
/*!***************************************************************!*\
  !*** ./src/routes/profile/stepper-copy/second-step/index.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _components_file_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/file-input */ \"./src/components/file-input/index.tsx\");\nvar _this = undefined;\n\n\n\nvar SecondStep = function(param) {\n    var title = param.title, active = param.active, setActive = param.setActive;\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setActive(2);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        id: \"documents\",\n        onSubmit: handleSubmit,\n        style: {\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                weight: 500,\n                mb: 10,\n                size: \"xl\",\n                children: title !== null && title !== void 0 ? title : \"Hujjatlar ro'yxati\"\n            }, void 0, false, {\n                fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                color: \"gray\",\n                my: 27,\n                size: 0.5\n            }, void 0, false, {\n                fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                spacing: 30,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_file_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        required: true,\n                        accept: \"image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv\",\n                        placeholder: \"Savollar\",\n                        label: \"Yangi savollar yuklang\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                        color: \"gray\",\n                        my: 5,\n                        size: 0.5\n                    }, void 0, false, {\n                        fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aaa/Projects/ariza/src/routes/profile/stepper-copy/second-step/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = SecondStep;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SecondStep);\nvar _c;\n$RefreshReg$(_c, \"SecondStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3Byb2ZpbGUvc3RlcHBlci1jb3B5L3NlY29uZC1zdGVwL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFpRTtBQUlQO0FBUTFELElBQU1JLFVBQVUsR0FBRyxnQkFBNkM7UUFBMUNDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsU0FBUyxTQUFUQSxTQUFTO0lBQzVDLElBQU1DLFlBQVksR0FBRyxTQUFDQyxDQUE2QixFQUFLO1FBQ3REQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZDtJQUNELHFCQUNFLDhEQUFDSSxNQUFJO1FBQUNDLEVBQUUsRUFBQyxXQUFXO1FBQUNDLFFBQVEsRUFBRUwsWUFBWTtRQUFFTSxLQUFLLEVBQUU7WUFBRUMsS0FBSyxFQUFFLE1BQU07U0FBRTs7MEJBQ25FLDhEQUFDZiwrQ0FBSTtnQkFBQ2dCLE1BQU0sRUFBRSxHQUFHO2dCQUFFQyxFQUFFLEVBQUUsRUFBRTtnQkFBRUMsSUFBSSxFQUFDLElBQUk7MEJBQ2pDYixLQUFLLGFBQUxBLEtBQUssY0FBTEEsS0FBSyxHQUFJLG9CQUFvQjs7Ozs7cUJBQ3pCOzBCQUNQLDhEQUFDSixrREFBTztnQkFBQ2tCLEtBQUssRUFBRSxNQUFNO2dCQUFFQyxFQUFFLEVBQUUsRUFBRTtnQkFBRUYsSUFBSSxFQUFFLEdBQUc7Ozs7O3FCQUFJOzBCQUM3Qyw4REFBQ2hCLGdEQUFLO2dCQUFDbUIsT0FBTyxFQUFFLEVBQUU7O2tDQUNoQiw4REFBQ2xCLDhEQUFTO3dCQUNSbUIsUUFBUTt3QkFDUkMsTUFBTSxFQUFDLDJDQUEyQzt3QkFDbERDLFdBQVcsRUFBQyxVQUFVO3dCQUN0QkMsS0FBSyxFQUFDLHdCQUF3Qjs7Ozs7NkJBQzlCO2tDQWVGLDhEQUFDeEIsa0RBQU87d0JBQUNrQixLQUFLLEVBQUUsTUFBTTt3QkFBRUMsRUFBRSxFQUFFLENBQUM7d0JBQUVGLElBQUksRUFBRSxHQUFHOzs7Ozs2QkFBSTs7Ozs7O3FCQUd0Qzs7Ozs7O2FBQ0gsQ0FDUDtDQUNIO0FBdENLZCxLQUFBQSxVQUFVO0FBd0NoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yb3V0ZXMvcHJvZmlsZS9zdGVwcGVyLWNvcHkvc2Vjb25kLXN0ZXAvaW5kZXgudHN4PzJiY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgRGl2aWRlciwgU2ltcGxlR3JpZCwgU3RhY2sgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFkZFN0ZXBwZXJQcm9wcyB9IGZyb20gJy4uJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXInO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUtaW5wdXQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3NlbGVjdCc7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGV4dC1pbnB1dCc7XG5cbmludGVyZmFjZSBTdGVwUHJvcHMgZXh0ZW5kcyBBZGRTdGVwcGVyUHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuY29uc3QgU2Vjb25kU3RlcCA9ICh7IHRpdGxlLCBhY3RpdmUsIHNldEFjdGl2ZSB9OiBTdGVwUHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEFjdGl2ZSgyKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBpZD1cImRvY3VtZW50c1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8VGV4dCB3ZWlnaHQ9ezUwMH0gbWI9ezEwfSBzaXplPVwieGxcIj5cbiAgICAgICAge3RpdGxlID8/IFwiSHVqamF0bGFyIHJvJ3l4YXRpXCJ9XG4gICAgICA8L1RleHQ+XG4gICAgICA8RGl2aWRlciBjb2xvcj17J2dyYXknfSBteT17Mjd9IHNpemU9ezAuNX0gLz5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXszMH0+XG4gICAgICAgIDxGaWxlSW5wdXRcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLyosIC5kb2MsIC5kb2N4LC54bHMsLnhsc3gsLnBkZiwuY3N2XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhdm9sbGFyXCJcbiAgICAgICAgICBsYWJlbD1cIllhbmdpIHNhdm9sbGFyIHl1a2xhbmdcIlxuICAgICAgICAvPlxuICAgICAgICB7LyogPERpdmlkZXIgY29sb3I9eydncmF5J30gbXk9ezV9IHNpemU9ezAuNX0gLz5cblxuICAgICAgICA8RmlsZUlucHV0XG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKiwgLmRvYywgLmRvY3gsLnhscywueGxzeCwucGRmLC5jc3ZcIlxuICAgICAgICAgIGluZm9UaXRsZT1cIk1hyrxsdW1vdG5vbWEtb2LKvGVrdGl2a2EsIG5vbXpvZG5pbmcgdG/KvGxkaXJpbGdhbiBzb8q8cm92bm9tYXNpIHZhIHRhcmppbWFpIGhvbGlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWEnbHVtb3Rub21hXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGluZm9UZXh0PXtgTWHKvGx1bW90bm9tYS1vYsq8ZWt0aXZrYSwgbm9tem9kbmluZyB0b8q8bGRpcmlsZ2FuIHNvyrxyb3Zub21hc2kgdmEgdGFyamltYWkgaG9saVxuLSBheGJvcm90LWtvbW11bmlrYXRzaXlhIHRleG5vbG9naXlhbGFyaWRhbiBxYXkgZGFyYWphZGEgZm95ZGFsYW5pc2hpIChtYXNhbGFuOiB0dXJsaSBpanRpbW9peSB0YXJtb3FsYXJpLCB2ZWItc2FoaWZhbGFyIHZhIGguay4pO1xuLSBzcG9ydG5pbmcgcWF5c2kgdHVyaSBiaWxhbiBzaHVnyrx1bGxhbmlzaGkgXG52YSBlcmlzaGdhbiB5dXR1cWxhcmk7IFxuLSBzcG9ydGNoaWxhcmdhIHlvemlsZ2FuIHRhdnNpZm5vbWFkYSBlcmlzaGdhbiB5dXR1cWxhcmkgYmlsYW4gYmlyZ2Egbm9tem9kIE/KvHpiZWtpc3RvbiBtaWxsaXkgdGVybWEgamFtb2FzaSBhyrx6b3NpIGhhbWRhIHNwb3J0IHVudm9uaWdhIChzcG9ydCB1c3RhbGlnaWdhIG5vbXpvZCwgc3BvcnQgdXN0YXNpLCB4YWxxYXJvIHRvaWZhZGFnaSBzcG9ydCB1c3Rhc2kpIGVnYSBib8q8bHNhLCBidW5pIHFheWQgZXRpc2ggemFydXIuYH1cbiAgICAgICAgICBsYWJlbD1cIk1hyrxsdW1vdG5vbWEtb2LKvGVrdGl2a2EsIG5vbXpvZG5pbmcgdG/KvGxkaXJpbGdhbiBzb8q8cm92bm9tYXNpIHZhIHRhcmppbWFpIGhvbGlcIlxuICAgICAgICAvPiAqL31cbiAgICAgICAgPERpdmlkZXIgY29sb3I9eydncmF5J30gbXk9ezV9IHNpemU9ezAuNX0gLz5cblxuXG4gICAgICA8L1N0YWNrPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXA7XG4iXSwibmFtZXMiOlsiVGV4dCIsIkRpdmlkZXIiLCJTdGFjayIsIkZpbGVJbnB1dCIsIlNlY29uZFN0ZXAiLCJ0aXRsZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJpZCIsIm9uU3VibWl0Iiwic3R5bGUiLCJ3aWR0aCIsIndlaWdodCIsIm1iIiwic2l6ZSIsImNvbG9yIiwibXkiLCJzcGFjaW5nIiwicmVxdWlyZWQiLCJhY2NlcHQiLCJwbGFjZWhvbGRlciIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/profile/stepper-copy/second-step/index.tsx\n");

/***/ })

});