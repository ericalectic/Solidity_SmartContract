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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [withdrawAmount, setWithdrawAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [transactionHistory, setTransactionHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showHistory, setShowHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State to control transaction history visibility\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const handleDepositAmountChange = (event)=>{\n        setDepositAmount(event.target.value);\n    };\n    const handleWithdrawAmountChange = (event)=>{\n        setWithdrawAmount(event.target.value);\n    };\n    const deposit = async ()=>{\n        if (atm && depositAmount) {\n            let tx = await atm.deposit(depositAmount);\n            await tx.wait();\n            getBalance();\n            setDepositAmount(\"\");\n            // Record the deposit transaction with a timestamp\n            const transaction = {\n                type: \"Deposit\",\n                amount: depositAmount,\n                timestamp: new Date().toLocaleString()\n            };\n            setTransactionHistory([\n                ...transactionHistory,\n                transaction\n            ]);\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm && withdrawAmount) {\n            let tx = await atm.withdraw(withdrawAmount);\n            await tx.wait();\n            getBalance();\n            setWithdrawAmount(\"\");\n            // Record the withdraw transaction with a timestamp\n            const transaction = {\n                type: \"Withdraw\",\n                amount: withdrawAmount,\n                timestamp: new Date().toLocaleString()\n            };\n            setTransactionHistory([\n                ...transactionHistory,\n                transaction\n            ]);\n        }\n    };\n    const toggleTransactionHistory = ()=>{\n        setShowHistory(!showHistory);\n    };\n    const renderTransactionHistory = ()=>{\n        if (!showHistory) {\n            return null; // Don't render the transaction history if showHistory is false\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Transaction History\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: transactionHistory.map((transaction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                transaction.type,\n                                \" of \",\n                                transaction.amount,\n                                \" ETH on \",\n                                transaction.timestamp\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-28ec7e60d07df146\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-28ec7e60d07df146\" + \" \" + \"centered-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://d1psgljc389n8q.cloudfront.net/bootcamps/logos/mSJNYWi-O\",\n                    alt: \"alternative-text\",\n                    style: {\n                        width: \"15%\",\n                        display: \"block\",\n                        margin: \"0 auto\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-28ec7e60d07df146\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"white\"\n                    },\n                    className: \"jsx-28ec7e60d07df146\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleTransactionHistory,\n                className: \"jsx-28ec7e60d07df146\",\n                children: showHistory ? \"Hide Transaction History\" : \"Show Transaction History\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            renderTransactionHistory(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"28ec7e60d07df146\",\n                children: \".container.jsx-28ec7e60d07df146{text-align:center;background:#3964c3}.centered-image.jsx-28ec7e60d07df146{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\erica\\\\OneDrive\\\\Desktop\\\\VSCODE\\\\PROJECTS\\\\SOLIDITY\\\\SCM-Starter\\\\pages\\\\index.js\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"Qncd5NOYIPaXT8YYe0EvHVEOoN0=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7Ozs7O1lBRXZFMEM7Ozs7Ozs7Ozs7O0FBWVAsQ0FBQztHQTdKdUIxRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXRtX2FiaSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Bc3Nlc3NtZW50LnNvbC9Bc3Nlc3NtZW50Lmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2F0bSwgc2V0QVRNXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbZGVwb3NpdEFtb3VudCwgc2V0RGVwb3NpdEFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbd2l0aGRyYXdBbW91bnQsIHNldFdpdGhkcmF3QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0cmFuc2FjdGlvbkhpc3RvcnksIHNldFRyYW5zYWN0aW9uSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dIaXN0b3J5LCBzZXRTaG93SGlzdG9yeV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIHRvIGNvbnRyb2wgdHJhbnNhY3Rpb24gaGlzdG9yeSB2aXNpYmlsaXR5XHJcblxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg1RmJEQjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNGNjQyZjY0MTgwYWEzXCI7XHJcbiAgY29uc3QgYXRtQUJJID0gYXRtX2FiaS5hYmk7XHJcblxyXG4gIGNvbnN0IGdldFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgc2V0RXRoV2FsbGV0KHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV0aFdhbGxldCkge1xyXG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XHJcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWNjb3VudCA9IChhY2NvdW50KSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgY29ubmVjdGVkOiBcIiwgYWNjb3VudCk7XHJcbiAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWV0aFdhbGxldCkge1xyXG4gICAgICBhbGVydChcIk1ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcbiAgICBoYW5kbGVBY2NvdW50KGFjY291bnRzKTtcclxuXHJcbiAgICAvLyBvbmNlIHdhbGxldCBpcyBzZXQgd2UgY2FuIGdldCBhIHJlZmVyZW5jZSB0byBvdXIgZGVwbG95ZWQgY29udHJhY3RcclxuICAgIGdldEFUTUNvbnRyYWN0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QVRNQ29udHJhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBhdG1Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhdG1BQkksIHNpZ25lcik7XHJcblxyXG4gICAgc2V0QVRNKGF0bUNvbnRyYWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBzZXRCYWxhbmNlKChhd2FpdCBhdG0uZ2V0QmFsYW5jZSgpKS50b051bWJlcigpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREZXBvc2l0QW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2l0aGRyYXdBbW91bnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFdpdGhkcmF3QW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVwb3NpdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0gJiYgZGVwb3NpdEFtb3VudCkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0uZGVwb3NpdChkZXBvc2l0QW1vdW50KTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICAgIHNldERlcG9zaXRBbW91bnQoXCJcIik7XHJcblxyXG4gICAgICAvLyBSZWNvcmQgdGhlIGRlcG9zaXQgdHJhbnNhY3Rpb24gd2l0aCBhIHRpbWVzdGFtcFxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHtcclxuICAgICAgICB0eXBlOiBcIkRlcG9zaXRcIixcclxuICAgICAgICBhbW91bnQ6IGRlcG9zaXRBbW91bnQsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRyYW5zYWN0aW9uSGlzdG9yeShbLi4udHJhbnNhY3Rpb25IaXN0b3J5LCB0cmFuc2FjdGlvbl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSAmJiB3aXRoZHJhd0Ftb3VudCkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0ud2l0aGRyYXcod2l0aGRyYXdBbW91bnQpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgICAgc2V0V2l0aGRyYXdBbW91bnQoXCJcIik7XHJcblxyXG4gICAgICAvLyBSZWNvcmQgdGhlIHdpdGhkcmF3IHRyYW5zYWN0aW9uIHdpdGggYSB0aW1lc3RhbXBcclxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB7XHJcbiAgICAgICAgdHlwZTogXCJXaXRoZHJhd1wiLFxyXG4gICAgICAgIGFtb3VudDogd2l0aGRyYXdBbW91bnQsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRyYW5zYWN0aW9uSGlzdG9yeShbLi4udHJhbnNhY3Rpb25IaXN0b3J5LCB0cmFuc2FjdGlvbl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRyYW5zYWN0aW9uSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIHNldFNob3dIaXN0b3J5KCFzaG93SGlzdG9yeSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJhbnNhY3Rpb25IaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzaG93SGlzdG9yeSkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gRG9uJ3QgcmVuZGVyIHRoZSB0cmFuc2FjdGlvbiBoaXN0b3J5IGlmIHNob3dIaXN0b3J5IGlzIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+VHJhbnNhY3Rpb24gSGlzdG9yeTwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge3RyYW5zYWN0aW9uSGlzdG9yeS5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLnR5cGV9IG9mIHt0cmFuc2FjdGlvbi5hbW91bnR9IEVUSCBvbiB7dHJhbnNhY3Rpb24udGltZXN0YW1wfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZC1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDFwc2dsamMzODluOHEuY2xvdWRmcm9udC5uZXQvYm9vdGNhbXBzL2xvZ29zL21TSk5ZV2ktT1wiXHJcbiAgICAgICAgICBhbHQ9XCJhbHRlcm5hdGl2ZS10ZXh0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PldlbGNvbWUgdG8gdGhlIE1ldGFjcmFmdGVycyBBVE0hPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVRyYW5zYWN0aW9uSGlzdG9yeX0+XHJcbiAgICAgICAge3Nob3dIaXN0b3J5ID8gXCJIaWRlIFRyYW5zYWN0aW9uIEhpc3RvcnlcIiA6IFwiU2hvdyBUcmFuc2FjdGlvbiBIaXN0b3J5XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7cmVuZGVyVHJhbnNhY3Rpb25IaXN0b3J5KCl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTY0YzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXJlZC1pbWFnZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJhdG1fYWJpIiwiSG9tZVBhZ2UiLCJldGhXYWxsZXQiLCJzZXRFdGhXYWxsZXQiLCJ1bmRlZmluZWQiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF0bSIsInNldEFUTSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZGVwb3NpdEFtb3VudCIsInNldERlcG9zaXRBbW91bnQiLCJ3aXRoZHJhd0Ftb3VudCIsInNldFdpdGhkcmF3QW1vdW50IiwidHJhbnNhY3Rpb25IaXN0b3J5Iiwic2V0VHJhbnNhY3Rpb25IaXN0b3J5Iiwic2hvd0hpc3RvcnkiLCJzZXRTaG93SGlzdG9yeSIsImNvbnRyYWN0QWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImhhbmRsZUFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImFjY291bnRzIiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJoYW5kbGVEZXBvc2l0QW1vdW50Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVdpdGhkcmF3QW1vdW50Q2hhbmdlIiwiZGVwb3NpdCIsInR4Iiwid2FpdCIsInRyYW5zYWN0aW9uIiwidHlwZSIsImFtb3VudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndpdGhkcmF3IiwidG9nZ2xlVHJhbnNhY3Rpb25IaXN0b3J5IiwicmVuZGVyVHJhbnNhY3Rpb25IaXN0b3J5IiwiZGl2IiwiaDIiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJtYWluIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWFkZXIiLCJoMSIsImNvbG9yIiwiaW5pdFVzZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});