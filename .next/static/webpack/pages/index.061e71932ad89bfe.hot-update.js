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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [withdrawAmount, setWithdrawAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [transactionHistory, setTransactionHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showHistory, setShowHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to control transaction history visibility\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // Once the wallet is set, we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const handleDepositAmountChange = (event)=>{\n        setDepositAmount(event.target.value);\n    };\n    const handleWithdrawAmountChange = (event)=>{\n        setWithdrawAmount(event.target.value);\n    };\n    const deposit = async ()=>{\n        if (atm && depositAmount) {\n            let tx = await atm.deposit(depositAmount);\n            await tx.wait();\n            getBalance();\n            setDepositAmount(\"\");\n            // Record the deposit transaction with a timestamp\n            const transaction = {\n                type: \"Deposit\",\n                amount: depositAmount,\n                timestamp: new Date().toLocaleString()\n            };\n            setTransactionHistory([\n                ...transactionHistory,\n                transaction\n            ]);\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm && withdrawAmount) {\n            let tx = await atm.withdraw(withdrawAmount);\n            await tx.wait();\n            getBalance();\n            setWithdrawAmount(\"\");\n            // Record the withdraw transaction with a timestamp\n            const transaction = {\n                type: \"Withdraw\",\n                amount: withdrawAmount,\n                timestamp: new Date().toLocaleString()\n            };\n            setTransactionHistory([\n                ...transactionHistory,\n                transaction\n            ]);\n        }\n    };\n    const toggleTransactionHistory = ()=>{\n        setShowHistory(!showHistory);\n    };\n    const renderTransactionHistory = ()=>{\n        if (!showHistory) {\n            return null; // Don't render the transaction history if showHistory is false\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: {\n                        fontFamily: \"Arial\",\n                        color: \"white\"\n                    },\n                    children: \"Transaction History\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                transactionHistory.map((transaction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            fontFamily: \"Arial\"\n                        },\n                        children: [\n                            transaction.type,\n                            \" of \",\n                            transaction.amount,\n                            \" ETH on \",\n                            transaction.timestamp\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-28ec7e60d07df146\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontFamily: \"Arial\",\n                        color: \"white\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontFamily: \"Arial\"\n                        },\n                        className: \"jsx-28ec7e60d07df146\",\n                        children: [\n                            \"Your Account: \",\n                            account\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontFamily: \"Arial\"\n                        },\n                        className: \"jsx-28ec7e60d07df146\",\n                        children: [\n                            \"Your Balance: \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-28ec7e60d07df146\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Enter deposit amount\",\n                                value: depositAmount,\n                                onChange: handleDepositAmountChange,\n                                className: \"jsx-28ec7e60d07df146\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: deposit,\n                                className: \"jsx-28ec7e60d07df146\",\n                                children: \"Deposit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                                lineNumber: 156,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-28ec7e60d07df146\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Enter withdraw amount\",\n                                value: withdrawAmount,\n                                onChange: handleWithdrawAmountChange,\n                                className: \"jsx-28ec7e60d07df146\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                                lineNumber: 159,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: withdraw,\n                                className: \"jsx-28ec7e60d07df146\",\n                                children: \"Withdraw\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                        className: \"jsx-28ec7e60d07df146\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 167,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleTransactionHistory,\n                        className: \"jsx-28ec7e60d07df146\",\n                        children: showHistory ? \"Hide Transaction History\" : \"Show Transaction History\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                        lineNumber: 168,\n                        columnNumber: 11\n                    }, this),\n                    renderTransactionHistory()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                className: \"jsx-28ec7e60d07df146\",\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 174,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"28ec7e60d07df146\",\n                children: \".container.jsx-28ec7e60d07df146{text-align:center;background:#3964c3}.centered-image.jsx-28ec7e60d07df146{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"Qncd5NOYIPaXT8YYe0EvHVEOoN0=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUM0QztBQUU3RCxTQUFTSSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUNPO0lBQzNDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQ087SUFDdkMsTUFBTSxDQUFDRyxLQUFLQyxPQUFPLEdBQUdYLCtDQUFRQSxDQUFDTztJQUMvQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUNPO0lBQ3ZDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNrQixvQkFBb0JDLHNCQUFzQixHQUFHbkIsK0NBQVFBLENBQUMsRUFBRTtJQUMvRCxNQUFNLENBQUNvQixhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBQyxLQUFLLEdBQUcsa0RBQWtEO0lBRXpHLE1BQU1zQixrQkFBa0I7SUFDeEIsTUFBTUMsU0FBU3BCLG9GQUFXO0lBRTFCLE1BQU1zQixZQUFZLFVBQVk7UUFDNUIsSUFBSUMsT0FBT0MsUUFBUSxFQUFFO1lBQ25CckIsYUFBYW9CLE9BQU9DLFFBQVE7UUFDOUIsQ0FBQztRQUVELElBQUl0QixXQUFXO1lBQ2IsTUFBTUcsVUFBVSxNQUFNSCxVQUFVdUIsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQWU7WUFDakVDLGNBQWN0QjtRQUNoQixDQUFDO0lBQ0g7SUFFQSxNQUFNc0IsZ0JBQWdCLENBQUN0QixVQUFZO1FBQ2pDLElBQUlBLFNBQVM7WUFDWHVCLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJ4QjtZQUNuQ0MsV0FBV0Q7UUFDYixPQUFPO1lBQ0x1QixRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO0lBQ0g7SUFFQSxNQUFNQyxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJLENBQUM1QixXQUFXO1lBQ2Q2QixNQUFNO1lBQ047UUFDRixDQUFDO1FBRUQsTUFBTUMsV0FBVyxNQUFNOUIsVUFBVXVCLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQXNCO1FBQ3pFQyxjQUFjSztRQUVkLDBFQUEwRTtRQUMxRUM7SUFDRjtJQUVBLE1BQU1BLGlCQUFpQixJQUFNO1FBQzNCLE1BQU1DLFdBQVcsSUFBSW5DLGlFQUE2QixDQUFDRztRQUNuRCxNQUFNbUMsU0FBU0gsU0FBU0ksU0FBUztRQUNqQyxNQUFNQyxjQUFjLElBQUl4QyxtREFBZSxDQUFDb0IsaUJBQWlCQyxRQUFRaUI7UUFFakU3QixPQUFPK0I7SUFDVDtJQUVBLE1BQU1FLGFBQWEsVUFBWTtRQUM3QixJQUFJbEMsS0FBSztZQUNQRyxXQUFXLENBQUMsTUFBTUgsSUFBSWtDLFVBQVUsRUFBQyxFQUFHQyxRQUFRO1FBQzlDLENBQUM7SUFDSDtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQyxRQUFVO1FBQzNDaEMsaUJBQWlCZ0MsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JDO0lBRUEsTUFBTUMsNkJBQTZCLENBQUNILFFBQVU7UUFDNUM5QixrQkFBa0I4QixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdEM7SUFFQSxNQUFNRSxVQUFVLFVBQVk7UUFDMUIsSUFBSXpDLE9BQU9JLGVBQWU7WUFDeEIsSUFBSXNDLEtBQUssTUFBTTFDLElBQUl5QyxPQUFPLENBQUNyQztZQUMzQixNQUFNc0MsR0FBR0MsSUFBSTtZQUNiVDtZQUNBN0IsaUJBQWlCO1lBRWpCLGtEQUFrRDtZQUNsRCxNQUFNdUMsY0FBYztnQkFDbEJDLE1BQU07Z0JBQ05DLFFBQVExQztnQkFDUjJDLFdBQVcsSUFBSUMsT0FBT0MsY0FBYztZQUN0QztZQUNBeEMsc0JBQXNCO21CQUFJRDtnQkFBb0JvQzthQUFZO1FBQzVELENBQUM7SUFDSDtJQUVBLE1BQU1NLFdBQVcsVUFBWTtRQUMzQixJQUFJbEQsT0FBT00sZ0JBQWdCO1lBQ3pCLElBQUlvQyxLQUFLLE1BQU0xQyxJQUFJa0QsUUFBUSxDQUFDNUM7WUFDNUIsTUFBTW9DLEdBQUdDLElBQUk7WUFDYlQ7WUFDQTNCLGtCQUFrQjtZQUVsQixtREFBbUQ7WUFDbkQsTUFBTXFDLGNBQWM7Z0JBQ2xCQyxNQUFNO2dCQUNOQyxRQUFReEM7Z0JBQ1J5QyxXQUFXLElBQUlDLE9BQU9DLGNBQWM7WUFDdEM7WUFDQXhDLHNCQUFzQjttQkFBSUQ7Z0JBQW9Cb0M7YUFBWTtRQUM1RCxDQUFDO0lBQ0g7SUFFQSxNQUFNTywyQkFBMkIsSUFBTTtRQUNyQ3hDLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxNQUFNMEMsMkJBQTJCLElBQU07UUFDckMsSUFBSSxDQUFDMUMsYUFBYTtZQUNoQixPQUFPLElBQUksRUFBRSwrREFBK0Q7UUFDOUUsQ0FBQztRQUVELHFCQUNFLDhEQUFDMkM7OzhCQUNDLDhEQUFDQztvQkFBR0MsT0FBTzt3QkFBRUMsWUFBVzt3QkFBU0MsT0FBTztvQkFBUTs4QkFBRzs7Ozs7O2dCQUNoRGpELG1CQUFtQmtELEdBQUcsQ0FBQyxDQUFDZCxhQUFhZSxzQkFDcEMsOERBQUNDO3dCQUFHTCxPQUFPOzRCQUFFQyxZQUFXO3dCQUFPOzs0QkFDNUJaLFlBQVlDLElBQUk7NEJBQUM7NEJBQUtELFlBQVlFLE1BQU07NEJBQUM7NEJBQVNGLFlBQVlHLFNBQVM7O3VCQURuQ1k7Ozs7Ozs7Ozs7O0lBT2pEO0lBRUFwRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2R3QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDOEM7a0RBQWU7OzBCQUNkLDhEQUFDUjswREFBYzswQkFDYiw0RUFBQ1M7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pULE9BQU87d0JBQUVVLE9BQU87d0JBQU9DLFNBQVM7d0JBQVNDLFFBQVE7b0JBQVM7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNDOzswQkFDQyw0RUFBQ0M7b0JBQUdkLE9BQU87d0JBQUVDLFlBQVc7d0JBQVNDLE9BQU87b0JBQVE7OzhCQUFHOzs7Ozs7Ozs7OztZQUVwRDNELHdCQUNDLDhEQUFDdUQ7OztrQ0FDQyw4REFBQ2lCO3dCQUFFZixPQUFPOzRCQUFFQyxZQUFXO3dCQUFPOzs7NEJBQUc7NEJBQWUxRDs7Ozs7OztrQ0FDaEQsOERBQUN3RTt3QkFBRWYsT0FBTzs0QkFBRUMsWUFBVzt3QkFBTzs7OzRCQUFHOzRCQUFldEQ7Ozs7Ozs7a0NBQ2hELDhEQUFDbUQ7OzswQ0FDQyw4REFBQ2tCO2dDQUNDMUIsTUFBSztnQ0FDTDJCLGFBQVk7Z0NBQ1pqQyxPQUFPbkM7Z0NBQ1BxRSxVQUFVckM7Ozs7Ozs7MENBRVosOERBQUNzQztnQ0FBT0MsU0FBU2xDOzswQ0FBUzs7Ozs7Ozs7Ozs7O2tDQUU1Qiw4REFBQ1k7OzswQ0FDQyw4REFBQ2tCO2dDQUNDMUIsTUFBSztnQ0FDTDJCLGFBQVk7Z0NBQ1pqQyxPQUFPakM7Z0NBQ1BtRSxVQUFVakM7Ozs7Ozs7MENBRVosOERBQUNrQztnQ0FBT0MsU0FBU3pCOzswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUU3Qiw4REFBQzBCOzs7Ozs7O2tDQUNELDhEQUFDRjt3QkFBT0MsU0FBU3hCOztrQ0FDZHpDLGNBQWMsNkJBQTZCLDBCQUEwQjs7Ozs7O29CQUV2RTBDOzs7Ozs7cUNBR0gsOERBQUNzQjtnQkFBT0MsU0FBU3BEOzswQkFBZ0I7Ozs7O29CQUNsQzs7Ozs7Ozs7Ozs7QUFZUCxDQUFDO0dBdEx1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBhdG1fYWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Fzc2Vzc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYXRtLCBzZXRBVE1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtkZXBvc2l0QW1vdW50LCBzZXREZXBvc2l0QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3aXRoZHJhd0Ftb3VudCwgc2V0V2l0aGRyYXdBbW91bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RyYW5zYWN0aW9uSGlzdG9yeSwgc2V0VHJhbnNhY3Rpb25IaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd0hpc3RvcnksIHNldFNob3dIaXN0b3J5XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgdG8gY29udHJvbCB0cmFuc2FjdGlvbiBoaXN0b3J5IHZpc2liaWxpdHlcclxuXHJcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcclxuICBjb25zdCBhdG1BQkkgPSBhdG1fYWJpLmFiaTtcclxuXHJcbiAgY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBzZXRFdGhXYWxsZXQod2luZG93LmV0aGVyZXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXRoV2FsbGV0KSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcclxuICAgICAgaGFuZGxlQWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBY2NvdW50ID0gKGFjY291bnQpID0+IHtcclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBjb25uZWN0ZWQ6IFwiLCBhY2NvdW50KTtcclxuICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgd2FsbGV0IGlzIHJlcXVpcmVkIHRvIGNvbm5lY3RcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG5cclxuICAgIC8vIE9uY2UgdGhlIHdhbGxldCBpcyBzZXQsIHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XHJcbiAgICBnZXRBVE1Db250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFUTUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgYXRtQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYXRtQUJJLCBzaWduZXIpO1xyXG5cclxuICAgIHNldEFUTShhdG1Db250cmFjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0QmFsYW5jZSgoYXdhaXQgYXRtLmdldEJhbGFuY2UoKSkudG9OdW1iZXIoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVwb3NpdEFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGVwb3NpdEFtb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRXaXRoZHJhd0Ftb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtICYmIGRlcG9zaXRBbW91bnQpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmRlcG9zaXQoZGVwb3NpdEFtb3VudCk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBzZXREZXBvc2l0QW1vdW50KFwiXCIpO1xyXG5cclxuICAgICAgLy8gUmVjb3JkIHRoZSBkZXBvc2l0IHRyYW5zYWN0aW9uIHdpdGggYSB0aW1lc3RhbXBcclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB7XHJcbiAgICAgICAgdHlwZTogXCJEZXBvc2l0XCIsXHJcbiAgICAgICAgYW1vdW50OiBkZXBvc2l0QW1vdW50LFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUcmFuc2FjdGlvbkhpc3RvcnkoWy4uLnRyYW5zYWN0aW9uSGlzdG9yeSwgdHJhbnNhY3Rpb25dKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB3aXRoZHJhdyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0gJiYgd2l0aGRyYXdBbW91bnQpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLndpdGhkcmF3KHdpdGhkcmF3QW1vdW50KTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIHNldFdpdGhkcmF3QW1vdW50KFwiXCIpO1xyXG5cclxuICAgICAgLy8gUmVjb3JkIHRoZSB3aXRoZHJhdyB0cmFuc2FjdGlvbiB3aXRoIGEgdGltZXN0YW1wXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0ge1xyXG4gICAgICAgIHR5cGU6IFwiV2l0aGRyYXdcIixcclxuICAgICAgICBhbW91bnQ6IHdpdGhkcmF3QW1vdW50LFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRUcmFuc2FjdGlvbkhpc3RvcnkoWy4uLnRyYW5zYWN0aW9uSGlzdG9yeSwgdHJhbnNhY3Rpb25dKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVUcmFuc2FjdGlvbkhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93SGlzdG9yeSghc2hvd0hpc3RvcnkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRyYW5zYWN0aW9uSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGlmICghc2hvd0hpc3RvcnkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIERvbid0IHJlbmRlciB0aGUgdHJhbnNhY3Rpb24gaGlzdG9yeSBpZiBzaG93SGlzdG9yeSBpcyBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRGYW1pbHk6XCJBcmlhbFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2gyPlxyXG4gICAgICAgICAge3RyYW5zYWN0aW9uSGlzdG9yeS5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZm9udEZhbWlseTpcIkFyaWFsXCJ9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICB7dHJhbnNhY3Rpb24udHlwZX0gb2Yge3RyYW5zYWN0aW9uLmFtb3VudH0gRVRIIG9uIHt0cmFuc2FjdGlvbi50aW1lc3RhbXB9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFdhbGxldCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWltYWdlXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kMXBzZ2xqYzM4OW44cS5jbG91ZGZyb250Lm5ldC9ib290Y2FtcHMvbG9nb3MvbVNKTllXaS1PXCJcclxuICAgICAgICAgIGFsdD1cImFsdGVybmF0aXZlLXRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRGYW1pbHk6XCJBcmlhbFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PldlbGNvbWUgdG8gdGhlIE1ldGFjcmFmdGVycyBBVE0hPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHthY2NvdW50ID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250RmFtaWx5OlwiQXJpYWxcIn19PllvdXIgQWNjb3VudDoge2FjY291bnR9PC9wPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udEZhbWlseTpcIkFyaWFsXCJ9fT5Zb3VyIEJhbGFuY2U6IHtiYWxhbmNlfTwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVwb3NpdCBhbW91bnRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXBvc2l0QW1vdW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXR9PkRlcG9zaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB3aXRoZHJhdyBhbW91bnRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt3aXRoZHJhd0Ftb3VudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlV2l0aGRyYXdBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17d2l0aGRyYXd9PldpdGhkcmF3PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUcmFuc2FjdGlvbkhpc3Rvcnl9PlxyXG4gICAgICAgICAgICB7c2hvd0hpc3RvcnkgPyBcIkhpZGUgVHJhbnNhY3Rpb24gSGlzdG9yeVwiIDogXCJTaG93IFRyYW5zYWN0aW9uIEhpc3RvcnlcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge3JlbmRlclRyYW5zYWN0aW9uSGlzdG9yeSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9PlBsZWFzZSBjb25uZWN0IHlvdXIgTWV0YW1hc2sgd2FsbGV0PC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTY0YzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXJlZC1pbWFnZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJhdG1fYWJpIiwiSG9tZVBhZ2UiLCJldGhXYWxsZXQiLCJzZXRFdGhXYWxsZXQiLCJ1bmRlZmluZWQiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF0bSIsInNldEFUTSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZGVwb3NpdEFtb3VudCIsInNldERlcG9zaXRBbW91bnQiLCJ3aXRoZHJhd0Ftb3VudCIsInNldFdpdGhkcmF3QW1vdW50IiwidHJhbnNhY3Rpb25IaXN0b3J5Iiwic2V0VHJhbnNhY3Rpb25IaXN0b3J5Iiwic2hvd0hpc3RvcnkiLCJzZXRTaG93SGlzdG9yeSIsImNvbnRyYWN0QWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImhhbmRsZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImFjY291bnRzIiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsInRyYW5zYWN0aW9uIiwidHlwZSIsImFtb3VudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndpdGhkcmF3IiwidG9nZ2xlVHJhbnNhY3Rpb25IaXN0b3J5IiwicmVuZGVyVHJhbnNhY3Rpb25IaXN0b3J5IiwiZGl2IiwiaDIiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsIm1hcCIsImluZGV4IiwibGkiLCJtYWluIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIiwiaGVhZGVyIiwiaDEiLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});