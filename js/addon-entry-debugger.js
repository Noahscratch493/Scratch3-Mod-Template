(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-debugger"],{

/***/ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/index.js!./src/addons/addons/debugger/style.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader!./src/addons/addons/debugger/style.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/url/escape.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/css-base.js */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=\"ltr\"] .sa-debugger-container {\n  margin-right: 0.2rem;\n}\n\n[dir=\"rtl\"] .sa-debugger-container {\n  margin-left: 0.2rem;\n}\n\n.sa-debugger-small .sa-debugger-container {\n  display: none !important;\n}\n\n.sa-debugger-interface {\n  display: none;\n  position: absolute;\n  z-index: 492;\n  background-color: white;\n  width: 565px;\n  height: 25rem;\n}\n[theme=\"dark\"] .sa-debugger-interface {\n  background: var(--ui-primary);\n}\n\n.sa-debugger-interface [class*=\"card_header-buttons_\"] {\n  background-color: #29beb8;\n  border-color: #3aa8a4;\n}\n\n.sa-debugger-interface h1 {\n  padding: 10px;\n  z-index: 10;\n  width: calc(100% - 20px);\n  font-size: 20px;\n}\n\n.sa-debugger-tabs {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  font-size: 0.75rem;\n}\n.sa-debugger-tabs li {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  padding: 0.5em 1em;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 1rem;\n  color: white;\n  cursor: pointer;\n}\n.sa-debugger-tabs li + li {\n  margin-inline-start: 10px;\n}\n.sa-debugger-tabs li:hover {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.sa-debugger-tabs li.sa-debugger-tab-selected {\n  background-color: white;\n  background-clip: padding-box;\n  border-color: rgba(0, 0, 0, 0.25);\n  color: #4d97ff;\n}\n.sa-debugger-tabs li img {\n  margin: 0;\n  margin-right: 0.25rem;\n  width: 1rem;\n  filter: brightness(0) invert(1);\n}\n.sa-debugger-tabs li.sa-debugger-tab-selected img {\n  filter: none;\n}\n\n.sa-debugger-header-buttons img {\n  width: 20px;\n  height: 20px;\n}\n\n.sa-debugger-unpause {\n  animation: saDebuggerUnpause 2s infinite alternate;\n}\n\n@keyframes saDebuggerUnpause {\n  0% {\n    background-color: rgba(0, 0, 0, 0.15);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.sa-debugger-tab-content {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  cursor: auto;\n}\n\n.sa-debugger-chart {\n  width: 100%;\n  height: 100%;\n}\n\n.sa-performance-tab-content {\n  padding: 15px;\n}\n\n.sa-debugger-log-outer {\n  height: 100%;\n}\n\n.sa-debugger-log-inner {\n  position: relative;\n  overflow-y: auto;\n  font-size: 12px;\n  line-height: 1.2;\n  height: 100%;\n  contain: strict;\n}\n\n.sa-debugger-log-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  font-style: italic;\n}\n\n.sa-debugger-log-end {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 1px;\n}\n\n.sa-debugger-log {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-left: 4px;\n  font-family: monospace;\n  color: #000;\n}\n[theme=\"dark\"] .sa-debugger-log {\n  color: var(--text-primary);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.sa-debugger-log[data-type=\"warn\"] {\n  border-color: hsl(50deg, 100%, 75%);\n  color: hsl(39deg 100% 18%);\n  background-color: hsl(50deg 100% 95%);\n}\n.sa-debugger-log[data-type=\"error\"] {\n  border-color: hsl(0deg 100% 92%);\n  color: red;\n  background-color: hsl(0deg 100% 95%);\n}\n[theme=\"dark\"] .sa-debugger-log[data-type=\"warn\"] {\n  border-color: hsl(50deg, 100%, 15%);\n  color: hsl(39deg 100% 90%);\n  background-color: hsl(50deg 100% 10%);\n}\n[theme=\"dark\"] .sa-debugger-log[data-type=\"error\"] {\n  border-color: hsl(0deg 100% 15%);\n  color: hsl(0deg 100% 77%);\n  background-color: hsl(0deg 100% 10%);\n}\n\n.sa-debugger-log-repeats {\n  background-color: hsla(163, 85%, 40%, 1);\n  color: white;\n  border-radius: 100px;\n  padding: 1px 6px;\n  margin-right: 4px;\n}\n[theme=\"dark\"] .sa-debugger-log-repeats {\n  color: var(--ui-primary);\n}\n\n.sa-debugger-log-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\n[data-type=\"warn\"] .sa-debugger-log-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ./icons/warning.svg */ "./src/addons/addons/debugger/icons/warning.svg")) + ");\n}\n[data-type=\"error\"] .sa-debugger-log-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ./icons/error.svg */ "./src/addons/addons/debugger/icons/error.svg")) + ");\n}\n.sa-debugger-threads .sa-debugger-log-icon {\n  background-image: url(" + escape(__webpack_require__(/*! ./icons/subthread.svg */ "./src/addons/addons/debugger/icons/subthread.svg")) + ");\n}\n\n.sa-debugger-log-link {\n  color: inherit;\n  cursor: pointer;\n  opacity: 0.5;\n  text-decoration: underline;\n  float: right;\n  text-align: right;\n  max-width: 100%;\n  padding-left: 4px;\n  margin-right: 4px;\n  margin-left: auto;\n}\n[theme=\"dark\"] .sa-debugger-log-link {\n  color: inherit;\n}\n.sa-debugger-log-link:hover {\n  text-decoration: underline;\n  color: #4d97ff;\n  opacity: 1;\n}\n.sa-debugger-log-link-unknown {\n  pointer-events: none;\n}\n\n.sa-debugger-log-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n.sa-debugger-log-text-empty {\n  font-style: italic;\n}\n.sa-debugger-log-internal .sa-debugger-log-text {\n  font-style: italic;\n}\n\n.sa-debugger-thread-indent {\n  width: calc(16px * var(--level));\n  margin-right: 4px;\n}\n.sa-debugger-thread-title .sa-debugger-thread-indent {\n  margin: 0;\n}\n.sa-debugger-thread-target-name {\n  font-weight: bold;\n  margin-right: 8px;\n}\n.sa-debugger-thread-running {\n  background-color: rgba(255, 187, 0, 0.233);\n  font-weight: bold;\n}\n\n.sa-debugger-block-preview {\n  color: white;\n  padding: 1px 6px;\n  margin-right: 4px;\n}\n.sa-debugger-block-preview[data-shape=\"round\"] {\n  border-radius: 100px;\n}\n.sa-debugger-block-preview[data-shape=\"stacked\"] {\n  border-radius: 3px;\n}\n\n.sa-debugger-thread-compiled {\n  font-style: italic;\n}\n\n.sa-debugger-compiler-warning {\n  position: relative;\n  display: block;\n  text-align: center;\n  height: 24px;\n  color: #2121bf;\n}\n.sa-debugger-compiler-warning[hidden] {\n  display: none;\n}\n[theme=\"dark\"] .sa-debugger-compiler-warning {\n  color: #bdbdf9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/close.svg":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/close.svg ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCIgc3R5bGU9InRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIj48cGF0aCBkPSJNMy43NCA2LjQ4VjFNMSAzLjc0aDUuNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHgiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug-unread.svg":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug-unread.svg ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNEM5N0ZGIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIiBkPSJNNCAzLjVjLS44MzEgMC0xLjUuNjY5LTEuNSAxLjV2MTBjMCAuODMxLjY2OSAxLjUgMS41IDEuNWgxMmMuODMxIDAgMS41LS42NjkgMS41LTEuNVY1YzAtLjgzMS0uNjY5LTEuNS0xLjUtMS41Wm0wIDFoMTJjLjI3NyAwIC41LjIyMy41LjV2MTBjMCAuMjc3LS4yMjMuNS0uNS41SDRhLjQ5OS40OTkgMCAwIDEtLjUtLjVWNWMwLS4yNzcuMjIzLS41LjUtLjVaIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJtNS40MTcgNy41IDMuNzUgMi41LTMuNzUgMi41bTUgMGg0LjE2NiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzhmOGY4ZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+PC9nPjxjaXJjbGUgZmlsbD0iIzRDOTdGRiIgY3g9IjE2IiBjeT0iNCIgcj0iMyIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug.svg":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug.svg ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNEM5N0ZGIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIiBkPSJNNCAzLjVjLS44MzEgMC0xLjUuNjY5LTEuNSAxLjV2MTBjMCAuODMxLjY2OSAxLjUgMS41IDEuNWgxMmMuODMxIDAgMS41LS42NjkgMS41LTEuNVY1YzAtLjgzMS0uNjY5LTEuNS0xLjUtMS41Wm0wIDFoMTJjLjI3NyAwIC41LjIyMy41LjV2MTBjMCAuMjc3LS4yMjMuNS0uNS41SDRhLjQ5OS40OTkgMCAwIDEtLjUtLjVWNWMwLS4yNzcuMjIzLS41LjUtLjVaIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJtNS40MTcgNy41IDMuNzUgMi41LTMuNzUgMi41bTUgMGg0LjE2NiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzhmOGY4ZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/delete.svg":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/delete.svg ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00LjU0OCA3aDEwLjkwNGEuNS41IDAgMCAxIC40OTguNTQ1bC0uNzg1IDguNjM1QTIgMiAwIDAgMSAxMy4xNzQgMThINi44MjdhMiAyIDAgMCAxLTEuOTkyLTEuODJMNC4wNSA3LjU0NkEuNS41IDAgMCAxIDQuNTQ4IDd6bTIuNzg1LTMgLjU1My0xLjY1OEEuNS41IDAgMCAxIDguMzYgMmgzLjI4YS41LjUgMCAwIDEgLjQ3NC4zNDJMMTIuNjY3IDRIMTYuNWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTEzYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNWgzLjgzM3ptMS4wNTQgMGgzLjIyNmwtLjMzNC0xSDguNzIxbC0uMzM0IDF6TTEwIDExLjcybDEuNTk1LTEuNTk1YS41LjUgMCAwIDEgLjcwNyAwbC4wNzMuMDczYS41LjUgMCAwIDEgMCAuNzA3TDEwLjc4IDEyLjVsMS41OTUgMS41OTVhLjUuNSAwIDAgMSAwIC43MDdsLS4wNzMuMDczYS41LjUgMCAwIDEtLjcwNyAwTDEwIDEzLjI4bC0xLjU5NSAxLjU5NWEuNS41IDAgMCAxLS43MDcgMGwtLjA3My0uMDczYS41LjUgMCAwIDEgMC0uNzA3TDkuMjIgMTIuNWwtMS41OTUtMS41OTVhLjUuNSAwIDAgMSAwLS43MDdsLjA3My0uMDczYS41LjUgMCAwIDEgLjcwNyAwTDEwIDExLjcyeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIiBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/download-white.svg":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/download-white.svg ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE0LjczIDguNzc5LTQuMjUzIDQuMjY0YS42MTkuNjE5IDAgMCAxLS44OSAwTDUuMzM2IDguNzc5QS42My42MyAwIDAgMSA1Ljc4OCA3LjdoMi4xMTdsMS4yNjMtNS4wMTZhLjkxMi45MTIgMCAwIDEgMS4xMDYtLjY1Ni44OS44OSAwIDAgMSAuNjY4LjY1NkwxMi4yMDYgNy43aDIuMDcyYy41NTkgMCAuODU2LjY3LjQ1MSAxLjA3OHpNMTggMTEuODEydjIuNTc5QzE4IDE2LjM3NSAxNi4zOTUgMTggMTQuNDE3IDE4SDUuNkEzLjYwNyAzLjYwNyAwIDAgMSAyIDE0LjM5di0yLjU3OGExLjE3IDEuMTcgMCAxIDEgMi4zMzcgMHYyLjU3OUExLjI3IDEuMjcgMCAwIDAgNS42IDE1LjY1Nmg4LjgxN2MuNjg2IDAgMS4yNDYtLjU3OCAxLjI0Ni0xLjI2NXYtMi41NzljMC0uNjU2LjUzLTEuMTcyIDEuMTY5LTEuMTcyLjY1NCAwIDEuMTY4LjUxNiAxLjE2OCAxLjE3MnoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/error.svg":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/error.svg ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTEyIDE0YTEuMjUgMS4yNSAwIDEgMCAxLjI1IDEuMjVBMS4yNSAxLjI1IDAgMCAwIDEyIDE0em0wLTEuNWExIDEgMCAwIDAgMS0xdi0zYTEgMSAwIDAgMC0yIDB2M2ExIDEgMCAwIDAgMSAxek0xMiAyYTEwIDEwIDAgMSAwIDEwIDEwQTEwLjAxMSAxMC4wMTEgMCAwIDAgMTIgMnptMCAxOGE4IDggMCAxIDEgOC04IDguMDEgOC4wMSAwIDAgMS04IDh6IiBmaWxsPSJyZWQiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/logs.svg":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/logs.svg ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTMgN2gxOGExIDEgMCAwIDAgMC0ySDNhMSAxIDAgMCAwIDAgMnptMCA0aDE0YTEgMSAwIDAgMCAwLTJIM2ExIDEgMCAwIDAgMCAyem0xOCAySDNhMSAxIDAgMCAwIDAgMmgxOGExIDEgMCAwIDAgMC0yem0tNCA0SDNhMSAxIDAgMCAwIDAgMmgxNGExIDEgMCAwIDAgMC0yeiIgZmlsbD0iIzRjOTdmZiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/performance.svg":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/performance.svg ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZT0iIzRjOTdmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDE5di02YTIgMiAwIDAgMC0yLTJINWEyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMmgyYTIgMiAwIDAgMCAyLTJ6bTAgMFY5YTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjEwbS02IDBhMiAyIDAgMCAwIDIgMmgyYTIgMiAwIDAgMCAyLTJtMCAwVjVhMiAyIDAgMCAxIDItMmgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/play.svg":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/play.svg ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNTIiIHZpZXdCb3g9Ii01IDAgNDkgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0xNy4yMjEgOC4zNDVjMi41NTYtNC4yNTkgNi43MDItNC4yNTIgOS4yNTQgMGwxMy42NzcgMjIuNzk2YzIuNTU1IDQuMjU4LjU5NyA3LjcxLTQuMzggNy43MUg3LjkyNGMtNC45NzMgMC02LjkzLTMuNDU4LTQuMzgtNy43MUwxNy4yMjIgOC4zNDV6IiBpZD0iYSIvPjwvZGVmcz48dXNlIHN0cm9rZT0iI0ZGRiIgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIwLjg1IDIzLjAwMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/step.svg":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/step.svg ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIuNjggMTIuMmExLjYgMS42IDAgMCAxLTEuMjcuNjNoLTcuNjlhMS41OSAxLjU5IDAgMCAxLTEuMTYtMi41OGwxLjEyLTEuNDFhNC44MiA0LjgyIDAgMCAwLTMuMTQtLjc3IDQuMzEgNC4zMSAwIDAgMC0yIC44QTQuMjUgNC4yNSAwIDAgMCA3LjIgMTAuNmE1LjA2IDUuMDYgMCAwIDAgLjU0IDQuNjJBNS41OCA1LjU4IDAgMCAwIDEyIDE3Ljc0YTIuMjYgMi4yNiAwIDAgMS0uMTYgNC41MkExMC4yNSAxMC4yNSAwIDAgMSAzLjc0IDE4YTEwLjE0IDEwLjE0IDAgMCAxLTEuNDktOS4yMiA5LjcgOS43IDAgMCAxIDIuODMtNC4xNEE5LjkyIDkuOTIgMCAwIDEgOS42NiAyLjVhMTAuNjYgMTAuNjYgMCAwIDEgNy43MiAxLjY4bDEuMDgtMS4zNWExLjU3IDEuNTcgMCAwIDEgMS4yNC0uNiAxLjYgMS42IDAgMCAxIDEuNTQgMS4yMWwxLjcgNy4zN2ExLjU3IDEuNTcgMCAwIDEtLjI2IDEuMzlaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTIxLjM4IDExLjgzaC03LjYxYS41OS41OSAwIDAgMS0uNDMtMWwxLjc1LTIuMTlhNS45IDUuOSAwIDAgMC00LjctMS41OCA1LjA3IDUuMDcgMCAwIDAtNC4xMSAzLjE3QTYgNiAwIDAgMCA3IDE1Ljc3YTYuNTEgNi41MSAwIDAgMCA1IDIuOTIgMS4zMSAxLjMxIDAgMCAxLS4wOCAyLjYyIDkuMyA5LjMgMCAwIDEtNy4zNS0zLjgyIDkuMTYgOS4xNiAwIDAgMS0xLjQtOC4zN0E4LjUxIDguNTEgMCAwIDEgNS43MSA1LjRhOC43NiA4Ljc2IDAgMCAxIDQuMTEtMS45MiA5LjcxIDkuNzEgMCAwIDEgNy43NSAyLjA3bDEuNjctMi4xYS41OS41OSAwIDAgMSAxIC4yMUwyMiAxMS4wOGEuNTkuNTkgMCAwIDEtLjYyLjc1WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/subthread.svg":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/subthread.svg ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTIwLjkyIDEyLjYyYTEgMSAwIDAgMC0uMjEtLjMzbC0zLTNhMSAxIDAgMCAwLTEuNDIgMS40MmwxLjMgMS4yOUg4YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAwIDAtMiAwdjRhMyAzIDAgMCAwIDMgM2g5LjU5bC0xLjMgMS4yOWExIDEgMCAwIDAgMCAxLjQyIDEgMSAwIDAgMCAxLjQyIDBsMy0zYTEgMSAwIDAgMCAuMjEtLjMzIDEgMSAwIDAgMCAwLS43NnoiIGZpbGw9ImdyYXkiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/threads.svg":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/threads.svg ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTE5IDJIOWEzIDMgMCAwIDAtMyAzdjFINWEzIDMgMCAwIDAtMyAzdjEwYTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtMWgxYTMgMyAwIDAgMCAzLTNWNWEzIDMgMCAwIDAtMy0zem0tMyAxN2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMXYtN2gxMnptMC05SDRWOWExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6bTQgNWExIDEgMCAwIDEtMSAxaC0xVjlhMyAzIDAgMCAwLS4xOC0xSDIwem0wLTlIOFY1YTEgMSAwIDAgMSAxLTFoMTBhMSAxIDAgMCAxIDEgMXoiIGZpbGw9IiM0Yzk3ZmYiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/warning.svg":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/warning.svg ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTEyIDE2YTEgMSAwIDEgMCAxIDEgMSAxIDAgMCAwLTEtMXptMTAuNjcgMS40Ny04LjA1LTE0YTMgMyAwIDAgMC01LjI0IDBsLTggMTRBMyAzIDAgMCAwIDMuOTQgMjJoMTYuMTJhMyAzIDAgMCAwIDIuNjEtNC41M3ptLTEuNzMgMmExIDEgMCAwIDEtLjg4LjUxSDMuOTRhMSAxIDAgMCAxLS44OC0uNTEgMSAxIDAgMCAxIDAtMWw4LTE0YTEgMSAwIDAgMSAxLjc4IDBsOC4wNSAxNGExIDEgMCAwIDEgLjA1IDEuMDJ6TTEyIDhhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAyIDBWOWExIDEgMCAwIDAtMS0xeiIgZmlsbD0iI2UwYmIwMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/debugger/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/debugger/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/debugger/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/.pnpm/css-loader@1.0.1_webpack@4.46.0/node_modules/css-loader/index.js!./src/addons/addons/debugger/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/debugger/icons/error.svg":
/*!****************************************************!*\
  !*** ./src/addons/addons/debugger/icons/error.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/76b6cb627b95d79705c0b41664064f0e.svg";

/***/ }),

