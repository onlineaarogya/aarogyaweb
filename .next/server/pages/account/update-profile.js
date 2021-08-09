module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account/update-profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/account/update-profile.js":
/*!*****************************************!*\
  !*** ./pages/account/update-profile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "@material-ui/core/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_AfterLogin_UpdateProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/AfterLogin/UpdateProfile */ "./src/views/AfterLogin/UpdateProfile/index.js");
/* harmony import */ var layouts_DocsLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/DocsLayout */ "./src/layouts/DocsLayout/index.js");
/* harmony import */ var WithLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! WithLayout */ "./src/WithLayout.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\pages\\account\\update-profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */

 // import Documentation from 'views/Documentation';





const Component = () => {
  return __jsx(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, __jsx(views_AfterLogin_UpdateProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};

const UpdateProfiles = () => {
  return __jsx(WithLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Component,
    layout: layouts_DocsLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfiles);

/***/ }),

/***/ "./src/WithLayout.js":
/*!***************************!*\
  !*** ./src/WithLayout.js ***!
  \***************************/
/*! exports provided: useDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDarkMode", function() { return useDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\WithLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useDarkMode = () => {
  const {
    0: themeMode,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  const {
    0: mountedComponent,
    1: setMountedComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.refresh();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.refresh();
  }, [themeMode]);
  return [themeMode, themeToggler, mountedComponent];
};
function WithLayout(_ref) {
  let {
    component: Component,
    layout: Layout
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "layout"]);

  // console.log('width', rest.data.data);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    aos__WEBPACK_IMPORTED_MODULE_5___default.a.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.refresh();
  }, [mountedComponent]);
  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(theme__WEBPACK_IMPORTED_MODULE_4__["default"])(themeMode),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(Layout, {
    themeMode: themeMode,
    themeToggler: themeToggler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({
    data: rest.data,
    themeMode: themeMode
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })))));
}

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-icon-2x.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-icon.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/leaflet-assets/marker-shadow.png":
/*!************************************************************!*\
  !*** ./src/assets/images/leaflet-assets/marker-shadow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/atoms/DarkModeToggler/DarkModeToggler.js":
/*!*****************************************************************!*\
  !*** ./src/components/atoms/DarkModeToggler/DarkModeToggler.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\DarkModeToggler\\DarkModeToggler.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  border: {
    width: theme.spacing(5),
    height: theme.spacing(2),
    borderRadius: theme.spacing(3),
    border: '3px solid',
    borderColor: theme.palette.divider,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(6),
      height: theme.spacing(3)
    }
  },
  borderDark: {
    borderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["colors"].indigo[700]
  },
  modeToggler: {
    position: 'absolute',
    top: `-${theme.spacing(1 / 2)}px`,
    left: `-${theme.spacing(1 / 2)}px`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    backgroundColor: theme.palette.text.primary,
    transition: `transform .3s cubic-bezier(.4,.03,0,1)`,
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(4),
      height: theme.spacing(4)
    }
  },
  modeTogglerDark: {
    transform: `translateX(${theme.spacing(3)}px)`,
    backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["colors"].indigo[900]
  },
  modeTogglerIcon: {
    fill: theme.palette.secondary.main,
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
  }
}));
/**
 * Component to display the dark mode toggler
 *
 * @param {Object} props
 */

const DarkModeToggler = (_ref) => {
  let {
    themeMode = 'light',
    onClick,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["themeMode", "onClick", "className"]);

  const classes = useStyles();
  return __jsx("span", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className)
  }, rest, {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.border, themeMode === 'dark' ? classes.borderDark : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.modeToggler, themeMode === 'dark' ? classes.modeTogglerDark : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("svg", {
    className: classes.modeTogglerIcon,
    "aria-hidden": "true",
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }))));
};

DarkModeToggler.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The theme mode
   */
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Theme toggler function
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DarkModeToggler);

/***/ }),

/***/ "./src/components/atoms/DarkModeToggler/index.js":
/*!*******************************************************!*\
  !*** ./src/components/atoms/DarkModeToggler/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkModeToggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkModeToggler */ "./src/components/atoms/DarkModeToggler/DarkModeToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DarkModeToggler__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Icon/Icon.js":
/*!*******************************************!*\
  !*** ./src/components/atoms/Icon/Icon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/NoSsr */ "@material-ui/core/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\Icon\\Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  extraSmall: {
    fontSize: 10
  },
  small: {
    fontSize: 20
  },
  medium: {
    fontSize: 30
  },
  large: {
    fontSize: 40
  }
}));
/**
 * Component to display the icon
 *
 * @param {Object} props
 */

const Icon = props => {
  const {
    fontIconClass,
    size,
    fontIconColor,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["fontIconClass", "size", "fontIconColor", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("i", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon', fontIconClass, classes[size], className),
    style: {
      color: fontIconColor
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })));
};

Icon.defaultProps = {
  size: 'small'
};
Icon.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  fontIconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/atoms/Icon/index.js":
/*!********************************************!*\
  !*** ./src/components/atoms/Icon/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/components/atoms/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/IconText/IconText.js":
/*!***************************************************!*\
  !*** ./src/components/atoms/IconText/IconText.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\IconText\\IconText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing(1)
  }
}));
/**
 * Component to display the icon text
 *
 * @param {Object} props
 */

const IconText = props => {
  const {
    title,
    color,
    fontIconClass,
    className,
    iconProps,
    typographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "color", "fontIconClass", "className", "iconProps", "typographyProps"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon-text', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], _extends({
    className: "icon-text__icon",
    size: "small",
    fontIconClass: fontIconClass,
    fontIconColor: color
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    noWrap: true,
    variant: "subtitle1",
    color: "textPrimary",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon-text__typography', classes.title)
  }, typographyProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), title));
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {}
};
IconText.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the icon-text
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (IconText);

/***/ }),

/***/ "./src/components/atoms/IconText/index.js":
/*!************************************************!*\
  !*** ./src/components/atoms/IconText/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconText */ "./src/components/atoms/IconText/IconText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/Image/Image.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Image/Image.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\Image\\Image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  dBlock: {
    display: 'block'
  }
}));
/**
 * Component to display the images
 *
 * @param {Object} props
 */

const Image = props => {
  const {
    src,
    srcSet,
    alt,
    lazy,
    lazyProps,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["src", "srcSet", "alt", "lazy", "lazyProps", "className"]);

  const classes = useStyles();

  if (lazy) {
    return __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], _extends({
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('image', classes.root, classes.dBlock, className),
      alt: alt,
      src: src,
      srcSet: srcSet,
      effect: "opacity"
    }, lazyProps, rest, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }));
  }

  return __jsx("img", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('image', classes.root, className),
    alt: alt,
    src: src,
    srcSet: srcSet
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }));
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto'
  }
};
Image.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Source of the image
   */
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Source set for the responsive images
   */
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Image title
   */
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Lazy loading properties
   */
  lazyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Should lazy load the image
   */
  lazy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/atoms/Image/index.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Image/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/components/atoms/Image/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/LearnMoreLink/LearnMoreLink.js":
/*!*************************************************************!*\
  !*** ./src/components/atoms/LearnMoreLink/LearnMoreLink.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "@material-ui/icons/ArrowRightAlt");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\LearnMoreLink\\LearnMoreLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  title: {
    fontWeight: 'bold'
  },
  icon: {
    padding: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: 'transparent'
    }
  }
}));
/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */

const LearnMoreLink = props => {
  const {
    color,
    component,
    variant,
    title,
    href,
    className,
    iconProps,
    typographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["color", "component", "variant", "title", "href", "className", "iconProps", "typographyProps"]);

  const classes = useStyles();

  const children = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    component: "span",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link__typography', classes.title),
    variant: variant,
    color: color || 'primary'
  }, typographyProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link__icon-button', classes.icon),
    color: color || 'primary'
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "learn-more-link__arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));

  return __jsx("a", _extends({
    href: href,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('learn-more-link', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), children);
};

LearnMoreLink.defaultProps = {
  variant: 'subtitle1',
  href: '#',
  typographyProps: {},
  iconProps: {},
  component: 'a'
};
LearnMoreLink.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The component to load as a main DOM
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['Link', 'a']),

  /**
   * Title of the link
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Variant of the link
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * Href of the link
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Color of the link
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LearnMoreLink);

/***/ }),

/***/ "./src/components/atoms/LearnMoreLink/index.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/LearnMoreLink/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LearnMoreLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LearnMoreLink */ "./src/components/atoms/LearnMoreLink/LearnMoreLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LearnMoreLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/ScrollTop/ScrollTop.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/ScrollTop/ScrollTop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowUp */ "@material-ui/icons/KeyboardArrowUp");
/* harmony import */ var _material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Zoom */ "@material-ui/core/Zoom");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\atoms\\ScrollTop\\ScrollTop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollTop = () => {
  const classes = useStyles();
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_5___default.a, {
    in: trigger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollTop);

/***/ }),

/***/ "./src/components/atoms/ScrollTop/index.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/ScrollTop/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTop */ "./src/components/atoms/ScrollTop/ScrollTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/atoms/index.js":
/*!***************************************!*\
  !*** ./src/components/atoms/index.js ***!
  \***************************************/
/*! exports provided: Image, Icon, LearnMoreLink, IconText, DarkModeToggler, ScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/components/atoms/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/components/atoms/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LearnMoreLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearnMoreLink */ "./src/components/atoms/LearnMoreLink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LearnMoreLink", function() { return _LearnMoreLink__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconText */ "./src/components/atoms/IconText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconText", function() { return _IconText__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DarkModeToggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DarkModeToggler */ "./src/components/atoms/DarkModeToggler/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkModeToggler", function() { return _DarkModeToggler__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollTop */ "./src/components/atoms/ScrollTop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollTop", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/components/molecules/CountUpNumber/CountUpNumber.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/CountUpNumber/CountUpNumber.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\CountUpNumber\\CountUpNumber.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * Component to display the Count Up Numbers
 *
 * @param {Object} props
 */

const CountUpNumber = props => {
  const {
    start,
    end,
    suffix,
    prefix,
    label,
    textColor,
    labelColor,
    className,
    visibilitySensorProps,
    wrapperProps,
    countWrapperProps,
    countNumberProps,
    labelProps
  } = props,
        rest = _objectWithoutProperties(props, ["start", "end", "suffix", "prefix", "label", "textColor", "labelColor", "className", "visibilitySensorProps", "wrapperProps", "countWrapperProps", "countNumberProps", "labelProps"]);

  const [viewPortEntered, setViewPortEntered] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const setViewPortVisibility = isVisible => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()('countup-number', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    onChange: isVisible => setViewPortVisibility(isVisible),
    delayedCall: true
  }, visibilitySensorProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("div", _extends({
    className: "countup-number__wrapper"
  }, wrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], _extends({
    variant: "h4",
    gutterBottom: true,
    align: "center",
    color: textColor || 'textPrimary',
    className: "countup-number__count-wrapper"
  }, countWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    delay: 1,
    redraw: false,
    end: viewPortEntered ? end : start,
    start: start,
    suffix: suffix || '',
    prefix: prefix || '',
    className: "countup-number__count"
  }, countNumberProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], _extends({
    variant: "subtitle1",
    color: labelColor || 'textSecondary',
    align: "center",
    className: "countup-number__label"
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), label))));
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  countNumberProps: {},
  labelProps: {}
};
CountUpNumber.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The Suffix of the count up number
   */
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The Prefix of the count up number
   */
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The label text of the count up number
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * Starting number
   */
  start: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * End number
   */
  end: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,

  /**
   * Text color
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Label color
   */
  labelColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Additional properties to pass to the VisibilitySensor Component
   */
  visibilitySensorProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the wrapper div
   */
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the count wrapper Typography component
   */
  countWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the CountUp React component
   */
  countNumberProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CountUpNumber);

/***/ }),

/***/ "./src/components/molecules/CountUpNumber/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/CountUpNumber/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountUpNumber */ "./src/components/molecules/CountUpNumber/CountUpNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CountUpNumber__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/DescriptionCta/DescriptionCta.js":
/*!*******************************************************************!*\
  !*** ./src/components/molecules/DescriptionCta/DescriptionCta.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\DescriptionCta\\DescriptionCta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component to display the description with CTA's
 *
 * @param {Object} props
 */

const DescriptionCta = props => {
  const {
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    align,
    className,
    wrapperProps,
    titleProps,
    subtitleProps,
    buttonGroupProps,
    primaryButtonWrapperProps,
    secondaryButtonWrapperProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "primaryCta", "secondaryCta", "align", "className", "wrapperProps", "titleProps", "subtitleProps", "buttonGroupProps", "primaryButtonWrapperProps", "secondaryButtonWrapperProps"]);

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isSm = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = isSm ? 'flex-end' : 'flex-start';
  } else if (align === 'right') {
    justifyGrid = isSm ? 'flex-start' : 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2,
    justify: "space-between",
    alignItems: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-cta', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: "description-cta__wrapper"
  }, wrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h5",
    align: align,
    gutterBottom: true,
    className: "description-cta__title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), title), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary",
    className: "description-cta__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), subtitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    justify: justifyGrid,
    spacing: 1,
    className: "description-cta__button-group"
  }, buttonGroupProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: "description-cta__primary-button-wrapper"
  }, primaryButtonWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), primaryCta), secondaryCta && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    item: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-cta__secondary-button-wrapper')
  }, secondaryButtonWrapperProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), secondaryCta))));
};

DescriptionCta.defaultProps = {
  align: 'center',
  wrapperProps: {},
  titleProps: {},
  subtitleProps: {},
  buttonGroupProps: {},
  primaryButtonWrapperProps: {},
  secondaryButtonWrapperProps: {}
};
DescriptionCta.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the list
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Subtitle of the list
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Primary CTA of the list
   */
  primaryCta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Secondary CTA of the list
   */
  secondaryCta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional properties to pass to the wrapper Grid item components
   */
  wrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the title Typography components
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography components
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the button group div container
   */
  buttonGroupProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the primary button wrapper div container
   */
  primaryButtonWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the secondary button wrapper div container
   */
  secondaryButtonWrapperProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DescriptionCta);

/***/ }),

/***/ "./src/components/molecules/DescriptionCta/index.js":
/*!**********************************************************!*\
  !*** ./src/components/molecules/DescriptionCta/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DescriptionCta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DescriptionCta */ "./src/components/molecules/DescriptionCta/DescriptionCta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DescriptionCta__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/IconAlternate/IconAlternate.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/IconAlternate/IconAlternate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\IconAlternate\\IconAlternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  extraSmall: {
    width: 20,
    height: 20
  },
  small: {
    width: 50,
    height: 50
  },
  medium: {
    width: 70,
    height: 70
  },
  large: {
    width: 90,
    height: 90
  },
  circle: {
    borderRadius: '100%'
  },
  square: {
    borderRadius: theme.spacing(2)
  }
}));
/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */

const IconAlternate = props => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["iconProps", "fontIconClass", "size", "color", "shape", "className"]);

  const classes = useStyles();
  const useBackgroundStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    background: {
      background: color[50]
    }
  }));
  const backgroundClasses = useBackgroundStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('icon-alternate', classes[size], classes[shape], backgroundClasses.background, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], _extends({
    size: size,
    fontIconClass: fontIconClass,
    fontIconColor: color[500],
    className: "icon-alternate__icon"
  }, iconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  })));
};

IconAlternate.defaultProps = {
  size: 'medium',
  shape: 'square',
  iconProps: {}
};
IconAlternate.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Sizes of the icon
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]),

  /**
   * The shape of the alternate icon
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['circle', 'square']),

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (IconAlternate);

/***/ }),

/***/ "./src/components/molecules/IconAlternate/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/IconAlternate/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconAlternate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconAlternate */ "./src/components/molecules/IconAlternate/IconAlternate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconAlternate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/OverlapedImages/OverlapedImages.js":
/*!*********************************************************************!*\
  !*** ./src/components/molecules/OverlapedImages/OverlapedImages.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\OverlapedImages\\OverlapedImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  imageGrid: {
    padding: '.25rem',
    width: '150%',
    boxShadow: '0 1.5rem 4rem rgba(22,28,45,.1)',
    background: theme.palette.background.paper,
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      verticalAlign: 'middle',
      borderStyle: 'none'
    }
  },
  imageGridFirstItem: {
    marginTop: '4rem'
  },
  imageGridLastItem: {
    marginTop: '6rem',
    float: 'right'
  }
}));
/**
 * Component to display the overlaped images
 *
 * @param {Object} props
 */

const OverlapedImages = props => {
  const {
    image1,
    image2,
    image3,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["image1", "image2", "image3", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridFirstItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image1.src,
    srcSet: image1.srcset,
    alt: image1.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image2.src,
    srcSet: image2.srcset,
    alt: image2.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridLastItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: image3.src,
    srcSet: image3.srcset,
    alt: image3.alt,
    className: "overlaped-images__item-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }))));
};

OverlapedImages.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image2: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Image item - Object of src, srcset and alt properties
   */
  image3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OverlapedImages);

/***/ }),

/***/ "./src/components/molecules/OverlapedImages/index.js":
/*!***********************************************************!*\
  !*** ./src/components/molecules/OverlapedImages/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverlapedImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverlapedImages */ "./src/components/molecules/OverlapedImages/OverlapedImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OverlapedImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SectionHeader/SectionHeader.js":
/*!*****************************************************************!*\
  !*** ./src/components/molecules/SectionHeader/SectionHeader.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\SectionHeader\\SectionHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  },
  disableGutter: {
    marginBottom: 0
  },
  title: {
    fontWeight: 'bold'
  },
  cta: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: theme.spacing(0)
    }
  }
}));
/**
 * Component to display the section headers
 *
 * @param {Object} props
 */

const SectionHeader = props => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    subtitleColor,
    label,
    overline,
    fadeUp,
    align,
    ctaGroup,
    disableGutter,
    titleClasses,
    className,
    labelProps,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "titleVariant", "subtitleVariant", "subtitle", "subtitleColor", "label", "overline", "fadeUp", "align", "ctaGroup", "disableGutter", "titleClasses", "className", "labelProps", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2,
    "data-aos": fadeUp ? 'fade-up' : '',
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-header', classes.root, disableGutter ? classes.disableGutter : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), overline && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "section-header__overline-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, overline), label && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__label-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "overline",
    color: "primary",
    component: "p",
    align: align || 'center'
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), label)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: titleVariant,
    align: align || 'center',
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-header__title', classes.title, titleClasses ? titleClasses : {}),
    color: "textPrimary"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__subtitle-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: subtitleVariant || 'h6',
    align: align || 'center',
    color: subtitleColor || 'textSecondary',
    className: "section-header__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }), subtitle)), ctaGroup && ctaGroup.length && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__cta-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: justifyGrid,
    alignItems: "center",
    wrap: "nowrap",
    className: "section-header__cta-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, ctaGroup.map((item, index) => __jsx("div", {
    key: index,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-header__cta-item-wrapper', classes.cta),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, item)))));
};

SectionHeader.defaultProps = {
  titleVariant: 'h4',
  labelProps: {},
  titleProps: {},
  subtitleProps: {}
};
SectionHeader.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the section header
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]).isRequired,

  /**
   * Subtitle of the section header
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),

  /**
   * Label title of the section header
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The overline component in the section header
   */
  overline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Array of the CTAs
   */
  ctaGroup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node),

  /**
   * Whether to fade up on scroll
   */
  fadeUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['right', 'left', 'center']),

  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Styles classes to be attached to the title from the parent component
   */
  titleClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title variant
   */
  titleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

  /**
   * SubTitle variant
   */
  subtitleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * SubTitle color
   */
  subtitleColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['textPrimary', 'textSecondary', 'primary', 'secondary']),

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SectionHeader);

/***/ }),

/***/ "./src/components/molecules/SectionHeader/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/SectionHeader/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/molecules/SectionHeader/SectionHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SwiperImage/SwiperImage.js":
/*!*************************************************************!*\
  !*** ./src/components/molecules/SwiperImage/SwiperImage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\SwiperImage\\SwiperImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 'auto'
  },
  swiperSlide: {
    width: 'auto'
  },
  swiperNav: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 88,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 4,
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(3),
      height: theme.spacing(3),
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      position: 'relative',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper
      }
    },
    '& .swiper-button-prev': {
      left: 0
    },
    '& .swiper-button-next': {
      right: 0
    }
  },
  image: {
    objectFit: 'cover'
  }
}));
/**
 * Component to display the image swiper
 *
 * @param {Object} props
 */

const SwiperImage = props => {
  const {
    items,
    navigationButtonStyle,
    imageClassName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["items", "navigationButtonStyle", "imageClassName", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    new swiper__WEBPACK_IMPORTED_MODULE_4___default.a('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev'
      }
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-container', 'swiper-image', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "swiper-image__wrapper, swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, items.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__slide', 'swiper-slide', classes.swiperSlide),
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: item.src,
    alt: item.alt,
    srcSet: item.srcSet,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__item', classes.image, imageClassName ? imageClassName : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation', classes.swiperNav),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation-button', 'swiper-image__navigation-button--prev', 'swiper-button-prev', navigationButtonStyle || {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-image__navigation-button', 'swiper-image__navigation-button--next', 'swiper-button-next', navigationButtonStyle || {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })));
};

SwiperImage.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * External classes for the images
   */
  imageClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The array of images object which should consist of src, alt and srcset attributes
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,

  /**
   * Styles classes of the navigation button
   */
  navigationButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SwiperImage);

/***/ }),

/***/ "./src/components/molecules/SwiperImage/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/SwiperImage/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwiperImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwiperImage */ "./src/components/molecules/SwiperImage/SwiperImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SwiperImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/SwiperNumber/SwiperNumber.js":
/*!***************************************************************!*\
  !*** ./src/components/molecules/SwiperNumber/SwiperNumber.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\SwiperNumber\\SwiperNumber.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  swiperSlide: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6)
    }
  },
  number: {
    fontWeight: 900
  }
}));
/**
 * Component to display the number swiper
 *
 * @param {Object} props
 */

const SwiperNumber = props => {
  const {
    items,
    className,
    numberProps,
    labelProps
  } = props,
        rest = _objectWithoutProperties(props, ["items", "className", "numberProps", "labelProps"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    new swiper__WEBPACK_IMPORTED_MODULE_5___default.a('.swiper-container', {
      slidesPerView: isMd ? 4 : 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number', 'swiper-container', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "swiper-number__wrapper swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, items.map((item, index) => __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number__item', classes.swiperSlide, 'swiper-slide'),
    key: index,
    style: {
      width: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    className: "swiper-number__item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__number-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h3",
    align: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('swiper-number__number', classes.number)
  }, numberProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), item.number)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__label-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    align: "center",
    className: "swiper-number__label"
  }, labelProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), item.title)))))), __jsx("div", {
    className: "swiper-number__pagination swiper-pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }));
};

SwiperNumber.defaultProps = {
  numberProps: {},
  labelProps: {}
};
SwiperNumber.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The array of numbers object which should consist of number and title
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,

  /**
   * The additional properties to pass to the number Typography component
   */
  numberProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * The additional properties to pass to the label Typography component
   */
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SwiperNumber);

/***/ }),

/***/ "./src/components/molecules/SwiperNumber/index.js":
/*!********************************************************!*\
  !*** ./src/components/molecules/SwiperNumber/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwiperNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwiperNumber */ "./src/components/molecules/SwiperNumber/SwiperNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SwiperNumber__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/TypedText/TypedText.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/TypedText/TypedText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\molecules\\TypedText\\TypedText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component to display the typed animated texts
 *
 * @param {Object} props
 */

const TypedText = props => {
  const {
    className,
    typedProps
  } = props,
        rest = _objectWithoutProperties(props, ["className", "typedProps"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('typed-text', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(react_typed__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    className: "typed-text__item"
  }, typedProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  })));
};

TypedText.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TypedText);

/***/ }),

/***/ "./src/components/molecules/TypedText/index.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/TypedText/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypedText */ "./src/components/molecules/TypedText/TypedText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TypedText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/molecules/index.js":
/*!*******************************************!*\
  !*** ./src/components/molecules/index.js ***!
  \*******************************************/
/*! exports provided: SectionHeader, IconAlternate, SwiperImage, DescriptionCta, CountUpNumber, OverlapedImages, SwiperNumber, TypedText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionHeader */ "./src/components/molecules/SectionHeader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionHeader", function() { return _SectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _IconAlternate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconAlternate */ "./src/components/molecules/IconAlternate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconAlternate", function() { return _IconAlternate__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwiperImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwiperImage */ "./src/components/molecules/SwiperImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperImage", function() { return _SwiperImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DescriptionCta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DescriptionCta */ "./src/components/molecules/DescriptionCta/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionCta", function() { return _DescriptionCta__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountUpNumber */ "./src/components/molecules/CountUpNumber/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountUpNumber", function() { return _CountUpNumber__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _OverlapedImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverlapedImages */ "./src/components/molecules/OverlapedImages/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlapedImages", function() { return _OverlapedImages__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SwiperNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwiperNumber */ "./src/components/molecules/SwiperNumber/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperNumber", function() { return _SwiperNumber__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TypedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TypedText */ "./src/components/molecules/TypedText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypedText", function() { return _TypedText__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/components/organisms/Accordion/Accordion.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/Accordion/Accordion.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\Accordion\\Accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark
  },
  listItem: {
    cursor: 'pointer'
  }
}));
/**
 * Component to display accordion view
 *
 * @param {*} props
 */

const Accordion = props => {
  const {
    items,
    className,
    titleProps,
    subtitleProps,
    textProps,
    linkProps
  } = props,
        rest = _objectWithoutProperties(props, ["items", "className", "titleProps", "subtitleProps", "textProps", "linkProps"]);

  const classes = useStyles();
  return __jsx("div", _extends({}, rest, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('accordion', classes.root, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), items.map(item => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('accordion__item-wrapper', classes.listItem),
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }),
    "aria-controls": `${item.id}-content`,
    id: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 0,
    className: "accorion__item-text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accorion__item-title-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    color: "textPrimary",
    className: "accorion_item-title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), item.title)), item.subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accorion_item-subtitle-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "accorion_item-subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }), item.subtitle)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionDetails"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "accordion__collapsable-text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-text-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body1",
    color: "textPrimary",
    className: "accordion__collapsable-text"
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), item.text)), item.link && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-link-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["LearnMoreLink"], _extends({
    title: item.link,
    variant: "body1",
    className: "accordion__collapsable-link"
  }, linkProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }))))))));
};

