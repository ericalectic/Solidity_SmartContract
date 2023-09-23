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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [withdrawAmount, setWithdrawAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // New state for withdraw amount\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const handleDepositAmountChange = (event)=>{\n        setDepositAmount(event.target.value);\n    };\n    const handleWithdrawAmountChange = (event)=>{\n        setWithdrawAmount(event.target.value);\n    };\n    const deposit = async ()=>{\n        if (atm && depositAmount) {\n            let tx = await atm.deposit(depositAmount);\n            await tx.wait();\n            getBalance();\n            setDepositAmount(\"\");\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm && withdrawAmount) {\n            let tx = await atm.withdraw(withdrawAmount); // Use the user-specified withdraw amount\n            await tx.wait();\n            getBalance();\n            setWithdrawAmount(\"\");\n        }\n    };\n    const initUser = ()=>{\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 91,\n                columnNumber: 14\n            }, this);\n        }\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter deposit amount\",\n                            value: depositAmount,\n                            onChange: handleDepositAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: deposit,\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter withdraw amount\",\n                            value: withdrawAmount,\n                            onChange: handleWithdrawAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: withdraw,\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-28ec7e60d07df146\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"28ec7e60d07df146\",\n                children: \".container.jsx-28ec7e60d07df146{text-align:center;background:#3964c3}.centered-image.jsx-28ec7e60d07df146{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"5LD4lVfJCMJHsiieY55fk+Bf3w4=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzZDO2dCQUFPQyxTQUFTekI7MEJBQWdCOzs7Ozs7UUFJckMsQ0FBQztRQUVELElBQUlqQixZQUFZTCxXQUFXO1lBQ3pCaUM7UUFDRixDQUFDO1FBRUQscUJBQ0UsOERBQUNlOzs4QkFDQyw4REFBQ0g7O3dCQUFFO3dCQUFlNUM7Ozs7Ozs7OEJBQ2xCLDhEQUFDNEM7O3dCQUFFO3dCQUFleEM7Ozs7Ozs7OEJBQ2xCLDhEQUFDMkM7O3NDQUNDLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWmIsT0FBTy9COzRCQUNQNkMsVUFBVWpCOzs7Ozs7c0NBRVosOERBQUNXOzRCQUFPQyxTQUFTUDtzQ0FBUzs7Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ1E7O3NDQUNDLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWmIsT0FBTzdCOzRCQUNQMkMsVUFBVWI7Ozs7OztzQ0FFWiw4REFBQ087NEJBQU9DLFNBQVNKO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkM7SUFFQWpELGdEQUFTQSxDQUFDLElBQU07UUFDZG9CO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUN1QztrREFBZTs7MEJBQ2QsOERBQUNMOzBEQUFjOzBCQUNiLDRFQUFDTTtvQkFDQ0MsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTzt3QkFBRUMsT0FBTzt3QkFBT0MsU0FBUzt3QkFBU0MsUUFBUTtvQkFBUzs7Ozs7Ozs7Ozs7OzBCQUc5RCw4REFBQ0M7OzBCQUNDLDRFQUFDQztvQkFBR0wsT0FBTzt3QkFBRU0sT0FBTztvQkFBUTs7OEJBQUc7Ozs7Ozs7Ozs7O1lBRWhDbkI7Ozs7Ozs7Ozs7O0FBWVAsQ0FBQztHQTNKdUIvQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXRtX2FiaSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Bc3Nlc3NtZW50LnNvbC9Bc3Nlc3NtZW50Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2F0bSwgc2V0QVRNXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbZGVwb3NpdEFtb3VudCwgc2V0RGVwb3NpdEFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd2l0aGRyYXdBbW91bnQsIHNldFdpdGhkcmF3QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBOZXcgc3RhdGUgZm9yIHdpdGhkcmF3IGFtb3VudFxyXG5cclxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xyXG4gIGNvbnN0IGF0bUFCSSA9IGF0bV9hYmkuYWJpO1xyXG5cclxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldGhXYWxsZXQpIHtcclxuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnQpO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgYWxlcnQoXCJNZXRhTWFzayB3YWxsZXQgaXMgcmVxdWlyZWQgdG8gY29ubmVjdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XHJcblxyXG4gICAgLy8gb25jZSB3YWxsZXQgaXMgc2V0IHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XHJcbiAgICBnZXRBVE1Db250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFUTUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgYXRtQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYXRtQUJJLCBzaWduZXIpO1xyXG5cclxuICAgIHNldEFUTShhdG1Db250cmFjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0QmFsYW5jZSgoYXdhaXQgYXRtLmdldEJhbGFuY2UoKSkudG9OdW1iZXIoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVwb3NpdEFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGVwb3NpdEFtb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRXaXRoZHJhd0Ftb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtICYmIGRlcG9zaXRBbW91bnQpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmRlcG9zaXQoZGVwb3NpdEFtb3VudCk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBzZXREZXBvc2l0QW1vdW50KFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSAmJiB3aXRoZHJhd0Ftb3VudCkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0ud2l0aGRyYXcod2l0aGRyYXdBbW91bnQpOyAvLyBVc2UgdGhlIHVzZXItc3BlY2lmaWVkIHdpdGhkcmF3IGFtb3VudFxyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgICAgc2V0V2l0aGRyYXdBbW91bnQoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdFVzZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWV0aFdhbGxldCkge1xyXG4gICAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YW1hc2sgaW4gb3JkZXIgdG8gdXNlIHRoaXMgQVRNLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+XHJcbiAgICAgICAgICBQbGVhc2UgY29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiYWxhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+WW91ciBBY2NvdW50OiB7YWNjb3VudH08L3A+XHJcbiAgICAgICAgPHA+WW91ciBCYWxhbmNlOiB7YmFsYW5jZX08L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXBvc2l0IGFtb3VudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXBvc2l0QW1vdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVwb3NpdEFtb3VudENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXR9PkRlcG9zaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHdpdGhkcmF3IGFtb3VudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd0Ftb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17d2l0aGRyYXd9PldpdGhkcmF3PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0V2FsbGV0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2QxcHNnbGpjMzg5bjhxLmNsb3VkZnJvbnQubmV0L2Jvb3RjYW1wcy9sb2dvcy9tU0pOWVdpLU9cIlxyXG4gICAgICAgICAgYWx0PVwiYWx0ZXJuYXRpdmUtdGV4dFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNSVcIiwgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5XZWxjb21lIHRvIHRoZSBNZXRhY3JhZnRlcnMgQVRNITwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7aW5pdFVzZXIoKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzM5NjRjMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlcmVkLWltYWdlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF0bV9hYmkiLCJIb21lUGFnZSIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYXRtIiwic2V0QVRNIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJkZXBvc2l0QW1vdW50Iiwic2V0RGVwb3NpdEFtb3VudCIsIndpdGhkcmF3QW1vdW50Iiwic2V0V2l0aGRyYXdBbW91bnQiLCJjb250cmFjdEFkZHJlc3MiLCJhdG1BQkkiLCJhYmkiLCJnZXRXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJoYW5kbGVBY2NvdW50IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJhY2NvdW50cyIsImdldEFUTUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJhdG1Db250cmFjdCIsIkNvbnRyYWN0IiwiZ2V0QmFsYW5jZSIsInRvTnVtYmVyIiwiaGFuZGxlRGVwb3NpdEFtb3VudENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVXaXRoZHJhd0Ftb3VudENoYW5nZSIsImRlcG9zaXQiLCJ0eCIsIndhaXQiLCJ3aXRoZHJhdyIsImluaXRVc2VyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibWFpbiIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIiwiaGVhZGVyIiwiaDEiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});