/***/ "./src/addons/addons/debugger/icons/subthread.svg":
/*!********************************************************!*\
  !*** ./src/addons/addons/debugger/icons/subthread.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/c846a442121113b1d04f6b9d50912038.svg";

/***/ }),

/***/ "./src/addons/addons/debugger/icons/warning.svg":
/*!******************************************************!*\
  !*** ./src/addons/addons/debugger/icons/warning.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/0e009d6e684951615b31a267baa37636.svg";

/***/ }),

/***/ "./src/addons/addons/debugger/log-view.js":
/*!************************************************!*\
  !*** ./src/addons/addons/debugger/log-view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const clamp = (i, min, max) => Math.max(min, Math.min(max, i));
const appendSortedElement = (parent, newChild) => {
  const newChildIndex = +newChild.dataset.index;
  let foundSpot = false;
  for (const existingChild of parent.children) {
    const existingChildIndex = +existingChild.dataset.index;
    if (existingChildIndex > newChildIndex) {
      foundSpot = true;
      parent.insertBefore(newChild, existingChild);
      break;
    }
  }
  if (!foundSpot) {
    parent.appendChild(newChild);
  }
};

/**
 * LogView: A virtualized row viewer.
 * It efficiently manages row rendering and scrolling.
 *
 * 1. .logs is the place where all the rows live. This is an array of any arbitrary object.
 * 2. Implement generateRow(row). This takes a row from .logs as an argument. This should return
 *    an object with a bunch of DOM elements on it. The "root" property must be set, nothing else
 *    is required. This is called when a row becomes visible. It can be called any number of times.
 *    This is where you should setup elements that are immutable for a given row. LogView will
 *    move the root element to the right spot for you.
 * 3. Implement renderRow(elements, row). This will be called with the result returned by
 *    generateRow() and the row in .logs any time a row is changed, including the first render.
 *    It can be called any number of times. This is where you should update any dynamic elements.
 * 4. Whenever you update .logs without using the helper methods such as append(), call
 *    queueUpdateContent().
 */
