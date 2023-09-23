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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance == undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-40915d841f9554b8\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-40915d841f9554b8\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-40915d841f9554b8\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-40915d841f9554b8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-40915d841f9554b8\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"40915d841f9554b8\",\n                children: \".container.jsx-40915d841f9554b8{text-align:center;text-font:center;background:#3964c3}.centered-image.jsx-40915d841f9554b8{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"WwKlsMi6vo/KQejEZtqMu1JSI9g=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDOEI7a0RBQWU7OzBCQUNkLDhEQUFDRDswREFBYzswQkFDYiw0RUFBQ0U7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLE9BQU87d0JBQUVDLE9BQU87d0JBQU9DLFNBQVM7d0JBQVNDLFFBQVE7b0JBQVM7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNDOzswQkFDQyw0RUFBQ0M7OzhCQUFHOzs7Ozs7Ozs7OztZQUVMZDs7Ozs7Ozs7Ozs7QUFjUCxDQUFDO0dBOUh1QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtldGhlcnN9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF0bV9hYmkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvQXNzZXNzbWVudC5zb2wvQXNzZXNzbWVudC5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBbZXRoV2FsbGV0LCBzZXRFdGhXYWxsZXRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthdG0sIHNldEFUTV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCI7XHJcbiAgY29uc3QgYXRtQUJJID0gYXRtX2FiaS5hYmk7XHJcblxyXG4gIGNvbnN0IGdldFdhbGxldCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBzZXRFdGhXYWxsZXQod2luZG93LmV0aGVyZXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXRoV2FsbGV0KSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7bWV0aG9kOiBcImV0aF9hY2NvdW50c1wifSk7XHJcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBY2NvdW50ID0gKGFjY291bnQpID0+IHtcclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChcIkFjY291bnQgY29ubmVjdGVkOiBcIiwgYWNjb3VudCk7XHJcbiAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYygpID0+IHtcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIGFsZXJ0KCdNZXRhTWFzayB3YWxsZXQgaXMgcmVxdWlyZWQgdG8gY29ubmVjdCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICBoYW5kbGVBY2NvdW50KGFjY291bnRzKTtcclxuICAgIFxyXG4gICAgLy8gb25jZSB3YWxsZXQgaXMgc2V0IHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XHJcbiAgICBnZXRBVE1Db250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFUTUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgYXRtQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYXRtQUJJLCBzaWduZXIpO1xyXG4gXHJcbiAgICBzZXRBVE0oYXRtQ29udHJhY3QpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBzZXRCYWxhbmNlKChhd2FpdCBhdG0uZ2V0QmFsYW5jZSgpKS50b051bWJlcigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYygpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmRlcG9zaXQoMSk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKVxyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB3aXRoZHJhdyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0ud2l0aGRyYXcoMSk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKVxyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGhhcyBNZXRhbWFza1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIHVzZSB0aGlzIEFUTS48L3A+XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHVzZXIgaXMgY29ubmVjdGVkLiBJZiBub3QsIGNvbm5lY3QgdG8gdGhlaXIgYWNjb3VudFxyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5QbGVhc2UgY29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldDwvYnV0dG9uPlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChiYWxhbmNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Zb3VyIEFjY291bnQ6IHthY2NvdW50fTwvcD5cclxuICAgICAgICA8cD5Zb3VyIEJhbGFuY2U6IHtiYWxhbmNlfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXR9PkRlcG9zaXQgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dpdGhkcmF3fT5XaXRoZHJhdyAxIEVUSDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Z2V0V2FsbGV0KCk7fSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2QxcHNnbGpjMzg5bjhxLmNsb3VkZnJvbnQubmV0L2Jvb3RjYW1wcy9sb2dvcy9tU0pOWVdpLU9cIlxyXG4gICAgICAgICAgYWx0PVwiYWx0ZXJuYXRpdmUtdGV4dFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1JScsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzAgYXV0bycgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgTWV0YWNyYWZ0ZXJzIEFUTSE8L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge2luaXRVc2VyKCl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtZm9udDogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzM5NjRDMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlcmVkLWltYWdlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTsgIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF0bV9hYmkiLCJIb21lUGFnZSIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYXRtIiwic2V0QVRNIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJjb250cmFjdEFkZHJlc3MiLCJhdG1BQkkiLCJhYmkiLCJnZXRXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJoYW5kbGVBY2NvdW50IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJhY2NvdW50cyIsImdldEFUTUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJhdG1Db250cmFjdCIsIkNvbnRyYWN0IiwiZ2V0QmFsYW5jZSIsInRvTnVtYmVyIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsIndpdGhkcmF3IiwiaW5pdFVzZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm1haW4iLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbiIsImhlYWRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});