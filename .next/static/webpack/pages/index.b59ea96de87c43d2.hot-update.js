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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar buttonsAreVisible = false;\nvar hasOpenContent = false;\nfunction Menu(props) {\n    var _this = this;\n    var tabClick = function tabClick(index) {\n        tabLinks[index]();\n        toggleTabs();\n        hasOpenContent = true;\n    };\n    var toggleTabs = function toggleTabs() {\n        if (buttonsAreVisible) {\n            setTabClass(\"gettingVisibleButton\");\n            setTimeout(function() {\n                setTabClass(\"gettingVisibleButton\");\n            }, 10);\n            setTimeout(function() {\n                setTabClass(\"hiddenButton\");\n            }, 10);\n            buttonsAreVisible = false;\n            setRevealButtonClass(\"revealButtonBig\");\n        } else {\n            setTabClass(\"gettingVisibleButton\");\n            setTimeout(function() {\n                setTabClass(\"visibleButton\");\n            }, 10);\n            buttonsAreVisible = true;\n            setRevealButtonClass(\"revealButtonSmall\");\n        }\n        if (hasOpenContent) {\n            tabLinks.map(function(func) {\n                return func(\"hidden\");\n            });\n            hasOpenContent = false;\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hiddenButton\"), tabClass = ref[0], setTabClass = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"revealButtonBig\"), revealButtonClass = ref1[0], setRevealButtonClass = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), projectClass = ref2[0], setProjectClass = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), meClass = ref3[0], setmeClass = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), fidgetClass = ref4[0], setfidgetClass = ref4[1];\n    var menuTabs = [\n        \"projects\",\n        \"me\",\n        \"fidget\"\n    ];\n    var tabLinks = [\n        setProjectClass,\n        setmeClass,\n        setfidgetClass\n    ];\n    var buttons = menuTabs.map(function(item, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            class: tabClass,\n            onClick: function() {\n                return tabClick(i);\n            },\n            children: item\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n            lineNumber: 24,\n            columnNumber: 46\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: revealButtonClass,\n                onClick: toggleTabs,\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"Buttoncontainer\",\n                children: buttons\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: projectClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: meClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"weeeee\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: fidgetClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"weeeeeee\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Documents\\\\My Web Sites\\\\nextjsproject\\\\components\\\\Menu.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Menu, \"DRjn+7PGb7z/BIqwqe20XmEL6Kg=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0UsUUFBTTtnQkFBQ0MsS0FBSyxFQUFHWixpQkFBaUI7Z0JBQUdhLE9BQU8sRUFBRXBCLFVBQVU7MEJBQUUsTUFBSTs7Ozs7b0JBQVM7MEJBQ3RFLDhEQUFDcUIsS0FBRztnQkFBQ0YsS0FBSyxFQUFDLGlCQUFpQjswQkFDdkJKLE9BQU87Ozs7O29CQUNMOzBCQUdQLDhEQUFDTSxLQUFHO2dCQUFDQyxFQUFFLEVBQUVkLFlBQVk7MEJBQ2IsNEVBQUNoQiw4Q0FBSzs7Ozt3QkFBUzs7Ozs7b0JBQ2pCOzBCQUNOLDhEQUFDNkIsS0FBRztnQkFBQ0MsRUFBRSxFQUFFWixPQUFPOzBCQUNSLDRFQUFDYSxHQUFDOzhCQUFDLFFBQU07Ozs7O3dCQUFJOzs7OztvQkFDZjswQkFDTiw4REFBQ0YsS0FBRztnQkFBQ0MsRUFBRSxFQUFFVixXQUFXOzBCQUNoQiw0RUFBQ1csR0FBQzs4QkFBQyxVQUFROzs7Ozt3QkFBSTs7Ozs7b0JBQ2I7O29CQUNILENBQ047QUFDTCxDQUFDO0dBNURRNUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBK0RiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LmpzPzA2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmRzIGZyb20gXCIuL0NhcmRzXCI7XHJcblxyXG5cclxubGV0IGJ1dHRvbnNBcmVWaXNpYmxlID0gZmFsc2U7XHJcbmxldCBoYXNPcGVuQ29udGVudCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBNZW51KHByb3BzKXtcclxuICAgIGNvbnN0ICAgW3RhYkNsYXNzLCBzZXRUYWJDbGFzc10gPSB1c2VTdGF0ZShcImhpZGRlbkJ1dHRvblwiKVxyXG4gICAgY29uc3QgICBbcmV2ZWFsQnV0dG9uQ2xhc3MsIHNldFJldmVhbEJ1dHRvbkNsYXNzXSA9IHVzZVN0YXRlKFwicmV2ZWFsQnV0dG9uQmlnXCIpXHJcbiAgICBjb25zdCAgIFtwcm9qZWN0Q2xhc3MsIHNldFByb2plY3RDbGFzc10gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG4gICAgY29uc3QgICBbbWVDbGFzcywgc2V0bWVDbGFzc10gPSB1c2VTdGF0ZShcImhpZGRlblwiKVxyXG4gICAgY29uc3QgICBbZmlkZ2V0Q2xhc3MsIHNldGZpZGdldENsYXNzXSA9IHVzZVN0YXRlKFwiaGlkZGVuXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gdGFiQ2xpY2soaW5kZXgpe1xyXG4gICAgICAgIHRhYkxpbmtzW2luZGV4XSgpXHJcbiAgICAgICAgdG9nZ2xlVGFicygpXHJcbiAgICAgICAgaGFzT3BlbkNvbnRlbnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtZW51VGFicyA9IFtcInByb2plY3RzXCIsIFwibWVcIiwgXCJmaWRnZXRcIl1cclxuXHJcbiAgICBsZXQgdGFiTGlua3MgPSBbc2V0UHJvamVjdENsYXNzLCBzZXRtZUNsYXNzLCBzZXRmaWRnZXRDbGFzc11cclxuXHJcbiAgICBsZXQgYnV0dG9ucyA9ICBtZW51VGFicy5tYXAoKGl0ZW0sIGkpID0+IDxidXR0b24gY2xhc3M9e3RhYkNsYXNzfSBvbkNsaWNrPXsoKSA9PiB0YWJDbGljayhpKX0+e2l0ZW19PC9idXR0b24+KVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhYnMoKXtcclxuICAgICAgICBpZihidXR0b25zQXJlVmlzaWJsZSl7XHJcbiAgICAgICAgICAgIHNldFRhYkNsYXNzKFwiZ2V0dGluZ1Zpc2libGVCdXR0b25cIilcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFRhYkNsYXNzKFwiZ2V0dGluZ1Zpc2libGVCdXR0b25cIil9LCAxMClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNldFRhYkNsYXNzKFwiaGlkZGVuQnV0dG9uXCIpfSwgMTApXHJcbiAgICAgICAgICAgIGJ1dHRvbnNBcmVWaXNpYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0UmV2ZWFsQnV0dG9uQ2xhc3MoXCJyZXZlYWxCdXR0b25CaWdcIilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VGFiQ2xhc3MoXCJnZXR0aW5nVmlzaWJsZUJ1dHRvblwiKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtzZXRUYWJDbGFzcyhcInZpc2libGVCdXR0b25cIil9LCAxMClcclxuICAgICAgICAgICAgYnV0dG9uc0FyZVZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHNldFJldmVhbEJ1dHRvbkNsYXNzKFwicmV2ZWFsQnV0dG9uU21hbGxcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGFzT3BlbkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0YWJMaW5rcy5tYXAoKGZ1bmMpID0+IGZ1bmMoXCJoaWRkZW5cIikpXHJcbiAgICAgICAgICAgIGhhc09wZW5Db250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4oICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9e3JldmVhbEJ1dHRvbkNsYXNzfSAgb25DbGljaz17dG9nZ2xlVGFic30+TWVudTwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJCdXR0b25jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGlkPXtwcm9qZWN0Q2xhc3N9ID5cclxuICAgICAgICAgICAgICAgIDxDYXJkcz48L0NhcmRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9e21lQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgIDxwPndlZWVlZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPXtmaWRnZXRDbGFzc30gPlxyXG4gICAgICAgICAgICA8cD53ZWVlZWVlZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4gXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmRzIiwiYnV0dG9uc0FyZVZpc2libGUiLCJoYXNPcGVuQ29udGVudCIsIk1lbnUiLCJwcm9wcyIsInRhYkNsaWNrIiwiaW5kZXgiLCJ0YWJMaW5rcyIsInRvZ2dsZVRhYnMiLCJzZXRUYWJDbGFzcyIsInNldFRpbWVvdXQiLCJzZXRSZXZlYWxCdXR0b25DbGFzcyIsIm1hcCIsImZ1bmMiLCJ0YWJDbGFzcyIsInJldmVhbEJ1dHRvbkNsYXNzIiwicHJvamVjdENsYXNzIiwic2V0UHJvamVjdENsYXNzIiwibWVDbGFzcyIsInNldG1lQ2xhc3MiLCJmaWRnZXRDbGFzcyIsInNldGZpZGdldENsYXNzIiwibWVudVRhYnMiLCJidXR0b25zIiwiaXRlbSIsImkiLCJidXR0b24iLCJjbGFzcyIsIm9uQ2xpY2siLCJkaXYiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n"));

/***/ })

});