class LogView {
  constructor() {
    this.rows = [];
    this.canAutoScrollToEnd = true;
    this.rowHeight = 20;
    this.outerElement = document.createElement("div");
    this.outerElement.className = "sa-debugger-log-outer";
    this.innerElement = document.createElement("div");
    this.innerElement.className = "sa-debugger-log-inner";
    this.outerElement.appendChild(this.innerElement);
    this.innerElement.addEventListener("scroll", this._handleScroll.bind(this), {
      passive: true
    });
    this.innerElement.addEventListener("wheel", this._handleWheel.bind(this), {
      passive: true
    });
    this.endElement = document.createElement("div");
    this.endElement.className = "sa-debugger-log-end";
    this.endElement.dataset.index = "-1";
    this.innerElement.appendChild(this.endElement);
    this.placeholderElement = document.createElement("div");
    this.placeholderElement.className = "sa-debugger-log-empty";
    this.visible = false;
    this.isScrolledToEnd = true;
    this.scrollTopWhenHidden = "end";
    this.scrollTop = 0;
    this.updateContentQueued = false;
    this.scrollToEndQueued = false;
    this.oldLength = -1;
    this.rowToMetadata = new Map();
  }
  append(log) {
    this.queueUpdateContent();
    this._queueScrollToEnd();
    this.rows.push(log);
    const MAX_LOGS = 200000;
    while (this.rows.length > MAX_LOGS) {
      this.rows.shift();
    }
  }
  clear() {
    this.rows.length = 0;
    this.scrollTop = 0;
    this.isScrolledToEnd = true;
    this.queueUpdateContent();
  }
  show() {
    this.visible = true;
    this.height = this.innerElement.offsetHeight;
    this.queueUpdateContent();
    if (this.scrollTopWhenHidden === "end") {
      this._queueScrollToEnd();
    } else {
      this.innerElement.scrollTop = this.scrollTopWhenHidden;
    }
  }
  hide() {
    this.visible = false;
    this.scrollTopWhenHidden = this.isScrolledToEnd ? "end" : this.scrollTop;
  }
  _handleScroll(e) {
    this.scrollTop = e.target.scrollTop;
    this.isScrolledToEnd = e.target.scrollTop + 5 >= e.target.scrollHeight - e.target.clientHeight;
    this.queueUpdateContent();
  }
  _handleWheel(e) {
    if (e.deltaY < 0) {
      this.isScrolledToEnd = false;
    }
  }
  scrollIntoView(index) {
    const distanceFromTop = index * this.rowHeight;
    const viewportStart = this.scrollTop;
    const viewportEnd = this.scrollTop + this.height;
    const isInView = distanceFromTop > viewportStart && distanceFromTop < viewportEnd;
    if (!isInView) {
      this.scrollTop = distanceFromTop;
      this.innerElement.scrollTop = distanceFromTop;
    }
  }
  _queueScrollToEnd() {
    if (this.visible && this.canAutoScrollToEnd && this.isScrolledToEnd && !this.scrollToEndQueued) {
      this.scrollToEndQueued = true;
      queueMicrotask(() => {
        this.scrollToEndQueued = false;
        if (this.isScrolledToEnd) {
          const scrollEnd = this.innerElement.scrollHeight - this.innerElement.offsetHeight;
          this.innerElement.scrollTop = scrollEnd;
          this.scrollTop = scrollEnd;
        }
      });
    }
  }
  queueUpdateContent() {
    if (this.visible && !this.updateContentQueued) {
      this.updateContentQueued = true;
      queueMicrotask(() => {
        this.updateContentQueued = false;
        this.updateContent();
      });
    }
  }
  generateRow(row) {
    // to be implemented by users
  }
  renderRow(elements, row) {
    // to be implemented by users
  }
  updateContent() {
    if (this.rows.length !== this.oldLength) {
      this.oldLength = this.rows.length;
      const totalHeight = this.rows.length * this.rowHeight;
      this.endElement.style.transform = "translateY(".concat(totalHeight, "px)");
      if (this.rows.length) {
        this.placeholderElement.remove();
      } else {
        this.innerElement.appendChild(this.placeholderElement);
        for (const metadata of this.rowToMetadata.values()) {
          metadata.elements.root.remove();
        }
        this.rowToMetadata.clear();
      }
    }
    if (this.rows.length === 0) {
      return;
    }

    // For better compatibility with asynchronous scrolling, we'll render a few extra rows in either direction.
    const EXTRA_ROWS_ABOVE = 5;
    const EXTRA_ROWS_BELOW = 5;
    const scrollStartIndex = Math.floor(this.scrollTop / this.rowHeight);
    const rowsVisible = Math.ceil(this.height / this.rowHeight);
    const startIndex = clamp(scrollStartIndex - EXTRA_ROWS_BELOW, 0, this.rows.length);
    const endIndex = clamp(scrollStartIndex + rowsVisible + EXTRA_ROWS_ABOVE, 0, this.rows.length);
    const allVisibleRows = new Set();
    const newElements = [];
    for (let i = startIndex; i < endIndex; i++) {
      const row = this.rows[i];
      allVisibleRows.add(row);
      let metadata = this.rowToMetadata.get(row);
      if (!metadata) {
        const elements = this.generateRow(row);
        newElements.push(elements.root);
        metadata = {
          stringify: null,
          elements
        };
        this.rowToMetadata.set(row, metadata);
      }
      const currentStringify = JSON.stringify(row);
      if (currentStringify !== metadata.stringify) {
        metadata.stringify = currentStringify;
        this.renderRow(metadata.elements, row);
      }
      const root = metadata.elements.root;
      root.style.transform = "translateY(".concat(i * this.rowHeight, "px)");
      root.dataset.index = i;
    }
    for (const [row, metadata] of this.rowToMetadata.entries()) {
      if (!allVisibleRows.has(row)) {
        metadata.elements.root.remove();
        this.rowToMetadata.delete(row);
      }
    }
    for (const root of newElements) {
      appendSortedElement(this.innerElement, root);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LogView);

/***/ }),

/***/ "./src/addons/addons/debugger/logs.js":
/*!********************************************!*\
  !*** ./src/addons/addons/debugger/logs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createLogsTab; });
/* harmony import */ var _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./icons/close.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/close.svg");
/* harmony import */ var _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icons/debug-unread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug-unread.svg");
/* harmony import */ var _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/debug.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug.svg");
/* harmony import */ var _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./icons/delete.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/delete.svg");
/* harmony import */ var _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./icons/download-white.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/download-white.svg");
/* harmony import */ var _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/error.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/error.svg");
/* harmony import */ var _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/logs.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/logs.svg");
/* harmony import */ var _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/performance.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/performance.svg");
/* harmony import */ var _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url-loader!./icons/play.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/play.svg");
/* harmony import */ var _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-loader!./icons/step.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/step.svg");
/* harmony import */ var _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-loader!./icons/subthread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/subthread.svg");
/* harmony import */ var _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url-loader!./icons/threads.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/threads.svg");
/* harmony import */ var _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! url-loader!./icons/warning.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/warning.svg");
/* harmony import */ var _libraries_common_cs_download_blob_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libraries/common/cs/download-blob.js */ "./src/addons/libraries/common/cs/download-blob.js");
/* harmony import */ var _log_view_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./log-view.js */ "./src/addons/addons/debugger/log-view.js");
/* inserted by pull.js */













const _twGetAsset = path => {
  if (path === "/icons/close.svg") return _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/icons/debug-unread.svg") return _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/icons/debug.svg") return _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/icons/delete.svg") return _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (path === "/icons/download-white.svg") return _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (path === "/icons/error.svg") return _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
  if (path === "/icons/logs.svg") return _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
  if (path === "/icons/performance.svg") return _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
  if (path === "/icons/play.svg") return _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__["default"];
  if (path === "/icons/step.svg") return _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__["default"];
  if (path === "/icons/subthread.svg") return _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__["default"];
  if (path === "/icons/threads.svg") return _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__["default"];
  if (path === "/icons/warning.svg") return _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__["default"];
  throw new Error("Unknown asset: ".concat(path));
};


