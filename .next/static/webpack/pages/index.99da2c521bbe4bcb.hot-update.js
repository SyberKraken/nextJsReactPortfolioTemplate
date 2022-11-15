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

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\n/* harmony import */ var _Fidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fidget */ \"./components/Fidget.js\");\n/* harmony import */ var _menuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuButton */ \"./components/menuButton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar buttonsAreVisible = false;\nvar hasOpenContent = false;\nvar lastClickedCard = null;\nfunction Menu(props) {\n    var _this = this;\n    var toggleTabs = function toggleTabs() {};\n    var tabClick = function tabClick(index) {\n        if (lastClickedCard == index) {\n            return;\n        }\n        tabLinks.map(function(func) {\n            return func(\"hidden\");\n        });\n        lastClickedCard = index;\n        tabLinks[index](\"\");\n        if (!hasOpenContent) {}\n        toggleRevealButtons();\n        toggleOpenContent();\n    };\n    var goToMenu = function goToMenu() {\n        tabLinks.map(function(func) {\n            return func(\"hidden\");\n        });\n    };\n    var inverseValue = function inverseValue(container, setContainer, one, two) {\n        return function() {\n            if (container == one) {\n                setContainer(two);\n            } else {\n                setContainer(one);\n            }\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hiddenButton\"), tabClass = ref[0], setTabClass = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"justify-center\"), buttonConTainerClass = ref1[0], setbuttonConTainerClass = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), projectClass = ref2[0], setProjectClass = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), meClass = ref3[0], setmeClass = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), fidgetClass = ref4[0], setfidgetClass = ref4[1];\n    var menuTabs = [\n        \"projects\",\n        \"me\",\n        \"fidget\"\n    ];\n    var tabToggles = [\n        inverseValue(projectClass, setProjectClass, \"hidden\", \"\"),\n        inverseValue(meClass, setmeClass, \"hidden\", \"\"),\n        inverseValue(fidgetClass, setfidgetClass, \"hidden\", \"\")\n    ];\n    var tabLinks = [\n        setProjectClass,\n        setmeClass,\n        setfidgetClass\n    ];\n    var toggleRevealButtons = inverseValue(buttonConTainerClass, setbuttonConTainerClass, \"justify-center\", \"\");\n    var toggleOpenContent = inverseValue(hasOpenContent, function(value) {\n        return hasOpenContent = value;\n    }, true, false);\n    var buttons = menuTabs.map(function(item, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            clickFunction: function() {\n                return tabClick(i);\n            },\n            text: item\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n            lineNumber: 60,\n            columnNumber: 45\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" w-screen flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/12 mt-4 flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                clickFunction: function() {},\n                                text: \"Menu\",\n                                yspace: \"0\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            buttons\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-5/6 mt-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: projectClass,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                                lineNumber: 75,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: meClass,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"weeeeeee\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                                lineNumber: 76,\n                                columnNumber: 43\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: fidgetClass,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Fidget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                                lineNumber: 77,\n                                columnNumber: 47\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Menu, \"SbZGwXCdnSH1jlSGD/6O6W7s5RI=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw4REFBQ0gsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFWCxXQUFXO3NDQUFHLDRFQUFDN0IsK0NBQU07Ozs7b0NBQVU7Ozs7O2dDQUFNOzs7Ozs7d0JBQ25EOzs7Ozs7Z0JBQ0o7cUJBQ0gsQ0FDTjtBQUNMLENBQUM7R0F4RVFLLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTJFYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVudS5qcz8wNmZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkcyBmcm9tIFwiLi9DYXJkc1wiO1xyXG5pbXBvcnQgRmlkZ2V0IGZyb20gXCIuL0ZpZGdldFwiXHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuL21lbnVCdXR0b25cIlxyXG5cclxubGV0IGJ1dHRvbnNBcmVWaXNpYmxlID0gZmFsc2U7XHJcbmxldCBoYXNPcGVuQ29udGVudCA9IGZhbHNlO1xyXG5sZXQgbGFzdENsaWNrZWRDYXJkID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIE1lbnUocHJvcHMpe1xyXG4gICAgY29uc3QgICBbdGFiQ2xhc3MsIHNldFRhYkNsYXNzXSA9IHVzZVN0YXRlKFwiaGlkZGVuQnV0dG9uXCIpXHJcbiAgICBjb25zdCAgIFtidXR0b25Db25UYWluZXJDbGFzcywgc2V0YnV0dG9uQ29uVGFpbmVyQ2xhc3NdID0gdXNlU3RhdGUoXCJqdXN0aWZ5LWNlbnRlclwiKVxyXG4gICAgY29uc3QgICBbcHJvamVjdENsYXNzLCBzZXRQcm9qZWN0Q2xhc3NdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuICAgIGNvbnN0ICAgW21lQ2xhc3MsIHNldG1lQ2xhc3NdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuICAgIGNvbnN0ICAgW2ZpZGdldENsYXNzLCBzZXRmaWRnZXRDbGFzc10gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG5cclxuICAgIGxldCBtZW51VGFicyA9IFtcInByb2plY3RzXCIsIFwibWVcIiwgXCJmaWRnZXRcIl1cclxuICAgIGxldCB0YWJUb2dnbGVzID0gW2ludmVyc2VWYWx1ZShwcm9qZWN0Q2xhc3MsIHNldFByb2plY3RDbGFzcywgXCJoaWRkZW5cIiwgXCJcIiksXHJcbiAgICAgaW52ZXJzZVZhbHVlKG1lQ2xhc3MsIHNldG1lQ2xhc3MsIFwiaGlkZGVuXCIsIFwiXCIpLFxyXG4gICAgIGludmVyc2VWYWx1ZShmaWRnZXRDbGFzcywgc2V0ZmlkZ2V0Q2xhc3MsIFwiaGlkZGVuXCIsIFwiXCIpXVxyXG4gICAgbGV0IHRhYkxpbmtzID0gW3NldFByb2plY3RDbGFzcywgc2V0bWVDbGFzcywgc2V0ZmlkZ2V0Q2xhc3NdXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFicygpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b2dnbGVSZXZlYWxCdXR0b25zID0gaW52ZXJzZVZhbHVlKGJ1dHRvbkNvblRhaW5lckNsYXNzLCBzZXRidXR0b25Db25UYWluZXJDbGFzcywgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIlwiKVxyXG4gICAgbGV0IHRvZ2dsZU9wZW5Db250ZW50ID0gaW52ZXJzZVZhbHVlKGhhc09wZW5Db250ZW50LCAodmFsdWUpPT5oYXNPcGVuQ29udGVudD12YWx1ZSx0cnVlLGZhbHNlKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB0YWJDbGljayhpbmRleCl7XHJcbiAgICAgICAgaWYobGFzdENsaWNrZWRDYXJkID09IGluZGV4KXtyZXR1cm59XHJcbiAgICAgICAgdGFiTGlua3MubWFwKChmdW5jKT0+ZnVuYyhcImhpZGRlblwiKSlcclxuICAgICAgICBsYXN0Q2xpY2tlZENhcmQgPSBpbmRleDtcclxuICAgICAgICB0YWJMaW5rc1tpbmRleF0oXCJcIilcclxuICAgICAgICBpZighaGFzT3BlbkNvbnRlbnQpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0b2dnbGVSZXZlYWxCdXR0b25zKClcclxuXHJcbiAgICAgICAgdG9nZ2xlT3BlbkNvbnRlbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9NZW51KCl7XHJcbiAgICAgICAgdGFiTGlua3MubWFwKChmdW5jKT0+ZnVuYyhcImhpZGRlblwiKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnZlcnNlVmFsdWUoY29udGFpbmVyLCBzZXRDb250YWluZXIsb25lLCB0d28pe1xyXG4gICAgICAgcmV0dXJuKCBcclxuICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIgPT0gb25lKXtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhaW5lcih0d28pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFpbmVyKG9uZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IGJ1dHRvbnMgPSBtZW51VGFicy5tYXAoKGl0ZW0sIGkpID0+IDxNZW51QnV0dG9uIGNsaWNrRnVuY3Rpb249eygpID0+IHRhYkNsaWNrKGkpfSB0ZXh0PXtpdGVtfT48L01lbnVCdXR0b24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuIFxyXG4gICAgXHJcbiAgICByZXR1cm4oICAgIFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMTIgbXQtNCBmbGV4IGp1c3RpZnktY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGNsaWNrRnVuY3Rpb249eygpPT57fX0gdGV4dD1cIk1lbnVcIiB5c3BhY2U9XCIwXCI+PC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctNS82IG10LTQgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvamVjdENsYXNzfSA+PENhcmRzPjwvQ2FyZHM+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVDbGFzc30gPjxwPndlZWVlZWVlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpZGdldENsYXNzfSA+PEZpZGdldD48L0ZpZGdldD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+IFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJkcyIsIkZpZGdldCIsIk1lbnVCdXR0b24iLCJidXR0b25zQXJlVmlzaWJsZSIsImhhc09wZW5Db250ZW50IiwibGFzdENsaWNrZWRDYXJkIiwiTWVudSIsInByb3BzIiwidG9nZ2xlVGFicyIsInRhYkNsaWNrIiwiaW5kZXgiLCJ0YWJMaW5rcyIsIm1hcCIsImZ1bmMiLCJ0b2dnbGVSZXZlYWxCdXR0b25zIiwidG9nZ2xlT3BlbkNvbnRlbnQiLCJnb1RvTWVudSIsImludmVyc2VWYWx1ZSIsImNvbnRhaW5lciIsInNldENvbnRhaW5lciIsIm9uZSIsInR3byIsInRhYkNsYXNzIiwic2V0VGFiQ2xhc3MiLCJidXR0b25Db25UYWluZXJDbGFzcyIsInNldGJ1dHRvbkNvblRhaW5lckNsYXNzIiwicHJvamVjdENsYXNzIiwic2V0UHJvamVjdENsYXNzIiwibWVDbGFzcyIsInNldG1lQ2xhc3MiLCJmaWRnZXRDbGFzcyIsInNldGZpZGdldENsYXNzIiwibWVudVRhYnMiLCJ0YWJUb2dnbGVzIiwidmFsdWUiLCJidXR0b25zIiwiaXRlbSIsImkiLCJjbGlja0Z1bmN0aW9uIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInlzcGFjZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n"));

/***/ })

});