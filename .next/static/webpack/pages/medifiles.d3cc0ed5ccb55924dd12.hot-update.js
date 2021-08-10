webpackHotUpdate_N_E("pages/medifiles",{

/***/ "./src/views/AfterLogin/MemberDetails/components/UploadFile/UploadFile.js":
/*!********************************************************************************!*\
  !*** ./src/views/AfterLogin/MemberDetails/components/UploadFile/UploadFile.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\views\\AfterLogin\\MemberDetails\\components\\UploadFile\\UploadFile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styless = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    background: '#4caf50'
  }
}));

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

function CustomizedDialogs(props) {
  _s();

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 2
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "primary",
    onClick: () => setOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "Add New Medical Record"), __jsx(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_3__["DropzoneDialog"], {
    acceptedFiles: ['image/pdf'],
    cancelButtonText: "cancel",
    submitButtonText: "submit",
    maxFileSize: 5000000,
    open: open,
    onClose: () => setOpen(false),
    onSave: files => {
      console.log('Files:', files);
      setOpen(false);
    },
    showPreviews: true,
    showFileNamesInPreview: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }));
}

_s(CustomizedDialogs, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = CustomizedDialogs;

var _c;

$RefreshReg$(_c, "CustomizedDialogs");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0FmdGVyTG9naW4vTWVtYmVyRGV0YWlscy9jb21wb25lbnRzL1VwbG9hZEZpbGUvVXBsb2FkRmlsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZXNzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJzdHlsZXMiLCJtYXJnaW4iLCJwYWRkaW5nIiwic3BhY2luZyIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJDdXN0b21pemVkRGlhbG9ncyIsInByb3BzIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFO0FBRFI7QUFEK0IsQ0FBWixDQUFELENBQTFCOztBQU9BLE1BQU1DLE1BQU0sR0FBSUgsS0FBRCxLQUFZO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkcsVUFBTSxFQUFFLENBREo7QUFFSkMsV0FBTyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBRkwsR0FEbUI7QUFLekJDLGFBQVcsRUFBRTtBQUNYQyxZQUFRLEVBQUUsVUFEQztBQUVYQyxTQUFLLEVBQUVULEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FGSTtBQUdYSSxPQUFHLEVBQUVWLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FITTtBQUlYSyxTQUFLLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CO0FBSkk7QUFMWSxDQUFaLENBQWY7O0FBY2UsU0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUE7O0FBQzdDLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QjtBQUVGLFNBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLFdBQU8sRUFBRSxNQUFNRixPQUFPLENBQUMsSUFBRCxDQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURILEVBSU8sTUFBQyxtRUFBRDtBQUNJLGlCQUFhLEVBQUUsQ0FBQyxXQUFELENBRG5CO0FBRUksb0JBQWdCLEVBQUUsUUFGdEI7QUFHSSxvQkFBZ0IsRUFBRSxRQUh0QjtBQUlJLGVBQVcsRUFBRSxPQUpqQjtBQUtJLFFBQUksRUFBRUQsSUFMVjtBQU1JLFdBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUMsS0FBRCxDQU4xQjtBQU9JLFVBQU0sRUFBR0csS0FBRCxJQUFXO0FBQ25CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUF0QjtBQUNBSCxhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0MsS0FWTDtBQVdJLGdCQUFZLEVBQUUsSUFYbEI7QUFZSSwwQkFBc0IsRUFBRSxJQVo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlAsQ0FEQztBQXFCRDs7R0F4QnVCSCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVkaWZpbGVzLmQzY2MwZWQ1Y2NiNTU5MjRkZDEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBEcm9wem9uZURpYWxvZyB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJztcclxuXHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlc3MgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzRjYWY1MCdcclxuICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGNsb3NlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWREaWFsb2dzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiA8ZGl2PlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0+XHJcbiAgICAgIEFkZCBOZXcgTWVkaWNhbCBSZWNvcmRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxEcm9wem9uZURpYWxvZ1xyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlL3BkZiddfVxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0PXtcImNhbmNlbFwifVxyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b25UZXh0PXtcInN1Ym1pdFwifVxyXG4gICAgICAgICAgICBtYXhGaWxlU2l6ZT17NTAwMDAwMH1cclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uU2F2ZT17KGZpbGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWxlczonLCBmaWxlcyk7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XHJcbiAgICAgICAgICAgIHNob3dGaWxlTmFtZXNJblByZXZpZXc9e3RydWV9XHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=