async function createLogsTab(_ref) {
  let {
    debug,
    addon,
    console,
    msg
  } = _ref;
  const vm = addon.tab.traps.vm;
  const tab = debug.createHeaderTab({
    text: msg("tab-logs"),
    icon: _twGetAsset("/icons/logs.svg")
  });
  const logView = new _log_view_js__WEBPACK_IMPORTED_MODULE_14__["default"]();
  logView.placeholderElement.textContent = msg("no-logs");
  const getInputOfBlock = (targetId, blockId) => {
    var _Object$values$;
    const target = vm.runtime.getTargetById(targetId);
    if (!target) {
      return null;
    }
    const block = debug.getBlock(target, blockId);
    if (!block) {
      return null;
    }
    return (_Object$values$ = Object.values(block.inputs)[0]) === null || _Object$values$ === void 0 ? void 0 : _Object$values$.block;
  };
  logView.generateRow = row => {
    const root = document.createElement("div");
    root.className = "sa-debugger-log";
    if (row.internal) {
      root.classList.add("sa-debugger-log-internal");
    }
    root.dataset.type = row.type;
    const icon = document.createElement("div");
    icon.className = "sa-debugger-log-icon";
    if (row.type === "warn" || row.type === "error") {
      icon.title = msg("icon-" + row.type);
    }
    root.appendChild(icon);
    const repeats = document.createElement("div");
    repeats.className = "sa-debugger-log-repeats";
    repeats.style.display = "none";
    root.appendChild(repeats);
    if (row.preview && row.blockId && row.targetInfo) {
      const originalId = row.targetInfo.originalId;
      const inputBlock = getInputOfBlock(originalId, row.blockId);
      if (inputBlock) {
        const preview = debug.createBlockPreview(originalId, inputBlock);
        if (preview) {
          root.appendChild(preview);
        }
      }
    }
    const text = document.createElement("div");
    text.className = "sa-debugger-log-text";
    if (row.text.length === 0) {
      text.classList.add("sa-debugger-log-text-empty");
      text.textContent = msg("empty-string");
    } else {
      text.textContent = row.text;
      text.title = row.text;
    }
    root.appendChild(text);
    if (row.targetInfo && row.blockId) {
      root.appendChild(debug.createBlockLink(row.targetInfo, row.blockId));
    }
    return {
      root,
      repeats
    };
  };
  logView.renderRow = (elements, row) => {
    const {
      repeats
    } = elements;
    if (row.count > 1) {
      repeats.style.display = "";
      repeats.textContent = row.count;
    }
  };
  const exportButton = debug.createHeaderButton({
    text: msg("export"),
    icon: _twGetAsset("/icons/download-white.svg"),
    description: msg("export-desc")
  });
  const downloadText = (filename, text) => {
    Object(_libraries_common_cs_download_blob_js__WEBPACK_IMPORTED_MODULE_13__["default"])(filename, new Blob([text], {
      type: "text/plain"
    }));
  };
  exportButton.element.addEventListener("click", async e => {
    const defaultFormat = "{sprite}: {content} ({type})";
    const exportFormat = e.shiftKey ? await addon.tab.prompt(msg("export"), msg("enter-format"), defaultFormat, {
      useEditorClasses: true
    }) : defaultFormat;
    if (!exportFormat) return;
    const file = logView.rows.map(_ref2 => {
      let {
        text,
        targetInfo,
        type,
        count
      } = _ref2;
      return (exportFormat.replace(/\{(sprite|type|content)\}/g, (_, match) => ({
        sprite: targetInfo ? targetInfo.name : msg("unknown-sprite"),
        type,
        content: text
      })[match]) + "\n").repeat(count);
    }).join("");
    downloadText("logs.txt", file);
  });
  const trashButton = debug.createHeaderButton({
    text: msg("clear"),
    icon: _twGetAsset("/icons/delete.svg")
  });
  trashButton.element.addEventListener("click", () => {
    clearLogs();
  });
  const areLogsEqual = (a, b) => a.text === b.text && a.type === b.type && a.internal === b.internal && a.blockId === b.blockId && a.targetId === b.targetId;
  const addLog = (text, thread, type) => {
    const log = {
      text,
      type,
      count: 1,
      preview: true
    };
    if (thread) {
      log.blockId = thread.peekStack ? thread.peekStack() : thread.thread.peekStack();
      const targetId = thread.target.id;
      log.targetId = targetId;
      log.targetInfo = debug.getTargetInfoById(targetId);
    }
    if (type === "internal") {
      log.internal = true;
      log.preview = false;
      log.type = "log";
    }
    if (type === "internal-warn") {
      log.internal = true;
      log.type = "warn";
    }
    const previousLog = logView.rows[logView.rows.length - 1];
    if (previousLog && areLogsEqual(log, previousLog)) {
      previousLog.count++;
      logView.queueUpdateContent();
    } else {
      logView.append(log);
    }
    if (!logView.visible && !log.internal) {
      debug.setHasUnreadMessage(true);
    }
  };
  const clearLogs = () => {
    logView.clear();
  };
  const show = () => {
    logView.show();
    debug.setHasUnreadMessage(false);
  };
  const hide = () => {
    logView.hide();
  };
  return {
    tab,
    content: logView.outerElement,
    buttons: [exportButton, trashButton],
    show,
    hide,
    addLog,
    clearLogs
  };
}

/***/ }),

/***/ "./src/addons/addons/debugger/threads.js":
/*!***********************************************!*\
  !*** ./src/addons/addons/debugger/threads.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createThreadsTab; });
/* harmony import */ var _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./icons/close.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/close.svg");
/* harmony import */ var _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icons/debug-unread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug-unread.svg");
/* harmony import */ var _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/debug.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug.svg");
/* harmony import */ var _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./icons/delete.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/delete.svg");
/* harmony import */ var _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./icons/download-white.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/download-white.svg");
/* harmony import */ var _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/error.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/error.svg");
/* harmony import */ var _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/logs.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/logs.svg");
/* harmony import */ var _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/performance.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/performance.svg");
/* harmony import */ var _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url-loader!./icons/play.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/play.svg");
/* harmony import */ var _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-loader!./icons/step.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/step.svg");
/* harmony import */ var _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-loader!./icons/subthread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/subthread.svg");
/* harmony import */ var _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url-loader!./icons/threads.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/threads.svg");
/* harmony import */ var _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! url-loader!./icons/warning.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/warning.svg");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/debugger/module.js");
/* harmony import */ var _log_view_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./log-view.js */ "./src/addons/addons/debugger/log-view.js");
/* harmony import */ var _editor_stepping_highlighter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../editor-stepping/highlighter.js */ "./src/addons/addons/editor-stepping/highlighter.js");
/* inserted by pull.js */













const _twGetAsset = path => {
  if (path === "/icons/close.svg") return _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/icons/debug-unread.svg") return _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/icons/debug.svg") return _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/icons/delete.svg") return _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (path === "/icons/download-white.svg") return _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (path === "/icons/error.svg") return _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
  if (path === "/icons/logs.svg") return _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
  if (path === "/icons/performance.svg") return _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
  if (path === "/icons/play.svg") return _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__["default"];
  if (path === "/icons/step.svg") return _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__["default"];
  if (path === "/icons/subthread.svg") return _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__["default"];
  if (path === "/icons/threads.svg") return _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__["default"];
  if (path === "/icons/warning.svg") return _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__["default"];
  throw new Error("Unknown asset: ".concat(path));
};