Accordion.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
  linkProps: {}
};
Accordion.propTypes = {
  /**
   * Classname from the parent component
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Items to show inside the accordion
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the text Typography component
   */
  textProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional properties to pass to the link component
   */
  linkProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/organisms/Accordion/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/Accordion/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/components/organisms/Accordion/Accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardBase/CardBase.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/CardBase/CardBase.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardBase\\CardBase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`
  },
  noShadow: {
    boxShadow: 'none'
  },
  noBorder: {
    border: 0
  },
  noBg: {
    background: 'transparent'
  },
  liftUp: {
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow: '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3)
      }
    }
  },
  left: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end'
  },
  center: {
    alignItems: 'center'
  }
}));
/**
 * Component to display the basic card
 *
 * @param {Object} props
 */

const CardBase = props => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps
  } = props,
        rest = _objectWithoutProperties(props, ["withShadow", "noShadow", "noBorder", "noBg", "liftUp", "children", "align", "className", "cardContentProps"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-base', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-base__content', classes.content, classes[align])
  }, cardContentProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), children));
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {}
};
CardBase.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The children content of the basic card
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Whether to show custom shadow
   */
  withShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to render the card without shadow
   */
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to hide the card borders
   */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to show transparent background
   */
  noBg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to lift up on hover
   */
  liftUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardBase);

/***/ }),

/***/ "./src/components/organisms/CardBase/index.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/CardBase/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardBase */ "./src/components/organisms/CardBase/CardBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardCategory/CardCategory.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/CardCategory/CardCategory.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardCategory\\CardCategory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
}));
/**
 * Component to display the category card
 *
 * @param {Object} props
 */

const CardCategory = props => {
  const {
    icon,
    title,
    align,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["icon", "title", "align", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["DescriptionListIcon"], {
    icon: icon,
    title: title,
    align: align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

CardCategory.defaultProps = {
  align: 'center'
};
CardCategory.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Icon to show inside the category card
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Category title to show inside the category card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center'])
};
/* harmony default export */ __webpack_exports__["default"] = (CardCategory);

/***/ }),

/***/ "./src/components/organisms/CardCategory/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/CardCategory/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCategory */ "./src/components/organisms/CardCategory/CardCategory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardCategory__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardCategoryLink/CardCategoryLink.js":
/*!***********************************************************************!*\
  !*** ./src/components/organisms/CardCategoryLink/CardCategoryLink.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRightAlt */ "@material-ui/icons/ArrowRightAlt");
/* harmony import */ var _material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardCategoryLink\\CardCategoryLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  fontWeight700: {
    fontWeight: 700
  },
  categoryIconButton: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'
  }
}));
/**
 * Component to display the category link card
 *
 * @param {Object} props
 */

const CardCategoryLink = props => {
  const {
    fontIconClass,
    color,
    title,
    subtitle,
    href,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["fontIconClass", "color", "title", "subtitle", "href", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_7__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-category-link', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-category-link__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_6__["IconAlternate"], _extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium"
  }, iconAlternateProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    align: align,
    className: classes.fontWeight700
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), subtitle))), __jsx("a", {
    href: href,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-category-link__item', classes.categoryIconButton),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    className: "card-category-link__icon-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "card-category-link__icon",
    style: {
      color: color[500]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  })))));
};

CardCategoryLink.defaultProps = {
  align: 'left',
  href: '#',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {}
};
CardCategoryLink.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo title to show inside the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo subtitle to show inside the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo description to show inside the card
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo icon color to show inside the card
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]).isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardCategoryLink);

/***/ }),

/***/ "./src/components/organisms/CardCategoryLink/index.js":
/*!************************************************************!*\
  !*** ./src/components/organisms/CardCategoryLink/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardCategoryLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCategoryLink */ "./src/components/organisms/CardCategoryLink/CardCategoryLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardCategoryLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJob/CardJob.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/CardJob/CardJob.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardJob\\CardJob.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  jobTitle: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardJob = props => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    jobDate,
    companyLogo,
    companyName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "jobDate", "companyLogo", "companyName", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-job', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotBig),
    style: {
      background: badgeColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "body2",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, badgeTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.jobTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, jobTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, jobLocation), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, jobType))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    src: companyLogo,
    alt: companyName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    primary: companyName,
    secondary: jobDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  })));
};

CardJob.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Badge color of the job card
   */
  badgeColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Badge title of the job card
   */
  badgeTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job type of the card
   */
  jobType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJob);

/***/ }),

/***/ "./src/components/organisms/CardJob/index.js":
/*!***************************************************!*\
  !*** ./src/components/organisms/CardJob/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJob */ "./src/components/organisms/CardJob/CardJob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJob__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobCompany/CardJobCompany.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/CardJobCompany/CardJobCompany.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardJobCompany\\CardJobCompany.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  companyAvatar: {
    width: 60,
    height: 60
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  companyName: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  }
}));
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

const CardJobCompany = props => {
  const {
    jobTitle,
    jobLocation,
    companyLogo,
    companyName,
    jobsCount,
    companyInfo,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["jobTitle", "jobLocation", "companyLogo", "companyName", "jobsCount", "companyInfo", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-company', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
    src: companyLogo,
    alt: companyName,
    className: classes.companyAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.companyName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, companyName)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, jobTitle), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, jobLocation)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["LearnMoreLink"], {
    title: jobsCount,
    variant: "subtitle1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "p",
    variant: "body2",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, companyInfo))));
};

CardJobCompany.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company logo of the card
   */
  companyLogo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company name of the card
   */
  companyName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Count of the jobs in the the card
   */
  jobsCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Company info in the card
   */
  companyInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobCompany);

/***/ }),

/***/ "./src/components/organisms/CardJobCompany/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/CardJobCompany/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobCompany__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobCompany */ "./src/components/organisms/CardJobCompany/CardJobCompany.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobCompany__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobMinimal/CardJobMinimal.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/CardJobMinimal/CardJobMinimal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardJobMinimal\\CardJobMinimal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `solid 1px rgba(43, 41, 45, 0.2)`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    background: 'transparent',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    '&:hover': {
      background: theme.palette.primary.main,
      boxShadow: '0 11px 55px 10px rgba(0, 0, 0, 0.07), 0 13px 18px -8px rgba(0, 0, 0, 0.15)',
      '& .card-job-minimal__title, & .card-job-minimal__location, & .card-job-minimal__arrow': {
        color: 'white !important'
      }
    }
  },
  cardJobMinimalBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginRight: theme.spacing(8)
    }
  },
  title: {
    fontWeight: 'bold'
  }
}));
/**
 * Component to display the job card company
 *
 * @param {Object} props
 */

const CardJobMinimal = props => {
  const {
    title,
    subtitle,
    showArrow,
    titleProps,
    subtitleProps,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "showArrow", "titleProps", "subtitleProps", "className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, 'card-job-minimal')
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardJobMinimalBody, 'card-job-minimal__body'),
    style: !showArrow ? {
      marginRight: 0
    } : {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card-job-minimal__title-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.title, 'card-job-minimal__title')
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), title)), __jsx("div", {
    className: "card-job-minimal__location-conatiner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "body2",
    color: "textSecondary",
    className: "card-job-minimal__location"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), subtitle))), showArrow ? __jsx("div", {
    className: "card-job-minimal__arrow-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    fontIconClass: "fas fa-angle-right",
    fontIconColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey[700],
    className: "card-job-minimal__arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })) : null);
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {}
};
CardJobMinimal.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Job title of the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job subtitle of the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Should show arrow or not
   */
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobMinimal);

/***/ }),

/***/ "./src/components/organisms/CardJobMinimal/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/CardJobMinimal/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobMinimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobMinimal */ "./src/components/organisms/CardJobMinimal/CardJobMinimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobMinimal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardJobTag/CardJobTag.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/CardJobTag/CardJobTag.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardJobTag\\CardJobTag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '&:hover': {
      borderRight: `${theme.spacing(1)}px solid ${_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red[500]}`
    }
  },
  dot: {
    display: 'inline-block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    background: theme.palette.text.primary,
    borderRadius: '100%',
    marginRight: theme.spacing(1)
  },
  dotBig: {
    width: theme.spacing(2),
    height: theme.spacing(2)
  },
  dotSmall: {
    width: theme.spacing(1 / 2),
    height: theme.spacing(1 / 2)
  },
  jobTitle: {
    fontWeight: 700
  },
  dotMargin: {
    margin: theme.spacing(0, 1)
  },
  tag: {
    display: 'inline-block',
    padding: theme.spacing(1 / 2),
    borderRadius: theme.spacing(1 / 2),
    border: '1px solid'
  },
  textWhite: {
    color: 'white'
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardJobTag = props => {
  const {
    badgeColor,
    badgeTitle,
    jobTitle,
    jobLocation,
    jobType,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "className"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: classes.tag,
    style: {
      background: badgeColor,
      borderColor: badgeColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "body2",
    className: classes.textWhite,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, badgeTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    className: classes.jobTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, jobTitle))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, jobLocation), __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.dot, classes.dotSmall, classes.dotMargin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, jobType)))));
};

CardJobTag.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Badge color of the job card
   */
  badgeColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Badge title of the job card
   */
  badgeTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job title of the card
   */
  jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job location of the card
   */
  jobLocation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Job type of the card
   */
  jobType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardJobTag);

/***/ }),

/***/ "./src/components/organisms/CardJobTag/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/CardJobTag/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardJobTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardJobTag */ "./src/components/organisms/CardJobTag/CardJobTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardJobTag__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardPricingStandard/CardPricingStandard.js":
/*!*****************************************************************************!*\
  !*** ./src/components/organisms/CardPricingStandard/CardPricingStandard.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardPricingStandard\\CardPricingStandard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  featureCheck: {
    marginRight: theme.spacing(1)
  }
}));
/**
 * Component to display the job card
 *
 * @param {Object} props
 */

const CardPricingStandard = props => {
  const {
    title,
    subtitle,
    priceComponent,
    featureCheckComponent,
    features,
    cta,
    disclaimer,
    className,
    titleProps,
    subtitleProps,
    disclaimerProps,
    featureTitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "priceComponent", "featureCheckComponent", "features", "cta", "disclaimer", "className", "titleProps", "subtitleProps", "disclaimerProps", "featureTitleProps"]);

  const classes = useStyles();
  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-pricing-standard', classes.root, className),
    align: "left"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-pricing-standard__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__headline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h5",
    gutterBottom: true,
    className: "card-pricing-standard__title"
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), title), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "card-pricing-standard__subtitle"
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), subtitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__divider-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    className: "card-pricing-standard__divider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, priceComponent), features && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__feature-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    className: "card-pricing-standard__feature-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, features.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    key: index,
    disableGutters: true,
    className: "card-pricing-standard__feature-list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, featureCheckComponent && __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-pricing-standard__feature-check', classes.featureCheck),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, featureCheckComponent), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    noWrap: true,
    className: "card-pricing-standard__feature-title"
  }, featureTitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }), item))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__cta-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, cta), disclaimer && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__disclaimer-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "caption",
    component: "p",
    align: "center",
    className: "card-pricing-standard__disclaimer-title"
  }, disclaimerProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), disclaimer))));
};

CardPricingStandard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {}
};
CardPricingStandard.propTypes = {
  /**
   *  External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Title of the pricing card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   *  Subtitle of the pricing card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The pricing component of the pricing card
   */
  priceComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * The features check component of the pricing card
   */
  featureCheckComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Features array of the pricing card
   */
  features: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   *  CTA button of the pricing card
   */
  cta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Diclaimer of the pricing card
   */
  disclaimer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the disclaimer Typography component
   */
  disclaimerProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the feature title Typography component
   */
  featureTitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardPricingStandard);

/***/ }),

/***/ "./src/components/organisms/CardPricingStandard/index.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/CardPricingStandard/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPricingStandard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPricingStandard */ "./src/components/organisms/CardPricingStandard/CardPricingStandard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardPricingStandard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardProduct/CardProduct.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/CardProduct/CardProduct.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardProduct\\CardProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`
  },
  noShadow: {
    boxShadow: 'none'
  },
  noBorder: {
    border: 0
  },
  noBg: {
    background: 'transparent'
  },
  liftUp: {
    transition: 'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow: '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)'
    }
  },
  media: {
    position: 'relative',
    height: 300
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3)
      }
    }
  },
  left: {
    alignItems: 'flex-start'
  },
  right: {
    alignItems: 'flex-end'
  },
  center: {
    alignItems: 'center'
  }
}));
/**
 * Component to display the product card
 *
 * @param {Object} props
 */

const CardProduct = props => {
  const {
    mediaClassName,
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    cardContent,
    mediaContent,
    align,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["mediaClassName", "withShadow", "noShadow", "noBorder", "noBg", "liftUp", "cardContent", "mediaContent", "align", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product__media', classes.media, mediaClassName),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, mediaContent), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-product__content', classes.content, classes[align]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, cardContent));
};

CardProduct.defaultProps = {
  align: 'left'
};
CardProduct.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * External classes for the media
   */
  mediaClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Whether to show custom shadow
   */
  withShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to render the card without shadow
   */
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to hide the card borders
   */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to show transparent background
   */
  noBg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Whether to lift up on hover
   */
  liftUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The Card content
   */
  cardContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,

  /**
   * The Card Media content
   */
  mediaContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center'])
};
/* harmony default export */ __webpack_exports__["default"] = (CardProduct);

/***/ }),

/***/ "./src/components/organisms/CardProduct/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/CardProduct/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardProduct */ "./src/components/organisms/CardProduct/CardProduct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardProduct__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardPromo/CardPromo.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/CardPromo/CardPromo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardPromo\\CardPromo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  fontWeight700: {
    fontWeight: 700
  }
}));
/**
 * Component to display the promo card
 *
 * @param {Object} props
 */

const CardPromo = props => {
  const {
    titleColor,
    fontIconClass,
    color,
    title,
    subtitle,
    description,
    align,
    className,
    iconAlternateProps,
    titleProps,
    subtitleProps,
    descriptionProps
  } = props,
        rest = _objectWithoutProperties(props, ["titleColor", "fontIconClass", "color", "title", "subtitle", "description", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps", "descriptionProps"]);

  const classes = useStyles();
  let justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_6__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card__promo', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-promo__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "card-promo__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["IconAlternate"], _extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium",
    className: "card-promo__icon"
  }, iconAlternateProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h4",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-promo__title', classes.fontWeight700),
    color: titleColor || 'textPrimary'
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__subtitle-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "h6",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-promo__subtitle', classes.fontWeight700)
  }, subtitleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), subtitle)), description && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__description-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: "subtitle1",
    color: "textSecondary",
    align: align,
    className: "card-promo__description"
  }, descriptionProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), description))));
};

CardPromo.defaultProps = {
  align: 'left',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {},
  descriptionProps: {}
};
CardPromo.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo title to show inside the card
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Promo subtitle to show inside the card
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo description to show inside the card
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo font icon class name to show inside the card
   */
  fontIconClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Promo icon color to show inside the card
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].pink, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].purple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepPurple, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightBlue, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].cyan, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].teal, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].green, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lightGreen, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].lime, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].yellow, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].amber, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].orange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].deepOrange, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].brown, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].grey, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].blueGrey]).isRequired,

  /**
   * The content alignment
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Title color
   */
  titleColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the IconAlternate component
   */
  iconAlternateProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the desciption Typography component
   */
  descriptionProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardPromo);

/***/ }),

/***/ "./src/components/organisms/CardPromo/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/CardPromo/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardPromo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPromo */ "./src/components/organisms/CardPromo/CardPromo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardPromo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/CardReview/CardReview.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/CardReview/CardReview.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\CardReview\\CardReview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  }
}));
/**
 * Component to display the review card
 *
 * @param {Object} props
 */

const CardReview = props => {
  const {
    icon,
    text,
    authorPhoto,
    authorName,
    authorTitle,
    align,
    textVariant,
    className,
    textProps,
    listItemPrimaryTypographyProps,
    listItemSecondaryTypographyProps
  } = props,
        rest = _objectWithoutProperties(props, ["icon", "text", "authorPhoto", "authorName", "authorTitle", "align", "textVariant", "className", "textProps", "listItemPrimaryTypographyProps", "listItemSecondaryTypographyProps"]);

  const classes = useStyles();
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["CardBase"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('card-review', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 2,
    className: "card-review__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "card-review__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__text-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: textVariant,
    align: align,
    component: "p"
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), text)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__lits-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: justifyGrid,
    className: "card-review__list-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    disablePadding: true,
    className: "card-review__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: "card-review__list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemAvatar"], {
    className: "card-review__list-item-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], _extends({}, authorPhoto, {
    alt: authorName,
    className: "card-review__avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    className: "card-review__list-item-text",
    primary: authorName,
    secondary: authorTitle,
    primaryTypographyProps: _objectSpread({}, listItemPrimaryTypographyProps),
    secondaryTypographyProps: _objectSpread({}, listItemSecondaryTypographyProps),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })))))));
};

CardReview.defaultProps = {
  align: 'center',
  textVariant: 'h6',
  textProps: {},
  listItemPrimaryTypographyProps: {},
  listItemSecondaryTypographyProps: {}
};
CardReview.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Icon to show inside the review card
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Review text to show inside the review card
   */
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Reviewer photo to show inside the review card.Should be an object with src and srcSet properties
   */
  authorPhoto: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,

  /**
   * Reviewer name to show inside the review card
   */
  authorName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Reviewer title to show inside the review card
   */
  authorTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Alignment of the content
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Review text variant
   */
  textVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the text Typography component
   */
  textProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the list item primary text Typography component
   */
  listItemPrimaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the list item secondary text Typography component
   */
  listItemSecondaryTypographyProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CardReview);

/***/ }),

/***/ "./src/components/organisms/CardReview/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/CardReview/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardReview */ "./src/components/organisms/CardReview/CardReview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CardReview__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/ContactForm/ContactForm.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/ContactForm/ContactForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validate.js */ "validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\ContactForm\\ContactForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: '100%'
  }
}));
const schema = {
  fullname: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    length: {
      maximum: 128
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    email: true,
    length: {
      maximum: 300
    }
  },
  message: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    }
  }
};

const ContactForm = () => {
  const classes = useStyles();
  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const errors = validate_js__WEBPACK_IMPORTED_MODULE_3___default()(formState.values, schema);
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => _objectSpread(_objectSpread({}, formState), {}, {
      values: _objectSpread(_objectSpread({}, formState.values), {}, {
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }),
      touched: _objectSpread(_objectSpread({}, formState.touched), {}, {
        [event.target.name]: true
      })
    }));
  };

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("form", {
    name: "contact-form",
    method: "post",
    action: "/submition.html?contact-form-submit-success=true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Contact Us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "textSecondary",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "We carefully read and answer to all our emails.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "Full Name",
    label: "Full Name *",
    variant: "outlined",
    size: "medium",
    name: "fullname",
    fullWidth: true,
    helperText: hasError('fullname') ? formState.errors.fullname[0] : null,
    error: hasError('fullname'),
    onChange: handleChange,
    type: "text",
    value: formState.values.fullname || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "E-mail",
    label: "E-mail *",
    variant: "outlined",
    size: "medium",
    name: "email",
    fullWidth: true,
    helperText: hasError('email') ? formState.errors.email[0] : null,
    error: hasError('email'),
    onChange: handleChange,
    type: "email",
    value: formState.values.email || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    placeholder: "Message",
    label: "Message *",
    variant: "outlined",
    name: "message",
    fullWidth: true,
    helperText: hasError('message') ? formState.errors.message[0] : null,
    error: hasError('message'),
    onChange: handleChange,
    multiline: true,
    rows: 4,
    value: formState.values.message || '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle2",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "Fields that are marked with * sign are required."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "large",
    variant: "contained",
    type: "submit",
    color: "primary",
    disabled: !formState.isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Send")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./src/components/organisms/ContactForm/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/ContactForm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm */ "./src/components/organisms/ContactForm/ContactForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ContactForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js":
/*!*****************************************************************************!*\
  !*** ./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\DescriptionListIcon\\DescriptionListIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  title: {
    fontWeight: 700
  }
}));
/**
 * Component to display the description list with icon
 *
 * @param {Object} props
 */

const DescriptionListIcon = props => {
  const {
    title,
    subtitle,
    icon,
    align,
    titleVariant,
    subtitleVariant,
    className,
    titleProps,
    subtitleProps
  } = props,
        rest = _objectWithoutProperties(props, ["title", "subtitle", "icon", "align", "titleVariant", "subtitleVariant", "className", "titleProps", "subtitleProps"]);

  const classes = useStyles();
  let gridJustify = 'center';

  if (align === 'left') {
    gridJustify = 'flex-start';
  } else if (align === 'right') {
    gridJustify = 'flex-end';
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    spacing: 2
  }, rest, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('description-list-icon', className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    justify: gridJustify,
    xs: 12,
    className: "description-list-icon__icon-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], _extends({
    variant: titleVariant,
    color: "textPrimary",
    align: align,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.title, 'description-list-icon__title')
  }, titleProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), title)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__subtitle-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: subtitleVariant,
    color: "textSecondary",
    align: align,
    className: "description-list-icon__subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, subtitle)));
};

DescriptionListIcon.defaultProps = {
  align: 'center',
  titleVariant: 'h6',
  subtitleVariant: 'body1',
  titleProps: {},
  subtitleProps: {}
};
DescriptionListIcon.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The title
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * the subtitle
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Whether should show the alternate icon
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * The alignment of the items
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right', 'center']),

  /**
   * Title variant
   */
  titleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Subtitle variant
   */
  subtitleVariant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Additional props to pass to the title Typography component
   */
  titleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Additional props to pass to the subtitle Typography component
   */
  subtitleProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DescriptionListIcon);

/***/ }),

/***/ "./src/components/organisms/DescriptionListIcon/index.js":
/*!***************************************************************!*\
  !*** ./src/components/organisms/DescriptionListIcon/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DescriptionListIcon */ "./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroBackground/HeroBackground.js":
/*!*******************************************************************!*\
  !*** ./src/components/organisms/HeroBackground/HeroBackground.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\HeroBackground\\HeroBackground.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  },
  colorDefault: {
    background: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo[900]
  },
  heroWrapper: {
    zIndex: 2
  },
  heroCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  heroBg: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  noCoverOpacity: {
    opacity: 1
  }
}));
/**
 * Component to display the background hero
 *
 * @param {Object} props
 */

const HeroBackground = props => {
  const {
    children,
    disbaleCoverOpacity,
    backgroundImg,
    backgroundPosition,
    backgroundColor,
    contentSectionClassName,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "disbaleCoverOpacity", "backgroundImg", "backgroundPosition", "backgroundColor", "contentSectionClassName", "className"]);

  const classes = useStyles();
  const useCustomStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    coverBg: {
      backgroundImage: `url(${backgroundImg})`
    },
    backgroundColor: {
      background: backgroundColor
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition
    }
  }));
  const customClasses = useCustomStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background', classes.root, backgroundColor ? customClasses.backgroundColor : classes.colorDefault, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background__wrapper', classes.heroWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(contentSectionClassName ? contentSectionClassName : '', 'hero-background__section'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, children)), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-background__cover', classes.heroBg, classes.heroCover, customClasses.coverBg, backgroundPosition ? customClasses.backgroundPosition : {}, disbaleCoverOpacity ? classes.noCoverOpacity : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
};

HeroBackground.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the hero
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Background image of the hero
   */
  backgroundImg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Background color of the hero
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Background position of the hero
   */
  backgroundPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Custom classes for the content section
   */
  contentSectionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Should disable here cover opacity
   */
  disbaleCoverOpacity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HeroBackground);

/***/ }),

/***/ "./src/components/organisms/HeroBackground/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/HeroBackground/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBackground */ "./src/components/organisms/HeroBackground/HeroBackground.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroBackground__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroShaped/HeroShaped.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/HeroShaped/HeroShaped.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\HeroShaped\\HeroShaped.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  heroLeftSide: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 8)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2)
    }
  },
  heroRightSide: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px'
    }
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
    }
  }
}));
/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */

const HeroShaped = props => {
  const {
    leftSide,
    rightSide,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["leftSide", "rightSide", "className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, 'hero-shaped', className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__wrapper', classes.hero),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__left-side', classes.heroLeftSide),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, leftSide), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__right-side', classes.heroRightSide),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__cover', classes.heroCover),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__image-container', classes.heroImageContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-shaped__image', classes.heroImage),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, rightSide))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }));
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section right side
   */
  rightSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Children to placed inside the section left side
   */
  leftSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeroShaped);

/***/ }),

/***/ "./src/components/organisms/HeroShaped/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/HeroShaped/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroShaped__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroShaped */ "./src/components/organisms/HeroShaped/HeroShaped.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroShaped__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroSideImage/HeroSideImage.js":
/*!*****************************************************************!*\
  !*** ./src/components/organisms/HeroSideImage/HeroSideImage.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\HeroSideImage\\HeroSideImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  imageWrapper: {
    position: 'relative',
    maxHeight: 400
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cover: {
    background: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].indigo[900],
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  content: {
    position: 'absolute',
    padding: theme.spacing(2),
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      transform: 'none',
      padding: theme.spacing(0, 4)
    }
  }
}));
/**
 * Component to display the side image hero
 *
 * @param {Object} props
 */

const HeroSideImage = props => {
  const {
    imageSrc,
    imageSrcSet,
    children,
    backgroundColor,
    reverse,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["imageSrc", "imageSrcSet", "children", "backgroundColor", "reverse", "className"]);

  const classes = useStyles();
  const useCustomStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    coverBg: {
      background: backgroundColor
    }
  }));
  const customClasses = useCustomStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], _extends({
    container: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image', classes.root, className),
    direction: reverse ? 'row-reverse' : 'row'
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__image-wrapper', classes.imageWrapper),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: imageSrc,
    srcSet: imageSrcSet ? imageSrcSet : '',
    alt: '...',
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__image', classes.image),
    lazy: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__cover', classes.cover, backgroundColor ? customClasses.coverBg : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('hero-side-image__content', classes.content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, children));
};

HeroSideImage.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the hero
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Background color of the hero
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Side image
   */
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * Side image srcset
   */
  imageSrcSet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Should show in reverse order
   */
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (HeroSideImage);

/***/ }),

/***/ "./src/components/organisms/HeroSideImage/index.js":
/*!*********************************************************!*\
  !*** ./src/components/organisms/HeroSideImage/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSideImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSideImage */ "./src/components/organisms/HeroSideImage/HeroSideImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroSideImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js":
/*!*******************************************************************************!*\
  !*** ./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\HeroSimpleBackground\\HeroSimpleBackground.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const HeroSimpleBackground = props => {
  const {
    children,
    backgroundSize,
    backgroundImage,
    backgroundPosition,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "backgroundSize", "backgroundImage", "backgroundPosition", "className"]);

  const classes = useStyles();
  const useBackground = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`
    },
    backgroundSize: {
      backgroundSize: backgroundSize
    },
    backgroundPosition: {
      backgroundPosition: backgroundPosition
    }
  }));
  const backgroundClasses = useBackground();
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()('hero-simple-background', classes.root, className, backgroundClasses.backgroundImage, backgroundClasses.backgroundSize, backgroundClasses.backgroundPosition)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    className: "hero-simple-background__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, children));
};

HeroSimpleBackground.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
HeroSimpleBackground.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The main content
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * The background image of the hero
   */
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The background size of the hero
   */
  backgroundSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The background position of the hero
   */
  backgroundPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (HeroSimpleBackground);

/***/ }),

/***/ "./src/components/organisms/HeroSimpleBackground/index.js":
/*!****************************************************************!*\
  !*** ./src/components/organisms/HeroSimpleBackground/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSimpleBackground */ "./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Map/Map.js":
/*!*********************************************!*\
  !*** ./src/components/organisms/Map/Map.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\Map\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  }
}));
/**
 * Component to display the map
 *
 * @param {Object} props
 */

const Map = props => {
  const {
    zoom,
    center,
    pins,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["zoom", "center", "pins", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const L = __webpack_require__(/*! leaflet */ "leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    const markerIcon2x = __webpack_require__(/*! assets/images/leaflet-assets/marker-icon-2x.png */ "./src/assets/images/leaflet-assets/marker-icon-2x.png");

    const markerIcon = __webpack_require__(/*! assets/images/leaflet-assets/marker-icon.png */ "./src/assets/images/leaflet-assets/marker-icon.png");

    const markerShadow = __webpack_require__(/*! assets/images/leaflet-assets/marker-shadow.png */ "./src/assets/images/leaflet-assets/marker-shadow.png");

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: typeof markerIcon2x === 'object' ? markerIcon2x.default : markerIcon2x,
      iconUrl: typeof markerIcon === 'object' ? markerIcon.default : markerIcon,
      shadowUrl: typeof markerShadow === 'object' ? markerShadow.default : markerShadow
    });
  });

  if (true) {
    return null;
  }

  const ReactMap = __webpack_require__(/*! react-leaflet */ "react-leaflet").Map;

  const TileLayer = __webpack_require__(/*! react-leaflet */ "react-leaflet").TileLayer;

  const Marker = __webpack_require__(/*! react-leaflet */ "react-leaflet").Marker;

  return __jsx(ReactMap, _extends({
    zoom: zoom,
    center: center,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('map', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx(TileLayer, {
    className: "map__tile-layer",
    detectRetina: true,
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), pins && pins.length && pins.map((item, i) => __jsx(Marker, {
    className: "map__marker",
    position: [item.location.y, item.location.x],
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })));
};

var maxBounds = [[20.26667, 73.01667] //Southwest
];
Map.defaultProps = {
  zoom: 11,
  center: [0, 0],
  maxBounds: maxBounds
};
Map.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Map zoom
   */
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Map center
   */
  center: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /**
   * data of the locations. Example: [{ location: { x: number, y: number } }]
   */
  pins: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/organisms/Map/index.js":
/*!***********************************************!*\
  !*** ./src/components/organisms/Map/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./src/components/organisms/Map/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Map__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Parallax/Parallax.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/Parallax/Parallax.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\Parallax\\Parallax.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',

    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
}));
/**
 * Component to display the Parallax backgrounds
 *
 * @param {Object} props
 */

const Parallax = props => {
  const {
    backgroundImage,
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["backgroundImage", "children", "className"]);

  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const jarallaxElems = document.querySelectorAll('.jarallax');

    if (!jarallaxElems || jarallaxElems && jarallaxElems.length === 0) {
      return;
    }

    const jarallax = __webpack_require__(/*! jarallax */ "jarallax").jarallax;

    jarallax(jarallaxElems, {
      speed: 0.2
    });
  });
  return __jsx("div", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('jarallax', 'parallax', classes.root, className),
    "data-jarallax": true,
    "data-speed": "0.2"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('jarallax-img', 'parallax__image', classes.image),
    style: {
      backgroundImage: `url(${backgroundImage})`
    },
    alt: "...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), children);
};

Parallax.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * The content
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * The parallax background image
   */
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Parallax);

/***/ }),

/***/ "./src/components/organisms/Parallax/index.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/Parallax/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parallax */ "./src/components/organisms/Parallax/Parallax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Parallax__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/Section/Section.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/Section/Section.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\Section\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8)
    }
  },
  fullWidth: {
    maxWidth: '100%'
  },
  disablePadding: {
    padding: 0
  },
  narrow: {
    maxWidth: 800
  }
}));
/**
 * Component to display the sections
 *
 * @param {Object} props
 */

const Section = props => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "fullWidth", "narrow", "disablePadding", "className"]);

  const classes = useStyles();
  return __jsx("section", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section', classes.root, fullWidth ? classes.fullWidth : {}, narrow ? classes.narrow : {}, disablePadding ? classes.disablePadding : {}, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), children);
};

Section.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Should show narrow sections
   */
  narrow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Should the section be full width
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Should the section render with no padding
   */
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/organisms/Section/index.js":
/*!***************************************************!*\
  !*** ./src/components/organisms/Section/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/components/organisms/Section/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/SectionAlternate/SectionAlternate.js":
/*!***********************************************************************!*\
  !*** ./src/components/organisms/SectionAlternate/SectionAlternate.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\components\\organisms\\SectionAlternate\\SectionAlternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    background: theme.palette.alternate.main
  },
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8)
    }
  },
  innerNarrowed: {
    maxWidth: 800
  }
}));
/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */

const SectionAlternate = props => {
  const {
    children,
    innerNarrowed,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "innerNarrowed", "className"]);

  const classes = useStyles();
  return __jsx("section", _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-alternate', classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('section-alternate__content', classes.inner, innerNarrowed ? classes.innerNarrowed : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, children));
};

