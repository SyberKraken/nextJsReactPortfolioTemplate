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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar buttonsAreVisible = false;\nvar hasOpenContent = false;\nfunction Menu(props) {\n    var _this = this;\n    var tabClick = function tabClick(index) {\n        tabLinks[index]();\n        toggleTabs();\n        hasOpenContent = true;\n    };\n    var toggleTabs = function toggleTabs() {\n        if (buttonsAreVisible) {\n            setTabClass(\"gettingVisibleButton\");\n            setTimeout(function() {\n                setTabClass(\"gettingVisibleButton\");\n            }, 10);\n            setTimeout(function() {\n                setTabClass(\"wasVisibleButton\");\n            }, 10);\n            buttonsAreVisible = false;\n            setRevealButtonClass(\"revealButtonBig\");\n        } else {\n            setTabClass(\"gettingVisibleButton\");\n            setTimeout(function() {\n                setTabClass(\"visibleButton\");\n            }, 10);\n            buttonsAreVisible = true;\n            setRevealButtonClass(\"revealButtonSmall\");\n        }\n        if (hasOpenContent) {\n            tabLinks.map(function(func) {\n                return func(\"hidden\");\n            });\n            hasOpenContent = false;\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hiddenButton\"), tabClass = ref[0], setTabClass = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"revealButtonBig\"), revealButtonClass = ref1[0], setRevealButtonClass = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), projectClass = ref2[0], setProjectClass = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), meClass = ref3[0], setmeClass = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), fidgetClass = ref4[0], setfidgetClass = ref4[1];\n    var menuTabs = [\n        \"projects\",\n        \"me\",\n        \"fidget\"\n    ];\n    var tabLinks = [\n        setProjectClass,\n        setmeClass,\n        setfidgetClass\n    ];\n    var buttons = menuTabs.map(function(item, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            class: tabClass,\n            onClick: function() {\n                return tabClick(i);\n            },\n            children: item\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n            lineNumber: 24,\n            columnNumber: 46\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: revealButtonClass,\n                onClick: toggleTabs,\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"Buttoncontainer\",\n                children: buttons\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: projectClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: meClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"weeeee\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: fidgetClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"weeeeeee\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Menu, \"DRjn+7PGb7z/BIqwqe20XmEL6Kg=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRSxRQUFNO2dCQUFDQyxLQUFLLEVBQUdaLGlCQUFpQjtnQkFBR2EsT0FBTyxFQUFFcEIsVUFBVTswQkFBRSxNQUFJOzs7OztvQkFBUzswQkFDdEUsOERBQUNxQixLQUFHO2dCQUFDRixLQUFLLEVBQUMsaUJBQWlCOzBCQUN2QkosT0FBTzs7Ozs7b0JBQ0w7MEJBR1AsOERBQUNNLEtBQUc7Z0JBQUNDLEVBQUUsRUFBRWQsWUFBWTswQkFDYiw0RUFBQ2hCLDhDQUFLOzs7O3dCQUFTOzs7OztvQkFDakI7MEJBQ04sOERBQUM2QixLQUFHO2dCQUFDQyxFQUFFLEVBQUVaLE9BQU87MEJBQ1IsNEVBQUNhLEdBQUM7OEJBQUMsUUFBTTs7Ozs7d0JBQUk7Ozs7O29CQUNmOzBCQUNOLDhEQUFDRixLQUFHO2dCQUFDQyxFQUFFLEVBQUVWLFdBQVc7MEJBQ2hCLDRFQUFDVyxHQUFDOzhCQUFDLFVBQVE7Ozs7O3dCQUFJOzs7OztvQkFDYjs7b0JBQ0gsQ0FDTjtBQUNMLENBQUM7R0E1RFE1QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUErRGIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUuanM/MDZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vQ2FyZHNcIjtcclxuXHJcblxyXG5sZXQgYnV0dG9uc0FyZVZpc2libGUgPSBmYWxzZTtcclxubGV0IGhhc09wZW5Db250ZW50ID0gZmFsc2U7XHJcbmZ1bmN0aW9uIE1lbnUocHJvcHMpe1xyXG4gICAgY29uc3QgICBbdGFiQ2xhc3MsIHNldFRhYkNsYXNzXSA9IHVzZVN0YXRlKFwiaGlkZGVuQnV0dG9uXCIpXHJcbiAgICBjb25zdCAgIFtyZXZlYWxCdXR0b25DbGFzcywgc2V0UmV2ZWFsQnV0dG9uQ2xhc3NdID0gdXNlU3RhdGUoXCJyZXZlYWxCdXR0b25CaWdcIilcclxuICAgIGNvbnN0ICAgW3Byb2plY3RDbGFzcywgc2V0UHJvamVjdENsYXNzXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcbiAgICBjb25zdCAgIFttZUNsYXNzLCBzZXRtZUNsYXNzXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcbiAgICBjb25zdCAgIFtmaWRnZXRDbGFzcywgc2V0ZmlkZ2V0Q2xhc3NdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcclxuXHJcbiAgICBmdW5jdGlvbiB0YWJDbGljayhpbmRleCl7XHJcbiAgICAgICAgdGFiTGlua3NbaW5kZXhdKClcclxuICAgICAgICB0b2dnbGVUYWJzKClcclxuICAgICAgICBoYXNPcGVuQ29udGVudCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1lbnVUYWJzID0gW1wicHJvamVjdHNcIiwgXCJtZVwiLCBcImZpZGdldFwiXVxyXG5cclxuICAgIGxldCB0YWJMaW5rcyA9IFtzZXRQcm9qZWN0Q2xhc3MsIHNldG1lQ2xhc3MsIHNldGZpZGdldENsYXNzXVxyXG5cclxuICAgIGxldCBidXR0b25zID0gIG1lbnVUYWJzLm1hcCgoaXRlbSwgaSkgPT4gPGJ1dHRvbiBjbGFzcz17dGFiQ2xhc3N9IG9uQ2xpY2s9eygpID0+IHRhYkNsaWNrKGkpfT57aXRlbX08L2J1dHRvbj4pXHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFicygpe1xyXG4gICAgICAgIGlmKGJ1dHRvbnNBcmVWaXNpYmxlKXtcclxuICAgICAgICAgICAgc2V0VGFiQ2xhc3MoXCJnZXR0aW5nVmlzaWJsZUJ1dHRvblwiKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0VGFiQ2xhc3MoXCJnZXR0aW5nVmlzaWJsZUJ1dHRvblwiKX0sIDEwKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0VGFiQ2xhc3MoXCJ3YXNWaXNpYmxlQnV0dG9uXCIpfSwgMTApXHJcbiAgICAgICAgICAgIGJ1dHRvbnNBcmVWaXNpYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0UmV2ZWFsQnV0dG9uQ2xhc3MoXCJyZXZlYWxCdXR0b25CaWdcIilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VGFiQ2xhc3MoXCJnZXR0aW5nVmlzaWJsZUJ1dHRvblwiKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtzZXRUYWJDbGFzcyhcInZpc2libGVCdXR0b25cIil9LCAxMClcclxuICAgICAgICAgICAgYnV0dG9uc0FyZVZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHNldFJldmVhbEJ1dHRvbkNsYXNzKFwicmV2ZWFsQnV0dG9uU21hbGxcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGFzT3BlbkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0YWJMaW5rcy5tYXAoKGZ1bmMpID0+IGZ1bmMoXCJoaWRkZW5cIikpXHJcbiAgICAgICAgICAgIGhhc09wZW5Db250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4oICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9e3JldmVhbEJ1dHRvbkNsYXNzfSAgb25DbGljaz17dG9nZ2xlVGFic30+TWVudTwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJCdXR0b25jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGlkPXtwcm9qZWN0Q2xhc3N9ID5cclxuICAgICAgICAgICAgICAgIDxDYXJkcz48L0NhcmRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9e21lQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgIDxwPndlZWVlZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPXtmaWRnZXRDbGFzc30gPlxyXG4gICAgICAgICAgICA8cD53ZWVlZWVlZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4gXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmRzIiwiYnV0dG9uc0FyZVZpc2libGUiLCJoYXNPcGVuQ29udGVudCIsIk1lbnUiLCJwcm9wcyIsInRhYkNsaWNrIiwiaW5kZXgiLCJ0YWJMaW5rcyIsInRvZ2dsZVRhYnMiLCJzZXRUYWJDbGFzcyIsInNldFRpbWVvdXQiLCJzZXRSZXZlYWxCdXR0b25DbGFzcyIsIm1hcCIsImZ1bmMiLCJ0YWJDbGFzcyIsInJldmVhbEJ1dHRvbkNsYXNzIiwicHJvamVjdENsYXNzIiwic2V0UHJvamVjdENsYXNzIiwibWVDbGFzcyIsInNldG1lQ2xhc3MiLCJmaWRnZXRDbGFzcyIsInNldGZpZGdldENsYXNzIiwibWVudVRhYnMiLCJidXR0b25zIiwiaXRlbSIsImkiLCJidXR0b24iLCJjbGFzcyIsIm9uQ2xpY2siLCJkaXYiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n"));

/***/ })

});