const concatInPlace = (copyInto, copyFrom) => {
  for (const i of copyFrom) {
    copyInto.push(i);
  }
};
async function createThreadsTab(_ref) {
  let {
    debug,
    addon,
    console,
    msg
  } = _ref;
  const vm = addon.tab.traps.vm;
  const tab = debug.createHeaderTab({
    text: msg("tab-threads"),
    icon: _twGetAsset("/icons/threads.svg")
  });
  const logView = new _log_view_js__WEBPACK_IMPORTED_MODULE_14__["default"]();
  logView.canAutoScrollToEnd = false;
  logView.outerElement.classList.add("sa-debugger-threads");
  logView.placeholderElement.textContent = msg("no-threads-running");
  const highlighter = new _editor_stepping_highlighter_js__WEBPACK_IMPORTED_MODULE_15__["default"](10, "#ff0000");
  logView.generateRow = row => {
    const root = document.createElement("div");
    root.className = "sa-debugger-log";
    const isHeader = row.type === "thread-header";
    const indenter = document.createElement("div");
    indenter.className = "sa-debugger-thread-indent";
    indenter.style.setProperty("--level", isHeader ? row.depth : row.depth + 1);
    root.appendChild(indenter);
    if (isHeader) {
      root.classList.add("sa-debugger-thread-title");
      if (row.depth > 0) {
        const icon = document.createElement("div");
        icon.className = "sa-debugger-log-icon";
        root.appendChild(icon);
      }
      const name = document.createElement("div");
      name.textContent = row.targetName;
      name.className = "sa-debugger-thread-target-name";
      root.appendChild(name);
      const id = document.createElement("div");
      id.className = "sa-debugger-thread-id";
      id.textContent = msg("thread", {
        id: row.id
      });
      root.appendChild(id);
    }
    if (row.type === "thread-stack") {
      const preview = debug.createBlockPreview(row.targetId, row.blockId);
      if (preview) {
        root.appendChild(preview);
      }
    }
    if (row.type === "compiled") {
      const el = document.createElement('div');
      el.className = "sa-debugger-thread-compiled";
      el.textContent = "Compiled threads can't be stepped and have no stack information.";
      root.appendChild(el);
    }
    if (row.targetId && row.blockId) {
      root.appendChild(debug.createBlockLink(debug.getTargetInfoById(row.targetId), row.blockId));
    }
    return {
      root
    };
  };
  logView.renderRow = (elements, row) => {
    const {
      root
    } = elements;
    root.classList.toggle("sa-debugger-thread-running", !!row.running);
  };
  let threadInfoCache = new WeakMap();
  const allThreadIds = new WeakMap();
  let nextThreadId = 1;
  const getThreadId = thread => {
    if (!allThreadIds.has(thread)) {
      allThreadIds.set(thread, nextThreadId++);
    }
    return allThreadIds.get(thread);
  };
  const updateContent = () => {
    if (!logView.visible) {
      return;
    }
    const newRows = [];
    const threads = vm.runtime.threads;
    const visitedThreads = new Set();
    const createThreadInfo = (thread, depth) => {
      if (visitedThreads.has(thread)) {
        return [];
      }
      visitedThreads.add(thread);
      const id = getThreadId(thread);
      const target = thread.target;
      if (!threadInfoCache.has(thread)) {
        threadInfoCache.set(thread, {
          headerItem: {
            type: "thread-header",
            depth,
            targetName: target.getName(),
            id
          },
          compiledItem: thread.isCompiled ? {
            type: "compiled",
            depth: 1
          } : null,
          blockCache: new WeakMap()
        });
      }
      const cacheInfo = threadInfoCache.get(thread);
      const runningThread = Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["getRunningThread"])();
      const createBlockInfo = (block, stackFrameIdx) => {
        const blockId = block.id;
        if (!block) return;
        const stackFrame = thread.stackFrames[stackFrameIdx];
        if (!cacheInfo.blockCache.has(block)) {
          cacheInfo.blockCache.set(block, {});
        }
        const blockInfoMap = cacheInfo.blockCache.get(block);
        let blockInfo = blockInfoMap[stackFrameIdx];
        if (!blockInfo) {
          blockInfo = blockInfoMap[stackFrameIdx] = {
            type: "thread-stack",
            depth,
            targetId: target.id,
            blockId
          };
        }
        blockInfo.running = thread === runningThread && (thread.isCompiled || blockId === runningThread.peekStack() && stackFrameIdx === runningThread.stackFrames.length - 1);
        const result = [blockInfo];
        if (stackFrame && stackFrame.executionContext && stackFrame.executionContext.startedThreads) {
          for (const thread of stackFrame.executionContext.startedThreads) {
            concatInPlace(result, createThreadInfo(thread, depth + 1));
          }
        }
        return result;
      };
      const topBlock = debug.getBlock(thread.target, thread.topBlock);
      const result = [cacheInfo.headerItem];
      if (topBlock) {
        concatInPlace(result, createBlockInfo(topBlock, 0));
        for (let i = 0; i < thread.stack.length; i++) {
          const blockId = thread.stack[i];
          if (blockId === topBlock.id) continue;
          const block = debug.getBlock(thread.target, blockId);
          if (block) {
            concatInPlace(result, createBlockInfo(block, i));
          }
        }
      }
      if (cacheInfo.compiledItem) {
        result.push(cacheInfo.compiledItem);
      }
      return result;
    };
    for (let i = 0; i < threads.length; i++) {
      const thread = threads[i];
      // Do not display threads used to update variable and list monitors.
      if (thread.updateMonitor) {
        continue;
      }
      concatInPlace(newRows, createThreadInfo(thread, 0));
    }
    logView.rows = newRows;
    logView.queueUpdateContent();
  };
  debug.addAfterStepCallback(() => {
    updateContent();
    const runningThread = Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["getRunningThread"])();
    if (runningThread) {
      highlighter.setGlowingThreads([runningThread]);
    } else {
      highlighter.setGlowingThreads([]);
    }
  });
  const stepButton = debug.createHeaderButton({
    text: msg("step"),
    icon: _twGetAsset("/icons/step.svg"),
    description: msg("step-desc")
  });
  stepButton.element.addEventListener("click", () => {
    Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["singleStep"])();
  });
  const handlePauseChanged = paused => {
    stepButton.element.style.display = paused ? "" : "none";
    updateContent();
  };
  handlePauseChanged(Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["isPaused"])());
  Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["onPauseChanged"])(handlePauseChanged);
  Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["onSingleStep"])(updateContent);
  const show = () => {
    logView.show();
    updateContent();
  };
  const hide = () => {
    logView.hide();
  };
  return {
    tab,
    content: logView.outerElement,
    buttons: [stepButton],
    show,
    hide
  };
}

/***/ }),

/***/ "./src/addons/addons/debugger/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/debugger/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./icons/close.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/close.svg");
/* harmony import */ var _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icons/debug-unread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug-unread.svg");
/* harmony import */ var _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/debug.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/debug.svg");
/* harmony import */ var _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./icons/delete.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/delete.svg");
/* harmony import */ var _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./icons/download-white.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/download-white.svg");
/* harmony import */ var _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/error.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/error.svg");
/* harmony import */ var _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/logs.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/logs.svg");
/* harmony import */ var _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/performance.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/performance.svg");
/* harmony import */ var _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url-loader!./icons/play.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/play.svg");
/* harmony import */ var _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-loader!./icons/step.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/step.svg");
/* harmony import */ var _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-loader!./icons/subthread.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/subthread.svg");
/* harmony import */ var _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url-loader!./icons/threads.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/threads.svg");
/* harmony import */ var _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! url-loader!./icons/warning.svg */ "./node_modules/.pnpm/url-loader@4.1.1_ieuce33bpzj3bajdc6nxeyng3a/node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/icons/warning.svg");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/debugger/module.js");
/* harmony import */ var _logs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logs.js */ "./src/addons/addons/debugger/logs.js");
/* harmony import */ var _threads_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./threads.js */ "./src/addons/addons/debugger/threads.js");
/* harmony import */ var _editor_devtools_blockly_Utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../editor-devtools/blockly/Utils.js */ "./src/addons/addons/editor-devtools/blockly/Utils.js");
/* inserted by pull.js */













const _twGetAsset = path => {
  if (path === "/icons/close.svg") return _url_loader_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/icons/debug-unread.svg") return _url_loader_icons_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/icons/debug.svg") return _url_loader_icons_debug_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/icons/delete.svg") return _url_loader_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (path === "/icons/download-white.svg") return _url_loader_icons_download_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (path === "/icons/error.svg") return _url_loader_icons_error_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
  if (path === "/icons/logs.svg") return _url_loader_icons_logs_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
  if (path === "/icons/performance.svg") return _url_loader_icons_performance_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
  if (path === "/icons/play.svg") return _url_loader_icons_play_svg__WEBPACK_IMPORTED_MODULE_8__["default"];
  if (path === "/icons/step.svg") return _url_loader_icons_step_svg__WEBPACK_IMPORTED_MODULE_9__["default"];
  if (path === "/icons/subthread.svg") return _url_loader_icons_subthread_svg__WEBPACK_IMPORTED_MODULE_10__["default"];
  if (path === "/icons/threads.svg") return _url_loader_icons_threads_svg__WEBPACK_IMPORTED_MODULE_11__["default"];
  if (path === "/icons/warning.svg") return _url_loader_icons_warning_svg__WEBPACK_IMPORTED_MODULE_12__["default"];
  throw new Error("Unknown asset: ".concat(path));
};