SectionAlternate.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Children to placed inside the section
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Should show narrow sections
   */
  innerNarrowed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SectionAlternate);

/***/ }),

/***/ "./src/components/organisms/SectionAlternate/index.js":
/*!************************************************************!*\
  !*** ./src/components/organisms/SectionAlternate/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionAlternate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionAlternate */ "./src/components/organisms/SectionAlternate/SectionAlternate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SectionAlternate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/organisms/index.js":
/*!*******************************************!*\
  !*** ./src/components/organisms/index.js ***!
  \*******************************************/
/*! exports provided: Section, SectionAlternate, DescriptionListIcon, CardBase, CardReview, CardCategory, CardJob, CardJobMinimal, CardJobTag, CardJobCompany, Accordion, HeroShaped, CardProduct, Map, HeroBackground, HeroSideImage, CardPromo, CardCategoryLink, HeroSimpleBackground, CardPricingStandard, Parallax, ContactForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/components/organisms/Section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SectionAlternate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionAlternate */ "./src/components/organisms/SectionAlternate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionAlternate", function() { return _SectionAlternate__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionListIcon */ "./src/components/organisms/DescriptionListIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionListIcon", function() { return _DescriptionListIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardBase */ "./src/components/organisms/CardBase/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardBase", function() { return _CardBase__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _CardReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardReview */ "./src/components/organisms/CardReview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardReview", function() { return _CardReview__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CardCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardCategory */ "./src/components/organisms/CardCategory/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardCategory", function() { return _CardCategory__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CardJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardJob */ "./src/components/organisms/CardJob/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJob", function() { return _CardJob__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CardJobMinimal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardJobMinimal */ "./src/components/organisms/CardJobMinimal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobMinimal", function() { return _CardJobMinimal__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _CardJobTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardJobTag */ "./src/components/organisms/CardJobTag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobTag", function() { return _CardJobTag__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CardJobCompany__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardJobCompany */ "./src/components/organisms/CardJobCompany/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardJobCompany", function() { return _CardJobCompany__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Accordion */ "./src/components/organisms/Accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _HeroShaped__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeroShaped */ "./src/components/organisms/HeroShaped/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroShaped", function() { return _HeroShaped__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _CardProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CardProduct */ "./src/components/organisms/CardProduct/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardProduct", function() { return _CardProduct__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Map */ "./src/components/organisms/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeroBackground */ "./src/components/organisms/HeroBackground/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroBackground", function() { return _HeroBackground__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _HeroSideImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeroSideImage */ "./src/components/organisms/HeroSideImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSideImage", function() { return _HeroSideImage__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _CardPromo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CardPromo */ "./src/components/organisms/CardPromo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardPromo", function() { return _CardPromo__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _CardCategoryLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CardCategoryLink */ "./src/components/organisms/CardCategoryLink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardCategoryLink", function() { return _CardCategoryLink__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HeroSimpleBackground */ "./src/components/organisms/HeroSimpleBackground/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSimpleBackground", function() { return _HeroSimpleBackground__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _CardPricingStandard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CardPricingStandard */ "./src/components/organisms/CardPricingStandard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardPricingStandard", function() { return _CardPricingStandard__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Parallax__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Parallax */ "./src/components/organisms/Parallax/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _Parallax__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContactForm */ "./src/components/organisms/ContactForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return _ContactForm__WEBPACK_IMPORTED_MODULE_21__["default"]; });
























/***/ }),

/***/ "./src/layouts/DocsLayout/DocsLayout.js":
/*!**********************************************!*\
  !*** ./src/layouts/DocsLayout/DocsLayout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/layouts/DocsLayout/components/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\layouts\\DocsLayout\\DocsLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DocsLayout = ({
  children,
  themeToggler,
  themeMode
}) => {
  const classes = useStyles();
  const {
    0: isMobileNavOpen,
    1: setMobileNavOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Topbar"], {
    themeMode: themeMode,
    themeToggler: themeToggler,
    onMobileNavOpen: () => setMobileNavOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    onMobileClose: () => setMobileNavOpen(false),
    openMobile: isMobileNavOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, children))), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["ScrollTop"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }));
};

DocsLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  themeToggler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DocsLayout);

/***/ }),

/***/ "./src/layouts/DocsLayout/components/Navbar/Navbar.js":
/*!************************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Navbar/Navbar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavItem */ "./src/layouts/DocsLayout/components/Navbar/components/NavItem/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/layouts/DocsLayout/components/Navbar/data/index.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\layouts\\DocsLayout\\components\\Navbar\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  title: {
    fontWeight: 700
  },
  navGroup: {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0
    }
  },
  navGroupTitle: {
    paddingBottom: 0
  }
}));

const Navbar = ({
  onMobileClose,
  openMobile
}) => {
  const classes = useStyles();

  const content = __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    paddingBottom: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Chelsea Otakan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Eric Hoffman",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flexGrow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    p: 2,
    paddingTop: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.mobileDrawer
    },
    onClose: onMobileClose,
    open: openMobile,
    variant: "temporary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, content)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.desktopDrawer
    },
    open: true,
    variant: "persistent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, content)));
};

Navbar.propTypes = {
  onMobileClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  openMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Navbar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/layouts/DocsLayout/components/Navbar/components/NavItem/NavItem.js":
/*!********************************************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Navbar/components/NavItem/NavItem.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\layouts\\DocsLayout\\components\\Navbar\\components\\NavItem\\NavItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  item: {
    display: 'flex',
    textTransform: 'none',
    width: '100%',
    color: theme.palette.text.primary,
    '&:hover': {
      background: 'transparent',
      color: theme.palette.primary.main
    }
  },
  itemActive: {
    color: theme.palette.primary.main,
    '& span': {
      fontWeight: 700
    }
  }
}));

const getComponentId = () => Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(window.location.search).component || 'introduction';

const NavItem = (_ref) => {
  let {
    className,
    href,
    icon: Icon,
    title,
    id
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "href", "icon", "title", "id"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.item, getComponentId() === id ? classes.itemActive : '', className),
    component: 'a',
    href: href
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body2",
    component: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, title));
};

NavItem.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./src/layouts/DocsLayout/components/Navbar/components/NavItem/index.js":
/*!******************************************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Navbar/components/NavItem/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem */ "./src/layouts/DocsLayout/components/Navbar/components/NavItem/NavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/DocsLayout/components/Navbar/data/index.js":
/*!****************************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Navbar/data/index.js ***!
  \****************************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
const components = [{
  id: 'get-started',
  title: 'Get Started',
  pages: [{
    id: 'introduction',
    title: 'Introduction',
    href: '/documentation/?component=introduction'
  }, {
    id: 'quick-start',
    title: 'Quick Start',
    href: '/documentation/?component=quick-start'
  }, {
    id: 'changelog',
    title: 'Changelog',
    href: '/documentation/?component=changelog'
  }]
}, {
  id: 'atoms',
  title: 'Atoms',
  pages: [{
    id: 'dark-mode-toggler',
    title: 'Dark Mode Toggler',
    href: '/documentation/?component=dark-mode-toggler'
  }, {
    id: 'icon',
    title: 'Icon',
    href: '/documentation/?component=icon'
  }, {
    id: 'icon-text',
    title: 'Icon Text',
    href: '/documentation/?component=icon-text'
  }, {
    id: 'image',
    title: 'Image',
    href: '/documentation/?component=image'
  }, {
    id: 'learn-more-link',
    title: 'Learn More Link',
    href: '/documentation/?component=learn-more-link'
  }]
}, {
  id: 'molecules',
  title: 'Molecules',
  pages: [{
    id: 'count-up-number',
    title: 'Count Up Number',
    href: '/documentation/?component=count-up-number'
  }, {
    id: 'description-with-cta',
    title: 'Description Text With CTA',
    href: '/documentation/?component=description-with-cta'
  }, {
    id: 'icon-alternate',
    title: 'Icon Alternate',
    href: '/documentation/?component=icon-alternate'
  }, {
    id: 'overlapped-images',
    title: 'Overlapped Images',
    href: '/documentation/?component=overlapped-images'
  }, {
    id: 'section-header',
    title: 'Section Header',
    href: '/documentation/?component=section-header'
  }, {
    id: 'image-swiper',
    title: 'Image Swiper',
    href: '/documentation/?component=image-swiper'
  }, {
    id: 'numbers-swiper',
    title: 'Numbers Swiper',
    href: '/documentation/?component=numbers-swiper'
  }, {
    id: 'typed-text',
    title: 'Typed Text',
    href: '/documentation/?component=typed-text'
  }]
}, {
  id: 'organisms',
  title: 'Organisms',
  pages: [{
    id: 'accordion',
    title: 'Accordion',
    href: '/documentation/?component=accordion'
  }, {
    id: 'card-base',
    title: 'Card Base',
    href: '/documentation/?component=card-base'
  }, {
    id: 'card-category',
    title: 'Card Category',
    href: '/documentation/?component=card-category'
  }, {
    id: 'card-category-link',
    title: 'Card Category Link',
    href: '/documentation/?component=card-category-link'
  }, {
    id: 'card-job',
    title: 'Card Job',
    href: '/documentation/?component=card-job'
  }, {
    id: 'card-job-company',
    title: 'Card Job Company',
    href: '/documentation/?component=card-job-company'
  }, {
    id: 'card-job-minimal',
    title: 'Card Job Minimal',
    href: '/documentation/?component=card-job-minimal'
  }, {
    id: 'card-job-tag',
    title: 'Card Job Tag',
    href: '/documentation/?component=card-job-tag'
  }, {
    id: 'card-pricing-standard',
    title: 'Card Pricing Standard',
    href: '/documentation/?component=card-pricing-standard'
  }, {
    id: 'card-product',
    title: 'Card Product',
    href: '/documentation/?component=card-product'
  }, {
    id: 'card-promo',
    title: 'Card Promo',
    href: '/documentation/?component=card-promo'
  }, {
    id: 'card-review',
    title: 'Card Review',
    href: '/documentation/?component=card-review'
  }, {
    id: 'description-list-icon',
    title: 'Description List Icon',
    href: '/documentation/?component=description-list-icon'
  }, {
    id: 'hero-background',
    title: 'Hero Background',
    href: '/documentation/?component=hero-background'
  }, {
    id: 'hero-shaped',
    title: 'Hero Shaped',
    href: '/documentation/?component=hero-shaped'
  }, {
    id: 'hero-side-image',
    title: 'Hero Side Image',
    href: '/documentation/?component=hero-side-image'
  }, {
    id: 'hero-simple-background',
    title: 'Hero Simple Background',
    href: '/documentation/?component=hero-simple-background'
  }, {
    id: 'map',
    title: 'Map',
    href: '/documentation/?component=map'
  }, {
    id: 'parallax',
    title: 'Parallax',
    href: '/documentation/?component=parallax'
  }, {
    id: 'section',
    title: 'Section',
    href: '/documentation/?component=section'
  }, {
    id: 'section-alternate',
    title: 'Section Alternate',
    href: '/documentation/?component=section-alternate'
  }]
}];

/***/ }),

/***/ "./src/layouts/DocsLayout/components/Navbar/index.js":
/*!***********************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Navbar/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./src/layouts/DocsLayout/components/Navbar/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/DocsLayout/components/Topbar/Topbar.js":
/*!************************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Topbar/Topbar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\layouts\\DocsLayout\\components\\Topbar\\Topbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  loginAvatar: {
    marginLeft: '9px',
    width: '30px',
    height: '30px'
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32
    }
  },
  logoImage: {
    position: 'relative',
    height: 'auto',
    top: '-17px',
    width: '130px'
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    paddingRight: 0
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap'
  },
  listItemButton: {
    whiteSpace: 'nowrap'
  },
  iconButton: {
    paddingRight: 0,
    '&:hover': {
      background: 'transparent'
    }
  }
}));

const TopBar = (_ref) => {
  let {
    className,
    onMobileNavOpen,
    themeToggler,
    themeMode
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "onMobileNavOpen", "themeToggler", "themeMode"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], _extends({
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, className),
    elevation: 0,
    color: "inherit"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.logoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    title: "OnlineAarogya",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    className: classes.logoImage,
    src: themeMode === 'light' ? "https://www.onlineaarogya.com" + '/assets/logo-blue.png' : "https://www.onlineaarogya.com" + '/assets/logo-blue.png',
    alt: "OnlineAarogya",
    lazy: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flexGrow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_4__["DarkModeToggler"], {
    themeMode: themeMode,
    onClick: () => themeToggler(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    disablePadding: true,
    className: classes.navigationContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.listItem, 'menu-item--no-dropdown'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.listItemText,
    component: "a",
    href: "/",
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Rahul Yadav", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    className: classes.loginAvatar,
    src: "/broken-image.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    mdUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    color: "inherit",
    onClick: onMobileNavOpen,
    className: classes.iconButton,
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })))));
};

TopBar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onMobileNavOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  themeToggler: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./src/layouts/DocsLayout/components/Topbar/index.js":
/*!***********************************************************!*\
  !*** ./src/layouts/DocsLayout/components/Topbar/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/DocsLayout/components/Topbar/Topbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/layouts/DocsLayout/components/index.js":
/*!****************************************************!*\
  !*** ./src/layouts/DocsLayout/components/index.js ***!
  \****************************************************/
/*! exports provided: Topbar, Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/DocsLayout/components/Topbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Topbar", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/layouts/DocsLayout/components/Navbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/layouts/DocsLayout/index.js":
/*!*****************************************!*\
  !*** ./src/layouts/DocsLayout/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocsLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocsLayout */ "./src/layouts/DocsLayout/DocsLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DocsLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "./src/theme/palette.js");



const getTheme = mode => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: mode === 'light' ? _palette__WEBPACK_IMPORTED_MODULE_1__["light"] : _palette__WEBPACK_IMPORTED_MODULE_1__["dark"],
  layout: {
    contentWidth: 1336
  },
  typography: {
    fontFamily: 'Lato'
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (getTheme);

/***/ }),

/***/ "./src/theme/palette.js":
/*!******************************!*\
  !*** ./src/theme/palette.js ***!
  \******************************/
/*! exports provided: light, dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
const light = {
  alternate: {
    main: 'rgb(247, 249, 250)',
    dark: '#e8eaf6'
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  type: 'light',
  primary: {
    main: '#ec3832',
    light: 'rgb(251 104 99)',
    dark: '#da2b26',
    contrastText: '#fff'
  },
  secondary: {
    light: '#fff',
    main: '#ccc',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#2d3748',
    secondary: '#718096'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#fff',
    level2: '#f5f5f5',
    level1: '#fff',
    footer: '#1b1642'
  }
};
const dark = {
  alternate: {
    main: '#2D3748',
    dark: '#24242b'
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff'
  },
  type: 'dark',
  primary: {
    main: '#90caf9',
    light: 'rgb(166, 212, 250)',
    dark: 'rgb(100, 141, 174)',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#1A202C',
    default: '#121212',
    level2: '#333',
    level1: '#2D3748',
    footer: '#18181f'
  }
};

/***/ }),

/***/ "./src/views/AfterLogin/UpdateProfile/UpdateProfile.js":
/*!*************************************************************!*\
  !*** ./src/views/AfterLogin/UpdateProfile/UpdateProfile.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/views/AfterLogin/UpdateProfile/components/index.js");
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\views\\AfterLogin\\UpdateProfile\\UpdateProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    width: '100%'
  },
  section: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(4)
    }
  }
}));

const getComponentId = () => Object(query_string__WEBPACK_IMPORTED_MODULE_1__["parse"])(window.location.search).component || 'introduction';

const renderComponent = () => {
  let Component = null;
  const componentId = getComponentId(); //   switch (componentId) {
  //     case 'introduction':
  //       const Introduction = lazy(() => import('./parts/Introduction'));
  //       Component = <Introduction />;
  //       break;
  //     case 'quick-start':
  //       const QuickStart = lazy(() => import('./parts/QuickStart'));
  //       Component = <QuickStart />;
  //       break;
  //     case 'changelog':
  //       const Changelog = lazy(() => import('./parts/Changelog'));
  //       Component = <Changelog />;
  //       break;
  //     case 'dark-mode-toggler':
  //       const DarkModeTogglerExample = lazy(() => import('./examples/DarkModeTogglerExample'));
  //       Component = <DarkModeTogglerExample />;
  //       break;
  //     case 'icon':
  //       const IconExample = lazy(() => import('./examples/IconExample'));
  //       Component = <IconExample />;
  //       break;
  //     case 'icon-text':
  //       const IconTextExample = lazy(() => import('./examples/IconTextExample'));
  //       Component = <IconTextExample />;
  //       break;
  //     case 'image':
  //       const ImageExample = lazy(() => import('./examples/ImageExample'));
  //       Component = <ImageExample />;
  //       break;
  //     case 'learn-more-link':
  //       const LearnMoreLinkExample = lazy(() => import('./examples/LearnMoreLinkExample'));
  //       Component = <LearnMoreLinkExample />;
  //       break;
  //     case 'count-up-number':
  //       const CountUpNumberExample = lazy(() => import('./examples/CountUpNumberExample'));
  //       Component = <CountUpNumberExample />;
  //       break;
  //     case 'description-with-cta':
  //       const DescriptionCtaExample = lazy(() => import('./examples/DescriptionCtaExample'));
  //       Component = <DescriptionCtaExample />;
  //       break;
  //     case 'icon-alternate':
  //       const IconAlternateExample = lazy(() => import('./examples/IconAlternateExample'));
  //       Component = <IconAlternateExample />;
  //       break;
  //     case 'overlapped-images':
  //       const OverlapedImagesExample = lazy(() => import('./examples/OverlapedImagesExample'));
  //       Component = <OverlapedImagesExample />;
  //       break;
  //     case 'section-header':
  //       const SectionHeaderExample = lazy(() => import('./examples/SectionHeaderExample'));
  //       Component = <SectionHeaderExample />;
  //       break;
  //     case 'image-swiper':
  //       const SwiperImageExample = lazy(() => import('./examples/SwiperImageExample'));
  //       Component = <SwiperImageExample />;
  //       break;
  //     case 'numbers-swiper':
  //       const SwiperNumberExample = lazy(() => import('./examples/SwiperNumberExample'));
  //       Component = <SwiperNumberExample />;
  //       break;
  //     case 'typed-text':
  //       const TypedTextExample = lazy(() => import('./examples/TypedTextExample'));
  //       Component = <TypedTextExample />;
  //       break;
  //     case 'accordion':
  //       const AccordionExample = lazy(() => import('./examples/AccordionExample'));
  //       Component = <AccordionExample />;
  //       break;
  //     case 'card-base':
  //       const CardBaseExample = lazy(() => import('./examples/CardBaseExample'));
  //       Component = <CardBaseExample />;
  //       break;
  //     case 'card-category':
  //       const CardCategoryExample = lazy(() => import('./examples/CardCategoryExample'));
  //       Component = <CardCategoryExample />;
  //       break;
  //     case 'card-category-link':
  //       const CardCategoryLinkExample = lazy(() => import('./examples/CardCategoryLinkExample'));
  //       Component = <CardCategoryLinkExample />;
  //       break;
  //     case 'card-job':
  //       const CardJobExample = lazy(() => import('./examples/CardJobExample'));
  //       Component = <CardJobExample />;
  //       break;
  //     case 'card-job-company':
  //       const CardJobCompanyExample = lazy(() => import('./examples/CardJobCompanyExample'));
  //       Component = <CardJobCompanyExample />;
  //       break;
  //     case 'card-job-minimal':
  //       const CardJobMinimalExample = lazy(() => import('./examples/CardJobMinimalExample'));
  //       Component = <CardJobMinimalExample />;
  //       break;
  //     case 'card-job-tag':
  //       const CardJobTagExample = lazy(() => import('./examples/CardJobTagExample'));
  //       Component = <CardJobTagExample />;
  //       break;
  //     case 'card-pricing-standard':
  //       const CardPricingStandardExample = lazy(() => import('./examples/CardPricingStandardExample'));
  //       Component = <CardPricingStandardExample />;
  //       break;
  //     case 'card-product':
  //       const CardProductExample = lazy(() => import('./examples/CardProductExample'));
  //       Component = <CardProductExample />;
  //       break;
  //     case 'card-promo':
  //       const CardPromoExample = lazy(() => import('./examples/CardPromoExample'));
  //       Component = <CardPromoExample />;
  //       break;
  //     case 'card-review':
  //       const CardReviewExample = lazy(() => import('./examples/CardReviewExample'));
  //       Component = <CardReviewExample />;
  //       break;
  //     case 'description-list-icon':
  //       const DescriptionListIconExample = lazy(() => import('./examples/DescriptionListIconExample'));
  //       Component = <DescriptionListIconExample />;
  //       break;
  //     case 'hero-background':
  //       const HeroBackgroundExample = lazy(() => import('./examples/HeroBackgroundExample'));
  //       Component = <HeroBackgroundExample />;
  //       break;
  //     case 'hero-shaped':
  //       const HeroShapedExample = lazy(() => import('./examples/HeroShapedExample'));
  //       Component = <HeroShapedExample />;
  //       break;
  //     case 'hero-side-image':
  //       const HeroSideImageExample = lazy(() => import('./examples/HeroSideImageExample'));
  //       Component = <HeroSideImageExample />;
  //       break;
  //     case 'hero-simple-background':
  //       const HeroSimpleBackgroundExample = lazy(() => import('./examples/HeroSimpleBackgroundExample'));
  //       Component = <HeroSimpleBackgroundExample />;
  //       break;
  //     case 'map':
  //       const MapExample = lazy(() => import('./examples/MapExample'));
  //       Component = <MapExample />;
  //       break;
  //     case 'parallax':
  //       const ParallaxExample = lazy(() => import('./examples/ParallaxExample'));
  //       Component = <ParallaxExample />;
  //       break;
  //     case 'section':
  //       const SectionExample = lazy(() => import('./examples/SectionExample'));
  //       Component = <SectionExample />;
  //       break;
  //     case 'section-alternate':
  //       const SectionAlternateExample = lazy(() => import('./examples/SectionAlternateExample'));
  //       Component = <SectionAlternateExample />;
  //       break;
  //     default:
  //       Component = null;
  //       break;
  //   }
  //   return Component;
};

const UpdateProfile = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 29
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 8
    }
  }, "hello Account Info hello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Infohello Account Info"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfile);

/***/ }),

/***/ "./src/views/AfterLogin/UpdateProfile/components/Loading/Loading.js":
/*!**************************************************************************!*\
  !*** ./src/views/AfterLogin/UpdateProfile/components/Loading/Loading.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\onlin\\OneDrive\\Desktop\\site\\aarogyaweb\\src\\views\\AfterLogin\\UpdateProfile\\components\\Loading\\Loading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Loading = (_ref) => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], _extends({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "text",
    width: 250,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    width: 200,
    height: 25,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "text",
    width: 250,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    width: 350,
    height: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "text",
    width: 250,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    width: '100%',
    height: 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "text",
    width: 250,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "rect",
    width: '100%',
    height: 350,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })));
};

Loading.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/views/AfterLogin/UpdateProfile/components/Loading/index.js":
/*!************************************************************************!*\
  !*** ./src/views/AfterLogin/UpdateProfile/components/Loading/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./src/views/AfterLogin/UpdateProfile/components/Loading/Loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Loading__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/AfterLogin/UpdateProfile/components/index.js":
/*!****************************************************************!*\
  !*** ./src/views/AfterLogin/UpdateProfile/components/index.js ***!
  \****************************************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./src/views/AfterLogin/UpdateProfile/components/Loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// export { default as Headline } from './Headline';
// export { default as CodeHighlighter } from './CodeHighlighter';
// export { default as PropsHighlighter } from './PropsHighlighter';
// export { default as SectionBox } from './SectionBox';


/***/ }),

/***/ "./src/views/AfterLogin/UpdateProfile/index.js":
/*!*****************************************************!*\
  !*** ./src/views/AfterLogin/UpdateProfile/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateProfile */ "./src/views/AfterLogin/UpdateProfile/UpdateProfile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UpdateProfile__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/NoSsr":
/*!******************************************!*\
  !*** external "@material-ui/core/NoSsr" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons/ArrowRightAlt":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowRightAlt" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowRightAlt");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowUp":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowUp" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/lab/Skeleton":
/*!********************************************!*\
  !*** external "@material-ui/lab/Skeleton" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "jarallax":
/*!***************************!*\
  !*** external "jarallax" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jarallax");

/***/ }),

