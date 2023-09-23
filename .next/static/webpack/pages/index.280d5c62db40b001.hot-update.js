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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [withdrawAmount, setWithdrawAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [transferAmount, setTransferAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [recipientAddress, setRecipientAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // New state for recipient address\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const handleDepositAmountChange = (event)=>{\n        setDepositAmount(event.target.value);\n    };\n    const handleWithdrawAmountChange = (event)=>{\n        setWithdrawAmount(event.target.value);\n    };\n    const handleTransferAmountChange = (event)=>{\n        setTransferAmount(event.target.value);\n    };\n    const handleRecipientAddressChange = (event)=>{\n        setRecipientAddress(event.target.value);\n    };\n    const deposit = async ()=>{\n        if (atm && depositAmount) {\n            let tx = await atm.deposit(depositAmount);\n            await tx.wait();\n            getBalance();\n            setDepositAmount(\"\");\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm && withdrawAmount) {\n            let tx = await atm.withdraw(withdrawAmount);\n            await tx.wait();\n            getBalance();\n            setWithdrawAmount(\"\");\n        }\n    };\n    const transfer = async ()=>{\n        if (atm && transferAmount && recipientAddress) {\n            let tx = await atm.transferTo(recipientAddress, transferAmount); // Use the custom transferTo function\n            await tx.wait();\n            getBalance();\n            setRecipientAddress(\"\");\n        }\n    };\n    const initUser = ()=>{\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 109,\n                columnNumber: 14\n            }, this);\n        }\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter deposit amount\",\n                            value: depositAmount,\n                            onChange: handleDepositAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: deposit,\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter withdraw amount\",\n                            value: withdrawAmount,\n                            onChange: handleWithdrawAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: withdraw,\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter recipient address for Transfer\",\n                            value: recipientAddress,\n                            onChange: handleRecipientAddressChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 147,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter transfer amount\",\n                            value: transferAmount,\n                            onChange: handleTransferAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: transfer,\n                            children: \"Transfer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 159,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 125,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-28ec7e60d07df146\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 179,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"28ec7e60d07df146\",\n                children: \".container.jsx-28ec7e60d07df146{text-align:center;background:#3964c3}.centered-image.jsx-28ec7e60d07df146{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 170,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"pslRjqt+w+w/gWnbUGNnOqi5dvg=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTzdCOzRCQUNQK0MsVUFBVWY7Ozs7OztzQ0FFWiw4REFBQ1k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pqQixPQUFPL0I7NEJBQ1BpRCxVQUFVaEI7Ozs7OztzQ0FFWiw4REFBQ1U7NEJBQU9DLFNBQVNMO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkM7SUFFQXhELGdEQUFTQSxDQUFDLElBQU07UUFDZHdCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUMyQztrREFBZTs7MEJBQ2QsOERBQUNMOzBEQUFjOzBCQUNiLDRFQUFDTTtvQkFDQ0MsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTzt3QkFBRUMsT0FBTzt3QkFBT0MsU0FBUzt3QkFBU0MsUUFBUTtvQkFBUzs7Ozs7Ozs7Ozs7OzBCQUc5RCw4REFBQ0M7OzBCQUNDLDRFQUFDQztvQkFBR0wsT0FBTzt3QkFBRU0sT0FBTztvQkFBUTs7OEJBQUc7Ozs7Ozs7Ozs7O1lBRWhDbkI7Ozs7Ozs7Ozs7O0FBWVAsQ0FBQztHQTVMdUJ2RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXRtX2FiaSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Bc3Nlc3NtZW50LnNvbC9Bc3Nlc3NtZW50Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2F0bSwgc2V0QVRNXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbZGVwb3NpdEFtb3VudCwgc2V0RGVwb3NpdEFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd2l0aGRyYXdBbW91bnQsIHNldFdpdGhkcmF3QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0cmFuc2ZlckFtb3VudCwgc2V0VHJhbnNmZXJBbW91bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlY2lwaWVudEFkZHJlc3MsIHNldFJlY2lwaWVudEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7IC8vIE5ldyBzdGF0ZSBmb3IgcmVjaXBpZW50IGFkZHJlc3NcclxuXHJcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcclxuICBjb25zdCBhdG1BQkkgPSBhdG1fYWJpLmFiaTtcclxuXHJcbiAgY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBzZXRFdGhXYWxsZXQod2luZG93LmV0aGVyZXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXRoV2FsbGV0KSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcclxuICAgICAgaGFuZGxlQWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBY2NvdW50ID0gKGFjY291bnQpID0+IHtcclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBjb25uZWN0ZWQ6IFwiLCBhY2NvdW50KTtcclxuICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgd2FsbGV0IGlzIHJlcXVpcmVkIHRvIGNvbm5lY3RcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG5cclxuICAgIGdldEFUTUNvbnRyYWN0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QVRNQ29udHJhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBhdG1Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhdG1BQkksIHNpZ25lcik7XHJcblxyXG4gICAgc2V0QVRNKGF0bUNvbnRyYWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBzZXRCYWxhbmNlKChhd2FpdCBhdG0uZ2V0QmFsYW5jZSgpKS50b051bWJlcigpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREZXBvc2l0QW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2l0aGRyYXdBbW91bnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFdpdGhkcmF3QW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVHJhbnNmZXJBbW91bnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFRyYW5zZmVyQW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVjaXBpZW50QWRkcmVzc0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UmVjaXBpZW50QWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtICYmIGRlcG9zaXRBbW91bnQpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmRlcG9zaXQoZGVwb3NpdEFtb3VudCk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBzZXREZXBvc2l0QW1vdW50KFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSAmJiB3aXRoZHJhd0Ftb3VudCkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0ud2l0aGRyYXcod2l0aGRyYXdBbW91bnQpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgICAgc2V0V2l0aGRyYXdBbW91bnQoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHJhbnNmZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtICYmIHRyYW5zZmVyQW1vdW50ICYmIHJlY2lwaWVudEFkZHJlc3MpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLnRyYW5zZmVyVG8ocmVjaXBpZW50QWRkcmVzcywgdHJhbnNmZXJBbW91bnQpOyAvLyBVc2UgdGhlIGN1c3RvbSB0cmFuc2ZlclRvIGZ1bmN0aW9uXHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBzZXRSZWNpcGllbnRBZGRyZXNzKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRVc2VyID0gKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIHVzZSB0aGlzIEFUTS48L3A+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9PlxyXG4gICAgICAgICAgUGxlYXNlIGNvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmFsYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPllvdXIgQWNjb3VudDoge2FjY291bnR9PC9wPlxyXG4gICAgICAgIDxwPllvdXIgQmFsYW5jZToge2JhbGFuY2V9PC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVwb3NpdCBhbW91bnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVwb3NpdEFtb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlcG9zaXRBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0fT5EZXBvc2l0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB3aXRoZHJhdyBhbW91bnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17d2l0aGRyYXdBbW91bnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVXaXRoZHJhd0Ftb3VudENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dpdGhkcmF3fT5XaXRoZHJhdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHJlY2lwaWVudCBhZGRyZXNzIGZvciBUcmFuc2ZlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtyZWNpcGllbnRBZGRyZXNzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmVjaXBpZW50QWRkcmVzc0NoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdHJhbnNmZXIgYW1vdW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RyYW5zZmVyQW1vdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHJhbnNmZXJBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0cmFuc2Zlcn0+VHJhbnNmZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDFwc2dsamMzODluOHEuY2xvdWRmcm9udC5uZXQvYm9vdGNhbXBzL2xvZ29zL21TSk5ZV2ktT1wiXHJcbiAgICAgICAgICBhbHQ9XCJhbHRlcm5hdGl2ZS10ZXh0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PldlbGNvbWUgdG8gdGhlIE1ldGFjcmFmdGVycyBBVE0hPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2NGMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyZWQtaW1hZ2Uge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiYXRtX2FiaSIsIkhvbWVQYWdlIiwiZXRoV2FsbGV0Iiwic2V0RXRoV2FsbGV0IiwidW5kZWZpbmVkIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJhdG0iLCJzZXRBVE0iLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImRlcG9zaXRBbW91bnQiLCJzZXREZXBvc2l0QW1vdW50Iiwid2l0aGRyYXdBbW91bnQiLCJzZXRXaXRoZHJhd0Ftb3VudCIsInRyYW5zZmVyQW1vdW50Iiwic2V0VHJhbnNmZXJBbW91bnQiLCJyZWNpcGllbnRBZGRyZXNzIiwic2V0UmVjaXBpZW50QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImhhbmRsZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImFjY291bnRzIiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlIiwiaGFuZGxlVHJhbnNmZXJBbW91bnRDaGFuZ2UiLCJoYW5kbGVSZWNpcGllbnRBZGRyZXNzQ2hhbmdlIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsIndpdGhkcmF3IiwidHJhbnNmZXIiLCJ0cmFuc2ZlclRvIiwiaW5pdFVzZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYWluIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWFkZXIiLCJoMSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});