const removeAllChildren = element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    global,
    console,
    msg
  } = _ref;
  Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["setup"])(addon.tab.traps.vm);
  let logsTab;
  const messagesLoggedBeforeLogsTabLoaded = [];
  const logMessage = function logMessage() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (logsTab) {
      logsTab.addLog(...args);
    } else {
      messagesLoggedBeforeLogsTabLoaded.push(args);
    }
  };
  let hasLoggedPauseError = false;
  const pause = (_, thread) => {
    if (addon.tab.redux.state.scratchGui.mode.isPlayerOnly) {
      if (!hasLoggedPauseError) {
        logMessage(msg("cannot-pause-player"), thread, "error");
        hasLoggedPauseError = true;
      }
      return;
    }
    Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["setPaused"])(true);
    setInterfaceVisible(true);
  };
  addon.tab.addBlock("\u200B\u200Bbreakpoint\u200B\u200B", {
    args: [],
    displayName: msg("block-breakpoint"),
    callback: pause
  });
  addon.tab.addBlock("\u200B\u200Blog\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-log"),
    callback: (_ref2, thread) => {
      let {
        content
      } = _ref2;
      logMessage(content, thread, "log");
    }
  });
  addon.tab.addBlock("\u200B\u200Bwarn\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-warn"),
    callback: (_ref3, thread) => {
      let {
        content
      } = _ref3;
      logMessage(content, thread, "warn");
    }
  });
  addon.tab.addBlock("\u200B\u200Berror\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-error"),
    callback: (_ref4, thread) => {
      let {
        content
      } = _ref4;
      logMessage(content, thread, "error");
    }
  });
  const vm = addon.tab.traps.vm;
  await new Promise((resolve, reject) => {
    if (vm.editingTarget) return resolve();
    vm.runtime.once("PROJECT_LOADED", resolve);
  });
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const debuggerButtonOuter = document.createElement("div");
  debuggerButtonOuter.className = "sa-debugger-container";
  const debuggerButton = document.createElement("div");
  debuggerButton.className = addon.tab.scratchClass("button_outlined-button", "stage-header_stage-button");
  const debuggerButtonContent = document.createElement("div");
  debuggerButtonContent.className = addon.tab.scratchClass("button_content");
  const debuggerButtonImage = document.createElement("img");
  debuggerButtonImage.className = addon.tab.scratchClass("stage-header_stage-button-icon");
  debuggerButtonImage.draggable = false;
  debuggerButtonImage.src = _twGetAsset("/icons/debug.svg");
  debuggerButtonContent.appendChild(debuggerButtonImage);
  debuggerButton.appendChild(debuggerButtonContent);
  debuggerButtonOuter.appendChild(debuggerButton);
  debuggerButton.addEventListener("click", () => setInterfaceVisible(true));
  const setHasUnreadMessage = unreadMessage => {
    // setting image.src is slow, only do it when necessary
    const newImage = _twGetAsset(unreadMessage ? "/icons/debug-unread.svg" : "/icons/debug.svg");
    if (debuggerButtonImage.src !== newImage) {
      debuggerButtonImage.src = newImage;
    }
  };
  const interfaceContainer = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_card", {
      others: "sa-debugger-interface"
    })
  });
  const interfaceHeader = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_header-buttons")
  });
  const tabListElement = Object.assign(document.createElement("ul"), {
    className: "sa-debugger-tabs"
  });
  const buttonContainerElement = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_header-buttons-right", {
      others: "sa-debugger-header-buttons"
    })
  });
  const tabContentContainer = Object.assign(document.createElement("div"), {
    className: "sa-debugger-tab-content"
  });
  const compilerWarning = document.createElement("a");
  compilerWarning.addEventListener("click", () => {
    addon.tab.redux.dispatch({
      type: "scratch-gui/modals/OPEN_MODAL",
      modal: "settingsModal"
    });
  });
  compilerWarning.className = "sa-debugger-log sa-debugger-compiler-warning";
  compilerWarning.textContent = "The debugger works best when the compiler is disabled.";
  const updateCompilerWarningVisibility = () => {
    compilerWarning.hidden = !vm.runtime.compilerOptions.enabled;
  };
  vm.on("COMPILER_OPTIONS_CHANGED", updateCompilerWarningVisibility);
  updateCompilerWarningVisibility();
  let isInterfaceVisible = false;
  const setInterfaceVisible = _isVisible => {
    isInterfaceVisible = _isVisible;
    interfaceContainer.style.display = isInterfaceVisible ? "flex" : "";
    if (isInterfaceVisible) {
      activeTab.show();
    } else {
      activeTab.hide();
    }
  };
  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  let lastX = 0;
  let lastY = 0;
  const handleStartDrag = e => {
    e.preventDefault();
    mouseOffsetX = e.clientX - interfaceContainer.offsetLeft;
    mouseOffsetY = e.clientY - interfaceContainer.offsetTop;
    lastX = e.clientX;
    lastY = e.clientY;
    document.addEventListener("mouseup", handleStopDrag);
    document.addEventListener("mousemove", handleDragInterface);
  };
  const handleStopDrag = () => {
    document.removeEventListener("mouseup", handleStopDrag);
    document.removeEventListener("mousemove", handleDragInterface);
  };
  const moveInterface = (x, y) => {
    lastX = x;
    lastY = y;
    const width = (document.documentElement.clientWidth || document.body.clientWidth) - 1;
    const height = (document.documentElement.clientHeight || document.body.clientHeight) - 1;
    const clampedX = Math.max(0, Math.min(x - mouseOffsetX, width - interfaceContainer.offsetWidth));
    const clampedY = Math.max(0, Math.min(y - mouseOffsetY, height - interfaceContainer.offsetHeight));
    interfaceContainer.style.left = clampedX + "px";
    interfaceContainer.style.top = clampedY + "px";
  };
  const handleDragInterface = e => {
    e.preventDefault();
    moveInterface(e.clientX, e.clientY);
  };
  window.addEventListener("resize", () => {
    moveInterface(lastX, lastY);
  });
  interfaceHeader.addEventListener("mousedown", handleStartDrag);
  interfaceHeader.append(tabListElement, buttonContainerElement);
  interfaceContainer.append(interfaceHeader, compilerWarning, tabContentContainer);
  document.body.append(interfaceContainer);
  const createHeaderButton = _ref5 => {
    let {
      text,
      icon,
      description
    } = _ref5;
    const button = Object.assign(document.createElement("div"), {
      className: addon.tab.scratchClass("card_shrink-expand-button"),
      draggable: false
    });
    if (description) {
      button.title = description;
    }
    const imageElement = Object.assign(document.createElement("img"), {
      src: icon,
      draggable: false
    });
    const textElement = Object.assign(document.createElement("span"), {
      textContent: text
    });
    button.appendChild(imageElement);
    button.appendChild(textElement);
    return {
      element: button,
      image: imageElement,
      text: textElement
    };
  };
  const createHeaderTab = _ref6 => {
    let {
      text,
      icon
    } = _ref6;
    const tab = document.createElement("li");
    const imageElement = Object.assign(document.createElement("img"), {
      src: icon,
      draggable: false
    });
    const textElement = Object.assign(document.createElement("span"), {
      textContent: text
    });
    tab.appendChild(imageElement);
    tab.appendChild(textElement);
    return {
      element: tab,
      image: imageElement,
      text: textElement
    };
  };
  const unpauseButton = createHeaderButton({
    text: msg("unpause"),
    icon: _twGetAsset("/icons/play.svg")
  });
  unpauseButton.element.classList.add("sa-debugger-unpause");
  unpauseButton.element.addEventListener("click", () => Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["setPaused"])(false));
  const updateUnpauseVisibility = paused => {
    unpauseButton.element.style.display = paused ? "" : "none";
  };
  updateUnpauseVisibility(Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["isPaused"])());
  Object(_module_js__WEBPACK_IMPORTED_MODULE_13__["onPauseChanged"])(updateUnpauseVisibility);
  const closeButton = createHeaderButton({
    text: msg("close"),
    icon: _twGetAsset("/icons/close.svg")
  });
  closeButton.element.addEventListener("click", () => setInterfaceVisible(false));
  const originalStep = vm.runtime._step;
  const afterStepCallbacks = [];
  vm.runtime._step = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const ret = originalStep.call(this, ...args);
    for (const cb of afterStepCallbacks) {
      cb();
    }
    return ret;
  };
  const addAfterStepCallback = cb => {
    afterStepCallbacks.push(cb);
  };
  const getBlock = (target, id) => target.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);
  const getTargetInfoById = id => {
    const target = vm.runtime.getTargetById(id);
    if (target) {
      let name = target.getName();
      let original = target;
      if (!target.isOriginal) {
        name = msg("clone-of", {
          sprite: name
        });
        original = target.sprite.clones[0];
      }
      return {
        exists: true,
        originalId: original.id,
        name
      };
    }
    return {
      exists: false,
      original: null,
      name: msg("unknown-sprite")
    };
  };
  const createBlockLink = (targetInfo, blockId) => {
    const link = document.createElement("a");
    link.className = "sa-debugger-log-link";
    const {
      exists,
      name,
      originalId
    } = targetInfo;
    link.textContent = name;
    if (exists) {
      // We use mousedown instead of click so that you can still go to blocks when logs are rapidly scrolling
      link.addEventListener("mousedown", () => {
        switchToSprite(originalId);
        activateCodeTab();
        goToBlock(blockId);
      });
    } else {
      link.classList.add("sa-debugger-log-link-unknown");
    }
    return link;
  };
  const switchToSprite = targetId => {
    if (targetId !== vm.editingTarget.id) {
      if (vm.runtime.getTargetById(targetId)) {
        vm.setEditingTarget(targetId);
      }
    }
  };
  const activateCodeTab = () => {
    const redux = addon.tab.redux;
    if (redux.state.scratchGui.editorTab.activeTabIndex !== 0) {
      redux.dispatch({
        type: "scratch-gui/navigation/ACTIVATE_TAB",
        activeTabIndex: 0
      });
    }
  };
  const goToBlock = blockId => {
    const workspace = Blockly.getMainWorkspace();
    const block = workspace.getBlockById(blockId);
    if (!block) return;

    // Don't scroll to blocks in the flyout
    if (block.workspace.isFlyout) return;
    new _editor_devtools_blockly_Utils_js__WEBPACK_IMPORTED_MODULE_16__["default"](addon).scrollBlockIntoView(blockId);
  };

  // May be slightly incorrect in some edge cases.
  const formatProcedureCode = proccode => proccode.replace(/%[nbs]/g, "()");

  // May be slightly incorrect in some edge cases.
  const formatBlocklyBlockData = jsonData => {
    // For sample jsonData, see:
    // https://github.com/LLK/scratch-blocks/blob/0bd1a17e66a779ec5d11f4a00c43784e3ac7a7b8/blocks_vertical/motion.js
    // https://github.com/LLK/scratch-blocks/blob/0bd1a17e66a779ec5d11f4a00c43784e3ac7a7b8/blocks_vertical/control.js

    const processSegment = index => {
      const message = jsonData["message".concat(index)];
      const args = jsonData["args".concat(index)];
      if (!message) {
        return null;
      }
      const parts = message.split(/%\d+/g);
      let formattedMessage = "";
      for (let i = 0; i < parts.length; i++) {
        formattedMessage += parts[i];
        const argInfo = args && args[i];
        if (argInfo) {
          const type = argInfo.type;
          if (type === "field_vertical_separator") {
            // no-op
          } else if (type === "field_image") {
            const src = argInfo.src;
            if (src.endsWith("rotate-left.svg")) {
              formattedMessage += "↩";
            } else if (src.endsWith("rotate-right.svg")) {
              formattedMessage += "↪";
            }
          } else {
            formattedMessage += "()";
          }
        }
      }
      return formattedMessage;
    };
    const parts = [];
    let i = 0;
    // The jsonData doesn't directly tell us how many segments it has, so we have to
    // just keep looping until one doesn't exist.
    while (true) {
      const nextSegment = processSegment(i);
      if (nextSegment) {
        parts.push(nextSegment);
      } else {
        break;
      }
      i++;
    }
    return parts.join(" ");
  };
  const createBlockPreview = (targetId, blockId) => {
    const target = vm.runtime.getTargetById(targetId);
    if (!target) {
      return null;
    }
    const block = getBlock(target, blockId);
    if (!block || block.opcode === "text") {
      return null;
    }
    let text;
    let category;
    let shape;
    let color;
    if (block.opcode === "data_variable" || block.opcode === "data_listcontents" || block.opcode === "argument_reporter_string_number" || block.opcode === "argument_reporter_boolean") {
      text = Object.values(block.fields)[0].value;
      if (block.opcode === "data_variable") {
        category = "data";
      } else if (block.opcode === "data_listcontents") {
        category = "list";
      } else {
        category = "more";
      }
      shape = "round";
    } else if (block.opcode === "procedures_call") {
      const proccode = block.mutation.proccode;
      text = formatProcedureCode(proccode);
      const customBlock = addon.tab.getCustomBlock(proccode);
      if (customBlock) {
        category = "addon-custom-block";
        color = customBlock.color;
      } else {
        category = "more";
      }
    } else if (block.opcode === "procedures_definition") {
      const prototypeBlockId = block.inputs.custom_block.block;
      const prototypeBlock = getBlock(target, prototypeBlockId);
      const proccode = prototypeBlock.mutation.proccode;
      text = ScratchBlocks.ScratchMsgs.translate("PROCEDURES_DEFINITION", "define %1").replace("%1", formatProcedureCode(proccode));
      category = "more";
    } else {
      // Try to call things like https://github.com/LLK/scratch-blocks/blob/0bd1a17e66a779ec5d11f4a00c43784e3ac7a7b8/blocks_vertical/operators.js#L36
      var jsonData;
      const fakeBlock = {
        jsonInit(data) {
          jsonData = data;
        }
      };
      const blockConstructor = ScratchBlocks.Blocks[block.opcode];
      if (blockConstructor) {
        try {
          blockConstructor.init.call(fakeBlock);
        } catch (e) {
          // ignore
        }
      }
      if (!jsonData) {
        return null;
      }
      text = formatBlocklyBlockData(jsonData);
      if (!text) {
        return null;
      }
      category = jsonData.category;
      const isStatement = jsonData.extensions && (jsonData.extensions.includes("shape_statement") || jsonData.extensions.includes("shape_hat") || jsonData.extensions.includes("shape_end")) || "previousStatement" in jsonData || "nextStatement" in jsonData;
      shape = isStatement ? "stacked" : "round";
    }
    if (!text || !category) {
      return null;
    }
    if (!color) {
      const blocklyCategoryMap = {
        "data-lists": "data_lists",
        list: "data_lists",
        events: "event"
      };
      const blocklyColor = ScratchBlocks.Colours[blocklyCategoryMap[category] || category];
      if (blocklyColor) {
        color = blocklyColor.primary;
      } else {
        // block probably belongs to an extension
        color = ScratchBlocks.Colours.pen.primary;
      }
    }
    const element = document.createElement("span");
    element.className = "sa-debugger-block-preview";
    element.textContent = text;
    element.style.backgroundColor = color;
    element.dataset.shape = shape;

    // data-category is used for editor-theme3 compatibility
    const colorCategoryMap = {
      list: "data-lists",
      more: "custom"
    };
    element.dataset.category = colorCategoryMap[category] || category;
    return element;
  };
  const api = {
    debug: {
      createHeaderButton,
      createHeaderTab,
      setHasUnreadMessage,
      addAfterStepCallback,
      getBlock,
      getTargetInfoById,
      createBlockLink,
      createBlockPreview
    },
    addon,
    msg,
    console
  };
  logsTab = await Object(_logs_js__WEBPACK_IMPORTED_MODULE_14__["default"])(api);
  const threadsTab = await Object(_threads_js__WEBPACK_IMPORTED_MODULE_15__["default"])(api);
  const allTabs = [logsTab, threadsTab];
  for (const message of messagesLoggedBeforeLogsTabLoaded) {
    logsTab.addLog(...message);
  }
  messagesLoggedBeforeLogsTabLoaded.length = 0;
  let activeTab;
  const setActiveTab = tab => {
    if (tab === activeTab) return;
    const selectedClass = "sa-debugger-tab-selected";
    if (activeTab) {
      activeTab.hide();
      activeTab.tab.element.classList.remove(selectedClass);
    }
    tab.tab.element.classList.add(selectedClass);
    activeTab = tab;
    removeAllChildren(tabContentContainer);
    tabContentContainer.appendChild(tab.content);
    removeAllChildren(buttonContainerElement);
    buttonContainerElement.appendChild(unpauseButton.element);
    for (const button of tab.buttons) {
      buttonContainerElement.appendChild(button.element);
    }
    buttonContainerElement.appendChild(closeButton.element);
    if (isInterfaceVisible) {
      activeTab.show();
    }
  };
  for (const tab of allTabs) {
    tab.tab.element.addEventListener("click", () => {
      setActiveTab(tab);
    });
    tabListElement.appendChild(tab.tab.element);
  }
  setActiveTab(allTabs[0]);
  if (addon.tab.redux.state && addon.tab.redux.state.scratchGui.stageSize.stageSize === "small") {
    document.body.classList.add("sa-debugger-small");
  }
  document.addEventListener("click", e => {
    if (e.target.closest("[class*='stage-header_stage-button-first']:not(.sa-hide-stage-button)")) {
      document.body.classList.add("sa-debugger-small");
    } else if (e.target.closest("[class*='stage-header_stage-button-last']") || e.target.closest(".sa-hide-stage-button")) {
      document.body.classList.remove("sa-debugger-small");
    }
  }, {
    capture: true
  });
  const ogGreenFlag = vm.runtime.greenFlag;
  vm.runtime.greenFlag = function () {
    if (addon.settings.get("log_clear_greenflag")) {
      logsTab.clearLogs();
    }
    if (addon.settings.get("log_greenflag")) {
      logsTab.addLog(msg("log-msg-flag-clicked"), null, "internal");
    }
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return ogGreenFlag.call(this, ...args);
  };
  const ogMakeClone = vm.runtime.targets[0].constructor.prototype.makeClone;
  vm.runtime.targets[0].constructor.prototype.makeClone = function () {
    if (addon.settings.get("log_failed_clone_creation") && !vm.runtime.clonesAvailable()) {
      logsTab.addLog(msg("log-msg-clone-cap", {
        sprite: this.getName()
      }), vm.runtime.sequencer.activeThread, "internal-warn");
    }
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    var clone = ogMakeClone.call(this, ...args);
    if (addon.settings.get("log_clone_create") && clone) {
      logsTab.addLog(msg("log-msg-clone-created", {
        sprite: this.getName()
      }), vm.runtime.sequencer.activeThread, "internal");
    }
    return clone;
  };
  const ogStartHats = vm.runtime.startHats;
  vm.runtime.startHats = function (hat, optMatchFields) {
    if (addon.settings.get("log_broadcasts") && hat === "event_whenbroadcastreceived") {
      logsTab.addLog(msg("log-msg-broadcasted", {
        broadcast: optMatchFields.BROADCAST_OPTION
      }), vm.runtime.sequencer.activeThread, "internal");
    }
    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
      args[_key5 - 2] = arguments[_key5];
    }
    return ogStartHats.call(this, hat, optMatchFields, ...args);
  };
  while (true) {
    await addon.tab.waitForElement('[class*="stage-header_stage-size-row"]', {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/mode/SET_FULL_SCREEN", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
    });
    if (addon.tab.editorMode === "editor") {
      addon.tab.appendToSharedSpace({
        space: "stageHeader",
        element: debuggerButtonOuter,
        order: 0
      });
    } else {
      setInterfaceVisible(false);
    }
  }
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/BlockInstance.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/BlockInstance.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockInstance; });
/**
 * Encapsulates a block (either in this sprite or another / Blockly, or native JSON block
 */