/***/ "leaflet":
/*!**************************!*\
  !*** external "leaflet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "react-typed":
/*!******************************!*\
  !*** external "react-typed" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "validate.js":
/*!******************************!*\
  !*** external "validate.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudC91cGRhdGUtcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2l0aExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi0yeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xlYWZsZXQtYXNzZXRzL21hcmtlci1zaGFkb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0RhcmtNb2RlVG9nZ2xlci9EYXJrTW9kZVRvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvRGFya01vZGVUb2dnbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ljb24vSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ljb25UZXh0L0ljb25UZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ljb25UZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL0xlYXJuTW9yZUxpbmsvTGVhcm5Nb3JlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9MZWFybk1vcmVMaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL1Njcm9sbFRvcC9TY3JvbGxUb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvU2Nyb2xsVG9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0b21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Db3VudFVwTnVtYmVyL0NvdW50VXBOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0NvdW50VXBOdW1iZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0Rlc2NyaXB0aW9uQ3RhL0Rlc2NyaXB0aW9uQ3RhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9EZXNjcmlwdGlvbkN0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvSWNvbkFsdGVybmF0ZS9JY29uQWx0ZXJuYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9JY29uQWx0ZXJuYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9PdmVybGFwZWRJbWFnZXMvT3ZlcmxhcGVkSW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9PdmVybGFwZWRJbWFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VjdGlvbkhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU3dpcGVySW1hZ2UvU3dpcGVySW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1N3aXBlckltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJOdW1iZXIvU3dpcGVyTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Td2lwZXJOdW1iZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1R5cGVkVGV4dC9UeXBlZFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1R5cGVkVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0FjY29yZGlvbi9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0FjY29yZGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEJhc2UvQ2FyZEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRCYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnkvQ2FyZENhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkQ2F0ZWdvcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRDYXRlZ29yeUxpbmsvQ2FyZENhdGVnb3J5TGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZENhdGVnb3J5TGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYi9DYXJkSm9iLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iQ29tcGFueS9DYXJkSm9iQ29tcGFueS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYkNvbXBhbnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRKb2JNaW5pbWFsL0NhcmRKb2JNaW5pbWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iTWluaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZEpvYlRhZy9DYXJkSm9iVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkSm9iVGFnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJpY2luZ1N0YW5kYXJkL0NhcmRQcmljaW5nU3RhbmRhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcmljaW5nU3RhbmRhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRQcm9kdWN0L0NhcmRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb21vL0NhcmRQcm9tby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FyZFByb21vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9DYXJkUmV2aWV3L0NhcmRSZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NhcmRSZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0NvbnRhY3RGb3JtL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9Db250YWN0Rm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvRGVzY3JpcHRpb25MaXN0SWNvbi9EZXNjcmlwdGlvbkxpc3RJY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9EZXNjcmlwdGlvbkxpc3RJY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvQmFja2dyb3VuZC9IZXJvQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb0JhY2tncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlcm9TaGFwZWQvSGVyb1NoYXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NoYXBlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpZGVJbWFnZS9IZXJvU2lkZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2lkZUltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9IZXJvU2ltcGxlQmFja2dyb3VuZC9IZXJvU2ltcGxlQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvSGVyb1NpbXBsZUJhY2tncm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL01hcC9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL01hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvUGFyYWxsYXgvUGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1BhcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TZWN0aW9uL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL1NlY3Rpb25BbHRlcm5hdGUvU2VjdGlvbkFsdGVybmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2VjdGlvbkFsdGVybmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvRG9jc0xheW91dC9Eb2NzTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0RvY3NMYXlvdXQvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0RvY3NMYXlvdXQvY29tcG9uZW50cy9OYXZiYXIvY29tcG9uZW50cy9OYXZJdGVtL05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvRG9jc0xheW91dC9jb21wb25lbnRzL05hdmJhci9jb21wb25lbnRzL05hdkl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvRG9jc0xheW91dC9jb21wb25lbnRzL05hdmJhci9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0RvY3NMYXlvdXQvY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvRG9jc0xheW91dC9jb21wb25lbnRzL1RvcGJhci9Ub3BiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvTWluaW1hbC9jb21wb25lbnRzL1RvcGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9Eb2NzTGF5b3V0L2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvRG9jc0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0FmdGVyTG9naW4vVXBkYXRlUHJvZmlsZS9VcGRhdGVQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9BZnRlckxvZ2luL1VwZGF0ZVByb2ZpbGUvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0FmdGVyTG9naW4vVXBkYXRlUHJvZmlsZS9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0FmdGVyTG9naW4vVXBkYXRlUHJvZmlsZS9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9BZnRlckxvZ2luL1VwZGF0ZVByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImphcmFsbGF4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvdW50dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbGVhZmxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0ZS5qc1wiIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlVwZGF0ZVByb2ZpbGVzIiwiRG9jc0xheW91dCIsInVzZURhcmtNb2RlIiwidGhlbWVNb2RlIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsIm1vdW50ZWRDb21wb25lbnQiLCJzZXRNb3VudGVkQ29tcG9uZW50Iiwic2V0TW9kZSIsIm1vZGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGhlbWVUb2dnbGVyIiwidXNlRWZmZWN0IiwibG9jYWxUaGVtZSIsImdldEl0ZW0iLCJBT1MiLCJyZWZyZXNoIiwiV2l0aExheW91dCIsImNvbXBvbmVudCIsImxheW91dCIsIkxheW91dCIsInJlc3QiLCJSZWFjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImluaXQiLCJvbmNlIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsImdldFRoZW1lIiwiZGF0YSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJicmVha3BvaW50cyIsInVwIiwiYm9yZGVyRGFyayIsImNvbG9ycyIsImluZGlnbyIsIm1vZGVUb2dnbGVyIiwidG9wIiwibGVmdCIsInRleHQiLCJwcmltYXJ5IiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm1vZGVUb2dnbGVyRGFyayIsInRyYW5zZm9ybSIsIm1vZGVUb2dnbGVySWNvbiIsImZpbGwiLCJzZWNvbmRhcnkiLCJtYWluIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIkRhcmtNb2RlVG9nZ2xlciIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZXh0cmFTbWFsbCIsImZvbnRTaXplIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsIkljb24iLCJwcm9wcyIsImZvbnRJY29uQ2xhc3MiLCJzaXplIiwiZm9udEljb25Db2xvciIsImNvbG9yIiwiZGVmYXVsdFByb3BzIiwib25lT2YiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJJY29uVGV4dCIsImljb25Qcm9wcyIsInR5cG9ncmFwaHlQcm9wcyIsIm9iamVjdCIsImRCbG9jayIsIkltYWdlIiwic3JjIiwic3JjU2V0IiwiYWx0IiwibGF6eSIsImxhenlQcm9wcyIsImJvb2wiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRXZWlnaHQiLCJpY29uIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJMZWFybk1vcmVMaW5rIiwidmFyaWFudCIsImhyZWYiLCJjaGlsZHJlbiIsImJvdHRvbSIsInJpZ2h0IiwiU2Nyb2xsVG9wIiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIkNvdW50VXBOdW1iZXIiLCJzdGFydCIsImVuZCIsInN1ZmZpeCIsInByZWZpeCIsImxhYmVsIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsInZpc2liaWxpdHlTZW5zb3JQcm9wcyIsIndyYXBwZXJQcm9wcyIsImNvdW50V3JhcHBlclByb3BzIiwiY291bnROdW1iZXJQcm9wcyIsImxhYmVsUHJvcHMiLCJ2aWV3UG9ydEVudGVyZWQiLCJzZXRWaWV3UG9ydEVudGVyZWQiLCJzZXRWaWV3UG9ydFZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJudW1iZXIiLCJEZXNjcmlwdGlvbkN0YSIsInN1YnRpdGxlIiwicHJpbWFyeUN0YSIsInNlY29uZGFyeUN0YSIsImFsaWduIiwidGl0bGVQcm9wcyIsInN1YnRpdGxlUHJvcHMiLCJidXR0b25Hcm91cFByb3BzIiwicHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInNlY29uZGFyeUJ1dHRvbldyYXBwZXJQcm9wcyIsInVzZVRoZW1lIiwiaXNTbSIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImp1c3RpZnlHcmlkIiwibm9kZSIsImNpcmNsZSIsInNxdWFyZSIsIkljb25BbHRlcm5hdGUiLCJzaGFwZSIsInVzZUJhY2tncm91bmRTdHlsZXMiLCJiYWNrZ3JvdW5kQ2xhc3NlcyIsInJlZCIsInBpbmsiLCJwdXJwbGUiLCJkZWVwUHVycGxlIiwiYmx1ZSIsImxpZ2h0Qmx1ZSIsImN5YW4iLCJ0ZWFsIiwiZ3JlZW4iLCJsaWdodEdyZWVuIiwibGltZSIsInllbGxvdyIsImFtYmVyIiwib3JhbmdlIiwiZGVlcE9yYW5nZSIsImJyb3duIiwiZ3JleSIsImJsdWVHcmV5IiwiaW1hZ2VHcmlkIiwiYm94U2hhZG93IiwicGFwZXIiLCJtYXhXaWR0aCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJTdHlsZSIsImltYWdlR3JpZEZpcnN0SXRlbSIsImltYWdlR3JpZExhc3RJdGVtIiwiZmxvYXQiLCJPdmVybGFwZWRJbWFnZXMiLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJzcmNzZXQiLCJtYXJnaW5Cb3R0b20iLCJkaXNhYmxlR3V0dGVyIiwiY3RhIiwiU2VjdGlvbkhlYWRlciIsInRpdGxlVmFyaWFudCIsInN1YnRpdGxlVmFyaWFudCIsInN1YnRpdGxlQ29sb3IiLCJvdmVybGluZSIsImZhZGVVcCIsImN0YUdyb3VwIiwidGl0bGVDbGFzc2VzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsInpJbmRleCIsInN3aXBlclNsaWRlIiwic3dpcGVyTmF2IiwianVzdGlmeUNvbnRlbnQiLCJjYXJkU2hhZG93IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJTd2lwZXJJbWFnZSIsIml0ZW1zIiwibmF2aWdhdGlvbkJ1dHRvblN0eWxlIiwiaW1hZ2VDbGFzc05hbWUiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZGRpbmdCb3R0b20iLCJTd2lwZXJOdW1iZXIiLCJudW1iZXJQcm9wcyIsImlzTWQiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYXV0b3BsYXkiLCJUeXBlZFRleHQiLCJ0eXBlZFByb3BzIiwiZmxleERpcmVjdGlvbiIsImV4cGFuZE9wZW4iLCJkYXJrIiwibGlzdEl0ZW0iLCJBY2NvcmRpb24iLCJ0ZXh0UHJvcHMiLCJsaW5rUHJvcHMiLCJpZCIsImxpbmsiLCJhcnJheSIsIndpdGhTaGFkb3ciLCJub1NoYWRvdyIsIm5vQm9yZGVyIiwibm9CZyIsImxpZnRVcCIsImNvbnRlbnQiLCJjZW50ZXIiLCJDYXJkQmFzZSIsImNhcmRDb250ZW50UHJvcHMiLCJDYXJkQ2F0ZWdvcnkiLCJmb250V2VpZ2h0NzAwIiwiY2F0ZWdvcnlJY29uQnV0dG9uIiwiQ2FyZENhdGVnb3J5TGluayIsImljb25BbHRlcm5hdGVQcm9wcyIsImRvdCIsIm1hcmdpblJpZ2h0IiwiZG90QmlnIiwiZG90U21hbGwiLCJqb2JUaXRsZSIsImRvdE1hcmdpbiIsIm1hcmdpbiIsIkNhcmRKb2IiLCJiYWRnZUNvbG9yIiwiYmFkZ2VUaXRsZSIsImpvYkxvY2F0aW9uIiwiam9iVHlwZSIsImpvYkRhdGUiLCJjb21wYW55TG9nbyIsImNvbXBhbnlOYW1lIiwiY29tcGFueUF2YXRhciIsIkNhcmRKb2JDb21wYW55Iiwiam9ic0NvdW50IiwiY29tcGFueUluZm8iLCJjYXJkSm9iTWluaW1hbEJvZHkiLCJDYXJkSm9iTWluaW1hbCIsInNob3dBcnJvdyIsImJvcmRlclJpZ2h0IiwidGFnIiwidGV4dFdoaXRlIiwiQ2FyZEpvYlRhZyIsImZlYXR1cmVDaGVjayIsIkNhcmRQcmljaW5nU3RhbmRhcmQiLCJwcmljZUNvbXBvbmVudCIsImZlYXR1cmVDaGVja0NvbXBvbmVudCIsImZlYXR1cmVzIiwiZGlzY2xhaW1lciIsImRpc2NsYWltZXJQcm9wcyIsImZlYXR1cmVUaXRsZVByb3BzIiwibWVkaWEiLCJDYXJkUHJvZHVjdCIsIm1lZGlhQ2xhc3NOYW1lIiwiY2FyZENvbnRlbnQiLCJtZWRpYUNvbnRlbnQiLCJhbnkiLCJDYXJkUHJvbW8iLCJ0aXRsZUNvbG9yIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblByb3BzIiwiQ2FyZFJldmlldyIsImF1dGhvclBob3RvIiwiYXV0aG9yTmFtZSIsImF1dGhvclRpdGxlIiwidGV4dFZhcmlhbnQiLCJsaXN0SXRlbVByaW1hcnlUeXBvZ3JhcGh5UHJvcHMiLCJsaXN0SXRlbVNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcyIsInNjaGVtYSIsImZ1bGxuYW1lIiwicHJlc2VuY2UiLCJhbGxvd0VtcHR5IiwibWVzc2FnZSIsIm1heGltdW0iLCJlbWFpbCIsIkNvbnRhY3RGb3JtIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwiaXNWYWxpZCIsInZhbHVlcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJ2YWxpZGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGVyc2lzdCIsInRhcmdldCIsIm5hbWUiLCJjaGVja2VkIiwidmFsdWUiLCJoYXNFcnJvciIsImZpZWxkIiwiRGVzY3JpcHRpb25MaXN0SWNvbiIsImdyaWRKdXN0aWZ5Iiwib3ZlcmZsb3ciLCJjb2xvckRlZmF1bHQiLCJoZXJvV3JhcHBlciIsImhlcm9Db3ZlciIsIm9wYWNpdHkiLCJoZXJvQmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJub0NvdmVyT3BhY2l0eSIsIkhlcm9CYWNrZ3JvdW5kIiwiZGlzYmFsZUNvdmVyT3BhY2l0eSIsImJhY2tncm91bmRJbWciLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjb250ZW50U2VjdGlvbkNsYXNzTmFtZSIsInVzZUN1c3RvbVN0eWxlcyIsImNvdmVyQmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXN0b21DbGFzc2VzIiwiaGVybyIsImNvbnRlbnRXaWR0aCIsImRvd24iLCJoZXJvTGVmdFNpZGUiLCJoZXJvUmlnaHRTaWRlIiwiZmxleCIsImhlcm9JbWFnZUNvbnRhaW5lciIsImhlcm9JbWFnZSIsInNoYXBlT3V0c2lkZSIsImNsaXBQYXRoIiwiSGVyb1NoYXBlZCIsImxlZnRTaWRlIiwicmlnaHRTaWRlIiwiaW1hZ2VXcmFwcGVyIiwibWF4SGVpZ2h0IiwiY292ZXIiLCJIZXJvU2lkZUltYWdlIiwiaW1hZ2VTcmMiLCJpbWFnZVNyY1NldCIsInJldmVyc2UiLCJIZXJvU2ltcGxlQmFja2dyb3VuZCIsInVzZUJhY2tncm91bmQiLCJNYXAiLCJ6b29tIiwicGlucyIsIkwiLCJyZXF1aXJlIiwiRGVmYXVsdCIsInByb3RvdHlwZSIsIl9nZXRJY29uVXJsIiwibWFya2VySWNvbjJ4IiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIm1lcmdlT3B0aW9ucyIsImljb25SZXRpbmFVcmwiLCJkZWZhdWx0IiwiaWNvblVybCIsInNoYWRvd1VybCIsIlJlYWN0TWFwIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiaSIsImxvY2F0aW9uIiwieSIsIngiLCJtYXhCb3VuZHMiLCJmb250RmFtaWx5IiwiUGFyYWxsYXgiLCJqYXJhbGxheEVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImphcmFsbGF4Iiwic3BlZWQiLCJmdWxsV2lkdGgiLCJkaXNhYmxlUGFkZGluZyIsIm5hcnJvdyIsIlNlY3Rpb24iLCJhbHRlcm5hdGUiLCJpbm5lciIsImlubmVyTmFycm93ZWQiLCJTZWN0aW9uQWx0ZXJuYXRlIiwid3JhcHBlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsImNvbnRlbnRDb250YWluZXIiLCJpc01vYmlsZU5hdk9wZW4iLCJzZXRNb2JpbGVOYXZPcGVuIiwibW9iaWxlRHJhd2VyIiwiZGVza3RvcERyYXdlciIsIm5hdkdyb3VwIiwibmF2R3JvdXBUaXRsZSIsIk5hdmJhciIsIm9uTW9iaWxlQ2xvc2UiLCJvcGVuTW9iaWxlIiwidGV4dFRyYW5zZm9ybSIsIml0ZW1BY3RpdmUiLCJnZXRDb21wb25lbnRJZCIsInBhcnNlIiwic2VhcmNoIiwiTmF2SXRlbSIsImNvbXBvbmVudHMiLCJwYWdlcyIsImJvcmRlckJvdHRvbSIsImxvZ2luQXZhdGFyIiwibG9nb0NvbnRhaW5lciIsImxvZ29JbWFnZSIsIm5hdmlnYXRpb25Db250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJsaXN0SXRlbVRleHQiLCJ3aGl0ZVNwYWNlIiwibGlzdEl0ZW1CdXR0b24iLCJpY29uQnV0dG9uIiwiVG9wQmFyIiwib25Nb2JpbGVOYXZPcGVuIiwicHJvY2VzcyIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJjcmVhdGVNdWlUaGVtZSIsImxpZ2h0IiwidHlwb2dyYXBoeSIsImFwcEJhciIsImRyYXdlciIsImNvbnRyYXN0VGV4dCIsImxldmVsMiIsImxldmVsMSIsImZvb3RlciIsImNvbW1vbiIsImJsYWNrIiwid2hpdGUiLCJtaW5IZWlnaHQiLCJzZWN0aW9uIiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50SWQiLCJVcGRhdGVQcm9maWxlIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUEsaUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvYWNjb3VudC91cGRhdGUtcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWNjb3VudC91cGRhdGUtcHJvZmlsZS5qc1wiKTtcbiIsIi8qKlxyXG4gKiBDYXV0aW9uOiBDb25zaWRlciB0aGlzIGZpbGUgd2hlbiB1c2luZyBOZXh0SlMgb3IgR2F0c2J5SlNcclxuICogXHJcbiAqIFlvdSBtYXkgZGVsZXRlIHRoaXMgZmlsZSBhbmQgaXRzIG9jY3VycmVuY2VzIGZyb20gdGhlIHByb2plY3QgZmlsZXN5c3RlbSBpZiB5b3UgYXJlIHVzaW5nIHJlYWN0LXNjcmlwdHNcclxuICovXHJcbiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4gaW1wb3J0IE5vU3NyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL05vU3NyJztcclxuIC8vIGltcG9ydCBEb2N1bWVudGF0aW9uIGZyb20gJ3ZpZXdzL0RvY3VtZW50YXRpb24nO1xyXG4gaW1wb3J0IFVwZGF0ZVByb2ZpbGUgZnJvbSAndmlld3MvQWZ0ZXJMb2dpbi9VcGRhdGVQcm9maWxlJztcclxuIGltcG9ydCBEb2NzTGF5b3V0IGZyb20gJ2xheW91dHMvRG9jc0xheW91dCc7XHJcbiBpbXBvcnQgV2l0aExheW91dCBmcm9tICdXaXRoTGF5b3V0JztcclxuIFxyXG4gY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgIDxOb1Nzcj5cclxuICAgICAgPFVwZGF0ZVByb2ZpbGUvPlxyXG4gICAgIDwvTm9Tc3I+XHJcbiAgICBcclxuICAgKTtcclxuIH07XHJcbiBcclxuIGNvbnN0IFVwZGF0ZVByb2ZpbGVzID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgIDxXaXRoTGF5b3V0XHJcbiAgICAgICBjb21wb25lbnQ9e0NvbXBvbmVudH1cclxuICAgICAgIGxheW91dD17RG9jc0xheW91dH1cclxuICAgICAvPlxyXG4gICApXHJcbiB9O1xyXG4gXHJcbiBleHBvcnQgZGVmYXVsdCBVcGRhdGVQcm9maWxlczsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgZ2V0VGhlbWUgZnJvbSAndGhlbWUnO1xyXG5cclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZU1vZGUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xyXG4gIGNvbnN0IFttb3VudGVkQ29tcG9uZW50LCBzZXRNb3VudGVkQ29tcG9uZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2V0TW9kZSA9IG1vZGUgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZU1vZGUnLCBtb2RlKTtcclxuICAgIHNldFRoZW1lKG1vZGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRoZW1lVG9nZ2xlciA9ICgpID0+IHtcclxuICAgIHRoZW1lTW9kZSA9PT0gJ2xpZ2h0JyA/IHNldE1vZGUoJ2RhcmsnKSA6IHNldE1vZGUoJ2xpZ2h0Jyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvY2FsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lTW9kZScpO1xyXG4gICAgbG9jYWxUaGVtZSA/IHNldFRoZW1lKGxvY2FsVGhlbWUpIDogc2V0TW9kZSgnbGlnaHQnKTtcclxuICAgIHNldE1vdW50ZWRDb21wb25lbnQodHJ1ZSk7XHJcbiAgICBBT1MucmVmcmVzaCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5yZWZyZXNoKCk7XHJcbiAgfSwgW3RoZW1lTW9kZV0pO1xyXG5cclxuICByZXR1cm4gW3RoZW1lTW9kZSwgdGhlbWVUb2dnbGVyLCBtb3VudGVkQ29tcG9uZW50XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhMYXlvdXQoe1xyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50LFxyXG4gIGxheW91dDogTGF5b3V0LFxyXG4gIC4uLnJlc3RcclxufSkge1xyXG4gIC8vIGNvbnNvbGUubG9nKCd3aWR0aCcsIHJlc3QuZGF0YS5kYXRhKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICBkZWxheTogNTAsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3RoZW1lTW9kZSwgdGhlbWVUb2dnbGVyLCBtb3VudGVkQ29tcG9uZW50XSA9IHVzZURhcmtNb2RlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5yZWZyZXNoKCk7XHJcbiAgfSwgW21vdW50ZWRDb21wb25lbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtnZXRUaGVtZSh0aGVtZU1vZGUpfT5cclxuICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgPExheW91dCB0aGVtZU1vZGU9e3RoZW1lTW9kZX0gdGhlbWVUb2dnbGVyPXt0aGVtZVRvZ2dsZXJ9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCBkYXRhPXtyZXN0LmRhdGF9IHRoZW1lTW9kZT17dGhlbWVNb2RlfSB7Li4ucmVzdH0gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQlNDQU1BQUFBaEZYZlpBQUFDOTFCTVZFVk1hWEV6ZWFrMmY3STRnN2czZzdjdWE1Z3plS2c4aEpvM2dyWTRnN2MzZ3JVMGdMSTJmckUwZGFBdWJKYzJnYlF3ZDZRemVLazJnTE10ZDVzeGRLSXVhNWcxZnJBMmY3SXlkYU0wZTZ3MmZxNDFmSzAxZXFvM2dyZ3ViSmd0YTVjeGRLSTFmN0F5ZGFReWRhTXhjNkV1YkpndmJKa3djWjR1Ylprd2NKd3ViWmd1YkpjeWRxVXlkS0l4YXBndWJKY3RiSmN1YlpjdWJKY3ZiSll1YkpjdmJaa3ViSmN0YkpjdGJaY3ViSmcyZjdBdWJKY3JiWmN1YkpjdWJKY3VhNWczZ3JZMGZxOHViSmN1YkpkRWtkRXdoc3c2aTg4dmhzd3VoY3N1aE10QmpNZ3RoTXNyZzhzcmdzczZpczhxZ2NzOGk5QTlpTVl0ZzhzcGdjb29nTW83aGNNbmdNb25mOG9sZnNvNGdyOGtmY2s1aU04amZNazRpTThoZThrMWZybzdpdEFnZXNrMmhzOGVlY2d6Zkxjb2Zzc2RlTWcwaGM0Y2Q4ZzJoY3N4ZUxRYmRzZ1pkY2d4ZUxJbWZjc3poTTB2ZGE0eGdja3poTTR4Zzg0d2Y4WXhnczR1ZEtzdmZjUXVjcWhVbmRST21kTTFmSzB3Y1o4dmI1dzBlcXBRbTlNemVLaFhvTlZjcGRZeWRLTlduOVZab3RWS2x0SkZqc0l3Y0oxUm1zOU9sc2xMbXRILy8vOCtrYzllcGRZemQ2ZGJvOVZIa01NMmY3RkhtTkJDbE04eWRxVmNwTlk5aHJvM2dMTTloTGN6ZWFsUW1jdzNmYTQ2ZjdBOGdMTXhjNkkzZWFneWM2RklsZEpNbDlKU25OUlNudE5ObDlKUG5OSkZpNzVVbk05Wm9kVktrc2c4a000NWpjMDllNlpIbHRGQms4ODNnYlJCaDdwRGs5RXdjYUJ6bjc4NGc3ZEtrY1kyaTgxT205TTdqODVMbGM4MWlzMDlnN1E0Z3JZL2o5QTBlcXhLbWRGRmx0QkVqY1hmNmZGSW1kQkNpTHhKbDlGR2xORkJpNzh5aU14Vm5kRXZicG82anM3NCt2eCtwc1BQMytvL2tzNUhrY3BHbU5DandkWkNrTkRNM2VoWW9OSkVscytseE5reGg4eEhrczAramRDMXpkNUxnNnIrL3YvSDJ1Zno5L28zak0zdDgvZWR2ZE0vazg5VGg2MU9pTEJTamJaa2xiYVR0OUJmcHRkam1MMUFpY0JIajhoR2s5RkFnSzFka0xOVGpMUmVrcmRDbGMvazdmTTBpY3kweTl0Z3A5YzRqYzJOdE05RGxjOHppY3hlWFpuM0FBQUFRM1JTVGxNQUhEZFRiNHlQQStMdG5FUW1DNEwyRW1IcUI3WEEwZDBzcjQ3OHg0L1lkNWkxek9meVBrZjFzTFZxNE5oM0Z2anhvcFEyL1NUTnVGelV3Rkl3eEthZWpJTHBJQkVWOXdBQUJoVkpSRUZVZUY2czFOZHlGRWNZQmVCZW9RSWhSQWtMbFJER3JoSWdZM0JKTDhDVmVLenV5WEZ6emprbjVaeHp6dVNjZzNQTzhjS3p1NzBKa08wTGZ4ZFRVLy9wTTl2VHU3WGdmNktxT1ZUYjlYN3RvUnJWRWZCZjFIVFZqWmNjclQvMmJ5MVZWOTI4WXR5OVpiVnV1Y2R6OTBmckc4REJqbDlwVkFwYk9zdHZtTXV2VmdhTlhTZkFBZDZwR3hweTZ5eGY1cGg0M3BTLzRmM3VvYUdtMnJkdTcyUzl4ek92TXlta1pGcS9wdERyazkwbWhXN2U0emw3SEx6aHhHV1BSMjB4bVN4Si9WcWxkRzVtOVhoYVZPQTFEYWRzTmgzUHU1TDJONlF0UE8vMzJKcHFRQlZWazIwb3kvUGkyczIzV0V2eWZIYmUxdGhhZFZRdHR2bTdMbGY2NWdHbVhLNjdYdHVweW9NN0hRaG1YZExTOG9HV0pOZU9KM0M1Zkc1WENFSm5rZXozL29GZHN2Z0o0bDJBTlp3aHJKS2svN09TWGErM1Z3MldKTWxLbkdrb2JvdVlrNlQwVHlYMzBrbE9VblREOUhKNXFwY2tMM0VXL3c0WEYzWGQwRkd5d1hVcnN0cmNsVnNxejVQZC9zWEZZeURuUGRyTGNRT0RtR09LNDdJWmI0Q21pYm1NbitNWVJ6Rlo1amczM1pML0VKcldjc3pIbUFOeTNBUkJLL0lYdGNpSnk4VnNpdFBTZEUzdXVIeHpvdWdvamNVZHI4LzMyYXRuei9ldjNmL0s1d3RweFVUcGNhSTQ1enVzVkRwWXRaaStqZzBvVTliM3g3NGg3K245QUJ2WUVaZUthVnEwc2gwQXRMS3NGdHFOQmRlVDBNclN6d3dscTkreDZ4QU80dGdPdFN6YkNqck5RUWlOdlFVYlVFdWJ2ekJVZUd3MjZ5RENzUkhDb0xrVEhEYTdJZE9MSVRocy9nSHZDaHN6aDJDaW1FOHBlUnM0N2N4QU5JMGxZTkI1eTFEbGpwT0YwSWh6QkRQT1puRE9xWVliZUdLRUNiUHpXblhsdWRQcGh3NWMyWUJxNXpsd1hwaEliTzRWRENaMGduUGZVTzFUd1pvWXdBczJFeFBDZWRBdTlEQWpmUVVqeklUUWIzak5qMEtHMlNndDZCSGFRVWRZeld6K1htQmt0T0h3YW5YamFTVGN3d3ppQmN1TU90d0JtcVByVE94RlFSL0RSS0tQcXl1cjBhaVc2Y1VMWXN4NnRCbTBqWHBSL0FVV1I2SFJxOVdWVzZNUmhJcTVqTHlqYmFDVERDaWp5WUpOcENhamR5b2JQL2VUdzBpZXhCQUtrSjNnQTVLY1FiMnpCWHNJQmNrbit4VnY4amtaU2FFRkhFK2pGRWxlQUVmYXlSVTBNb3VOb0JtQi9MNTBBaS9IU0xJSHhjcnBDdm5oU1FBdWFrS3AyQy9ZYkN5bEpqWFJWeS96MytLdi9Sck5jQ28rV1V6bFZFaHpLZmZuVFFueGVOOWZXRjg4ZmlOQ1VkU1RzYXVmYUNoS1dJbkhleXN5Z2ZwSXFhZ29ha1crdlYyMEo4dXlsNlR5TktFWldWNG9SU1B5Q2tXcGdPTFNia0NPYlQ4bzJyNnRsRzU4SFFxdWY2TzB2NTB0QjdKTTdGNEVPUmQyZHgvSzB3L0tIc1ZrTFBhb1lyd2dQL3k3a3JyM1NTTUE0emorT0JnbWpZa3hjZElKUXlRUktnZzJ2aVg5SGRkaTlVQmIyOUxyS1I3Q1ZWRUVFWFdvalVrWE55ZlROREUxNFc5Z2JISk51aGpEZXR0TjNadmJPdmRPcUNEM0pwLzlsKy93SkUrOVBrWUdqeC9mcWt5czNTMnJNb3pNL28yMTA2cmZNVUlObzZoVnF6K2V1L2hkMWM0eFRnMFRBZnk1a1YrNFVHNitJdGhIVFU5d29XbXh1S05iVGZ1Q1Nmb3ZCQ3hxN0V0SHF2WUw0U202RjhHVnhzU1hITVEwN1RPaTFES3RaeGpXYWFJeWk0Q1hXanhQY2NVdzhXVmJNWVk1d3hDMW16RXlYTUpXa2xscFJsb2krS2tvcTY5c3hCVGxFbEY2YUF4WVVialhObGhsRFppbERuTTRVNVNsTjViaVJzUkhuYngzbWJlV2pFaDRtRXlpdUpEbDVYY1dWbVg1R3ZOa0ZnTFdaTTVxd3NvcDQvQVdmTGhVMWNSN2sxVlZ2Y1lDV1JrT0k2WHk1Z21ucGhDWUlrdnp1Tll6SHpvc3Eyb05rMlJ0U3M4a2hmVU9mSElEZ1I2eXNZQmFNcGw0dUVnazJVL29KVHM5QWFUU3dtYTdkVDY5Z2VBRTJacEVqVXNuMmllSk5IZUtmckkzRWNBR0oyWmFOZ1Z1QzhFQmN0Q0xjNTdQNXU1bGVkNklPQmtJWWt1UU1ybW1qQ2hzNFZrZk9lckhxU0JrUHpabGhlMDZSc2xaM3pNamsyc3NjcUt3WTBSY2pLSytMV2J6ZDdLaUhoa25jcy9zaUZKK1Y1ZVh4RDM0QjhuVnVKRXBHSk5teE4yZ0gzdlN2cDdKNzB0RitEMUVqOHFVSkQxVGtFckFORDJHWndURmcvTHVidm1naUJHM1NPdmRsc3FGUXJrRXpKQ0wxcnN0bG5WRlJPaXhab0REU3VYUUZIRVN3VkdsY3VRY01iL2I0Mk5nakxvd2g1TVRERkUzdk5CNXFTdFJJRXJkQ1FFaDZwTFBSOTJhblNVYi93QUlobGRBYURNcEdnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcENBUUFBQUFDYWNoOUFBQUNNVWxFUVZSNEFlM1NoWTdqUUJBRTBBb3ovZjkvSFRNemhnMXpyZEtVckpiZHgrS2QybkQ4Vk51ZGZzTC9UaC8vL2R5UU4yVEg2ZjN5L0JHcEMzNzlyVitTK3FxZXRCT3hJbU5RWEw4SkNBcjJWNGlNUVhIR05KeGVDZlpYaFNSQmNRTWZ2a09XVWR0ZnpsTGdBRU5tWkRjbW8yVFZtdDhPU00yZVh4QnAzRGpIU01GdXRxUzdTYm1lbXpCaVIreHBLQ05VSVJrZGtrWXhoQWt5R29CdnlRRkVKRWVmd1NtbXZCZkp1SjZhS3FLV25Ba3ZHWk9hWlhUVWdGcVlVTFdOU0hVY2tadVIxSElJaW1VRXh1dFJ4d3pPTFJPSUc0dkttQ0tRdDM2NG1JbGhTeXpBZjFtOWxIWkhKWnJsQU9NTXp0UlJpS2ltcC9ycGRKRGM5QXdyeTV4VFpDdGU3Rkh0dVM4d0pnZVlHcmV4Mjh4TlRkMDg2RGlrN3ZVTXNjUU9hOHk0RG9HdENDU2tBS2xOd3BnTnRwaGpyQzZNSUhVa1I2WVd4eHM2U2M1eHFuMjIybW1DUkZ6SXQ4bEVkS3graWtDdGc5MXFTMldwd1ZmQmVsSkNpUUp3dnppeGZJOWN4WlFXZ2lTSmVsS253QkVsS1l0RE9iMk1GYmhtVWlnYlJlUUJWMENnNCtxTVhTeFhTeUdVbjRVYkY4bCs3cWRTR25UQzBYTENtYWhJZ1VITGhMT2hwVkN0dzRDellYdkxRV1FiSk5teG9Dc09LQXhTZ0JKbm83NWF2b2xrUnc4aUlBRmNzZGMwMmU5aXlDZDh0SHdtZVNTb0tUb3dJZ3ZzY1NHWlVPQTdQdUNONWIyQlg5bVFNN1Mwd1loTU5VNzR6Z3NQQmozSFU3d2d1QWZueHhqRlFHQkU2cHdOK0dqTUU5ekhZN3pHcDh3VnhNU2hZWDlOWHZFV0QzSGJ3SmY0Z2lPNENGSVF4WFNjSDEvVE0rMDRra0JpQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGJvcmRlcjoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBib3JkZXI6ICczcHggc29saWQnLFxyXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH1cclxuICB9LFxyXG4gIGJvcmRlckRhcms6IHtcclxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuaW5kaWdvWzcwMF0sXHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IGAtJHt0aGVtZS5zcGFjaW5nKDEvMil9cHhgLFxyXG4gICAgbGVmdDogYC0ke3RoZW1lLnNwYWNpbmcoMS8yKX1weGAsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKC40LC4wMywwLDEpYCxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9kZVRvZ2dsZXJEYXJrOiB7XHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dGhlbWUuc3BhY2luZygzKX1weClgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgfSxcclxuICBtb2RlVG9nZ2xlckljb246IHtcclxuICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS8yKSxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMS8yKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGFyayBtb2RlIHRvZ2dsZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEYXJrTW9kZVRvZ2dsZXIgPSAoeyB0aGVtZU1vZGUgPSAnbGlnaHQnLCBvbkNsaWNrLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIGNsYXNzZXMuYm9yZGVyLFxyXG4gICAgICAgICAgdGhlbWVNb2RlID09PSAnZGFyaycgPyBjbGFzc2VzLmJvcmRlckRhcmsgOiAnJyxcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgY2xhc3Nlcy5tb2RlVG9nZ2xlcixcclxuICAgICAgICAgIHRoZW1lTW9kZSA9PT0gJ2RhcmsnID8gY2xhc3Nlcy5tb2RlVG9nZ2xlckRhcmsgOiAnJyxcclxuICAgICAgICApfT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kZVRvZ2dsZXJJY29ufVxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTNcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNCAxM1wiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBkPVwiTTQuNTIyMDggNy43MTc1NEM3LjU3ODIgNy43MTc1NCAxMC4wNTU3IDUuMjQwMDYgMTAuMDU1NyAyLjE4Mzk0QzEwLjA1NTcgMS45MzQ5OCAxMC4wMzkyIDEuNjg5ODYgMTAuMDA3NCAxLjQ0OTYxQzkuOTU4MDEgMS4wNzcyNyAxMC4zNDk1IDAuNzcxMTU5IDEwLjY0NzQgMC45OTk5MkMxMi4xMTUzIDIuMTI3MTYgMTMuMDYxNSAzLjg5OTk5IDEzLjA2MTUgNS44OTM4M0MxMy4wNjE1IDkuMjk5NTggMTAuMzAwNiAxMi4wNjA1IDYuODk0ODUgMTIuMDYwNUMzLjk1MzM0IDEyLjA2MDUgMS40OTI4NiAxMC4wMDEgMC44NzY3MjggNy4yNDUyN0MwLjc5NDg0MSA2Ljg3OTAyIDEuMjM2NjggNi42NTI4OSAxLjU1MzIxIDYuODU0NTFDMi40MTEwNiA3LjQwMDk1IDMuNDI5NiA3LjcxNzU0IDQuNTIyMDggNy43MTc1NFpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuRGFya01vZGVUb2dnbGVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aGVtZSBtb2RlXHJcbiAgICovXHJcbiAgdGhlbWVNb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZW1lIHRvZ2dsZXIgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVUb2dnbGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EYXJrTW9kZVRvZ2dsZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBOb1NzciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ob1Nzcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgZXh0cmFTbWFsbDoge1xyXG4gICAgZm9udFNpemU6IDEwLFxyXG4gIH0sXHJcbiAgc21hbGw6IHtcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICB9LFxyXG4gIG1lZGl1bToge1xyXG4gICAgZm9udFNpemU6IDMwLFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGljb25cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBJY29uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgZm9udEljb25DbGFzcywgc2l6ZSwgZm9udEljb25Db2xvciwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5vU3NyPlxyXG4gICAgICA8aVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdpY29uJyxcclxuICAgICAgICAgIGZvbnRJY29uQ2xhc3MsXHJcbiAgICAgICAgICBjbGFzc2VzW3NpemVdLFxyXG4gICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IGZvbnRJY29uQ29sb3IgfX1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgIDwvTm9Tc3I+XHJcbiAgKTtcclxufTtcclxuXHJcbkljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHNpemU6ICdzbWFsbCcsXHJcbn07XHJcblxyXG5JY29uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZXh0cmFTbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgdGhlIGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSWNvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGljb24gdGV4dFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25UZXh0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgY29sb3IsXHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2ljb24tdGV4dCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tdGV4dF9faWNvblwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBmb250SWNvbkNsYXNzPXtmb250SWNvbkNsYXNzfVxyXG4gICAgICAgIGZvbnRJY29uQ29sb3I9e2NvbG9yfVxyXG4gICAgICAgIHsuLi5pY29uUHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpY29uLXRleHRfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB7Li4udHlwb2dyYXBoeVByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSWNvblRleHQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Qcm9wczoge30sXHJcbiAgdHlwb2dyYXBoeVByb3BzOiB7fSxcclxufTtcclxuXHJcbkljb25UZXh0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjbGFzc2VzIG9mIHRoZSBmb250IGljb25cclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU291cmNlIHNldCBmb3IgdGhlIHJlc3BvbnNpdmUgaW1hZ2VzXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGljb24tdGV4dFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25UZXh0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JY29uVGV4dCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRCbG9jazoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGltYWdlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBzcmNTZXQsIGFsdCwgbGF6eSwgbGF6eVByb3BzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgaWYgKGxhenkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdpbWFnZScsIGNsYXNzZXMucm9vdCwgY2xhc3Nlcy5kQmxvY2ssIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgc3JjU2V0PXtzcmNTZXR9XHJcbiAgICAgICAgZWZmZWN0PVwib3BhY2l0eVwiXHJcbiAgICAgICAgey4uLmxhenlQcm9wc31cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2ltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIHNyY1NldD17c3JjU2V0fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbHQ6ICcuLi4nLFxyXG4gIGxhenk6IHRydWUsXHJcbiAgbGF6eVByb3BzOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgfSxcclxufTtcclxuXHJcbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFNvdXJjZSBvZiB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTb3VyY2Ugc2V0IGZvciB0aGUgcmVzcG9uc2l2ZSBpbWFnZXNcclxuICAgKi9cclxuICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgdGl0bGVcclxuICAgKi9cclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGF6eSBsb2FkaW5nIHByb3BlcnRpZXNcclxuICAgKi9cclxuICBsYXp5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIGxhenkgbG9hZCB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBsYXp5OiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0QWx0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgXCJMZWFybiBNb3JlXCIgbGlua1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IExlYXJuTW9yZUxpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICBjb21wb25lbnQsXHJcbiAgICB2YXJpYW50LFxyXG4gICAgdGl0bGUsXHJcbiAgICBocmVmLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvblByb3BzLFxyXG4gICAgdHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IChcclxuICAgIDw+XHJcbiAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmtfX3R5cG9ncmFwaHknLCBjbGFzc2VzLnRpdGxlKX1cclxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICAgIGNvbG9yPXtjb2xvciB8fCAncHJpbWFyeSd9XHJcbiAgICAgICAgey4uLnR5cG9ncmFwaHlQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnbGVhcm4tbW9yZS1saW5rX19pY29uLWJ1dHRvbicsIGNsYXNzZXMuaWNvbil9XHJcbiAgICAgICAgY29sb3I9e2NvbG9yIHx8ICdwcmltYXJ5J31cclxuICAgICAgICB7Li4uaWNvblByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFycm93UmlnaHRBbHRJY29uIGNsYXNzTmFtZT1cImxlYXJuLW1vcmUtbGlua19fYXJyb3dcIiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdsZWFybi1tb3JlLWxpbmsnLCBjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbkxlYXJuTW9yZUxpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gIGhyZWY6ICcjJyxcclxuICB0eXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG4gIGljb25Qcm9wczoge30sXHJcbiAgY29tcG9uZW50OiAnYScsXHJcbn07XHJcblxyXG5MZWFybk1vcmVMaW5rLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21wb25lbnQgdG8gbG9hZCBhcyBhIG1haW4gRE9NXHJcbiAgICovXHJcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2YoWydMaW5rJywgJ2EnXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFZhcmlhbnQgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJ10pLFxyXG4gIC8qKlxyXG4gICAqIEhyZWYgb2YgdGhlIGxpbmtcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIEljb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHR5cG9ncmFwaHlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXJuTW9yZUxpbms7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xlYXJuTW9yZUxpbmsnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlcic7XHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAxMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxab29tIGluPXt0cmlnZ2VyfT5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICA8RmFiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJzY3JvbGwgYmFjayB0byB0b3BcIj5cclxuICAgICAgICAgIDxLZXlib2FyZEFycm93VXBJY29uIC8+XHJcbiAgICAgICAgPC9GYWI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9ab29tPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvcDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TY3JvbGxUb3AnOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2UgfSBmcm9tICcuL0ltYWdlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uIH0gZnJvbSAnLi9JY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnLi9MZWFybk1vcmVMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uVGV4dCB9IGZyb20gJy4vSWNvblRleHQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERhcmtNb2RlVG9nZ2xlciB9IGZyb20gJy4vRGFya01vZGVUb2dnbGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxUb3AgfSBmcm9tICcuL1Njcm9sbFRvcCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tICdyZWFjdC1jb3VudHVwJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIENvdW50IFVwIE51bWJlcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDb3VudFVwTnVtYmVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHN0YXJ0LFxyXG4gICAgZW5kLFxyXG4gICAgc3VmZml4LFxyXG4gICAgcHJlZml4LFxyXG4gICAgbGFiZWwsXHJcbiAgICB0ZXh0Q29sb3IsXHJcbiAgICBsYWJlbENvbG9yLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdmlzaWJpbGl0eVNlbnNvclByb3BzLFxyXG4gICAgd3JhcHBlclByb3BzLFxyXG4gICAgY291bnRXcmFwcGVyUHJvcHMsXHJcbiAgICBjb3VudE51bWJlclByb3BzLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFt2aWV3UG9ydEVudGVyZWQsIHNldFZpZXdQb3J0RW50ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2V0Vmlld1BvcnRWaXNpYmlsaXR5ID0gaXNWaXNpYmxlID0+IHtcclxuICAgIGlmICh2aWV3UG9ydEVudGVyZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXdQb3J0RW50ZXJlZChpc1Zpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnY291bnR1cC1udW1iZXInLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXHJcbiAgICAgICAgb25DaGFuZ2U9e2lzVmlzaWJsZSA9PiBzZXRWaWV3UG9ydFZpc2liaWxpdHkoaXNWaXNpYmxlKX1cclxuICAgICAgICBkZWxheWVkQ2FsbFxyXG4gICAgICAgIHsuLi52aXNpYmlsaXR5U2Vuc29yUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX193cmFwcGVyXCIgey4uLndyYXBwZXJQcm9wc30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yIHx8ICd0ZXh0UHJpbWFyeSd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50dXAtbnVtYmVyX19jb3VudC13cmFwcGVyXCJcclxuICAgICAgICAgICAgey4uLmNvdW50V3JhcHBlclByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q291bnRVcFxyXG4gICAgICAgICAgICAgIGRlbGF5PXsxfVxyXG4gICAgICAgICAgICAgIHJlZHJhdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZW5kPXt2aWV3UG9ydEVudGVyZWQgPyBlbmQgOiBzdGFydH1cclxuICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XHJcbiAgICAgICAgICAgICAgc3VmZml4PXtzdWZmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgcHJlZml4PXtwcmVmaXggfHwgJyd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2NvdW50XCJcclxuICAgICAgICAgICAgICB7Li4uY291bnROdW1iZXJQcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj17bGFiZWxDb2xvciB8fCAndGV4dFNlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnR1cC1udW1iZXJfX2xhYmVsXCJcclxuICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvdW50VXBOdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0YXJ0OiAwLFxyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczoge30sXHJcbiAgd3JhcHBlclByb3BzOiB7fSxcclxuICBjb3VudFdyYXBwZXJQcm9wczoge30sXHJcbiAgY291bnROdW1iZXJQcm9wczoge30sXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbn07XHJcblxyXG5Db3VudFVwTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBTdWZmaXggb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIHN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgUHJlZml4IG9mIHRoZSBjb3VudCB1cCBudW1iZXJcclxuICAgKi9cclxuICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVsIHRleHQgb2YgdGhlIGNvdW50IHVwIG51bWJlclxyXG4gICAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3RhcnRpbmcgbnVtYmVyXHJcbiAgICovXHJcbiAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgLyoqXHJcbiAgICogRW5kIG51bWJlclxyXG4gICAqL1xyXG4gIGVuZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRleHQgY29sb3JcclxuICAgKi9cclxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgY29sb3JcclxuICAgKi9cclxuICBsYWJlbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBWaXNpYmlsaXR5U2Vuc29yIENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHZpc2liaWxpdHlTZW5zb3JQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgd3JhcHBlciBkaXZcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGNvdW50IHdyYXBwZXIgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudFdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgQ291bnRVcCBSZWFjdCBjb21wb25lbnRcclxuICAgKi9cclxuICBjb3VudE51bWJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsYWJlbCBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudFVwTnVtYmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db3VudFVwTnVtYmVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGVzY3JpcHRpb24gd2l0aCBDVEEnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IERlc2NyaXB0aW9uQ3RhID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBwcmltYXJ5Q3RhLFxyXG4gICAgc2Vjb25kYXJ5Q3RhLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB3cmFwcGVyUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmltYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlzU20gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IGp1c3RpZnlHcmlkID0gJ2NlbnRlcic7XHJcbiAgaWYgKGFsaWduID09PSAnbGVmdCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gaXNTbSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSBpc1NtID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgc3BhY2luZz17Mn1cclxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1jdGEnLCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3dyYXBwZXJcIiB7Li4ud3JhcHBlclByb3BzfT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX190aXRsZVwiXHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3N1YnRpdGxlXCJcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeT17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY3RhX19idXR0b24tZ3JvdXBcIlxyXG4gICAgICAgICAgey4uLmJ1dHRvbkdyb3VwUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jdGFfX3ByaW1hcnktYnV0dG9uLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICB7Li4ucHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ByaW1hcnlDdGF9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICB7c2Vjb25kYXJ5Q3RhICYmIChcclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdkZXNjcmlwdGlvbi1jdGFfX3NlY29uZGFyeS1idXR0b24td3JhcHBlcicpfVxyXG4gICAgICAgICAgICAgIHsuLi5zZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5Q3RhfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkN0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdjZW50ZXInLFxyXG4gIHdyYXBwZXJQcm9wczoge30sXHJcbiAgdGl0bGVQcm9wczoge30sXHJcbiAgc3VidGl0bGVQcm9wczoge30sXHJcbiAgYnV0dG9uR3JvdXBQcm9wczoge30sXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczoge30sXHJcbiAgc2Vjb25kYXJ5QnV0dG9uV3JhcHBlclByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uQ3RhLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByaW1hcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgcHJpbWFyeUN0YTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTZWNvbmRhcnkgQ1RBIG9mIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc2Vjb25kYXJ5Q3RhOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBBbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHdyYXBwZXIgR3JpZCBpdGVtIGNvbXBvbmVudHNcclxuICAgKi9cclxuICB3cmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGJ1dHRvbiBncm91cCBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgYnV0dG9uR3JvdXBQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgcHJpbWFyeSBidXR0b24gd3JhcHBlciBkaXYgY29udGFpbmVyXHJcbiAgICovXHJcbiAgcHJpbWFyeUJ1dHRvbldyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiB3cmFwcGVyIGRpdiBjb250YWluZXJcclxuICAgKi9cclxuICBzZWNvbmRhcnlCdXR0b25XcmFwcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkN0YTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25DdGEnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEF2YXRhciwgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgZXh0cmFTbWFsbDoge1xyXG4gICAgd2lkdGg6IDIwLFxyXG4gICAgaGVpZ2h0OiAyMCxcclxuICB9LFxyXG4gIHNtYWxsOiB7XHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gIH0sXHJcbiAgbWVkaXVtOiB7XHJcbiAgICB3aWR0aDogNzAsXHJcbiAgICBoZWlnaHQ6IDcwLFxyXG4gIH0sXHJcbiAgbGFyZ2U6IHtcclxuICAgIHdpZHRoOiA5MCxcclxuICAgIGhlaWdodDogOTAsXHJcbiAgfSxcclxuICBjaXJjbGU6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gIH0sXHJcbiAgc3F1YXJlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEljb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWNvblByb3BzLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIHNpemUsXHJcbiAgICBjb2xvcixcclxuICAgIHNoYXBlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHVzZUJhY2tncm91bmRTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yWzUwXSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGJhY2tncm91bmRDbGFzc2VzID0gdXNlQmFja2dyb3VuZFN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2ljb24tYWx0ZXJuYXRlJyxcclxuICAgICAgICBjbGFzc2VzW3NpemVdLFxyXG4gICAgICAgIGNsYXNzZXNbc2hhcGVdLFxyXG4gICAgICAgIGJhY2tncm91bmRDbGFzc2VzLmJhY2tncm91bmQsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEljb25cclxuICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgZm9udEljb25Db2xvcj17Y29sb3JbNTAwXX1cclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWFsdGVybmF0ZV9faWNvblwiXHJcbiAgICAgICAgey4uLmljb25Qcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvQXZhdGFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5JY29uQWx0ZXJuYXRlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzaXplOiAnbWVkaXVtJyxcclxuICBzaGFwZTogJ3NxdWFyZScsXHJcbiAgaWNvblByb3BzOiB7fSxcclxufTtcclxuXHJcbkljb25BbHRlcm5hdGUucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzZXMgb2YgdGhlIGZvbnQgaWNvblxyXG4gICAqL1xyXG4gIGZvbnRJY29uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaXplcyBvZiB0aGUgaWNvblxyXG4gICAqL1xyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2V4dHJhU21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIHRoZSBpY29uXHJcbiAgICovXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBjb2xvcnMucmVkLFxyXG4gICAgY29sb3JzLnBpbmssXHJcbiAgICBjb2xvcnMucHVycGxlLFxyXG4gICAgY29sb3JzLmRlZXBQdXJwbGUsXHJcbiAgICBjb2xvcnMuaW5kaWdvLFxyXG4gICAgY29sb3JzLmJsdWUsXHJcbiAgICBjb2xvcnMubGlnaHRCbHVlLFxyXG4gICAgY29sb3JzLmN5YW4sXHJcbiAgICBjb2xvcnMudGVhbCxcclxuICAgIGNvbG9ycy5ncmVlbixcclxuICAgIGNvbG9ycy5saWdodEdyZWVuLFxyXG4gICAgY29sb3JzLmxpbWUsXHJcbiAgICBjb2xvcnMueWVsbG93LFxyXG4gICAgY29sb3JzLmFtYmVyLFxyXG4gICAgY29sb3JzLm9yYW5nZSxcclxuICAgIGNvbG9ycy5kZWVwT3JhbmdlLFxyXG4gICAgY29sb3JzLmJyb3duLFxyXG4gICAgY29sb3JzLmdyZXksXHJcbiAgICBjb2xvcnMuYmx1ZUdyZXksXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogVGhlIHNoYXBlIG9mIHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gICAqL1xyXG4gIHNoYXBlOiBQcm9wVHlwZXMub25lT2YoWydjaXJjbGUnLCAnc3F1YXJlJ10pLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBJY29uIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25BbHRlcm5hdGU7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb25BbHRlcm5hdGUnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaW1hZ2VHcmlkOiB7XHJcbiAgICBwYWRkaW5nOiAnLjI1cmVtJyxcclxuICAgIHdpZHRoOiAnMTUwJScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDEuNXJlbSA0cmVtIHJnYmEoMjIsMjgsNDUsLjEpJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICBib3JkZXJTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlR3JpZEZpcnN0SXRlbToge1xyXG4gICAgbWFyZ2luVG9wOiAnNHJlbScsXHJcbiAgfSxcclxuICBpbWFnZUdyaWRMYXN0SXRlbToge1xyXG4gICAgbWFyZ2luVG9wOiAnNnJlbScsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG92ZXJsYXBlZCBpbWFnZXNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBPdmVybGFwZWRJbWFnZXMgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZTEsIGltYWdlMiwgaW1hZ2UzLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdvdmVybGFwZWQtaW1hZ2VzJywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnb3ZlcmxhcGVkLWltYWdlc19faXRlbS13cmFwcGVyJyxcclxuICAgICAgICAgICAgY2xhc3Nlcy5pbWFnZUdyaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkRmlyc3RJdGVtLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTEuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMS5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UxLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdvdmVybGFwZWQtaW1hZ2VzX19pdGVtLXdyYXBwZXInLCBjbGFzc2VzLmltYWdlR3JpZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UyLnNyY31cclxuICAgICAgICAgICAgc3JjU2V0PXtpbWFnZTIuc3Jjc2V0fVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlMi5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXBlZC1pbWFnZXNfX2l0ZW0taW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs0fSBjbGFzc05hbWU9XCJvdmVybGFwZWQtaW1hZ2VzX19pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ292ZXJsYXBlZC1pbWFnZXNfX2l0ZW0td3JhcHBlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuaW1hZ2VHcmlkLFxyXG4gICAgICAgICAgICBjbGFzc2VzLmltYWdlR3JpZExhc3RJdGVtLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpbWFnZTMuc3JjfVxyXG4gICAgICAgICAgICBzcmNTZXQ9e2ltYWdlMy5zcmNzZXR9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2UzLmFsdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxhcGVkLWltYWdlc19faXRlbS1pbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbk92ZXJsYXBlZEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJbWFnZSBpdGVtIC0gT2JqZWN0IG9mIHNyYywgc3Jjc2V0IGFuZCBhbHQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGltYWdlMTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEltYWdlIGl0ZW0gLSBPYmplY3Qgb2Ygc3JjLCBzcmNzZXQgYW5kIGFsdCBwcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgaW1hZ2UyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgaXRlbSAtIE9iamVjdCBvZiBzcmMsIHNyY3NldCBhbmQgYWx0IHByb3BlcnRpZXNcclxuICAgKi9cclxuICBpbWFnZTM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXBlZEltYWdlcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vT3ZlcmxhcGVkSW1hZ2VzJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRpc2FibGVHdXR0ZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBjdGE6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAnJjpmaXJzdC1jaGlsZCc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzZWN0aW9uIGhlYWRlcnNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgdGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGVWYXJpYW50LFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBzdWJ0aXRsZUNvbG9yLFxyXG4gICAgbGFiZWwsXHJcbiAgICBvdmVybGluZSxcclxuICAgIGZhZGVVcCxcclxuICAgIGFsaWduLFxyXG4gICAgY3RhR3JvdXAsXHJcbiAgICBkaXNhYmxlR3V0dGVyLFxyXG4gICAgdGl0bGVDbGFzc2VzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbGFiZWxQcm9wcyxcclxuICAgIHRpdGxlUHJvcHMsXHJcbiAgICBzdWJ0aXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIGRhdGEtYW9zPXtmYWRlVXAgPyAnZmFkZS11cCcgOiAnJ31cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzZWN0aW9uLWhlYWRlcicsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGRpc2FibGVHdXR0ZXIgPyBjbGFzc2VzLmRpc2FibGVHdXR0ZXIgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7b3ZlcmxpbmUgJiYgKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGp1c3RpZnk9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJfX292ZXJsaW5lLXdyYXBwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtvdmVybGluZX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsYWJlbCAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyX19sYWJlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3ZlcmxpbmVcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgYWxpZ249e2FsaWduIHx8ICdjZW50ZXInfVxyXG4gICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyX190aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGFsaWduPXthbGlnbiB8fCAnY2VudGVyJ31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ3NlY3Rpb24taGVhZGVyX190aXRsZScsXHJcbiAgICAgICAgICAgIGNsYXNzZXMudGl0bGUsXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NlcyA/IHRpdGxlQ2xhc3NlcyA6IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50IHx8ICdoNid9XHJcbiAgICAgICAgICAgIGFsaWduPXthbGlnbiB8fCAnY2VudGVyJ31cclxuICAgICAgICAgICAgY29sb3I9e3N1YnRpdGxlQ29sb3IgfHwgJ3RleHRTZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlcl9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgICAge2N0YUdyb3VwICYmIGN0YUdyb3VwLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyX19jdGEtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnk9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgd3JhcD1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyX19jdGEtY29udGFpbmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2N0YUdyb3VwLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAnc2VjdGlvbi1oZWFkZXJfX2N0YS1pdGVtLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLmN0YSxcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGVWYXJpYW50OiAnaDQnLFxyXG4gIGxhYmVsUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuU2VjdGlvbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgc2VjdGlvbiBoZWFkZXJcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxyXG4gIC8qKlxyXG4gICAqIExhYmVsIHRpdGxlIG9mIHRoZSBzZWN0aW9uIGhlYWRlclxyXG4gICAqL1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBvdmVybGluZSBjb21wb25lbnQgaW4gdGhlIHNlY3Rpb24gaGVhZGVyXHJcbiAgICovXHJcbiAgb3ZlcmxpbmU6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIHRoZSBDVEFzXHJcbiAgICovXHJcbiAgY3RhR3JvdXA6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGZhZGUgdXAgb24gc2Nyb2xsXHJcbiAgICovXHJcbiAgZmFkZVVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBIZWFkZXIgY29udGVudCAodGl0bGUsIHN1YnRpdGxlLCBDVEFzKSBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsncmlnaHQnLCAnbGVmdCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBkaXNhYmxlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIHNlY3Rpb25cclxuICAgKi9cclxuICBkaXNhYmxlR3V0dGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTdHlsZXMgY2xhc3NlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgdGl0bGUgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHRpdGxlQ2xhc3NlczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgdGl0bGVWYXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddKVxyXG4gICAgLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3ViVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlVmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICdoMScsXHJcbiAgICAnaDInLFxyXG4gICAgJ2gzJyxcclxuICAgICdoNCcsXHJcbiAgICAnaDUnLFxyXG4gICAgJ2g2JyxcclxuICAgICdzdWJ0aXRsZTEnLFxyXG4gICAgJ3N1YnRpdGxlMicsXHJcbiAgICAnYm9keTEnLFxyXG4gICAgJ2JvZHkyJyxcclxuICBdKSxcclxuICAvKipcclxuICAgKiBTdWJUaXRsZSBjb2xvclxyXG4gICAqL1xyXG4gIHN1YnRpdGxlQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAndGV4dFByaW1hcnknLFxyXG4gICAgJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgJ3ByaW1hcnknLFxyXG4gICAgJ3NlY29uZGFyeScsXHJcbiAgXSksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIGxhYmVsIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBzdWJ0aXRsZSBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWN0aW9uSGVhZGVyJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgc3dpcGVyU2xpZGU6IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgfSxcclxuICBzd2lwZXJOYXY6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiA4OCxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgekluZGV4OiA0LFxyXG4gICAgJyYgLnN3aXBlci1idXR0b24tcHJldiwgJiAuc3dpcGVyLWJ1dHRvbi1uZXh0Jzoge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcbiAgICAgICcmOmFmdGVyJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJiAuc3dpcGVyLWJ1dHRvbi1wcmV2Jzoge1xyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmIC5zd2lwZXItYnV0dG9uLW5leHQnOiB7XHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBpbWFnZSBzd2lwZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTd2lwZXJJbWFnZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSxcclxuICAgIGltYWdlQ2xhc3NOYW1lLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc3dpcGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgJ3N3aXBlci1pbWFnZScsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWltYWdlX193cmFwcGVyLCBzd2lwZXItd3JhcHBlclwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAnc3dpcGVyLWltYWdlX19zbGlkZScsXHJcbiAgICAgICAgICAgICAgJ3N3aXBlci1zbGlkZScsXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcy5zd2lwZXJTbGlkZSxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgICAgIHNyY1NldD17aXRlbS5zcmNTZXR9XHJcbiAgICAgICAgICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9faXRlbScsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VDbGFzc05hbWUgPyBpbWFnZUNsYXNzTmFtZSA6IHt9LFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24nLCBjbGFzc2VzLnN3aXBlck5hdil9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ3N3aXBlci1pbWFnZV9fbmF2aWdhdGlvbi1idXR0b24nLFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbi0tcHJldicsXHJcbiAgICAgICAgICAgICdzd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQnV0dG9uU3R5bGUgfHwge30sXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnc3dpcGVyLWltYWdlX19uYXZpZ2F0aW9uLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICdzd2lwZXItaW1hZ2VfX25hdmlnYXRpb24tYnV0dG9uLS1uZXh0JyxcclxuICAgICAgICAgICAgJ3N3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CdXR0b25TdHlsZSB8fCB7fSxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3dpcGVySW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3NlcyBmb3IgdGhlIGltYWdlc1xyXG4gICAqL1xyXG4gIGltYWdlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiBpbWFnZXMgb2JqZWN0IHdoaWNoIHNob3VsZCBjb25zaXN0IG9mIHNyYywgYWx0IGFuZCBzcmNzZXQgYXR0cmlidXRlc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN0eWxlcyBjbGFzc2VzIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvblxyXG4gICAqL1xyXG4gIG5hdmlnYXRpb25CdXR0b25TdHlsZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXBlckltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Td2lwZXJJbWFnZSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzd2lwZXJTbGlkZToge1xyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg2KSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBudW1iZXI6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG51bWJlciBzd2lwZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBTd2lwZXJOdW1iZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBudW1iZXJQcm9wcyxcclxuICAgIGxhYmVsUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogaXNNZCA/IDQgOiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICdzd2lwZXItbnVtYmVyJyxcclxuICAgICAgICAnc3dpcGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX193cmFwcGVyIHN3aXBlci13cmFwcGVyXCI+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICdzd2lwZXItbnVtYmVyX19pdGVtJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzLnN3aXBlclNsaWRlLFxyXG4gICAgICAgICAgICAgICdzd2lwZXItc2xpZGUnLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJ2F1dG8nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd2lwZXItbnVtYmVyX19pdGVtLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbnVtYmVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdzd2lwZXItbnVtYmVyX19udW1iZXInLCBjbGFzc2VzLm51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5udW1iZXJQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbGFiZWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLW51bWJlcl9fcGFnaW5hdGlvbiBzd2lwZXItcGFnaW5hdGlvblwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3dpcGVyTnVtYmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBudW1iZXJQcm9wczoge30sXHJcbiAgbGFiZWxQcm9wczoge30sXHJcbn07XHJcblxyXG5Td2lwZXJOdW1iZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIG51bWJlcnMgb2JqZWN0IHdoaWNoIHNob3VsZCBjb25zaXN0IG9mIG51bWJlciBhbmQgdGl0bGVcclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIG51bWJlciBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG51bWJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIFRoZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgbGFiZWwgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpcGVyTnVtYmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Td2lwZXJOdW1iZXInO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgdHlwZWQgYW5pbWF0ZWQgdGV4dHNcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBUeXBlZFRleHQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHR5cGVkUHJvcHMsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHlcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCd0eXBlZC10ZXh0JywgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxUeXBlZCBjbGFzc05hbWU9XCJ0eXBlZC10ZXh0X19pdGVtXCIgey4uLnR5cGVkUHJvcHN9IC8+XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufTtcclxuXHJcblR5cGVkVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiByZWFjdC10eXBlZCBwcm9wZXJ0aWVzLiBGb3IgbW9yZSBpbmZvIHZpc2l0IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXR5cGVkXHJcbiAgICovXHJcbiAgdHlwZWRQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZWRUZXh0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UeXBlZFRleHQnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb25IZWFkZXIgfSBmcm9tICcuL1NlY3Rpb25IZWFkZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25BbHRlcm5hdGUgfSBmcm9tICcuL0ljb25BbHRlcm5hdGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3aXBlckltYWdlIH0gZnJvbSAnLi9Td2lwZXJJbWFnZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzY3JpcHRpb25DdGEgfSBmcm9tICcuL0Rlc2NyaXB0aW9uQ3RhJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3VudFVwTnVtYmVyIH0gZnJvbSAnLi9Db3VudFVwTnVtYmVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBPdmVybGFwZWRJbWFnZXMgfSBmcm9tICcuL092ZXJsYXBlZEltYWdlcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpcGVyTnVtYmVyIH0gZnJvbSAnLi9Td2lwZXJOdW1iZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR5cGVkVGV4dCB9IGZyb20gJy4vVHlwZWRUZXh0JztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgR3JpZCxcclxuICBBY2NvcmRpb24gYXMgTXVpQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvblN1bW1hcnkgYXMgTXVpQWNjb3JkaW9uU3VtbWFyeSxcclxuICBBY2NvcmRpb25EZXRhaWxzIGFzIE11aUFjY29yZGlvbkRldGFpbHMsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5cclxuaW1wb3J0IHsgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgZXhwYW5kT3Blbjoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSBhY2NvcmRpb24gdmlld1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBBY2NvcmRpb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIHRleHRQcm9wcyxcclxuICAgIGxpbmtQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgey4uLnJlc3R9IGNsYXNzTmFtZT17Y2xzeCgnYWNjb3JkaW9uJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfT5cclxuICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICA8TXVpQWNjb3JkaW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2FjY29yZGlvbl9faXRlbS13cmFwcGVyJywgY2xhc3Nlcy5saXN0SXRlbSl9XHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE11aUFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtgJHtpdGVtLmlkfS1jb250ZW50YH1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9faXRlbS10ZXh0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiYWNjb3Jpb25fX2l0ZW0tdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3Jpb25faXRlbS10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2l0ZW0uc3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImFjY29yaW9uX2l0ZW0tc3VidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nvcmlvbl9pdGVtLXN1YnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uc3VidGl0bGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9NdWlBY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgPE11aUFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbGxhcHNhYmxlLXRleHQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpdGVtLmxpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29sbGFwc2FibGUtbGluay13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExlYXJuTW9yZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb2xsYXBzYWJsZS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGlua1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvTXVpQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L011aUFjY29yZGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQWNjb3JkaW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICB0ZXh0UHJvcHM6IHt9LFxyXG4gIGxpbmtQcm9wczoge30sXHJcbn07XHJcblxyXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIENsYXNzbmFtZSBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEl0ZW1zIHRvIHNob3cgaW5zaWRlIHRoZSBhY2NvcmRpb25cclxuICAgKi9cclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBwYXNzIHRvIHRoZSBsaW5rIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxpbmtQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWNjb3JkaW9uJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3aXRoU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6IGAwIDJweCAxMHB4IDAgJHt0aGVtZS5wYWxldHRlLmNhcmRTaGFkb3d9YCxcclxuICB9LFxyXG4gIG5vU2hhZG93OiB7XHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICB9LFxyXG4gIG5vQm9yZGVyOiB7XHJcbiAgICBib3JkZXI6IDAsXHJcbiAgfSxcclxuICBub0JnOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gIH0sXHJcbiAgbGlmdFVwOiB7XHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICAnYm94LXNoYWRvdyAuMjVzIGVhc2UsdHJhbnNmb3JtIC4yNXMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAnMCAxLjVyZW0gMi41cmVtIHJnYmEoMjIsMjgsNDUsLjEpLDAgLjNyZW0gMC41cmVtIC0uNTByZW0gcmdiYSgyMiwyOCw0NSwuMDUpICFpbXBvcnRhbnQnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLC01cHgsMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMiksXHJcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAzKSxcclxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxlZnQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGJhc2ljIGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQmFzZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB3aXRoU2hhZG93LFxyXG4gICAgbm9TaGFkb3csXHJcbiAgICBub0JvcmRlcixcclxuICAgIG5vQmcsXHJcbiAgICBsaWZ0VXAsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgY2FyZENvbnRlbnRQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnY2FyZC1iYXNlJyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgd2l0aFNoYWRvdyA/IGNsYXNzZXMud2l0aFNoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vU2hhZG93ID8gY2xhc3Nlcy5ub1NoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vQm9yZGVyID8gY2xhc3Nlcy5ub0JvcmRlciA6IHt9LFxyXG4gICAgICAgIG5vQmcgPyBjbGFzc2VzLm5vQmcgOiB7fSxcclxuICAgICAgICBsaWZ0VXAgPyBjbGFzc2VzLmxpZnRVcCA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1iYXNlX19jb250ZW50JywgY2xhc3Nlcy5jb250ZW50LCBjbGFzc2VzW2FsaWduXSl9XHJcbiAgICAgICAgey4uLmNhcmRDb250ZW50UHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRCYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgY2FyZENvbnRlbnRQcm9wczoge30sXHJcbn07XHJcblxyXG5DYXJkQmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY2hpbGRyZW4gY29udGVudCBvZiB0aGUgYmFzaWMgY2FyZFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjdXN0b20gc2hhZG93XHJcbiAgICovXHJcbiAgd2l0aFNoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIGNhcmQgd2l0aG91dCBzaGFkb3dcclxuICAgKi9cclxuICBub1NoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYXJkIGJvcmRlcnNcclxuICAgKi9cclxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IHRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgKi9cclxuICBub0JnOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGxpZnQgdXAgb24gaG92ZXJcclxuICAgKi9cclxuICBsaWZ0VXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIENhcmRDb250ZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNhcmRDb250ZW50UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQmFzZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEJhc2UnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlLCBEZXNjcmlwdGlvbkxpc3RJY29uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGNhdGVnb3J5IGNhcmRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkQ2F0ZWdvcnkgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBpY29uLCB0aXRsZSwgYWxpZ24sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxEZXNjcmlwdGlvbkxpc3RJY29uIGljb249e2ljb259IHRpdGxlPXt0aXRsZX0gYWxpZ249e2FsaWdufSAvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbn07XHJcblxyXG5DYXJkQ2F0ZWdvcnkucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogSWNvbiB0byBzaG93IGluc2lkZSB0aGUgY2F0ZWdvcnkgY2FyZFxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ2F0ZWdvcnkgdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhdGVnb3J5IGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDYXRlZ29yeTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENhdGVnb3J5JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0QWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodEFsdCc7XHJcbmltcG9ydCB7IEljb25BbHRlcm5hdGUgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGZvbnRXZWlnaHQ3MDA6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGNhdGVnb3J5SWNvbkJ1dHRvbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcnkgbGluayBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZENhdGVnb3J5TGluayA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBmb250SWNvbkNsYXNzLFxyXG4gICAgY29sb3IsXHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgaHJlZixcclxuICAgIGFsaWduLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgaWNvbkFsdGVybmF0ZVByb3BzLFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtY2F0ZWdvcnktbGluaycsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJjYXJkLWNhdGVnb3J5LWxpbmtfX3dyYXBwZXJcIj5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PXtqdXN0aWZ5R3JpZH0geHM9ezEyfT5cclxuICAgICAgICAgIDxJY29uQWx0ZXJuYXRlXHJcbiAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9e2ZvbnRJY29uQ2xhc3N9XHJcbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgIHsuLi5pY29uQWx0ZXJuYXRlUHJvcHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb250V2VpZ2h0NzAwfVxyXG4gICAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgIGFsaWduPXthbGlnbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIHsuLi5zdWJ0aXRsZVByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWNhdGVnb3J5LWxpbmtfX2l0ZW0nLCBjbGFzc2VzLmNhdGVnb3J5SWNvbkJ1dHRvbil9XHJcbiAgICAgID5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkLWNhdGVnb3J5LWxpbmtfX2ljb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICA8QXJyb3dSaWdodEFsdEljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1jYXRlZ29yeS1saW5rX19pY29uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGNvbG9yWzUwMF0gfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZENhdGVnb3J5TGluay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBocmVmOiAnIycsXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiB7fSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRDYXRlZ29yeUxpbmsucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHN1YnRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZGVzY3JpcHRpb24gdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIEljb25BbHRlcm5hdGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgaWNvbkFsdGVybmF0ZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhdGVnb3J5TGluaztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENhdGVnb3J5TGluayc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1BdmF0YXIsXHJcbiAgQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdEJpZzoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGpvYlRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBiYWRnZUNvbG9yLFxyXG4gICAgYmFkZ2VUaXRsZSxcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBqb2JUeXBlLFxyXG4gICAgam9iRGF0ZSxcclxuICAgIGNvbXBhbnlMb2dvLFxyXG4gICAgY29tcGFueU5hbWUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEJhc2VcclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLWpvYicsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgeHM9ezEyfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RCaWcpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWRnZUNvbG9yIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cclxuICAgICAgICAgICAge2JhZGdlVGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2JUaXRsZX0+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JUeXBlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2NvbXBhbnlMb2dvfSBhbHQ9e2NvbXBhbnlOYW1lfSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtjb21wYW55TmFtZX0gc2Vjb25kYXJ5PXtqb2JEYXRlfSAvPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9DYXJkQmFzZT5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZEpvYi5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWRnZSBjb2xvciBvZiB0aGUgam9iIGNhcmRcclxuICAgKi9cclxuICBiYWRnZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgdGl0bGUgb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdHlwZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgbG9jYXRpb24gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBsb2dvIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IG5hbWUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuaW1wb3J0IHsgTGVhcm5Nb3JlTGluayB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGNvbXBhbnlBdmF0YXI6IHtcclxuICAgIHdpZHRoOiA2MCxcclxuICAgIGhlaWdodDogNjAsXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGNvbXBhbnlOYW1lOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkIGNvbXBhbnlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iQ29tcGFueSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBqb2JUaXRsZSxcclxuICAgIGpvYkxvY2F0aW9uLFxyXG4gICAgY29tcGFueUxvZ28sXHJcbiAgICBjb21wYW55TmFtZSxcclxuICAgIGpvYnNDb3VudCxcclxuICAgIGNvbXBhbnlJbmZvLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1jb21wYW55JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc3JjPXtjb21wYW55TG9nb31cclxuICAgICAgICAgICAgYWx0PXtjb21wYW55TmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlBdmF0YXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueU5hbWV9PlxyXG4gICAgICAgICAgICB7Y29tcGFueU5hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRvdCwgY2xhc3Nlcy5kb3RTbWFsbCwgY2xhc3Nlcy5kb3RNYXJnaW4pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIiB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxMZWFybk1vcmVMaW5rIHRpdGxlPXtqb2JzQ291bnR9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHtjb21wYW55SW5mb31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JDb21wYW55LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYlRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIGxvY2F0aW9uIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9iTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBDb21wYW55IGxvZ28gb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb21wYW55TG9nbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIENvbXBhbnkgbmFtZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGNvbXBhbnlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ291bnQgb2YgdGhlIGpvYnMgaW4gdGhlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgam9ic0NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ29tcGFueSBpbmZvIGluIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgY29tcGFueUluZm86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRKb2JDb21wYW55O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iQ29tcGFueSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyOiBgc29saWQgMXB4IHJnYmEoNDMsIDQxLCA0NSwgMC4yKWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICcwIDExcHggNTVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyksIDAgMTNweCAxOHB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjE1KScsXHJcbiAgICAgICcmIC5jYXJkLWpvYi1taW5pbWFsX190aXRsZSwgJiAuY2FyZC1qb2ItbWluaW1hbF9fbG9jYXRpb24sICYgLmNhcmQtam9iLW1pbmltYWxfX2Fycm93Jzoge1xyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEpvYk1pbmltYWxCb2R5OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkIGNvbXBhbnlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBDYXJkSm9iTWluaW1hbCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgc2hvd0Fycm93LFxyXG4gICAgdGl0bGVQcm9wcyxcclxuICAgIHN1YnRpdGxlUHJvcHMsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsICdjYXJkLWpvYi1taW5pbWFsJyl9IHsuLi5yZXN0fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmNhcmRKb2JNaW5pbWFsQm9keSwgJ2NhcmQtam9iLW1pbmltYWxfX2JvZHknKX1cclxuICAgICAgICBzdHlsZT17IXNob3dBcnJvdyA/IHsgbWFyZ2luUmlnaHQ6IDAgfSA6IHt9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgJ2NhcmQtam9iLW1pbmltYWxfX3RpdGxlJyl9XHJcbiAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19sb2NhdGlvbi1jb25hdGluZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtam9iLW1pbmltYWxfX2xvY2F0aW9uXCJcclxuICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93QXJyb3cgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19hcnJvdy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIGZvbnRJY29uQ2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIlxyXG4gICAgICAgICAgICBmb250SWNvbkNvbG9yPXtjb2xvcnMuZ3JleVs3MDBdfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWpvYi1taW5pbWFsX19hcnJvd1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkSm9iTWluaW1hbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd0Fycm93OiBmYWxzZSxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRKb2JNaW5pbWFsLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEpvYiB0aXRsZSBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHN1YnRpdGxlIG9mIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBhcnJvdyBvciBub3RcclxuICAgKi9cclxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEpvYk1pbmltYWw7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRKb2JNaW5pbWFsJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBjb2xvcnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3JkZXJSaWdodDogYCR7dGhlbWUuc3BhY2luZygxKX1weCBzb2xpZCAke2NvbG9ycy5yZWRbNTAwXX1gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRvdDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGRvdEJpZzoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBkb3RTbWFsbDoge1xyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxyXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICB9LFxyXG4gIGpvYlRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkb3RNYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICB9LFxyXG4gIHRhZzoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxIC8gMiksXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZEpvYlRhZyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBiYWRnZUNvbG9yLFxyXG4gICAgYmFkZ2VUaXRsZSxcclxuICAgIGpvYlRpdGxlLFxyXG4gICAgam9iTG9jYXRpb24sXHJcbiAgICBqb2JUeXBlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IGFsaWduPVwibGVmdFwiIHsuLi5yZXN0fT5cclxuICAgICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ31cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWRnZUNvbG9yLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBiYWRnZUNvbG9yLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRXaGl0ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtiYWRnZVRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2JUaXRsZX0+XHJcbiAgICAgICAgICAgIHtqb2JUaXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB4cz17MTJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7am9iTG9jYXRpb259XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kb3QsIGNsYXNzZXMuZG90U21hbGwsIGNsYXNzZXMuZG90TWFyZ2luKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtqb2JUeXBlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8Lz5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRKb2JUYWcucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFkZ2UgY29sb3Igb2YgdGhlIGpvYiBjYXJkXHJcbiAgICovXHJcbiAgYmFkZ2VDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEJhZGdlIHRpdGxlIG9mIHRoZSBqb2IgY2FyZFxyXG4gICAqL1xyXG4gIGJhZGdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBKb2IgdGl0bGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEpvYiBsb2NhdGlvbiBvZiB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIGpvYkxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogSm9iIHR5cGUgb2YgdGhlIGNhcmRcclxuICAgKi9cclxuICBqb2JUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSm9iVGFnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkSm9iVGFnJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBMaXN0SXRlbSwgRGl2aWRlciwgTGlzdCwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZmVhdHVyZUNoZWNrOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIGpvYiBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFByaWNpbmdTdGFuZGFyZCA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlLFxyXG4gICAgcHJpY2VDb21wb25lbnQsXHJcbiAgICBmZWF0dXJlQ2hlY2tDb21wb25lbnQsXHJcbiAgICBmZWF0dXJlcyxcclxuICAgIGN0YSxcclxuICAgIGRpc2NsYWltZXIsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGRpc2NsYWltZXJQcm9wcyxcclxuICAgIGZlYXR1cmVUaXRsZVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCYXNlXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY2FyZC1wcmljaW5nLXN0YW5kYXJkJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fd3JhcHBlclwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2hlYWRsaW5lXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX190aXRsZVwiXHJcbiAgICAgICAgICAgIHsuLi50aXRsZVByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19zdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2RpdmlkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2RpdmlkZXJcIiAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19jb250ZW50XCI+XHJcbiAgICAgICAgICB7cHJpY2VDb21wb25lbnR9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtmZWF0dXJlcyAmJiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19mZWF0dXJlLWxpc3RcIj5cclxuICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJzXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS1saXN0LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZUNoZWNrQ29tcG9uZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYXJkLXByaWNpbmctc3RhbmRhcmRfX2ZlYXR1cmUtY2hlY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLmZlYXR1cmVDaGVjayxcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVDaGVja0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJpY2luZy1zdGFuZGFyZF9fZmVhdHVyZS10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZlYXR1cmVUaXRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByaWNpbmctc3RhbmRhcmRfX2N0YS13cmFwcGVyXCI+XHJcbiAgICAgICAgICB7Y3RhfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7ZGlzY2xhaW1lciAmJiAoXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXNjbGFpbWVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcmljaW5nLXN0YW5kYXJkX19kaXNjbGFpbWVyLXRpdGxlXCJcclxuICAgICAgICAgICAgICB7Li4uZGlzY2xhaW1lclByb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Rpc2NsYWltZXJ9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NhcmRCYXNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJpY2luZ1N0YW5kYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxuICBkaXNjbGFpbWVyUHJvcHM6IHt9LFxyXG4gIGZlYXR1cmVUaXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkNhcmRQcmljaW5nU3RhbmRhcmQucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqICBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqICBTdWJ0aXRsZSBvZiB0aGUgcHJpY2luZyBjYXJkXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHByaWNpbmcgY29tcG9uZW50IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBwcmljZUNvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgZmVhdHVyZXMgY2hlY2sgY29tcG9uZW50IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBmZWF0dXJlQ2hlY2tDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEZlYXR1cmVzIGFycmF5IG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBmZWF0dXJlczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIC8qKlxyXG4gICAqICBDVEEgYnV0dG9uIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBjdGE6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogRGljbGFpbWVyIG9mIHRoZSBwcmljaW5nIGNhcmRcclxuICAgKi9cclxuICBkaXNjbGFpbWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgZGlzY2xhaW1lciBUeXBvZ3JhcGh5IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGRpc2NsYWltZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGZlYXR1cmUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBmZWF0dXJlVGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcmljaW5nU3RhbmRhcmQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRQcmljaW5nU3RhbmRhcmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2l0aFNoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiBgMCAycHggMTBweCAwICR7dGhlbWUucGFsZXR0ZS5jYXJkU2hhZG93fWAsXHJcbiAgfSxcclxuICBub1NoYWRvdzoge1xyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgfSxcclxuICBub0JvcmRlcjoge1xyXG4gICAgYm9yZGVyOiAwLFxyXG4gIH0sXHJcbiAgbm9CZzoge1xyXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICB9LFxyXG4gIGxpZnRVcDoge1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgJ2JveC1zaGFkb3cgLjI1cyBlYXNlLHRyYW5zZm9ybSAuMjVzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgJzAgMS41cmVtIDIuNXJlbSByZ2JhKDIyLDI4LDQ1LC4xKSwwIC4zcmVtIDAuNXJlbSAtLjUwcmVtIHJnYmEoMjIsMjgsNDUsLjA1KSAhaW1wb3J0YW50JyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwtNXB4LDApJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBoZWlnaHQ6IDMwMCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCwgMiksXHJcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQsIDIpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAzKSxcclxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDMpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxlZnQ6IHtcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG4gIHJpZ2h0OiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgY2VudGVyOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHByb2R1Y3QgY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcm9kdWN0ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG1lZGlhQ2xhc3NOYW1lLFxyXG4gICAgd2l0aFNoYWRvdyxcclxuICAgIG5vU2hhZG93LFxyXG4gICAgbm9Cb3JkZXIsXHJcbiAgICBub0JnLFxyXG4gICAgbGlmdFVwLFxyXG4gICAgY2FyZENvbnRlbnQsXHJcbiAgICBtZWRpYUNvbnRlbnQsXHJcbiAgICBhbGlnbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnY2FyZC1wcm9kdWN0JyxcclxuICAgICAgICBjbGFzc2VzLnJvb3QsXHJcbiAgICAgICAgd2l0aFNoYWRvdyA/IGNsYXNzZXMud2l0aFNoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vU2hhZG93ID8gY2xhc3Nlcy5ub1NoYWRvdyA6IHt9LFxyXG4gICAgICAgIG5vQm9yZGVyID8gY2xhc3Nlcy5ub0JvcmRlciA6IHt9LFxyXG4gICAgICAgIG5vQmcgPyBjbGFzc2VzLm5vQmcgOiB7fSxcclxuICAgICAgICBsaWZ0VXAgPyBjbGFzc2VzLmxpZnRVcCA6IHt9LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcHJvZHVjdF9fbWVkaWEnLCBjbGFzc2VzLm1lZGlhLCBtZWRpYUNsYXNzTmFtZSl9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVkaWFDb250ZW50fVxyXG4gICAgICA8L0NhcmRNZWRpYT5cclxuICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgJ2NhcmQtcHJvZHVjdF9fY29udGVudCcsXHJcbiAgICAgICAgICBjbGFzc2VzLmNvbnRlbnQsXHJcbiAgICAgICAgICBjbGFzc2VzW2FsaWduXSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NhcmRDb250ZW50fVxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYXJkUHJvZHVjdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxufTtcclxuXHJcbkNhcmRQcm9kdWN0LnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXMgZm9yIHRoZSBtZWRpYVxyXG4gICAqL1xyXG4gIG1lZGlhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjdXN0b20gc2hhZG93XHJcbiAgICovXHJcbiAgd2l0aFNoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIGNhcmQgd2l0aG91dCBzaGFkb3dcclxuICAgKi9cclxuICBub1NoYWRvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYXJkIGJvcmRlcnNcclxuICAgKi9cclxuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBzaG93IHRyYW5zcGFyZW50IGJhY2tncm91bmRcclxuICAgKi9cclxuICBub0JnOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGxpZnQgdXAgb24gaG92ZXJcclxuICAgKi9cclxuICBsaWZ0VXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBDYXJkIGNvbnRlbnRcclxuICAgKi9cclxuICBjYXJkQ29udGVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBDYXJkIE1lZGlhIGNvbnRlbnRcclxuICAgKi9cclxuICBtZWRpYUNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBhbGlnbm1lbnRcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJvZHVjdDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZFByb2R1Y3QnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSWNvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgQ2FyZEJhc2UgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodDcwMDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgcHJvbW8gY2FyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IENhcmRQcm9tbyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZUNvbG9yLFxyXG4gICAgZm9udEljb25DbGFzcyxcclxuICAgIGNvbG9yLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgYWxpZ24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBpY29uQWx0ZXJuYXRlUHJvcHMsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIGRlc2NyaXB0aW9uUHJvcHMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGxldCBqdXN0aWZ5R3JpZCA9ICdmbGV4LXN0YXJ0JztcclxuICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XHJcbiAgICBqdXN0aWZ5R3JpZCA9ICdjZW50ZXInO1xyXG4gIH0gZWxzZSBpZiAoYWxpZ24gPT09ICdyaWdodCcpIHtcclxuICAgIGp1c3RpZnlHcmlkID0gJ2ZsZXgtZW5kJztcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmRfX3Byb21vJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcHJvbW9fX3dyYXBwZXJcIj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBqdXN0aWZ5PXtqdXN0aWZ5R3JpZH1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJvbW9fX2ljb24td3JhcHBlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25BbHRlcm5hdGVcclxuICAgICAgICAgICAgZm9udEljb25DbGFzcz17Zm9udEljb25DbGFzc31cclxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1wcm9tb19faWNvblwiXHJcbiAgICAgICAgICAgIHsuLi5pY29uQWx0ZXJuYXRlUHJvcHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcm9tb19fdGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcHJvbW9fX3RpdGxlJywgY2xhc3Nlcy5mb250V2VpZ2h0NzAwKX1cclxuICAgICAgICAgICAgY29sb3I9e3RpdGxlQ29sb3IgfHwgJ3RleHRQcmltYXJ5J31cclxuICAgICAgICAgICAgey4uLnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge3N1YnRpdGxlICYmIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9XCJjYXJkLXByb21vX19zdWJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjYXJkLXByb21vX19zdWJ0aXRsZScsIGNsYXNzZXMuZm9udFdlaWdodDcwMCl9XHJcbiAgICAgICAgICAgICAgey4uLnN1YnRpdGxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiY2FyZC1wcm9tb19fZGVzY3JpcHRpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcHJvbW9fX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICB7Li4uZGVzY3JpcHRpb25Qcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRQcm9tby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxpZ246ICdsZWZ0JyxcclxuICBpY29uQWx0ZXJuYXRlUHJvcHM6IHt9LFxyXG4gIHRpdGxlUHJvcHM6IHt9LFxyXG4gIHN1YnRpdGxlUHJvcHM6IHt9LFxyXG4gIGRlc2NyaXB0aW9uUHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFByb21vLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIHRpdGxlIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBQcm9tbyBzdWJ0aXRsZSB0byBzaG93IGluc2lkZSB0aGUgY2FyZFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGRlc2NyaXB0aW9uIHRvIHNob3cgaW5zaWRlIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogUHJvbW8gZm9udCBpY29uIGNsYXNzIG5hbWUgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBmb250SWNvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIFByb21vIGljb24gY29sb3IgdG8gc2hvdyBpbnNpZGUgdGhlIGNhcmRcclxuICAgKi9cclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIGNvbG9ycy5yZWQsXHJcbiAgICBjb2xvcnMucGluayxcclxuICAgIGNvbG9ycy5wdXJwbGUsXHJcbiAgICBjb2xvcnMuZGVlcFB1cnBsZSxcclxuICAgIGNvbG9ycy5pbmRpZ28sXHJcbiAgICBjb2xvcnMuYmx1ZSxcclxuICAgIGNvbG9ycy5saWdodEJsdWUsXHJcbiAgICBjb2xvcnMuY3lhbixcclxuICAgIGNvbG9ycy50ZWFsLFxyXG4gICAgY29sb3JzLmdyZWVuLFxyXG4gICAgY29sb3JzLmxpZ2h0R3JlZW4sXHJcbiAgICBjb2xvcnMubGltZSxcclxuICAgIGNvbG9ycy55ZWxsb3csXHJcbiAgICBjb2xvcnMuYW1iZXIsXHJcbiAgICBjb2xvcnMub3JhbmdlLFxyXG4gICAgY29sb3JzLmRlZXBPcmFuZ2UsXHJcbiAgICBjb2xvcnMuYnJvd24sXHJcbiAgICBjb2xvcnMuZ3JleSxcclxuICAgIGNvbG9ycy5ibHVlR3JleSxcclxuICBdKS5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZW50IGFsaWdubWVudFxyXG4gICAqL1xyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcclxuICAvKipcclxuICAgKiBUaXRsZSBjb2xvclxyXG4gICAqL1xyXG4gIHRpdGxlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBJY29uQWx0ZXJuYXRlIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGljb25BbHRlcm5hdGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHN1YnRpdGxlIFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIGRlc2NpcHRpb24gVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBkZXNjcmlwdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFByb21vO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUHJvbW8nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENhcmRCYXNlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHJldmlldyBjYXJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgQ2FyZFJldmlldyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpY29uLFxyXG4gICAgdGV4dCxcclxuICAgIGF1dGhvclBob3RvLFxyXG4gICAgYXV0aG9yTmFtZSxcclxuICAgIGF1dGhvclRpdGxlLFxyXG4gICAgYWxpZ24sXHJcbiAgICB0ZXh0VmFyaWFudCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHRleHRQcm9wcyxcclxuICAgIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgIGxpc3RJdGVtU2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBsZXQganVzdGlmeUdyaWQgPSAnY2VudGVyJztcclxuICBpZiAoYWxpZ24gPT09ICdsZWZ0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1zdGFydCc7XHJcbiAgfSBlbHNlIGlmIChhbGlnbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAganVzdGlmeUdyaWQgPSAnZmxleC1lbmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQmFzZVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2NhcmQtcmV2aWV3JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X193cmFwcGVyXCI+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAganVzdGlmeT17anVzdGlmeUdyaWR9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19faWNvbi13cmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aWNvbn1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X190ZXh0LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e3RleHRWYXJpYW50fVxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnk9e2p1c3RpZnlHcmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXJldmlld19fbGlzdC13cmFwcGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmcgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3RcIj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19saXN0LWl0ZW0tYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yUGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtcmV2aWV3X19hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1yZXZpZXdfX2xpc3QtaXRlbS10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YXV0aG9yTmFtZX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXthdXRob3JUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ2FyZEJhc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbkNhcmRSZXZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsaWduOiAnY2VudGVyJyxcclxuICB0ZXh0VmFyaWFudDogJ2g2JyxcclxuICB0ZXh0UHJvcHM6IHt9LFxyXG4gIGxpc3RJdGVtUHJpbWFyeVR5cG9ncmFwaHlQcm9wczoge30sXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IHt9LFxyXG59O1xyXG5cclxuQ2FyZFJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBJY29uIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZFxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3IHRleHQgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFJldmlld2VyIHBob3RvIHRvIHNob3cgaW5zaWRlIHRoZSByZXZpZXcgY2FyZC5TaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBzcmNTZXQgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGF1dGhvclBob3RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgbmFtZSB0byBzaG93IGluc2lkZSB0aGUgcmV2aWV3IGNhcmRcclxuICAgKi9cclxuICBhdXRob3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogUmV2aWV3ZXIgdGl0bGUgdG8gc2hvdyBpbnNpZGUgdGhlIHJldmlldyBjYXJkXHJcbiAgICovXHJcbiAgYXV0aG9yVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50IG9mIHRoZSBjb250ZW50XHJcbiAgICovXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxyXG4gIC8qKlxyXG4gICAqIFJldmlldyB0ZXh0IHZhcmlhbnRcclxuICAgKi9cclxuICB0ZXh0VmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIHByb3BzIHRvIHBhc3MgdG8gdGhlIHRleHQgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0ZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBwcm9wcyB0byBwYXNzIHRvIHRoZSBsaXN0IGl0ZW0gcHJpbWFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1QcmltYXJ5VHlwb2dyYXBoeVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgbGlzdCBpdGVtIHNlY29uZGFyeSB0ZXh0IFR5cG9ncmFwaHkgY29tcG9uZW50XHJcbiAgICovXHJcbiAgbGlzdEl0ZW1TZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUmV2aWV3O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAndmFsaWRhdGUuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc2NoZW1hID0ge1xyXG4gIGZ1bGxuYW1lOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDEyOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgcHJlc2VuY2U6IHsgYWxsb3dFbXB0eTogZmFsc2UsIG1lc3NhZ2U6ICdpcyByZXF1aXJlZCcgfSxcclxuICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgbGVuZ3RoOiB7XHJcbiAgICAgIG1heGltdW06IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICBwcmVzZW5jZTogeyBhbGxvd0VtcHR5OiBmYWxzZSwgbWVzc2FnZTogJ2lzIHJlcXVpcmVkJyB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlczoge30sXHJcbiAgICB0b3VjaGVkOiB7fSxcclxuICAgIGVycm9yczoge30sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZShmb3JtU3RhdGUudmFsdWVzLCBzY2hlbWEpO1xyXG5cclxuICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGUgPT4gKHtcclxuICAgICAgLi4uZm9ybVN0YXRlLFxyXG4gICAgICBpc1ZhbGlkOiBlcnJvcnMgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGVycm9yczogZXJyb3JzIHx8IHt9LFxyXG4gICAgfSkpO1xyXG4gIH0sIFtmb3JtU3RhdGUudmFsdWVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnBlcnNpc3QoKTtcclxuXHJcbiAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlID0+ICh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgLi4uZm9ybVN0YXRlLnZhbHVlcyxcclxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOlxyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCdcclxuICAgICAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hlZDoge1xyXG4gICAgICAgIC4uLmZvcm1TdGF0ZS50b3VjaGVkLFxyXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzRXJyb3IgPSBmaWVsZCA9PlxyXG4gICAgZm9ybVN0YXRlLnRvdWNoZWRbZmllbGRdICYmIGZvcm1TdGF0ZS5lcnJvcnNbZmllbGRdID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgbmFtZT1cImNvbnRhY3QtZm9ybVwiXHJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgYWN0aW9uPVwiL3N1Ym1pdGlvbi5odG1sP2NvbnRhY3QtZm9ybS1zdWJtaXQtc3VjY2Vzcz10cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdC1mb3JtXCIgLz5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Db250YWN0IFVzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBXZSBjYXJlZnVsbHkgcmVhZCBhbmQgYW5zd2VyIHRvIGFsbCBvdXIgZW1haWxzLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnVsbCBOYW1lICpcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yKCdmdWxsbmFtZScpID8gZm9ybVN0YXRlLmVycm9ycy5mdWxsbmFtZVswXSA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXJyb3I9e2hhc0Vycm9yKCdmdWxsbmFtZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmZ1bGxuYW1lIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbCAqXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17aGFzRXJyb3IoJ2VtYWlsJykgPyBmb3JtU3RhdGUuZXJyb3JzLmVtYWlsWzBdIDogbnVsbH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtU3RhdGUudmFsdWVzLmVtYWlsIHx8ICcnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2UgKlwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvcignbWVzc2FnZScpID8gZm9ybVN0YXRlLmVycm9ycy5tZXNzYWdlWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlcnJvcj17aGFzRXJyb3IoJ21lc3NhZ2UnKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS52YWx1ZXMubWVzc2FnZSB8fCAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBGaWVsZHMgdGhhdCBhcmUgbWFya2VkIHdpdGggKiBzaWduIGFyZSByZXF1aXJlZC5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZm9ybVN0YXRlLmlzVmFsaWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0Rm9ybSc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZGVzY3JpcHRpb24gbGlzdCB3aXRoIGljb25cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBEZXNjcmlwdGlvbkxpc3RJY29uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBpY29uLFxyXG4gICAgYWxpZ24sXHJcbiAgICB0aXRsZVZhcmlhbnQsXHJcbiAgICBzdWJ0aXRsZVZhcmlhbnQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB0aXRsZVByb3BzLFxyXG4gICAgc3VidGl0bGVQcm9wcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgbGV0IGdyaWRKdXN0aWZ5ID0gJ2NlbnRlcic7XHJcblxyXG4gIGlmIChhbGlnbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBncmlkSnVzdGlmeSA9ICdmbGV4LXN0YXJ0JztcclxuICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XHJcbiAgICBncmlkSnVzdGlmeSA9ICdmbGV4LWVuZCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2Rlc2NyaXB0aW9uLWxpc3QtaWNvbicsIGNsYXNzTmFtZSl9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGp1c3RpZnk9e2dyaWRKdXN0aWZ5fVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1saXN0LWljb25fX2ljb24td3JhcHBlclwiXHJcbiAgICAgID5cclxuICAgICAgICB7aWNvbn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tbGlzdC1pY29uX190aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9e3RpdGxlVmFyaWFudH1cclxuICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgYWxpZ249e2FsaWdufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsICdkZXNjcmlwdGlvbi1saXN0LWljb25fX3RpdGxlJyl9XHJcbiAgICAgICAgICB7Li4udGl0bGVQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD17c3VidGl0bGVWYXJpYW50fVxyXG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBhbGlnbj17YWxpZ259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWxpc3QtaWNvbl9fc3VidGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXNjcmlwdGlvbkxpc3RJY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgdGl0bGVWYXJpYW50OiAnaDYnLFxyXG4gIHN1YnRpdGxlVmFyaWFudDogJ2JvZHkxJyxcclxuICB0aXRsZVByb3BzOiB7fSxcclxuICBzdWJ0aXRsZVByb3BzOiB7fSxcclxufTtcclxuXHJcbkRlc2NyaXB0aW9uTGlzdEljb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiB0aGUgc3VidGl0bGVcclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHNob3VsZCBzaG93IHRoZSBhbHRlcm5hdGUgaWNvblxyXG4gICAqL1xyXG4gIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGFsaWdubWVudCBvZiB0aGUgaXRlbXNcclxuICAgKi9cclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFyaWFudFxyXG4gICAqL1xyXG4gIHRpdGxlVmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSB2YXJpYW50XHJcbiAgICovXHJcbiAgc3VidGl0bGVWYXJpYW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgdGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICB0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcHMgdG8gcGFzcyB0byB0aGUgc3VidGl0bGUgVHlwb2dyYXBoeSBjb21wb25lbnRcclxuICAgKi9cclxuICBzdWJ0aXRsZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25MaXN0SWNvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gIH0sXHJcbiAgY29sb3JEZWZhdWx0OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuaW5kaWdvWzkwMF0sXHJcbiAgfSxcclxuICBoZXJvV3JhcHBlcjoge1xyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgaGVyb0NvdmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDAuMixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogMSxcclxuICB9LFxyXG4gIGhlcm9CZzoge1xyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICB9LFxyXG4gIG5vQ292ZXJPcGFjaXR5OiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgYmFja2dyb3VuZCBoZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cclxuY29uc3QgSGVyb0JhY2tncm91bmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBkaXNiYWxlQ292ZXJPcGFjaXR5LFxyXG4gICAgYmFja2dyb3VuZEltZyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VDdXN0b21TdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBjb3ZlckJnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWd9KWAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvcixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tQ2xhc3NlcyA9IHVzZUN1c3RvbVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgJ2hlcm8tYmFja2dyb3VuZCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA/IGN1c3RvbUNsYXNzZXMuYmFja2dyb3VuZENvbG9yIDogY2xhc3Nlcy5jb2xvckRlZmF1bHQsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tYmFja2dyb3VuZF9fd3JhcHBlcicsIGNsYXNzZXMuaGVyb1dyYXBwZXIpfT5cclxuICAgICAgICA8U2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbkNsYXNzTmFtZSA/IGNvbnRlbnRTZWN0aW9uQ2xhc3NOYW1lIDogJycsXHJcbiAgICAgICAgICAgICdoZXJvLWJhY2tncm91bmRfX3NlY3Rpb24nLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICdoZXJvLWJhY2tncm91bmRfX2NvdmVyJyxcclxuICAgICAgICAgIGNsYXNzZXMuaGVyb0JnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5oZXJvQ292ZXIsXHJcbiAgICAgICAgICBjdXN0b21DbGFzc2VzLmNvdmVyQmcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb24gPyBjdXN0b21DbGFzc2VzLmJhY2tncm91bmRQb3NpdGlvbiA6IHt9LFxyXG4gICAgICAgICAgZGlzYmFsZUNvdmVyT3BhY2l0eSA/IGNsYXNzZXMubm9Db3Zlck9wYWNpdHkgOiB7fSxcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm9CYWNrZ3JvdW5kLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENoaWxkcmVuIHRvIHBsYWNlZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgKi9cclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIHBvc2l0aW9uIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSBjbGFzc2VzIGZvciB0aGUgY29udGVudCBzZWN0aW9uXHJcbiAgICovXHJcbiAgY29udGVudFNlY3Rpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2hvdWxkIGRpc2FibGUgaGVyZSBjb3ZlciBvcGFjaXR5XHJcbiAgICovXHJcbiAgZGlzYmFsZUNvdmVyT3BhY2l0eTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQmFja2dyb3VuZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb0JhY2tncm91bmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgaGVybzoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvTGVmdFNpZGU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDgpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlcm9SaWdodFNpZGU6IHtcclxuICAgIG1heFdpZHRoOiAnNTAlJyxcclxuICAgIGZsZXg6ICcwIDAgNTAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGZsZXg6ICcwIDAgMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZXJvQ292ZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICc1MHZ3JyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVyb0ltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBoZXJvSW1hZ2U6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogJzAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgc2hhcGVPdXRzaWRlOiAncG9seWdvbigxMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKScsXHJcbiAgICAgIGNsaXBQYXRoOiAncG9seWdvbigxMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwJSAxMDAlKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdG8gZGlzcGxheSB0aGUgc2hhcGVkIGhlcm9cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBIZXJvU2hhcGVkID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgbGVmdFNpZGUsIHJpZ2h0U2lkZSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCAnaGVyby1zaGFwZWQnLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fd3JhcHBlcicsIGNsYXNzZXMuaGVybyl9PlxyXG4gICAgICAgIDxTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2hhcGVkX19sZWZ0LXNpZGUnLCBjbGFzc2VzLmhlcm9MZWZ0U2lkZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xlZnRTaWRlfVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaGFwZWRfX3JpZ2h0LXNpZGUnLCBjbGFzc2VzLmhlcm9SaWdodFNpZGUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9fY292ZXInLCBjbGFzc2VzLmhlcm9Db3Zlcil9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgJ2hlcm8tc2hhcGVkX19pbWFnZS1jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5oZXJvSW1hZ2VDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNoYXBlZF9faW1hZ2UnLCBjbGFzc2VzLmhlcm9JbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAge3JpZ2h0U2lkZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NoYXBlZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uIHJpZ2h0IHNpZGVcclxuICAgKi9cclxuICByaWdodFNpZGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvbiBsZWZ0IHNpZGVcclxuICAgKi9cclxuICBsZWZ0U2lkZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9TaGFwZWQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlcm9TaGFwZWQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbG9ycywgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXhIZWlnaHQ6IDQwMCxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBjb3Zlcjoge1xyXG4gICAgYmFja2dyb3VuZDogY29sb3JzLmluZGlnb1s5MDBdLFxyXG4gICAgb3BhY2l0eTogMC42LFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDQpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIHNpZGUgaW1hZ2UgaGVyb1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IEhlcm9TaWRlSW1hZ2UgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW1hZ2VTcmMsXHJcbiAgICBpbWFnZVNyY1NldCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYmFja2dyb3VuZENvbG9yLFxyXG4gICAgcmV2ZXJzZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdXNlQ3VzdG9tU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgY292ZXJCZzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tQ2xhc3NlcyA9IHVzZUN1c3RvbVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgnaGVyby1zaWRlLWltYWdlJywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBkaXJlY3Rpb249e3JldmVyc2UgPyAncm93LXJldmVyc2UnIDogJ3Jvdyd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGl0ZW1cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdoZXJvLXNpZGUtaW1hZ2VfX2ltYWdlLXdyYXBwZXInLCBjbGFzc2VzLmltYWdlV3JhcHBlcil9XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICBzcmNTZXQ9e2ltYWdlU3JjU2V0ID8gaW1hZ2VTcmNTZXQgOiAnJ31cclxuICAgICAgICAgIGFsdD17Jy4uLid9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9faW1hZ2UnLCBjbGFzc2VzLmltYWdlKX1cclxuICAgICAgICAgIGxhenk9e2ZhbHNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAnaGVyby1zaWRlLWltYWdlX19jb3ZlcicsXHJcbiAgICAgICAgICAgIGNsYXNzZXMuY292ZXIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA/IGN1c3RvbUNsYXNzZXMuY292ZXJCZyA6IHt9LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIHhzPXsxMn1cclxuICAgICAgICBtZD17Nn1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2hlcm8tc2lkZS1pbWFnZV9fY29udGVudCcsIGNsYXNzZXMuY29udGVudCl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NpZGVJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU2lkZSBpbWFnZVxyXG4gICAqL1xyXG4gIGltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU2lkZSBpbWFnZSBzcmNzZXRcclxuICAgKi9cclxuICBpbWFnZVNyY1NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICovXHJcbiAgcmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2lkZUltYWdlO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2lkZUltYWdlJztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVyb1NpbXBsZUJhY2tncm91bmQgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZSxcclxuICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB1c2VCYWNrZ3JvdW5kID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgY29uc3QgYmFja2dyb3VuZENsYXNzZXMgPSB1c2VCYWNrZ3JvdW5kKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnaGVyby1zaW1wbGUtYmFja2dyb3VuZCcsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ2xhc3Nlcy5iYWNrZ3JvdW5kSW1hZ2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZFNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZENsYXNzZXMuYmFja2dyb3VuZFBvc2l0aW9uLFxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyby1zaW1wbGUtYmFja2dyb3VuZF9fc2VjdGlvblwiPntjaGlsZHJlbn08L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyb1NpbXBsZUJhY2tncm91bmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbn07XHJcblxyXG5IZXJvU2ltcGxlQmFja2dyb3VuZC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgbWFpbiBjb250ZW50XHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaGUgYmFja2dyb3VuZCBzaXplIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgYmFja2dyb3VuZFNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGJhY2tncm91bmQgcG9zaXRpb24gb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBiYWNrZ3JvdW5kUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2ltcGxlQmFja2dyb3VuZDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVyb1NpbXBsZUJhY2tncm91bmQnO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBtYXBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xyXG5jb25zdCBNYXAgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyB6b29tLCBjZW50ZXIsIHBpbnMsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IEwgPSByZXF1aXJlKCdsZWFmbGV0Jyk7XHJcbiAgICBkZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5cclxuICAgIGNvbnN0IG1hcmtlckljb24yeCA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLWljb24tMngucG5nJyk7XHJcbiAgICBjb25zdCBtYXJrZXJJY29uID0gcmVxdWlyZSgnYXNzZXRzL2ltYWdlcy9sZWFmbGV0LWFzc2V0cy9tYXJrZXItaWNvbi5wbmcnKTtcclxuICAgIGNvbnN0IG1hcmtlclNoYWRvdyA9IHJlcXVpcmUoJ2Fzc2V0cy9pbWFnZXMvbGVhZmxldC1hc3NldHMvbWFya2VyLXNoYWRvdy5wbmcnKTtcclxuXHJcbiAgICBMLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgICBpY29uUmV0aW5hVXJsOlxyXG4gICAgICAgIHR5cGVvZiBtYXJrZXJJY29uMnggPT09ICdvYmplY3QnID8gbWFya2VySWNvbjJ4LmRlZmF1bHQgOiBtYXJrZXJJY29uMngsXHJcbiAgICAgIGljb25Vcmw6IHR5cGVvZiBtYXJrZXJJY29uID09PSAnb2JqZWN0JyA/IG1hcmtlckljb24uZGVmYXVsdCA6IG1hcmtlckljb24sXHJcbiAgICAgIHNoYWRvd1VybDpcclxuICAgICAgICB0eXBlb2YgbWFya2VyU2hhZG93ID09PSAnb2JqZWN0JyA/IG1hcmtlclNoYWRvdy5kZWZhdWx0IDogbWFya2VyU2hhZG93LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBSZWFjdE1hcCA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQnKS5NYXA7XHJcbiAgY29uc3QgVGlsZUxheWVyID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpLlRpbGVMYXllcjtcclxuICBjb25zdCBNYXJrZXIgPSByZXF1aXJlKCdyZWFjdC1sZWFmbGV0JykuTWFya2VyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0TWFwXHJcbiAgICAgIHpvb209e3pvb219XHJcbiAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ21hcCcsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYXBfX3RpbGUtbGF5ZXJcIlxyXG4gICAgICAgIGRldGVjdFJldGluYT17dHJ1ZX1cclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmFtcDtjb3B5IDxhIGhyZWY9XCJodHRwOi8vb3NtLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXHJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICB7cGlucyAmJlxyXG4gICAgICAgIHBpbnMubGVuZ3RoICYmXHJcbiAgICAgICAgcGlucy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwX19tYXJrZXJcIlxyXG4gICAgICAgICAgICBwb3NpdGlvbj17W2l0ZW0ubG9jYXRpb24ueSwgaXRlbS5sb2NhdGlvbi54XX1cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvUmVhY3RNYXA+XHJcbiAgKTtcclxufTtcclxudmFyIG1heEJvdW5kcyA9IFtcclxuICBbMjAuMjY2NjcsIDczLjAxNjY3XSwgLy9Tb3V0aHdlc3RcclxuXTtcclxuXHJcbk1hcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgem9vbTogMTEsXHJcbiAgY2VudGVyOiBbMCwgMF0sXHJcbiAgbWF4Qm91bmRzOiBtYXhCb3VuZHMsXHJcbn07XHJcblxyXG5NYXAucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogTWFwIHpvb21cclxuICAgKi9cclxuICB6b29tOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBNYXAgY2VudGVyXHJcbiAgICovXHJcbiAgY2VudGVyOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBkYXRhIG9mIHRoZSBsb2NhdGlvbnMuIEV4YW1wbGU6IFt7IGxvY2F0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfV1cclxuICAgKi9cclxuICBwaW5zOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01hcCc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIC8qIHN1cHBvcnQgZm9yIHBsdWdpbiBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMgKi9cclxuICAgIGZvbnRGYW1pbHk6ICdvYmplY3QtZml0OiBjb3ZlcjsnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBQYXJhbGxheCBiYWNrZ3JvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFBhcmFsbGF4ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZEltYWdlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgamFyYWxsYXhFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qYXJhbGxheCcpO1xyXG4gICAgaWYgKCFqYXJhbGxheEVsZW1zIHx8IChqYXJhbGxheEVsZW1zICYmIGphcmFsbGF4RWxlbXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgamFyYWxsYXggPSByZXF1aXJlKCdqYXJhbGxheCcpLmphcmFsbGF4O1xyXG4gICAgamFyYWxsYXgoamFyYWxsYXhFbGVtcywgeyBzcGVlZDogMC4yIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goJ2phcmFsbGF4JywgJ3BhcmFsbGF4JywgY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBkYXRhLWphcmFsbGF4XHJcbiAgICAgIGRhdGEtc3BlZWQ9XCIwLjJcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnamFyYWxsYXgtaW1nJywgJ3BhcmFsbGF4X19pbWFnZScsIGNsYXNzZXMuaW1hZ2UpfVxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCB9fVxyXG4gICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXJhbGxheC5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBUaGUgcGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZVxyXG4gICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXg7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhcmFsbGF4JztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiB0aGVtZS5sYXlvdXQuY29udGVudFdpZHRoLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDgpLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMiwgOCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgZGlzYWJsZVBhZGRpbmc6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxuICBuYXJyb3c6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb24gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBmdWxsV2lkdGgsXHJcbiAgICBuYXJyb3csXHJcbiAgICBkaXNhYmxlUGFkZGluZyxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAnc2VjdGlvbicsXHJcbiAgICAgICAgY2xhc3Nlcy5yb290LFxyXG4gICAgICAgIGZ1bGxXaWR0aCA/IGNsYXNzZXMuZnVsbFdpZHRoIDoge30sXHJcbiAgICAgICAgbmFycm93ID8gY2xhc3Nlcy5uYXJyb3cgOiB7fSxcclxuICAgICAgICBkaXNhYmxlUGFkZGluZyA/IGNsYXNzZXMuZGlzYWJsZVBhZGRpbmcgOiB7fSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2hpbGRyZW4gdG8gcGxhY2VkIGluc2lkZSB0aGUgc2VjdGlvblxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAvKipcclxuICAgKiBTaG91bGQgc2hvdyBuYXJyb3cgc2VjdGlvbnNcclxuICAgKi9cclxuICBuYXJyb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCB0aGUgc2VjdGlvbiBiZSBmdWxsIHdpZHRoXHJcbiAgICovXHJcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKipcclxuICAgKiBTaG91bGQgdGhlIHNlY3Rpb24gcmVuZGVyIHdpdGggbm8gcGFkZGluZ1xyXG4gICAqL1xyXG4gIGRpc2FibGVQYWRkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlY3Rpb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUubWFpbixcclxuICB9LFxyXG4gIGlubmVyOiB7XHJcbiAgICBtYXhXaWR0aDogdGhlbWUubGF5b3V0LmNvbnRlbnRXaWR0aCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2LCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCA4KSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMTIsIDgpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGlubmVyTmFycm93ZWQ6IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBhbHRlcm5hdGl2ZSBzZWN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXHJcbmNvbnN0IFNlY3Rpb25BbHRlcm5hdGUgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5uZXJOYXJyb3dlZCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdzZWN0aW9uLWFsdGVybmF0ZScsIGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAnc2VjdGlvbi1hbHRlcm5hdGVfX2NvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3Nlcy5pbm5lcixcclxuICAgICAgICAgIGlubmVyTmFycm93ZWQgPyBjbGFzc2VzLmlubmVyTmFycm93ZWQgOiB7fSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuU2VjdGlvbkFsdGVybmF0ZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDaGlsZHJlbiB0byBwbGFjZWQgaW5zaWRlIHRoZSBzZWN0aW9uXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIC8qKlxyXG4gICAqIFNob3VsZCBzaG93IG5hcnJvdyBzZWN0aW9uc1xyXG4gICAqL1xyXG4gIGlubmVyTmFycm93ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkFsdGVybmF0ZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbiB9IGZyb20gJy4vU2VjdGlvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJy4vU2VjdGlvbkFsdGVybmF0ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzY3JpcHRpb25MaXN0SWNvbiB9IGZyb20gJy4vRGVzY3JpcHRpb25MaXN0SWNvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEJhc2UgfSBmcm9tICcuL0NhcmRCYXNlJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUmV2aWV3IH0gZnJvbSAnLi9DYXJkUmV2aWV3JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnkgfSBmcm9tICcuL0NhcmRDYXRlZ29yeSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYiB9IGZyb20gJy4vQ2FyZEpvYic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZEpvYk1pbmltYWwgfSBmcm9tICcuL0NhcmRKb2JNaW5pbWFsJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iVGFnIH0gZnJvbSAnLi9DYXJkSm9iVGFnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkSm9iQ29tcGFueSB9IGZyb20gJy4vQ2FyZEpvYkNvbXBhbnknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gJy4vQWNjb3JkaW9uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2hhcGVkIH0gZnJvbSAnLi9IZXJvU2hhcGVkJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkUHJvZHVjdCB9IGZyb20gJy4vQ2FyZFByb2R1Y3QnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcCB9IGZyb20gJy4vTWFwJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb0JhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm9TaWRlSW1hZ2UgfSBmcm9tICcuL0hlcm9TaWRlSW1hZ2UnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcm9tbyB9IGZyb20gJy4vQ2FyZFByb21vJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkQ2F0ZWdvcnlMaW5rIH0gZnJvbSAnLi9DYXJkQ2F0ZWdvcnlMaW5rJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvU2ltcGxlQmFja2dyb3VuZCB9IGZyb20gJy4vSGVyb1NpbXBsZUJhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRQcmljaW5nU3RhbmRhcmQgfSBmcm9tICcuL0NhcmRQcmljaW5nU3RhbmRhcmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAnLi9QYXJhbGxheCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdEZvcm0gfSBmcm9tICcuL0NvbnRhY3RGb3JtJzsiLCIgXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVG9wYmFyLCBOYXZiYXIgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTY3JvbGxUb3AgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgd2lkdGg6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHBhZGRpbmdUb3A6IDY0LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogMjU2XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb250ZW50Q29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCBEb2NzTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRoZW1lVG9nZ2xlciwgdGhlbWVNb2RlIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlTmF2T3Blbiwgc2V0TW9iaWxlTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFRvcGJhclxyXG4gICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxyXG4gICAgICAgIHRoZW1lVG9nZ2xlcj17dGhlbWVUb2dnbGVyfVxyXG4gICAgICAgIG9uTW9iaWxlTmF2T3Blbj17KCkgPT4gc2V0TW9iaWxlTmF2T3Blbih0cnVlKX1cclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIG9uTW9iaWxlQ2xvc2U9eygpID0+IHNldE1vYmlsZU5hdk9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9wZW5Nb2JpbGU9e2lzTW9iaWxlTmF2T3Blbn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2Nyb2xsVG9wIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuRG9jc0xheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIHRoZW1lVG9nZ2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB0aGVtZU1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3NMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIERyYXdlcixcclxuICBIaWRkZW4sXHJcbiAgTGlzdCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3RJdGVtLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4vY29tcG9uZW50cy9OYXZJdGVtJztcclxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3Rhcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbW9iaWxlRHJhd2VyOiB7XHJcbiAgICB3aWR0aDogMjU2LFxyXG4gIH0sXHJcbiAgZGVza3RvcERyYXdlcjoge1xyXG4gICAgd2lkdGg6IDI1NixcclxuICAgIHRvcDogNjQsXHJcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA2NHB4KScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgbmF2R3JvdXA6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBuYXZHcm91cFRpdGxlOiB7XHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IG9uTW9iaWxlQ2xvc2UsIG9wZW5Nb2JpbGUgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IChcclxuICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8Qm94IHA9ezJ9IHBhZGRpbmdCb3R0b209ezB9PlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxTdGFySWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNoZWxzZWEgT3Rha2FuXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgPFN0YXJJY29uIC8+XHJcbiAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0ICBwcmltYXJ5PVwiRXJpYyBIb2ZmbWFuXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSAvPlxyXG4gICAgICA8Qm94IHA9ezJ9IHBhZGRpbmdUb3A9ezB9PlxyXG5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5tb2JpbGVEcmF3ZXIgfX1cclxuICAgICAgICAgIG9uQ2xvc2U9e29uTW9iaWxlQ2xvc2V9XHJcbiAgICAgICAgICBvcGVuPXtvcGVuTW9iaWxlfVxyXG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgICAgIGNsYXNzZXM9e3sgcGFwZXI6IGNsYXNzZXMuZGVza3RvcERyYXdlciB9fVxyXG4gICAgICAgICAgb3BlblxyXG4gICAgICAgICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8L0hpZGRlbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZiYXIucHJvcFR5cGVzID0ge1xyXG4gIG9uTW9iaWxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9wZW5Nb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvbk1vYmlsZUNsb3NlOiAoKSA9PiB7fSxcclxuICBvcGVuTW9iaWxlOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgTGlzdEl0ZW0sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaXRlbToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9XHJcbiAgfSxcclxuICBpdGVtQWN0aXZlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGdldENvbXBvbmVudElkID0gKCkgPT4gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuY29tcG9uZW50IHx8ICdpbnRyb2R1Y3Rpb24nO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGhyZWYsXHJcbiAgaWNvbjogSWNvbixcclxuICB0aXRsZSxcclxuICBpZCxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdEl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgIGNsYXNzZXMuaXRlbSxcclxuICAgICAgICBnZXRDb21wb25lbnRJZCgpID09PSBpZCA/IGNsYXNzZXMuaXRlbUFjdGl2ZSA6ICcnLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgKX1cclxuICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJzcGFuXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9OYXZJdGVtJztcclxuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbe1xyXG4gIGlkOiAnZ2V0LXN0YXJ0ZWQnLFxyXG4gIHRpdGxlOiAnR2V0IFN0YXJ0ZWQnLFxyXG4gIHBhZ2VzOiBbe1xyXG4gICAgaWQ6ICdpbnRyb2R1Y3Rpb24nLFxyXG4gICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24nLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9aW50cm9kdWN0aW9uJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ3F1aWNrLXN0YXJ0JyxcclxuICAgIHRpdGxlOiAnUXVpY2sgU3RhcnQnLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9cXVpY2stc3RhcnQnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnY2hhbmdlbG9nJyxcclxuICAgIHRpdGxlOiAnQ2hhbmdlbG9nJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWNoYW5nZWxvZycsXHJcbiAgfV0sXHJcbn0sIHtcclxuICBpZDogJ2F0b21zJyxcclxuICB0aXRsZTogJ0F0b21zJyxcclxuICBwYWdlczogW3tcclxuICAgIGlkOiAnZGFyay1tb2RlLXRvZ2dsZXInLFxyXG4gICAgdGl0bGU6ICdEYXJrIE1vZGUgVG9nZ2xlcicsIFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9ZGFyay1tb2RlLXRvZ2dsZXInLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnaWNvbicsXHJcbiAgICB0aXRsZTogJ0ljb24nLCBcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWljb24nLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnaWNvbi10ZXh0JyxcclxuICAgIHRpdGxlOiAnSWNvbiBUZXh0JyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWljb24tdGV4dCcsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0aXRsZTogJ0ltYWdlJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWltYWdlJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2xlYXJuLW1vcmUtbGluaycsXHJcbiAgICB0aXRsZTogJ0xlYXJuIE1vcmUgTGluaycsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1sZWFybi1tb3JlLWxpbmsnLFxyXG4gIH1dLFxyXG59LCB7XHJcbiAgaWQ6ICdtb2xlY3VsZXMnLFxyXG4gIHRpdGxlOiAnTW9sZWN1bGVzJyxcclxuICBwYWdlczogW3tcclxuICAgIGlkOiAnY291bnQtdXAtbnVtYmVyJyxcclxuICAgIHRpdGxlOiAnQ291bnQgVXAgTnVtYmVyJywgXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1jb3VudC11cC1udW1iZXInLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnZGVzY3JpcHRpb24td2l0aC1jdGEnLFxyXG4gICAgdGl0bGU6ICdEZXNjcmlwdGlvbiBUZXh0IFdpdGggQ1RBJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWRlc2NyaXB0aW9uLXdpdGgtY3RhJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2ljb24tYWx0ZXJuYXRlJyxcclxuICAgIHRpdGxlOiAnSWNvbiBBbHRlcm5hdGUnLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9aWNvbi1hbHRlcm5hdGUnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnb3ZlcmxhcHBlZC1pbWFnZXMnLFxyXG4gICAgdGl0bGU6ICdPdmVybGFwcGVkIEltYWdlcycsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1vdmVybGFwcGVkLWltYWdlcycsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdzZWN0aW9uLWhlYWRlcicsXHJcbiAgICB0aXRsZTogJ1NlY3Rpb24gSGVhZGVyJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PXNlY3Rpb24taGVhZGVyJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2ltYWdlLXN3aXBlcicsXHJcbiAgICB0aXRsZTogJ0ltYWdlIFN3aXBlcicsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1pbWFnZS1zd2lwZXInLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnbnVtYmVycy1zd2lwZXInLFxyXG4gICAgdGl0bGU6ICdOdW1iZXJzIFN3aXBlcicsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1udW1iZXJzLXN3aXBlcicsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICd0eXBlZC10ZXh0JyxcclxuICAgIHRpdGxlOiAnVHlwZWQgVGV4dCcsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD10eXBlZC10ZXh0JyxcclxuICB9XSxcclxufSwge1xyXG4gIGlkOiAnb3JnYW5pc21zJyxcclxuICB0aXRsZTogJ09yZ2FuaXNtcycsXHJcbiAgcGFnZXM6IFt7XHJcbiAgICBpZDogJ2FjY29yZGlvbicsXHJcbiAgICB0aXRsZTogJ0FjY29yZGlvbicsIFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9YWNjb3JkaW9uJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2NhcmQtYmFzZScsXHJcbiAgICB0aXRsZTogJ0NhcmQgQmFzZScsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1jYXJkLWJhc2UnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnY2FyZC1jYXRlZ29yeScsXHJcbiAgICB0aXRsZTogJ0NhcmQgQ2F0ZWdvcnknLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9Y2FyZC1jYXRlZ29yeScsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdjYXJkLWNhdGVnb3J5LWxpbmsnLFxyXG4gICAgdGl0bGU6ICdDYXJkIENhdGVnb3J5IExpbmsnLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9Y2FyZC1jYXRlZ29yeS1saW5rJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2NhcmQtam9iJyxcclxuICAgIHRpdGxlOiAnQ2FyZCBKb2InLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9Y2FyZC1qb2InLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnY2FyZC1qb2ItY29tcGFueScsXHJcbiAgICB0aXRsZTogJ0NhcmQgSm9iIENvbXBhbnknLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9Y2FyZC1qb2ItY29tcGFueScsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdjYXJkLWpvYi1taW5pbWFsJyxcclxuICAgIHRpdGxlOiAnQ2FyZCBKb2IgTWluaW1hbCcsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1jYXJkLWpvYi1taW5pbWFsJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2NhcmQtam9iLXRhZycsXHJcbiAgICB0aXRsZTogJ0NhcmQgSm9iIFRhZycsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1jYXJkLWpvYi10YWcnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnY2FyZC1wcmljaW5nLXN0YW5kYXJkJyxcclxuICAgIHRpdGxlOiAnQ2FyZCBQcmljaW5nIFN0YW5kYXJkJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWNhcmQtcHJpY2luZy1zdGFuZGFyZCcsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdjYXJkLXByb2R1Y3QnLFxyXG4gICAgdGl0bGU6ICdDYXJkIFByb2R1Y3QnLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9Y2FyZC1wcm9kdWN0JyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2NhcmQtcHJvbW8nLFxyXG4gICAgdGl0bGU6ICdDYXJkIFByb21vJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWNhcmQtcHJvbW8nLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnY2FyZC1yZXZpZXcnLFxyXG4gICAgdGl0bGU6ICdDYXJkIFJldmlldycsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1jYXJkLXJldmlldycsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdkZXNjcmlwdGlvbi1saXN0LWljb24nLFxyXG4gICAgdGl0bGU6ICdEZXNjcmlwdGlvbiBMaXN0IEljb24nLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9ZGVzY3JpcHRpb24tbGlzdC1pY29uJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2hlcm8tYmFja2dyb3VuZCcsXHJcbiAgICB0aXRsZTogJ0hlcm8gQmFja2dyb3VuZCcsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1oZXJvLWJhY2tncm91bmQnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnaGVyby1zaGFwZWQnLFxyXG4gICAgdGl0bGU6ICdIZXJvIFNoYXBlZCcsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1oZXJvLXNoYXBlZCcsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdoZXJvLXNpZGUtaW1hZ2UnLFxyXG4gICAgdGl0bGU6ICdIZXJvIFNpZGUgSW1hZ2UnLFxyXG4gICAgaHJlZjogJy9kb2N1bWVudGF0aW9uLz9jb21wb25lbnQ9aGVyby1zaWRlLWltYWdlJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2hlcm8tc2ltcGxlLWJhY2tncm91bmQnLFxyXG4gICAgdGl0bGU6ICdIZXJvIFNpbXBsZSBCYWNrZ3JvdW5kJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PWhlcm8tc2ltcGxlLWJhY2tncm91bmQnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnbWFwJyxcclxuICAgIHRpdGxlOiAnTWFwJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PW1hcCcsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdwYXJhbGxheCcsXHJcbiAgICB0aXRsZTogJ1BhcmFsbGF4JyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PXBhcmFsbGF4JyxcclxuICB9LCB7XHJcbiAgICBpZDogJ3NlY3Rpb24nLFxyXG4gICAgdGl0bGU6ICdTZWN0aW9uJyxcclxuICAgIGhyZWY6ICcvZG9jdW1lbnRhdGlvbi8/Y29tcG9uZW50PXNlY3Rpb24nLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnc2VjdGlvbi1hbHRlcm5hdGUnLFxyXG4gICAgdGl0bGU6ICdTZWN0aW9uIEFsdGVybmF0ZScsXHJcbiAgICBocmVmOiAnL2RvY3VtZW50YXRpb24vP2NvbXBvbmVudD1zZWN0aW9uLWFsdGVybmF0ZScsXHJcbiAgfV0sXHJcbn1dOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05hdmJhcic7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBCb3gsXHJcbiAgSGlkZGVuLFxyXG4gIEljb25CdXR0b24sXHJcbiAgVG9vbGJhcixcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIEF2YXRhcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlLCBEYXJrTW9kZVRvZ2dsZXIgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcclxuICB9LFxyXG4gIGxvZ2luQXZhdGFyOntcclxuICAgIG1hcmdpbkxlZnQ6ICc5cHgnLFxyXG4gICAgd2lkdGg6ICczMHB4JyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gIH0sXHJcbiAgbG9nb0NvbnRhaW5lcjoge1xyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGhlaWdodDogMjgsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgIGhlaWdodDogMzIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nb0ltYWdlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgdG9wOiAnLTE3cHgnLFxyXG4gICAgd2lkdGg6ICcxMzBweCcsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uQ29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW1UZXh0OiB7XHJcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgfSxcclxuICBsaXN0SXRlbUJ1dHRvbjoge1xyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgfSxcclxuICBpY29uQnV0dG9uOiB7XHJcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgVG9wQmFyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgb25Nb2JpbGVOYXZPcGVuLFxyXG4gIHRoZW1lVG9nZ2xlcixcclxuICB0aGVtZU1vZGUsXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhclxyXG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfVxyXG4gICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgdGl0bGU9XCJPbmxpbmVBYXJvZ3lhXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMICsgJy9hc3NldHMvbG9nby1ibHVlLnBuZydcclxuICAgICAgICAgICAgICAgICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCArICcvYXNzZXRzL2xvZ28tYmx1ZS5wbmcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGFsdD1cIk9ubGluZUFhcm9neWFcIlxyXG4gICAgICAgICAgICAgIGxhenk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSAvPlxyXG4gICAgICAgIDxEYXJrTW9kZVRvZ2dsZXIgdGhlbWVNb2RlPXt0aGVtZU1vZGV9IG9uQ2xpY2s9eygpID0+IHRoZW1lVG9nZ2xlcigpfSAvPlxyXG4gICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmcgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmlnYXRpb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5saXN0SXRlbSwgJ21lbnUtaXRlbS0tbm8tZHJvcGRvd24nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbVRleHR9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICBSYWh1bCBZYWRhdlxyXG5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQXZhdGFyfSBzcmM9XCIvYnJva2VuLWltYWdlLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTW9iaWxlTmF2T3Blbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDwvVG9vbGJhcj5cclxuICAgIDwvQXBwQmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ub3BCYXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbk1vYmlsZU5hdk9wZW46IFByb3BUeXBlcy5mdW5jLFxyXG4gIHRoZW1lVG9nZ2xlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB0aGVtZU1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVG9wYmFyJztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBUb3BiYXIgfSBmcm9tICcuL1RvcGJhcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9OYXZiYXInO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Eb2NzTGF5b3V0JztcclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGxpZ2h0LCBkYXJrIH0gZnJvbSAnLi9wYWxldHRlJztcclxuXHJcbmNvbnN0IGdldFRoZW1lID0gbW9kZSA9PlxyXG4gIHJlc3BvbnNpdmVGb250U2l6ZXMoXHJcbiAgICBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICAgIHBhbGV0dGU6IG1vZGUgPT09ICdsaWdodCcgPyBsaWdodCA6IGRhcmssXHJcbiAgICAgIGxheW91dDoge1xyXG4gICAgICAgIGNvbnRlbnRXaWR0aDogMTMzNixcclxuICAgICAgfSxcclxuICAgICAgdHlwb2dyYXBoeToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdMYXRvJyxcclxuICAgICAgfSxcclxuICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgYXBwQmFyOiAxMjAwLFxyXG4gICAgICAgIGRyYXdlcjogMTEwMCxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRUaGVtZTtcclxuIiwiZXhwb3J0IGNvbnN0IGxpZ2h0ID0ge1xyXG4gIGFsdGVybmF0ZToge1xyXG4gICAgbWFpbjogJ3JnYigyNDcsIDI0OSwgMjUwKScsXHJcbiAgICBkYXJrOiAnI2U4ZWFmNicsXHJcbiAgfSxcclxuICBjYXJkU2hhZG93OiAncmdiYSgyMywgNzAsIDE2MSwgLjExKScsXHJcbiAgdHlwZTogJ2xpZ2h0JyxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBtYWluOiAnI2VjMzgzMicsXHJcbiAgICBsaWdodDogJ3JnYigyNTEgMTA0IDk5KScsXHJcbiAgICBkYXJrOiAnI2RhMmIyNicsXHJcbiAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgbGlnaHQ6ICcjZmZmJyxcclxuICAgIG1haW46ICcjY2NjJyxcclxuICAgIGRhcms6ICcjZjU3YzAwJyxcclxuICAgIGNvbnRyYXN0VGV4dDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgcHJpbWFyeTogJyMyZDM3NDgnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzcxODA5NicsXHJcbiAgfSxcclxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgcGFwZXI6ICcjZmZmJyxcclxuICAgIGRlZmF1bHQ6ICcjZmZmJyxcclxuICAgIGxldmVsMjogJyNmNWY1ZjUnLFxyXG4gICAgbGV2ZWwxOiAnI2ZmZicsXHJcbiAgICBmb290ZXI6ICcjMWIxNjQyJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhcmsgPSB7XHJcbiAgYWx0ZXJuYXRlOiB7XHJcbiAgICBtYWluOiAnIzJEMzc0OCcsXHJcbiAgICBkYXJrOiAnIzI0MjQyYicsXHJcbiAgfSxcclxuICBjYXJkU2hhZG93OiAncmdiYSgwLCAwLCAwLCAuMTEpJyxcclxuICBjb21tb246IHtcclxuICAgIGJsYWNrOiAnIzAwMCcsXHJcbiAgICB3aGl0ZTogJyNmZmYnLFxyXG4gIH0sXHJcbiAgdHlwZTogJ2RhcmsnLFxyXG4gIHByaW1hcnk6IHtcclxuICAgIG1haW46ICcjOTBjYWY5JyxcclxuICAgIGxpZ2h0OiAncmdiKDE2NiwgMjEyLCAyNTApJyxcclxuICAgIGRhcms6ICdyZ2IoMTAwLCAxNDEsIDE3NCknLFxyXG4gICAgY29udHJhc3RUZXh0OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgfSxcclxuICBzZWNvbmRhcnk6IHtcclxuICAgIGxpZ2h0OiAnI2ZmYjc0ZCcsXHJcbiAgICBtYWluOiAnI2Y5YjkzNCcsXHJcbiAgICBkYXJrOiAnI2Y1N2MwMCcsXHJcbiAgICBjb250cmFzdFRleHQ6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIHByaW1hcnk6ICcjRUVFRUVGJyxcclxuICAgIHNlY29uZGFyeTogJyNBRUIwQjQnLFxyXG4gIH0sXHJcbiAgZGl2aWRlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIHBhcGVyOiAnIzFBMjAyQycsXHJcbiAgICBkZWZhdWx0OiAnIzEyMTIxMicsXHJcbiAgICBsZXZlbDI6ICcjMzMzJyxcclxuICAgIGxldmVsMTogJyMyRDM3NDgnLFxyXG4gICAgZm9vdGVyOiAnIzE4MTgxZicsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGdldENvbXBvbmVudElkID0gKCkgPT4gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuY29tcG9uZW50IHx8ICdpbnRyb2R1Y3Rpb24nO1xyXG5cclxuY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGxldCBDb21wb25lbnQgPSBudWxsO1xyXG4gIGNvbnN0IGNvbXBvbmVudElkID0gZ2V0Q29tcG9uZW50SWQoKTtcclxuXHJcbi8vICAgc3dpdGNoIChjb21wb25lbnRJZCkge1xyXG4vLyAgICAgY2FzZSAnaW50cm9kdWN0aW9uJzpcclxuLy8gICAgICAgY29uc3QgSW50cm9kdWN0aW9uID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vcGFydHMvSW50cm9kdWN0aW9uJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8SW50cm9kdWN0aW9uIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ3F1aWNrLXN0YXJ0JzpcclxuLy8gICAgICAgY29uc3QgUXVpY2tTdGFydCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3BhcnRzL1F1aWNrU3RhcnQnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxRdWlja1N0YXJ0IC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2NoYW5nZWxvZyc6XHJcbi8vICAgICAgIGNvbnN0IENoYW5nZWxvZyA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3BhcnRzL0NoYW5nZWxvZycpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPENoYW5nZWxvZyAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdkYXJrLW1vZGUtdG9nZ2xlcic6XHJcbi8vICAgICAgIGNvbnN0IERhcmtNb2RlVG9nZ2xlckV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9EYXJrTW9kZVRvZ2dsZXJFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8RGFya01vZGVUb2dnbGVyRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdpY29uJzpcclxuLy8gICAgICAgY29uc3QgSWNvbkV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9JY29uRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEljb25FeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2ljb24tdGV4dCc6XHJcbi8vICAgICAgIGNvbnN0IEljb25UZXh0RXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0ljb25UZXh0RXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEljb25UZXh0RXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdpbWFnZSc6XHJcbi8vICAgICAgIGNvbnN0IEltYWdlRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0ltYWdlRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEltYWdlRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdsZWFybi1tb3JlLWxpbmsnOlxyXG4vLyAgICAgICBjb25zdCBMZWFybk1vcmVMaW5rRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0xlYXJuTW9yZUxpbmtFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8TGVhcm5Nb3JlTGlua0V4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY291bnQtdXAtbnVtYmVyJzpcclxuLy8gICAgICAgY29uc3QgQ291bnRVcE51bWJlckV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9Db3VudFVwTnVtYmVyRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPENvdW50VXBOdW1iZXJFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2Rlc2NyaXB0aW9uLXdpdGgtY3RhJzpcclxuLy8gICAgICAgY29uc3QgRGVzY3JpcHRpb25DdGFFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvRGVzY3JpcHRpb25DdGFFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8RGVzY3JpcHRpb25DdGFFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2ljb24tYWx0ZXJuYXRlJzpcclxuLy8gICAgICAgY29uc3QgSWNvbkFsdGVybmF0ZUV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9JY29uQWx0ZXJuYXRlRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEljb25BbHRlcm5hdGVFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ292ZXJsYXBwZWQtaW1hZ2VzJzpcclxuLy8gICAgICAgY29uc3QgT3ZlcmxhcGVkSW1hZ2VzRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL092ZXJsYXBlZEltYWdlc0V4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxPdmVybGFwZWRJbWFnZXNFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ3NlY3Rpb24taGVhZGVyJzpcclxuLy8gICAgICAgY29uc3QgU2VjdGlvbkhlYWRlckV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9TZWN0aW9uSGVhZGVyRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPFNlY3Rpb25IZWFkZXJFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2ltYWdlLXN3aXBlcic6XHJcbi8vICAgICAgIGNvbnN0IFN3aXBlckltYWdlRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL1N3aXBlckltYWdlRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPFN3aXBlckltYWdlRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdudW1iZXJzLXN3aXBlcic6XHJcbi8vICAgICAgIGNvbnN0IFN3aXBlck51bWJlckV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9Td2lwZXJOdW1iZXJFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8U3dpcGVyTnVtYmVyRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICd0eXBlZC10ZXh0JzpcclxuLy8gICAgICAgY29uc3QgVHlwZWRUZXh0RXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL1R5cGVkVGV4dEV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxUeXBlZFRleHRFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2FjY29yZGlvbic6XHJcbi8vICAgICAgIGNvbnN0IEFjY29yZGlvbkV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9BY2NvcmRpb25FeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8QWNjb3JkaW9uRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXJkLWJhc2UnOlxyXG4vLyAgICAgICBjb25zdCBDYXJkQmFzZUV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9DYXJkQmFzZUV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxDYXJkQmFzZUV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY2FyZC1jYXRlZ29yeSc6XHJcbi8vICAgICAgIGNvbnN0IENhcmRDYXRlZ29yeUV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9DYXJkQ2F0ZWdvcnlFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZENhdGVnb3J5RXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXJkLWNhdGVnb3J5LWxpbmsnOlxyXG4vLyAgICAgICBjb25zdCBDYXJkQ2F0ZWdvcnlMaW5rRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0NhcmRDYXRlZ29yeUxpbmtFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZENhdGVnb3J5TGlua0V4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY2FyZC1qb2InOlxyXG4vLyAgICAgICBjb25zdCBDYXJkSm9iRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0NhcmRKb2JFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZEpvYkV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY2FyZC1qb2ItY29tcGFueSc6XHJcbi8vICAgICAgIGNvbnN0IENhcmRKb2JDb21wYW55RXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0NhcmRKb2JDb21wYW55RXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPENhcmRKb2JDb21wYW55RXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXJkLWpvYi1taW5pbWFsJzpcclxuLy8gICAgICAgY29uc3QgQ2FyZEpvYk1pbmltYWxFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvQ2FyZEpvYk1pbmltYWxFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZEpvYk1pbmltYWxFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2NhcmQtam9iLXRhZyc6XHJcbi8vICAgICAgIGNvbnN0IENhcmRKb2JUYWdFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvQ2FyZEpvYlRhZ0V4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxDYXJkSm9iVGFnRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXJkLXByaWNpbmctc3RhbmRhcmQnOlxyXG4vLyAgICAgICBjb25zdCBDYXJkUHJpY2luZ1N0YW5kYXJkRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0NhcmRQcmljaW5nU3RhbmRhcmRFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZFByaWNpbmdTdGFuZGFyZEV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY2FyZC1wcm9kdWN0JzpcclxuLy8gICAgICAgY29uc3QgQ2FyZFByb2R1Y3RFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvQ2FyZFByb2R1Y3RFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZFByb2R1Y3RFeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2NhcmQtcHJvbW8nOlxyXG4vLyAgICAgICBjb25zdCBDYXJkUHJvbW9FeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvQ2FyZFByb21vRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPENhcmRQcm9tb0V4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnY2FyZC1yZXZpZXcnOlxyXG4vLyAgICAgICBjb25zdCBDYXJkUmV2aWV3RXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0NhcmRSZXZpZXdFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8Q2FyZFJldmlld0V4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnZGVzY3JpcHRpb24tbGlzdC1pY29uJzpcclxuLy8gICAgICAgY29uc3QgRGVzY3JpcHRpb25MaXN0SWNvbkV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9EZXNjcmlwdGlvbkxpc3RJY29uRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPERlc2NyaXB0aW9uTGlzdEljb25FeGFtcGxlIC8+O1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgJ2hlcm8tYmFja2dyb3VuZCc6XHJcbi8vICAgICAgIGNvbnN0IEhlcm9CYWNrZ3JvdW5kRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0hlcm9CYWNrZ3JvdW5kRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEhlcm9CYWNrZ3JvdW5kRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdoZXJvLXNoYXBlZCc6XHJcbi8vICAgICAgIGNvbnN0IEhlcm9TaGFwZWRFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvSGVyb1NoYXBlZEV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxIZXJvU2hhcGVkRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdoZXJvLXNpZGUtaW1hZ2UnOlxyXG4vLyAgICAgICBjb25zdCBIZXJvU2lkZUltYWdlRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0hlcm9TaWRlSW1hZ2VFeGFtcGxlJykpO1xyXG4vLyAgICAgICBDb21wb25lbnQgPSA8SGVyb1NpZGVJbWFnZUV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnaGVyby1zaW1wbGUtYmFja2dyb3VuZCc6XHJcbi8vICAgICAgIGNvbnN0IEhlcm9TaW1wbGVCYWNrZ3JvdW5kRXhhbXBsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2V4YW1wbGVzL0hlcm9TaW1wbGVCYWNrZ3JvdW5kRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPEhlcm9TaW1wbGVCYWNrZ3JvdW5kRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdtYXAnOlxyXG4vLyAgICAgICBjb25zdCBNYXBFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvTWFwRXhhbXBsZScpKTtcclxuLy8gICAgICAgQ29tcG9uZW50ID0gPE1hcEV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAncGFyYWxsYXgnOlxyXG4vLyAgICAgICBjb25zdCBQYXJhbGxheEV4YW1wbGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9leGFtcGxlcy9QYXJhbGxheEV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxQYXJhbGxheEV4YW1wbGUgLz47XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgICAgY2FzZSAnc2VjdGlvbic6XHJcbi8vICAgICAgIGNvbnN0IFNlY3Rpb25FeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvU2VjdGlvbkV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxTZWN0aW9uRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdzZWN0aW9uLWFsdGVybmF0ZSc6XHJcbi8vICAgICAgIGNvbnN0IFNlY3Rpb25BbHRlcm5hdGVFeGFtcGxlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZXhhbXBsZXMvU2VjdGlvbkFsdGVybmF0ZUV4YW1wbGUnKSk7XHJcbi8vICAgICAgIENvbXBvbmVudCA9IDxTZWN0aW9uQWx0ZXJuYXRlRXhhbXBsZSAvPjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICBDb21wb25lbnQgPSBudWxsO1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBDb21wb25lbnQ7XHJcbn07XHJcblxyXG5jb25zdCBVcGRhdGVQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkaW5nIC8+fT5cclxuICAgICAgIDxoMT5oZWxsbyBBY2NvdW50IEluZm8gaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvaGVsbG8gQWNjb3VudCBJbmZvPC9oMT5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlUHJvZmlsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICh7IGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cclxuICAgIDxMaXN0SXRlbT5cclxuICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgd2lkdGg9ezI1MH0gLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjV9IC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlxyXG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiB3aWR0aD17MjUwfSAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5cclxuICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0XCIgd2lkdGg9ezM1MH0gaGVpZ2h0PXsyMH0gLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIHdpZHRoPXsyNTB9IC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlxyXG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezMwMH0gLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIHdpZHRoPXsyNTB9IC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlxyXG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezM1MH0gLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9MaXN0PlxyXG4pO1xyXG5cclxuTG9hZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xvYWRpbmcnOyIsIi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGxpbmUgfSBmcm9tICcuL0hlYWRsaW5lJztcclxuLy8gZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2RlSGlnaGxpZ2h0ZXIgfSBmcm9tICcuL0NvZGVIaWdobGlnaHRlcic7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvcHNIaWdobGlnaHRlciB9IGZyb20gJy4vUHJvcHNIaWdobGlnaHRlcic7XHJcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdGlvbkJveCB9IGZyb20gJy4vU2VjdGlvbkJveCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZyc7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVXBkYXRlUHJvZmlsZSc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05vU3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1pvb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRBbHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImphcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRlLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=