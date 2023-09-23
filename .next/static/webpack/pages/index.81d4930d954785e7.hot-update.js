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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [withdrawAmount, setWithdrawAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [transferAmount, setTransferAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // New state for transfer amount\n    const [recipientAddress, setRecipientAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // New state for recipient address\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const handleDepositAmountChange = (event)=>{\n        setDepositAmount(event.target.value);\n    };\n    const handleWithdrawAmountChange = (event)=>{\n        setWithdrawAmount(event.target.value);\n    };\n    const handleTransferAmountChange = (event)=>{\n        setTransferAmount(event.target.value);\n    };\n    const handleRecipientAddressChange = (event)=>{\n        setRecipientAddress(event.target.value);\n    };\n    const deposit = async ()=>{\n        if (atm && depositAmount) {\n            let tx = await atm.deposit(depositAmount);\n            await tx.wait();\n            getBalance();\n            setDepositAmount(\"\");\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm && withdrawAmount) {\n            let tx = await atm.withdraw(withdrawAmount);\n            await tx.wait();\n            getBalance();\n            setWithdrawAmount(\"\");\n        }\n    };\n    const transferFrom = async ()=>{\n        if (atm && transferAmount && recipientAddress) {\n            let tx = await atm.transferFrom(recipientAddress, transferAmount); // Use the new transferFrom function\n            await tx.wait();\n            getBalance();\n            setTransferAmount(\"\");\n            setRecipientAddress(\"\");\n        }\n    };\n    const initUser = ()=>{\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 14\n            }, this);\n        }\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter deposit amount\",\n                            value: depositAmount,\n                            onChange: handleDepositAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: deposit,\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter withdraw amount\",\n                            value: withdrawAmount,\n                            onChange: handleWithdrawAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: withdraw,\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            placeholder: \"Enter transfer amount\",\n                            value: transferAmount,\n                            onChange: handleTransferAmountChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter recipient address\",\n                            value: recipientAddress,\n                            onChange: handleRecipientAddressChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: transferFrom,\n                            children: \"Transfer From\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 161,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-28ec7e60d07df146\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 174,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 181,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"28ec7e60d07df146\",\n                children: \".container.jsx-28ec7e60d07df146{text-align:center;background:#3964c3}.centered-image.jsx-28ec7e60d07df146{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 172,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"pslRjqt+w+w/gWnbUGNnOqi5dvg=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWjtBQUM0QztBQUU3RCxTQUFTSSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUNPO0lBQzNDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQ087SUFDdkMsTUFBTSxDQUFDRyxLQUFLQyxPQUFPLEdBQUdYLCtDQUFRQSxDQUFDTztJQUMvQixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUNPO0lBQ3ZDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNrQixnQkFBZ0JDLGtCQUFrQixHQUFHbkIsK0NBQVFBLENBQUMsS0FBSyxnQ0FBZ0M7SUFDMUYsTUFBTSxDQUFDb0Isa0JBQWtCQyxvQkFBb0IsR0FBR3JCLCtDQUFRQSxDQUFDLEtBQUssa0NBQWtDO0lBRWhHLE1BQU1zQixrQkFBa0I7SUFDeEIsTUFBTUMsU0FBU3BCLG9GQUFXO0lBRTFCLE1BQU1zQixZQUFZLFVBQVk7UUFDNUIsSUFBSUMsT0FBT0MsUUFBUSxFQUFFO1lBQ25CckIsYUFBYW9CLE9BQU9DLFFBQVE7UUFDOUIsQ0FBQztRQUVELElBQUl0QixXQUFXO1lBQ2IsTUFBTUcsVUFBVSxNQUFNSCxVQUFVdUIsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQWU7WUFDakVDLGNBQWN0QjtRQUNoQixDQUFDO0lBQ0g7SUFFQSxNQUFNc0IsZ0JBQWdCLENBQUN0QixVQUFZO1FBQ2pDLElBQUlBLFNBQVM7WUFDWHVCLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJ4QjtZQUNuQ0MsV0FBV0Q7UUFDYixPQUFPO1lBQ0x1QixRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO0lBQ0g7SUFFQSxNQUFNQyxpQkFBaUIsVUFBWTtRQUNqQyxJQUFJLENBQUM1QixXQUFXO1lBQ2Q2QixNQUFNO1lBQ047UUFDRixDQUFDO1FBRUQsTUFBTUMsV0FBVyxNQUFNOUIsVUFBVXVCLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQXNCO1FBQ3pFQyxjQUFjSztRQUVkLHFFQUFxRTtRQUNyRUM7SUFDRjtJQUVBLE1BQU1BLGlCQUFpQixJQUFNO1FBQzNCLE1BQU1DLFdBQVcsSUFBSW5DLGlFQUE2QixDQUFDRztRQUNuRCxNQUFNbUMsU0FBU0gsU0FBU0ksU0FBUztRQUNqQyxNQUFNQyxjQUFjLElBQUl4QyxtREFBZSxDQUFDb0IsaUJBQWlCQyxRQUFRaUI7UUFFakU3QixPQUFPK0I7SUFDVDtJQUVBLE1BQU1FLGFBQWEsVUFBWTtRQUM3QixJQUFJbEMsS0FBSztZQUNQRyxXQUFXLENBQUMsTUFBTUgsSUFBSWtDLFVBQVUsRUFBQyxFQUFHQyxRQUFRO1FBQzlDLENBQUM7SUFDSDtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQyxRQUFVO1FBQzNDaEMsaUJBQWlCZ0MsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JDO0lBRUEsTUFBTUMsNkJBQTZCLENBQUNILFFBQVU7UUFDNUM5QixrQkFBa0I4QixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdEM7SUFFQSxNQUFNRSw2QkFBNkIsQ0FBQ0osUUFBVTtRQUM1QzVCLGtCQUFrQjRCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN0QztJQUVBLE1BQU1HLCtCQUErQixDQUFDTCxRQUFVO1FBQzlDMUIsb0JBQW9CMEIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hDO0lBRUEsTUFBTUksVUFBVSxVQUFZO1FBQzFCLElBQUkzQyxPQUFPSSxlQUFlO1lBQ3hCLElBQUl3QyxLQUFLLE1BQU01QyxJQUFJMkMsT0FBTyxDQUFDdkM7WUFDM0IsTUFBTXdDLEdBQUdDLElBQUk7WUFDYlg7WUFDQTdCLGlCQUFpQjtRQUNuQixDQUFDO0lBQ0g7SUFFQSxNQUFNeUMsV0FBVyxVQUFZO1FBQzNCLElBQUk5QyxPQUFPTSxnQkFBZ0I7WUFDekIsSUFBSXNDLEtBQUssTUFBTTVDLElBQUk4QyxRQUFRLENBQUN4QztZQUM1QixNQUFNc0MsR0FBR0MsSUFBSTtZQUNiWDtZQUNBM0Isa0JBQWtCO1FBQ3BCLENBQUM7SUFDSDtJQUVBLE1BQU13QyxlQUFlLFVBQVk7UUFDL0IsSUFBSS9DLE9BQU9RLGtCQUFrQkUsa0JBQWtCO1lBQzdDLElBQUlrQyxLQUFLLE1BQU01QyxJQUFJK0MsWUFBWSxDQUFDckMsa0JBQWtCRixpQkFBaUIsb0NBQW9DO1lBQ3ZHLE1BQU1vQyxHQUFHQyxJQUFJO1lBQ2JYO1lBQ0F6QixrQkFBa0I7WUFDbEJFLG9CQUFvQjtRQUN0QixDQUFDO0lBQ0g7SUFFQSxNQUFNcUMsV0FBVyxJQUFNO1FBQ3JCLElBQUksQ0FBQ3JELFdBQVc7WUFDZCxxQkFBTyw4REFBQ3NEOzBCQUFFOzs7Ozs7UUFDWixDQUFDO1FBRUQsSUFBSSxDQUFDbkQsU0FBUztZQUNaLHFCQUNFLDhEQUFDb0Q7Z0JBQU9DLFNBQVM1QjswQkFBZ0I7Ozs7OztRQUlyQyxDQUFDO1FBRUQsSUFBSXJCLFlBQVlMLFdBQVc7WUFDekJxQztRQUNGLENBQUM7UUFFRCxxQkFDRSw4REFBQ2tCOzs4QkFDQyw4REFBQ0g7O3dCQUFFO3dCQUFlbkQ7Ozs7Ozs7OEJBQ2xCLDhEQUFDbUQ7O3dCQUFFO3dCQUFlL0M7Ozs7Ozs7OEJBQ2xCLDhEQUFDa0Q7O3NDQUNDLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWmhCLE9BQU9uQzs0QkFDUG9ELFVBQVVwQjs7Ozs7O3NDQUVaLDhEQUFDYzs0QkFBT0MsU0FBU1I7c0NBQVM7Ozs7Ozs7Ozs7Ozs4QkFFNUIsOERBQUNTOztzQ0FDQyw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1poQixPQUFPakM7NEJBQ1BrRCxVQUFVaEI7Ozs7OztzQ0FFWiw4REFBQ1U7NEJBQU9DLFNBQVNMO3NDQUFVOzs7Ozs7Ozs7Ozs7OEJBRTdCLDhEQUFDTTs7c0NBQ0MsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaaEIsT0FBTy9COzRCQUNQZ0QsVUFBVWY7Ozs7OztzQ0FFWiw4REFBQ1k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1poQixPQUFPN0I7NEJBQ1A4QyxVQUFVZDs7Ozs7O3NDQUVaLDhEQUFDUTs0QkFBT0MsU0FBU0o7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QztJQUVBeEQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkd0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzBDO2tEQUFlOzswQkFDZCw4REFBQ0w7MERBQWM7MEJBQ2IsNEVBQUNNO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO3dCQUFFQyxPQUFPO3dCQUFPQyxTQUFTO3dCQUFTQyxRQUFRO29CQUFTOzs7Ozs7Ozs7Ozs7MEJBRzlELDhEQUFDQzs7MEJBQ0MsNEVBQUNDO29CQUFHTCxPQUFPO3dCQUFFTSxPQUFPO29CQUFROzs4QkFBRzs7Ozs7Ozs7Ozs7WUFFaENuQjs7Ozs7Ozs7Ozs7QUFZUCxDQUFDO0dBOUx1QnREO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBhdG1fYWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Fzc2Vzc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYXRtLCBzZXRBVE1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtkZXBvc2l0QW1vdW50LCBzZXREZXBvc2l0QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3aXRoZHJhd0Ftb3VudCwgc2V0V2l0aGRyYXdBbW91bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RyYW5zZmVyQW1vdW50LCBzZXRUcmFuc2ZlckFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gTmV3IHN0YXRlIGZvciB0cmFuc2ZlciBhbW91bnRcclxuICBjb25zdCBbcmVjaXBpZW50QWRkcmVzcywgc2V0UmVjaXBpZW50QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTsgLy8gTmV3IHN0YXRlIGZvciByZWNpcGllbnQgYWRkcmVzc1xyXG5cclxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiO1xyXG4gIGNvbnN0IGF0bUFCSSA9IGF0bV9hYmkuYWJpO1xyXG5cclxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldGhXYWxsZXQpIHtcclxuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnQpO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgYWxlcnQoXCJNZXRhTWFzayB3YWxsZXQgaXMgcmVxdWlyZWQgdG8gY29ubmVjdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XHJcblxyXG4gICAgLy8gb25jZSB3YWxsZXQgaXMgc2V0IHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XHJcbiAgICBnZXRBVE1Db250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFUTUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgYXRtQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYXRtQUJJLCBzaWduZXIpO1xyXG5cclxuICAgIHNldEFUTShhdG1Db250cmFjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0QmFsYW5jZSgoYXdhaXQgYXRtLmdldEJhbGFuY2UoKSkudG9OdW1iZXIoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVwb3NpdEFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGVwb3NpdEFtb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRXaXRoZHJhd0Ftb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRyYW5zZmVyQW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRUcmFuc2ZlckFtb3VudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlY2lwaWVudEFkZHJlc3NDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFJlY2lwaWVudEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXBvc2l0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSAmJiBkZXBvc2l0QW1vdW50KSB7XHJcbiAgICAgIGxldCB0eCA9IGF3YWl0IGF0bS5kZXBvc2l0KGRlcG9zaXRBbW91bnQpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgICAgc2V0RGVwb3NpdEFtb3VudChcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB3aXRoZHJhdyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0gJiYgd2l0aGRyYXdBbW91bnQpIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLndpdGhkcmF3KHdpdGhkcmF3QW1vdW50KTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIHNldFdpdGhkcmF3QW1vdW50KFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRyYW5zZmVyRnJvbSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0gJiYgdHJhbnNmZXJBbW91bnQgJiYgcmVjaXBpZW50QWRkcmVzcykge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0udHJhbnNmZXJGcm9tKHJlY2lwaWVudEFkZHJlc3MsIHRyYW5zZmVyQW1vdW50KTsgLy8gVXNlIHRoZSBuZXcgdHJhbnNmZXJGcm9tIGZ1bmN0aW9uXHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgICBzZXRUcmFuc2ZlckFtb3VudChcIlwiKTtcclxuICAgICAgc2V0UmVjaXBpZW50QWRkcmVzcyhcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhbWFzayB0byB1c2UgdGhpcyBBVE0uPC9wPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5cclxuICAgICAgICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgTWV0YW1hc2sgd2FsbGV0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Zb3VyIEFjY291bnQ6IHthY2NvdW50fTwvcD5cclxuICAgICAgICA8cD5Zb3VyIEJhbGFuY2U6IHtiYWxhbmNlfTwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlcG9zaXQgYW1vdW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e2RlcG9zaXRBbW91bnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0+RGVwb3NpdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2l0aGRyYXcgYW1vdW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e3dpdGhkcmF3QW1vdW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlV2l0aGRyYXdBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3aXRoZHJhd30+V2l0aGRyYXc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRyYW5zZmVyIGFtb3VudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0cmFuc2ZlckFtb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRyYW5zZmVyQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVjaXBpZW50IGFkZHJlc3NcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50QWRkcmVzc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJlY2lwaWVudEFkZHJlc3NDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0cmFuc2ZlckZyb219PlRyYW5zZmVyIEZyb208L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDFwc2dsamMzODluOHEuY2xvdWRmcm9udC5uZXQvYm9vdGNhbXBzL2xvZ29zL21TSk5ZV2ktT1wiXHJcbiAgICAgICAgICBhbHQ9XCJhbHRlcm5hdGl2ZS10ZXh0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PldlbGNvbWUgdG8gdGhlIE1ldGFjcmFmdGVycyBBVE0hPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2NGMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyZWQtaW1hZ2Uge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiYXRtX2FiaSIsIkhvbWVQYWdlIiwiZXRoV2FsbGV0Iiwic2V0RXRoV2FsbGV0IiwidW5kZWZpbmVkIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJhdG0iLCJzZXRBVE0iLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImRlcG9zaXRBbW91bnQiLCJzZXREZXBvc2l0QW1vdW50Iiwid2l0aGRyYXdBbW91bnQiLCJzZXRXaXRoZHJhd0Ftb3VudCIsInRyYW5zZmVyQW1vdW50Iiwic2V0VHJhbnNmZXJBbW91bnQiLCJyZWNpcGllbnRBZGRyZXNzIiwic2V0UmVjaXBpZW50QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImhhbmRsZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImFjY291bnRzIiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlIiwiaGFuZGxlVHJhbnNmZXJBbW91bnRDaGFuZ2UiLCJoYW5kbGVSZWNpcGllbnRBZGRyZXNzQ2hhbmdlIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsIndpdGhkcmF3IiwidHJhbnNmZXJGcm9tIiwiaW5pdFVzZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYWluIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWFkZXIiLCJoMSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});