class BlockInstance {
  constructor(target, block) {
    this.targetId = target.id;
    this.id = block.id;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/blockly/BlockFlasher.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/blockly/BlockFlasher.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockFlasher; });
/**
 * Helper class to flash a Blockly scratch block in the users workspace
 */
class BlockFlasher {
  /**
   * FLash a block 3 times
   * @param block the block to flash
   */
  static flash(block) {
    if (myFlash.timerID > 0) {
      clearTimeout(myFlash.timerID);
      if (myFlash.block.svgPath_) {
        myFlash.block.svgPath_.style.fill = "";
      }
    }
    let count = 4;
    let flashOn = true;
    myFlash.block = block;

    /**
     * Internal method to switch the colour of a block between light yellow and it's original colour
     * @private
     */
    function _flash() {
      if (myFlash.block.svgPath_) {
        myFlash.block.svgPath_.style.fill = flashOn ? "#ffff80" : "";
      }
      flashOn = !flashOn;
      count--;
      if (count > 0) {
        myFlash.timerID = setTimeout(_flash, 200);
      } else {
        myFlash.timerID = 0;
        myFlash.block = null;
      }
    }
    _flash();
  }
}
const myFlash = {
  block: null,
  timerID: null
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/blockly/Utils.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/blockly/Utils.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
/* harmony import */ var _BlockInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BlockInstance.js */ "./src/addons/addons/editor-devtools/BlockInstance.js");
/* harmony import */ var _BlockFlasher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockFlasher.js */ "./src/addons/addons/editor-devtools/blockly/BlockFlasher.js");



// A file to split Editor Devtools by features.

class Utils {
  constructor(addon) {
    this.addon = addon;
    this.addon.tab.traps.getBlockly().then(blockly => {
      this.blockly = blockly;
    });
    /**
     * Scratch Virtual Machine
     * @type {null|*}
     */
    this.vm = this.addon.tab.traps.vm;
    // this._myFlash = { block: null, timerID: null, colour: null };
    this.offsetX = 32;
    this.offsetY = 32;
    this.navigationHistory = new NavigationHistory(this);
    /**
     * The workspace
     */
    this._workspace = null;
  }

  /**
   * Get the Scratch Editing Target
   * @returns {?Target} the scratch editing target
   */
  getEditingTarget() {
    return this.vm.runtime.getEditingTarget();
  }

  /**
   * Set the current workspace (switches sprites)
   * @param targetID {string}
   */
  setEditingTarget(targetID) {
    if (this.getEditingTarget().id !== targetID) {
      this.vm.setEditingTarget(targetID);
    }
  }

  /**
   * Returns the main workspace
   * @returns !Blockly.Workspace
   */
  getWorkspace() {
    const currentWorkspace = Blockly.getMainWorkspace();
    if (currentWorkspace.getToolbox()) {
      // Sadly get get workspace does not always return the 'real' workspace... Not sure how to get that at the moment,
      //  but we can work out whether it's the right one by whether it has a toolbox.
      this._workspace = currentWorkspace;
    }
    return this._workspace;
  }

