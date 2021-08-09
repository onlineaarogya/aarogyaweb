webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Conlin%5COneDrive%5CDesktop%5Csite%5Caarogyaweb%5Cpages%5C_error.js!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Conlin%5COneDrive%5CDesktop%5Csite%5Caarogyaweb%5Cpages%5C_error.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_ServerError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/ServerError */ "./src/views/ServerError/index.js");
/* harmony import */ var layouts_Minimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Minimal */ "./src/layouts/Minimal/index.js");
/* harmony import */ var WithLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! WithLayout */ "./src/WithLayout.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ErrorPage = () => {
  return __jsx(WithLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: views_ServerError__WEBPACK_IMPORTED_MODULE_1__["default"],
    layout: layouts_Minimal__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  });
};

_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/ServerError/ServerError.js":
/*!**********************************************!*\
  !*** ./src/views/ServerError/ServerError.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\views\\ServerError\\ServerError.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}));

const ServerError = () => {
  _s();

  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.formContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_4__["SectionHeader"], {
    label: "500",
    title: "Internal Server Error",
    subtitle: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, "There\u2019s nothing here, but if you feel this is an error please", ' ', __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_3__["LearnMoreLink"], {
      title: "let us know",
      href: "#",
      typographyProps: {
        variant: 'h6'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    })),
    titleProps: {
      variant: 'h3'
    },
    labelProps: {
      color: 'secondary',
      className: classes.label,
      variant: 'h5'
    },
    ctaGroup: [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "large",
      variant: "contained",
      color: "primary",
      onClick: handleClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, "Go Back")],
    disableGutter: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))));
};

_s(ServerError, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ServerError;
/* harmony default export */ __webpack_exports__["default"] = (ServerError);

var _c;

$RefreshReg$(_c, "ServerError");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/ServerError/index.js":
/*!****************************************!*\
  !*** ./src/views/ServerError/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ServerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerError */ "./src/views/ServerError/ServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy9TZXJ2ZXJFcnJvci9TZXJ2ZXJFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL1NlcnZlckVycm9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVycm9yUGFnZSIsIlNlcnZlckVycm9yIiwiTWluaW1hbCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250YWluZXIiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1pbkhlaWdodCIsIm1peGlucyIsInRvb2xiYXIiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInNlY3Rpb24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxhYmVsIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsInZhcmlhbnQiLCJjb2xvciIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBeUU7QUFDaEc7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsYUFBUyxFQUFFQyx5REFEYjtBQUVFLFVBQU0sRUFBRUMsdURBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBTUQsQ0FQRDs7S0FBTUYsUztBQVNTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1HLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxlQUFhLEVBQUU7QUFDYkMsVUFBTSxFQUFFLE1BREs7QUFFYkMsV0FBTyxFQUFFLE1BRkk7QUFHYkMsaUJBQWEsRUFBRSxRQUhGO0FBSWJDLGNBQVUsRUFBRSxRQUpDO0FBS2JDLGtCQUFjLEVBQUUsUUFMSDtBQU1iQyxhQUFTLEVBQUcsZ0JBQWVQLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxPQUFiLENBQXFCLDBCQUFyQixFQUFpREYsU0FBVSxLQU56RTtBQU9iRyxZQUFRLEVBQUUsR0FQRztBQVFiQyxVQUFNLEVBQUc7QUFSSSxHQURzQjtBQVdyQ0MsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRSxDQURMO0FBRVBDLGlCQUFhLEVBQUU7QUFGUixHQVg0QjtBQWVyQ0MsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBRSxNQURQO0FBRUxDLGlCQUFhLEVBQUU7QUFGVjtBQWY4QixDQUFMLENBQU4sQ0FBNUI7O0FBcUJBLE1BQU1yQixXQUFXLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNc0IsT0FBTyxHQUFHcEIsU0FBUyxFQUF6Qjs7QUFFQSxRQUFNcUIsV0FBVyxHQUFHLE1BQU07QUFDeEJDLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVMsYUFBUyxFQUFFSixPQUFPLENBQUNOLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRU0sT0FBTyxDQUFDakIsYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUMsS0FEUjtBQUVFLFNBQUssRUFBQyx1QkFGUjtBQUdFLFlBQVEsRUFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUNnRSxHQURoRSxFQUVFLE1BQUMsOERBQUQ7QUFDRSxXQUFLLEVBQUMsYUFEUjtBQUVFLFVBQUksRUFBQyxHQUZQO0FBR0UscUJBQWUsRUFBRTtBQUFFc0IsZUFBTyxFQUFFO0FBQVgsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBSko7QUFhRSxjQUFVLEVBQUU7QUFDVkEsYUFBTyxFQUFFO0FBREMsS0FiZDtBQWdCRSxjQUFVLEVBQUU7QUFDVkMsV0FBSyxFQUFFLFdBREc7QUFFVkMsZUFBUyxFQUFFUCxPQUFPLENBQUNILEtBRlQ7QUFHVlEsYUFBTyxFQUFFO0FBSEMsS0FoQmQ7QUFxQkUsWUFBUSxFQUFFLENBQ1IsTUFBQyx3REFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxXQUFLLEVBQUMsU0FIUjtBQUlFLGFBQU8sRUFBRUosV0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLENBckJaO0FBK0JFLGlCQUFhLE1BL0JmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERjtBQXlDRCxDQWhERDs7R0FBTXZCLFc7VUFDWUUsUzs7O0tBRFpGLFc7QUFrRFNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjBmNjE0NTU0MTEyMDMxYTMxM2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXG9ubGluXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcc2l0ZVxcXFxhYXJvZ3lhd2ViXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlcnZlckVycm9yIGZyb20gJ3ZpZXdzL1NlcnZlckVycm9yJztcclxuaW1wb3J0IE1pbmltYWwgZnJvbSAnbGF5b3V0cy9NaW5pbWFsJztcclxuaW1wb3J0IFdpdGhMYXlvdXQgZnJvbSAnV2l0aExheW91dCc7XHJcblxyXG5jb25zdCBFcnJvclBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaXRoTGF5b3V0XHJcbiAgICAgIGNvbXBvbmVudD17U2VydmVyRXJyb3J9XHJcbiAgICAgIGxheW91dD17TWluaW1hbH1cclxuICAgIC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IExlYXJuTW9yZUxpbmsgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0aGVtZS5taXhpbnMudG9vbGJhclsnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJ10ubWluSGVpZ2h0fXB4KWAsXHJcbiAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgbWFyZ2luOiBgMCBhdXRvYCxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFNlcnZlckVycm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIGxhYmVsPVwiNTAwXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIlxyXG4gICAgICAgICAgICBzdWJ0aXRsZT17XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBUaGVyZeKAmXMgbm90aGluZyBoZXJlLCBidXQgaWYgeW91IGZlZWwgdGhpcyBpcyBhbiBlcnJvciBwbGVhc2V7JyAnfVxyXG4gICAgICAgICAgICAgICAgPExlYXJuTW9yZUxpbmtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJsZXQgdXMga25vd1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwb2dyYXBoeVByb3BzPXt7IHZhcmlhbnQ6ICdoNicgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnaDMnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBsYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5sYWJlbCxcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnaDUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjdGFHcm91cD17W1xyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBkaXNhYmxlR3V0dGVyXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmVyRXJyb3I7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlcnZlckVycm9yJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==