  /**
   * Based on wksp.centerOnBlock(li.data.labelID);
   * @param blockOrId {Blockly.Block|{id}|BlockInstance} A Blockly Block, a block id, or a BlockInstance
   */
  scrollBlockIntoView(blockOrId) {
    var _this$blockly;
    let workspace = this.getWorkspace();
    /** @type {Blockly.Block} */
    let block; // or is it really a Blockly.BlockSvg?

    if (blockOrId instanceof _BlockInstance_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      // Switch to sprite
      this.setEditingTarget(blockOrId.targetId);
      // Highlight the block!
      block = workspace.getBlockById(blockOrId.id);
    } else {
      block = blockOrId && blockOrId.id ? blockOrId : workspace.getBlockById(blockOrId);
    }
    if (!block) {
      return;
    }

    /**
     * !Blockly.Block
     */
    let root = block.getRootBlock();
    let base = this.getTopOfStackFor(block);
    let ePos = base.getRelativeToSurfaceXY(),
      // Align with the top of the block
      rPos = root.getRelativeToSurfaceXY(),
      // Align with the left of the block 'stack'
      scale = workspace.scale,
      x = rPos.x * scale,
      y = ePos.y * scale,
      xx = block.width + x,
      // Turns out they have their x & y stored locally, and they are the actual size rather than scaled or including children...
      yy = block.height + y,
      s = workspace.getMetrics();
    if (x < s.viewLeft + this.offsetX - 4 || xx > s.viewLeft + s.viewWidth || y < s.viewTop + this.offsetY - 4 || yy > s.viewTop + s.viewHeight) {
      // sx = s.contentLeft + s.viewWidth / 2 - x,
      let sx = x - s.contentLeft - this.offsetX,
        // sy = s.contentTop - y + Math.max(Math.min(32, 32 * scale), (s.viewHeight - yh) / 2);
        sy = y - s.contentTop - this.offsetY;
      this.navigationHistory.storeView(this.navigationHistory.peek(), 64);

      // workspace.hideChaff(),
      workspace.scrollbar.set(sx, sy);
      this.navigationHistory.storeView({
        left: sx,
        top: sy
      }, 64);
    }
    (_this$blockly = this.blockly) === null || _this$blockly === void 0 ? void 0 : _this$blockly.hideChaff();
    _BlockFlasher_js__WEBPACK_IMPORTED_MODULE_1__["default"].flash(block);
  }

  /**
   * Find the top stack block of a stack
   * @param block a block in a stack
   * @returns {*} a block that is the top of the stack of blocks
   */
  getTopOfStackFor(block) {
    let base = block;
    while (base.getOutputShape() && base.getSurroundParent()) {
      base = base.getSurroundParent();
    }
    return base;
  }
}
class NavigationHistory {
  constructor(utils) {
    this.utils = utils;
    this.views = [];
    this.forward = [];
  }

  /**
   * Keep a record of the scroll and zoom position
   */
  storeView(next, dist) {
    this.forward = [];
    let workspace = this.utils.getWorkspace(),
      s = workspace.getMetrics();
    let pos = {
      left: s.viewLeft,
      top: s.viewTop
    };
    if (!next || distance(pos, next) > dist) {
      this.views.push(pos);
    }
  }
  peek() {
    return this.views.length > 0 ? this.views[this.views.length - 1] : null;
  }
  goBack() {
    const workspace = this.utils.getWorkspace(),
      s = workspace.getMetrics();
    let pos = {
      left: s.viewLeft,
      top: s.viewTop
    };
    let view = this.peek();
    if (!view) {
      return;
    }
    if (distance(pos, view) < 64) {
      // Go back to current if we are already far away from it
      if (this.views.length > 1) {
        this.views.pop();
        this.forward.push(view);
      }
    }
    view = this.peek();
    if (!view) {
      return;
    }
    let sx = view.left - s.contentLeft,
      sy = view.top - s.contentTop;

    // transform.setTranslate(-600,0);

    workspace.scrollbar.set(sx, sy);

    /*
              let blocklySvg = document.getElementsByClassName('blocklySvg')[0];
              let blocklyBlockCanvas = blocklySvg.getElementsByClassName('blocklyBlockCanvas')[0];
              let transform = blocklyBlockCanvas.transform.baseVal.getItem(0);
              let scale = blocklyBlockCanvas.transform.baseVal.getItem(1);
               let transformMatrix = transform.matrix;
              let scaleMatrix = scale.matrix;
               console.log('Transform - getMetrics', s);
              console.log('sx, sy: ', sx, sy);
              console.log('left, top: ', view.left, view.top);
              console.log('contentLeft, right:', s.contentLeft, s.contentTop);
              console.log('transform, scale matrix: ', transformMatrix, scaleMatrix);
    */
  }

  goForward() {
    let view = this.forward.pop();
    if (!view) {
      return;
    }
    this.views.push(view);
    let workspace = this.utils.getWorkspace(),
      s = workspace.getMetrics();
    let sx = view.left - s.contentLeft,
      sy = view.top - s.contentTop;
    workspace.scrollbar.set(sx, sy);
  }
}
function distance(pos, next) {
  return Math.sqrt(Math.pow(pos.left - next.left, 2) + Math.pow(pos.top - next.top, 2));
}

/***/ }),

/***/ "./src/addons/addons/editor-stepping/highlighter.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/editor-stepping/highlighter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SVG_NS = "http://www.w3.org/2000/svg";
const containerSvg = document.createElementNS(SVG_NS, "svg");
// unfortunately we can't use display: none on this as that breaks filters
containerSvg.style.position = "fixed";
containerSvg.style.top = "-999999px";
containerSvg.style.width = "0";
containerSvg.style.height = "0";
document.body.appendChild(containerSvg);
let nextGlowerId = 0;
const highlightsPerElement = new WeakMap();
const getHighlightersForElement = element => {
  if (!highlightsPerElement.get(element)) {
    highlightsPerElement.set(element, new Set());
  }
  return highlightsPerElement.get(element);
};
const updateHighlight = (element, highlighters) => {
  let result;
  for (const i of highlighters) {
    if (!result || i.priority > result.priority) {
      result = i;
    }
  }
  if (result) {
    element.style.filter = result.filter;
  } else {
    element.style.filter = "";
  }
};
const addHighlight = (element, highlighter) => {
  const highlighters = getHighlightersForElement(element);
  highlighters.add(highlighter);
  updateHighlight(element, highlighters);
};
const removeHighlight = (element, highlighter) => {
  const highlighters = getHighlightersForElement(element);
  highlighters.delete(highlighter);
  updateHighlight(element, highlighters);
};
class Highlighter {
  constructor(priority, color) {
    this.priority = priority;
    const id = "sa_glower_filter".concat(nextGlowerId++);
    this.filter = "url(\"#".concat(id, "\")");
    this.previousElements = new Set();
    const filterElement = document.createElementNS(SVG_NS, "filter");
    filterElement.id = id;
    filterElement.setAttribute("width", "180%");
    filterElement.setAttribute("height", "160%");
    filterElement.setAttribute("x", "-40%");
    filterElement.setAttribute("y", "-30%");
    const filterBlur = document.createElementNS(SVG_NS, "feGaussianBlur");
    filterBlur.setAttribute("in", "SourceGraphic");
    filterBlur.setAttribute("stdDeviation", "4");
    filterElement.appendChild(filterBlur);
    const filterTransfer = document.createElementNS(SVG_NS, "feComponentTransfer");
    filterTransfer.setAttribute("result", "outBlur");
    filterElement.appendChild(filterTransfer);
    const filterTransferTable = document.createElementNS(SVG_NS, "feFuncA");
    filterTransferTable.setAttribute("type", "table");
    filterTransferTable.setAttribute("tableValues", "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1");
    filterTransfer.appendChild(filterTransferTable);
    const filterFlood = document.createElementNS(SVG_NS, "feFlood");
    filterFlood.setAttribute("flood-opacity", "1");
    filterFlood.setAttribute("result", "outColor");
    filterElement.appendChild(filterFlood);
    this.filterFlood = filterFlood;
    const filterComposite = document.createElementNS(SVG_NS, "feComposite");
    filterComposite.setAttribute("in", "outColor");
    filterComposite.setAttribute("in2", "outBlur");
    filterComposite.setAttribute("operator", "in");
    filterComposite.setAttribute("result", "outGlow");
    filterElement.appendChild(filterComposite);
    const filterFinalComposite = document.createElementNS(SVG_NS, "feComposite");
    filterFinalComposite.setAttribute("in", "SourceGraphic");
    filterFinalComposite.setAttribute("in2", "outGlow");
    filterFinalComposite.setAttribute("operator", "over");
    filterElement.appendChild(filterFinalComposite);
    containerSvg.appendChild(filterElement);
    this.setColor(color);
  }
  setColor(color) {
    this.filterFlood.setAttribute("flood-color", color);
  }
  setGlowingThreads(threads) {
    const elementsToHighlight = new Set();
    const workspace = Blockly.getMainWorkspace();
    if (workspace) {
      for (const thread of threads) {
        thread.stack.forEach(blockId => {
          const block = workspace.getBlockById(blockId);
          if (!block) {
            return;
          }
          const childblock = thread.stack.find(i => {
            let b = block;
            while (b.childBlocks_.length) {
              b = b.childBlocks_[b.childBlocks_.length - 1];
              if (i === b.id) return true;
            }
            return false;
          });
          if (!childblock && block.svgPath_) {
            const svgPath = block.svgPath_;
            elementsToHighlight.add(svgPath);
          }
        });
      }
    }
    for (const element of this.previousElements) {
      if (!elementsToHighlight.has(element)) {
        removeHighlight(element, this);
      }
    }
    for (const element of elementsToHighlight) {
      if (!this.previousElements.has(element)) {
        addHighlight(element, this);
      }
    }
    this.previousElements = elementsToHighlight;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Highlighter);

/***/ }),

/***/ "./src/addons/libraries/common/cs/download-blob.js":
/*!*********************************************************!*\
  !*** ./src/addons/libraries/common/cs/download-blob.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// From https://github.com/LLK/scratch-gui/blob/develop/src/lib/download-blob.js
/* harmony default export */ __webpack_exports__["default"] = ((filename, blob) => {
  const downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);

  // Use special ms version if available to get it working on Edge.
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }
  if ("download" in HTMLAnchorElement.prototype) {
    const url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.type = blob.type;
    downloadLink.click();
    // remove the link after a timeout to prevent a crash on iOS 13 Safari
    window.setTimeout(() => {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } else {
    // iOS 12 Safari, open a new page and set href to data-uri
    let popup = window.open("", "_blank");
    const reader = new FileReader();
    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };
    reader.readAsDataURL(blob);
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-debugger.js.map