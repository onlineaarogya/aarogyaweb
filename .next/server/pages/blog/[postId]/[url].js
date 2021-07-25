module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "09cN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "09qn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0F/j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "41Hj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ Section_Section; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ SectionAlternate_SectionAlternate; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ DescriptionListIcon_DescriptionListIcon; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CardBase_CardBase; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ CardReview_CardReview; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ CardCategory_CardCategory; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ CardJob_CardJob; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ CardJobMinimal_CardJobMinimal; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ CardJobTag_CardJobTag; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ CardJobCompany_CardJobCompany; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Accordion_Accordion; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ HeroShaped_HeroShaped; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ CardProduct_CardProduct; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ Map_Map; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ HeroBackground_HeroBackground; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ HeroSideImage_HeroSideImage; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ CardPromo_CardPromo; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ CardCategoryLink_CardCategoryLink; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ HeroSimpleBackground_HeroSimpleBackground; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ CardPricingStandard_CardPricingStandard; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ Parallax_Parallax; });

// UNUSED EXPORTS: ContactForm

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/organisms/Section/Section.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const useStyles = Object(styles_["makeStyles"])(theme => ({
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
    className: external_clsx_default()('section', classes.root, fullWidth ? classes.fullWidth : {}, narrow ? classes.narrow : {}, disablePadding ? classes.disablePadding : {}, className)
  }, rest), children);
};

/* harmony default export */ var Section_Section = (Section);
// CONCATENATED MODULE: ./src/components/organisms/Section/index.js

// CONCATENATED MODULE: ./src/components/organisms/SectionAlternate/SectionAlternate.js
var SectionAlternate_jsx = external_react_default.a.createElement;

function SectionAlternate_extends() { SectionAlternate_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionAlternate_extends.apply(this, arguments); }

function SectionAlternate_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SectionAlternate_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SectionAlternate_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SectionAlternate_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = SectionAlternate_objectWithoutProperties(props, ["children", "innerNarrowed", "className"]);

  const classes = SectionAlternate_useStyles();
  return SectionAlternate_jsx("section", SectionAlternate_extends({
    className: external_clsx_default()('section-alternate', classes.root, className)
  }, rest), SectionAlternate_jsx("div", {
    className: external_clsx_default()('section-alternate__content', classes.inner, innerNarrowed ? classes.innerNarrowed : {})
  }, children));
};

/* harmony default export */ var SectionAlternate_SectionAlternate = (SectionAlternate);
// CONCATENATED MODULE: ./src/components/organisms/SectionAlternate/index.js

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/components/organisms/DescriptionListIcon/DescriptionListIcon.js
var DescriptionListIcon_jsx = external_react_default.a.createElement;

function DescriptionListIcon_extends() { DescriptionListIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DescriptionListIcon_extends.apply(this, arguments); }

function DescriptionListIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DescriptionListIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DescriptionListIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DescriptionListIcon_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = DescriptionListIcon_objectWithoutProperties(props, ["title", "subtitle", "icon", "align", "titleVariant", "subtitleVariant", "className", "titleProps", "subtitleProps"]);

  const classes = DescriptionListIcon_useStyles();
  let gridJustify = 'center';

  if (align === 'left') {
    gridJustify = 'flex-start';
  } else if (align === 'right') {
    gridJustify = 'flex-end';
  }

  return DescriptionListIcon_jsx(core_["Grid"], DescriptionListIcon_extends({
    container: true,
    spacing: 2
  }, rest, {
    className: external_clsx_default()('description-list-icon', className)
  }), DescriptionListIcon_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: gridJustify,
    xs: 12,
    className: "description-list-icon__icon-wrapper"
  }, icon), DescriptionListIcon_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__title-wrapper"
  }, DescriptionListIcon_jsx(core_["Typography"], DescriptionListIcon_extends({
    variant: titleVariant,
    color: "textPrimary",
    align: align,
    className: external_clsx_default()(classes.title, 'description-list-icon__title')
  }, titleProps), title)), subtitle && DescriptionListIcon_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "description-list-icon__subtitle-wrapper"
  }, DescriptionListIcon_jsx(core_["Typography"], {
    variant: subtitleVariant,
    color: "textSecondary",
    align: align,
    className: "description-list-icon__subtitle"
  }, subtitle)));
};

DescriptionListIcon.defaultProps = {
  align: 'center',
  titleVariant: 'h6',
  subtitleVariant: 'body1',
  titleProps: {},
  subtitleProps: {}
};
/* harmony default export */ var DescriptionListIcon_DescriptionListIcon = (DescriptionListIcon);
// CONCATENATED MODULE: ./src/components/organisms/DescriptionListIcon/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardBase/CardBase.js
var CardBase_jsx = external_react_default.a.createElement;

function CardBase_extends() { CardBase_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardBase_extends.apply(this, arguments); }

function CardBase_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardBase_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardBase_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CardBase_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardBase_objectWithoutProperties(props, ["withShadow", "noShadow", "noBorder", "noBg", "liftUp", "children", "align", "className", "cardContentProps"]);

  const classes = CardBase_useStyles();
  return CardBase_jsx(core_["Card"], CardBase_extends({
    className: external_clsx_default()('card-base', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest), CardBase_jsx(core_["CardContent"], CardBase_extends({
    className: external_clsx_default()('card-base__content', classes.content, classes[align])
  }, cardContentProps), children));
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {}
};
/* harmony default export */ var CardBase_CardBase = (CardBase);
// CONCATENATED MODULE: ./src/components/organisms/CardBase/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardReview/CardReview.js
var CardReview_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardReview_extends() { CardReview_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardReview_extends.apply(this, arguments); }

function CardReview_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardReview_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardReview_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardReview_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardReview_objectWithoutProperties(props, ["icon", "text", "authorPhoto", "authorName", "authorTitle", "align", "textVariant", "className", "textProps", "listItemPrimaryTypographyProps", "listItemSecondaryTypographyProps"]);

  const classes = CardReview_useStyles();
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return CardReview_jsx(CardBase_CardBase, CardReview_extends({
    className: external_clsx_default()('card-review', classes.root, className)
  }, rest), CardReview_jsx(core_["Grid"], {
    container: true,
    spacing: 2,
    className: "card-review__wrapper"
  }, CardReview_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "card-review__icon-wrapper"
  }, icon), CardReview_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__text-wrapper"
  }, CardReview_jsx(core_["Typography"], CardReview_extends({
    variant: textVariant,
    align: align,
    component: "p"
  }, textProps), text)), CardReview_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-review__lits-container"
  }, CardReview_jsx(core_["Grid"], {
    container: true,
    justify: justifyGrid,
    className: "card-review__list-wrapper"
  }, CardReview_jsx(core_["List"], {
    disablePadding: true,
    className: "card-review__list"
  }, CardReview_jsx(core_["ListItem"], {
    className: "card-review__list-item"
  }, CardReview_jsx(core_["ListItemAvatar"], {
    className: "card-review__list-item-avatar"
  }, CardReview_jsx(core_["Avatar"], CardReview_extends({}, authorPhoto, {
    alt: authorName,
    className: "card-review__avatar"
  }))), CardReview_jsx(core_["ListItemText"], {
    className: "card-review__list-item-text",
    primary: authorName,
    secondary: authorTitle,
    primaryTypographyProps: _objectSpread({}, listItemPrimaryTypographyProps),
    secondaryTypographyProps: _objectSpread({}, listItemSecondaryTypographyProps)
  })))))));
};

CardReview.defaultProps = {
  align: 'center',
  textVariant: 'h6',
  textProps: {},
  listItemPrimaryTypographyProps: {},
  listItemSecondaryTypographyProps: {}
};
/* harmony default export */ var CardReview_CardReview = (CardReview);
// CONCATENATED MODULE: ./src/components/organisms/CardReview/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardCategory/CardCategory.js
var CardCategory_jsx = external_react_default.a.createElement;

function CardCategory_extends() { CardCategory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardCategory_extends.apply(this, arguments); }

function CardCategory_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardCategory_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardCategory_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CardCategory_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardCategory_objectWithoutProperties(props, ["icon", "title", "align", "className"]);

  const classes = CardCategory_useStyles();
  return CardCategory_jsx(CardBase_CardBase, CardCategory_extends({
    className: external_clsx_default()(classes.root, className)
  }, rest), CardCategory_jsx(DescriptionListIcon_DescriptionListIcon, {
    icon: icon,
    title: title,
    align: align
  }));
};

CardCategory.defaultProps = {
  align: 'center'
};
/* harmony default export */ var CardCategory_CardCategory = (CardCategory);
// CONCATENATED MODULE: ./src/components/organisms/CardCategory/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardJob/CardJob.js
var CardJob_jsx = external_react_default.a.createElement;

function CardJob_extends() { CardJob_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardJob_extends.apply(this, arguments); }

function CardJob_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardJob_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardJob_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardJob_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardJob_objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "jobDate", "companyLogo", "companyName", "className"]);

  const classes = CardJob_useStyles();
  return CardJob_jsx(CardBase_CardBase, CardJob_extends({
    className: external_clsx_default()('card-job', classes.root, className),
    align: "left"
  }, rest), CardJob_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, CardJob_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, CardJob_jsx("span", {
    className: external_clsx_default()(classes.dot, classes.dotBig),
    style: {
      background: badgeColor
    }
  }), CardJob_jsx(core_["Typography"], {
    component: "span",
    variant: "body2",
    color: "textPrimary"
  }, badgeTitle)), CardJob_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJob_jsx(core_["Typography"], {
    variant: "h6",
    className: classes.jobTitle
  }, jobTitle))), CardJob_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, CardJob_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, CardJob_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobLocation), CardJob_jsx("span", {
    className: external_clsx_default()(classes.dot, classes.dotSmall, classes.dotMargin)
  }), CardJob_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobType))), CardJob_jsx(core_["ListItem"], {
    disableGutters: true
  }, CardJob_jsx(core_["ListItemAvatar"], null, CardJob_jsx(core_["Avatar"], {
    src: companyLogo,
    alt: companyName
  })), CardJob_jsx(core_["ListItemText"], {
    primary: companyName,
    secondary: jobDate
  })));
};

/* harmony default export */ var CardJob_CardJob = (CardJob);
// CONCATENATED MODULE: ./src/components/organisms/CardJob/index.js

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/components/organisms/CardJobMinimal/CardJobMinimal.js
var CardJobMinimal_jsx = external_react_default.a.createElement;

function CardJobMinimal_extends() { CardJobMinimal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardJobMinimal_extends.apply(this, arguments); }

function CardJobMinimal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardJobMinimal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardJobMinimal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardJobMinimal_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardJobMinimal_objectWithoutProperties(props, ["title", "subtitle", "showArrow", "titleProps", "subtitleProps", "className"]);

  const classes = CardJobMinimal_useStyles();
  return CardJobMinimal_jsx("div", CardJobMinimal_extends({
    className: external_clsx_default()(classes.root, 'card-job-minimal')
  }, rest), CardJobMinimal_jsx("div", {
    className: external_clsx_default()(classes.cardJobMinimalBody, 'card-job-minimal__body'),
    style: !showArrow ? {
      marginRight: 0
    } : {}
  }, CardJobMinimal_jsx("div", {
    className: "card-job-minimal__title-container"
  }, CardJobMinimal_jsx(core_["Typography"], CardJobMinimal_extends({
    variant: "subtitle1",
    className: external_clsx_default()(classes.title, 'card-job-minimal__title')
  }, titleProps), title)), CardJobMinimal_jsx("div", {
    className: "card-job-minimal__location-conatiner"
  }, CardJobMinimal_jsx(core_["Typography"], CardJobMinimal_extends({
    variant: "body2",
    color: "textSecondary",
    className: "card-job-minimal__location"
  }, subtitleProps), subtitle))), showArrow ? CardJobMinimal_jsx("div", {
    className: "card-job-minimal__arrow-container"
  }, CardJobMinimal_jsx(atoms["b" /* Icon */], {
    fontIconClass: "fas fa-angle-right",
    fontIconColor: core_["colors"].grey[700],
    className: "card-job-minimal__arrow"
  })) : null);
};

CardJobMinimal.defaultProps = {
  showArrow: false,
  titleProps: {},
  subtitleProps: {}
};
/* harmony default export */ var CardJobMinimal_CardJobMinimal = (CardJobMinimal);
// CONCATENATED MODULE: ./src/components/organisms/CardJobMinimal/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardJobTag/CardJobTag.js
var CardJobTag_jsx = external_react_default.a.createElement;

function CardJobTag_extends() { CardJobTag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardJobTag_extends.apply(this, arguments); }

function CardJobTag_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardJobTag_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardJobTag_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardJobTag_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '&:hover': {
      borderRight: `${theme.spacing(1)}px solid ${core_["colors"].red[500]}`
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
        rest = CardJobTag_objectWithoutProperties(props, ["badgeColor", "badgeTitle", "jobTitle", "jobLocation", "jobType", "className"]);

  const classes = CardJobTag_useStyles();
  return CardJobTag_jsx(CardBase_CardBase, CardJobTag_extends({
    className: external_clsx_default()(classes.root, className),
    align: "left"
  }, rest), CardJobTag_jsx(external_react_default.a.Fragment, null, CardJobTag_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, CardJobTag_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, CardJobTag_jsx("span", {
    className: classes.tag,
    style: {
      background: badgeColor,
      borderColor: badgeColor
    }
  }, CardJobTag_jsx(core_["Typography"], {
    component: "span",
    variant: "body2",
    className: classes.textWhite
  }, badgeTitle))), CardJobTag_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJobTag_jsx(core_["Typography"], {
    variant: "h6",
    className: classes.jobTitle
  }, jobTitle))), CardJobTag_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, CardJobTag_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, CardJobTag_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobLocation), CardJobTag_jsx("span", {
    className: external_clsx_default()(classes.dot, classes.dotSmall, classes.dotMargin)
  }), CardJobTag_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textSecondary"
  }, jobType)))));
};

/* harmony default export */ var CardJobTag_CardJobTag = (CardJobTag);
// CONCATENATED MODULE: ./src/components/organisms/CardJobTag/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardJobCompany/CardJobCompany.js
var CardJobCompany_jsx = external_react_default.a.createElement;

function CardJobCompany_extends() { CardJobCompany_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardJobCompany_extends.apply(this, arguments); }

function CardJobCompany_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardJobCompany_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardJobCompany_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const CardJobCompany_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardJobCompany_objectWithoutProperties(props, ["jobTitle", "jobLocation", "companyLogo", "companyName", "jobsCount", "companyInfo", "className"]);

  const classes = CardJobCompany_useStyles();
  return CardJobCompany_jsx(CardBase_CardBase, CardJobCompany_extends({
    className: external_clsx_default()('card-company', classes.root, className),
    align: "left"
  }, rest), CardJobCompany_jsx(core_["Grid"], {
    container: true,
    spacing: 1
  }, CardJobCompany_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJobCompany_jsx(core_["Avatar"], {
    src: companyLogo,
    alt: companyName,
    className: classes.companyAvatar
  })), CardJobCompany_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJobCompany_jsx(core_["Typography"], {
    variant: "h6",
    className: classes.companyName
  }, companyName)), CardJobCompany_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    xs: 12
  }, CardJobCompany_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary"
  }, jobTitle), CardJobCompany_jsx("span", {
    className: external_clsx_default()(classes.dot, classes.dotSmall, classes.dotMargin)
  }), CardJobCompany_jsx(core_["Typography"], {
    component: "span",
    variant: "subtitle1",
    color: "textPrimary"
  }, jobLocation)), CardJobCompany_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJobCompany_jsx(atoms["e" /* LearnMoreLink */], {
    title: jobsCount,
    variant: "subtitle1"
  })), CardJobCompany_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardJobCompany_jsx(core_["Typography"], {
    component: "p",
    variant: "body2",
    color: "textSecondary"
  }, companyInfo))));
};

/* harmony default export */ var CardJobCompany_CardJobCompany = (CardJobCompany);
// CONCATENATED MODULE: ./src/components/organisms/CardJobCompany/index.js

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// CONCATENATED MODULE: ./src/components/organisms/Accordion/Accordion.js
var Accordion_jsx = external_react_default.a.createElement;

function Accordion_extends() { Accordion_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Accordion_extends.apply(this, arguments); }

function Accordion_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Accordion_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Accordion_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */






const Accordion_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = Accordion_objectWithoutProperties(props, ["items", "className", "titleProps", "subtitleProps", "textProps", "linkProps"]);

  const classes = Accordion_useStyles();
  return Accordion_jsx("div", Accordion_extends({}, rest, {
    className: external_clsx_default()('accordion', classes.root, className)
  }), items.map(item => Accordion_jsx(core_["Accordion"], {
    className: external_clsx_default()('accordion__item-wrapper', classes.listItem),
    key: item.id
  }, Accordion_jsx(core_["AccordionSummary"], {
    expandIcon: Accordion_jsx(ExpandMore_default.a, null),
    "aria-controls": `${item.id}-content`,
    id: item.id
  }, Accordion_jsx(core_["Grid"], {
    container: true,
    spacing: 0,
    className: "accorion__item-text-container"
  }, Accordion_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "accorion__item-title-container"
  }, Accordion_jsx(core_["Typography"], Accordion_extends({
    variant: "h6",
    color: "textPrimary",
    className: "accorion_item-title"
  }, titleProps), item.title)), item.subtitle && Accordion_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "accorion_item-subtitle-container"
  }, Accordion_jsx(core_["Typography"], Accordion_extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "accorion_item-subtitle"
  }, subtitleProps), item.subtitle)))), Accordion_jsx(core_["AccordionDetails"], null, Accordion_jsx(core_["Grid"], {
    container: true,
    spacing: 2,
    className: "accordion__collapsable-text-container"
  }, Accordion_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-text-wrapper"
  }, Accordion_jsx(core_["Typography"], Accordion_extends({
    variant: "body1",
    color: "textPrimary",
    className: "accordion__collapsable-text"
  }, textProps), item.text)), item.link && Accordion_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "accordion__collapsable-link-wrapper"
  }, Accordion_jsx(atoms["e" /* LearnMoreLink */], Accordion_extends({
    title: item.link,
    variant: "body1",
    className: "accordion__collapsable-link"
  }, linkProps))))))));
};

Accordion.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
  linkProps: {}
};
/* harmony default export */ var Accordion_Accordion = (Accordion);
// CONCATENATED MODULE: ./src/components/organisms/Accordion/index.js

// CONCATENATED MODULE: ./src/components/organisms/HeroShaped/HeroShaped.js
var HeroShaped_jsx = external_react_default.a.createElement;

function HeroShaped_extends() { HeroShaped_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeroShaped_extends.apply(this, arguments); }

function HeroShaped_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeroShaped_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeroShaped_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeroShaped_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = HeroShaped_objectWithoutProperties(props, ["leftSide", "rightSide", "className"]);

  const classes = HeroShaped_useStyles();
  return HeroShaped_jsx("div", HeroShaped_extends({
    className: external_clsx_default()(classes.root, 'hero-shaped', className)
  }, rest), HeroShaped_jsx("div", {
    className: external_clsx_default()('hero-shaped__wrapper', classes.hero)
  }, HeroShaped_jsx(Section_Section, {
    className: external_clsx_default()('hero-shaped__left-side', classes.heroLeftSide)
  }, leftSide), HeroShaped_jsx("div", {
    className: external_clsx_default()('hero-shaped__right-side', classes.heroRightSide)
  }, HeroShaped_jsx("div", {
    className: external_clsx_default()('hero-shaped__cover', classes.heroCover)
  }, HeroShaped_jsx("div", {
    className: external_clsx_default()('hero-shaped__image-container', classes.heroImageContainer)
  }, HeroShaped_jsx("div", {
    className: external_clsx_default()('hero-shaped__image', classes.heroImage)
  }, rightSide))))), HeroShaped_jsx(core_["Divider"], null));
};

/* harmony default export */ var HeroShaped_HeroShaped = (HeroShaped);
// CONCATENATED MODULE: ./src/components/organisms/HeroShaped/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardProduct/CardProduct.js
var CardProduct_jsx = external_react_default.a.createElement;

function CardProduct_extends() { CardProduct_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardProduct_extends.apply(this, arguments); }

function CardProduct_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardProduct_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardProduct_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CardProduct_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardProduct_objectWithoutProperties(props, ["mediaClassName", "withShadow", "noShadow", "noBorder", "noBg", "liftUp", "cardContent", "mediaContent", "align", "className"]);

  const classes = CardProduct_useStyles();
  return CardProduct_jsx(core_["Card"], CardProduct_extends({
    className: external_clsx_default()('card-product', classes.root, withShadow ? classes.withShadow : {}, noShadow ? classes.noShadow : {}, noBorder ? classes.noBorder : {}, noBg ? classes.noBg : {}, liftUp ? classes.liftUp : {}, className)
  }, rest), CardProduct_jsx(core_["CardMedia"], {
    className: external_clsx_default()('card-product__media', classes.media, mediaClassName)
  }, mediaContent), CardProduct_jsx(core_["CardContent"], {
    className: external_clsx_default()('card-product__content', classes.content, classes[align])
  }, cardContent));
};

CardProduct.defaultProps = {
  align: 'left'
};
/* harmony default export */ var CardProduct_CardProduct = (CardProduct);
// CONCATENATED MODULE: ./src/components/organisms/CardProduct/index.js

// CONCATENATED MODULE: ./src/components/organisms/Map/Map.js
var Map_jsx = external_react_default.a.createElement;

function Map_extends() { Map_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Map_extends.apply(this, arguments); }

function Map_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Map_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Map_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Map_useStyles = Object(styles_["makeStyles"])(() => ({
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
        rest = Map_objectWithoutProperties(props, ["zoom", "center", "pins", "className"]);

  const classes = Map_useStyles();
  external_react_default.a.useEffect(() => {
    const L = __webpack_require__("hgx0");

    delete L.Icon.Default.prototype._getIconUrl;

    const markerIcon2x = __webpack_require__("tXPP");

    const markerIcon = __webpack_require__("09qn");

    const markerShadow = __webpack_require__("5+R5");

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: typeof markerIcon2x === 'object' ? markerIcon2x.default : markerIcon2x,
      iconUrl: typeof markerIcon === 'object' ? markerIcon.default : markerIcon,
      shadowUrl: typeof markerShadow === 'object' ? markerShadow.default : markerShadow
    });
  });

  if (true) {
    return null;
  }

  const ReactMap = __webpack_require__("AuoD").Map;

  const TileLayer = __webpack_require__("AuoD").TileLayer;

  const Marker = __webpack_require__("AuoD").Marker;

  return Map_jsx(ReactMap, Map_extends({
    zoom: zoom,
    center: center,
    className: external_clsx_default()('map', classes.root, className)
  }, rest), Map_jsx(TileLayer, {
    className: "map__tile-layer",
    detectRetina: true,
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), pins && pins.length && pins.map((item, i) => Map_jsx(Marker, {
    className: "map__marker",
    position: [item.location.y, item.location.x],
    key: i
  })));
};

var maxBounds = [[20.26667, 73.01667] //Southwest
];
Map.defaultProps = {
  zoom: 11,
  center: [0, 0],
  maxBounds: maxBounds
};
/* harmony default export */ var Map_Map = (Map);
// CONCATENATED MODULE: ./src/components/organisms/Map/index.js

// CONCATENATED MODULE: ./src/components/organisms/HeroBackground/HeroBackground.js
var HeroBackground_jsx = external_react_default.a.createElement;

function HeroBackground_extends() { HeroBackground_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeroBackground_extends.apply(this, arguments); }

function HeroBackground_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeroBackground_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeroBackground_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeroBackground_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  },
  colorDefault: {
    background: core_["colors"].indigo[900]
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
        rest = HeroBackground_objectWithoutProperties(props, ["children", "disbaleCoverOpacity", "backgroundImg", "backgroundPosition", "backgroundColor", "contentSectionClassName", "className"]);

  const classes = HeroBackground_useStyles();
  const useCustomStyles = Object(styles_["makeStyles"])(() => ({
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
  return HeroBackground_jsx("div", HeroBackground_extends({
    className: external_clsx_default()('hero-background', classes.root, backgroundColor ? customClasses.backgroundColor : classes.colorDefault, className)
  }, rest), HeroBackground_jsx("div", {
    className: external_clsx_default()('hero-background__wrapper', classes.heroWrapper)
  }, HeroBackground_jsx(Section_Section, {
    className: external_clsx_default()(contentSectionClassName ? contentSectionClassName : '', 'hero-background__section')
  }, children)), HeroBackground_jsx("div", {
    className: external_clsx_default()('hero-background__cover', classes.heroBg, classes.heroCover, customClasses.coverBg, backgroundPosition ? customClasses.backgroundPosition : {}, disbaleCoverOpacity ? classes.noCoverOpacity : {})
  }));
};

/* harmony default export */ var HeroBackground_HeroBackground = (HeroBackground);
// CONCATENATED MODULE: ./src/components/organisms/HeroBackground/index.js

// CONCATENATED MODULE: ./src/components/organisms/HeroSideImage/HeroSideImage.js
var HeroSideImage_jsx = external_react_default.a.createElement;

function HeroSideImage_extends() { HeroSideImage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeroSideImage_extends.apply(this, arguments); }

function HeroSideImage_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeroSideImage_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeroSideImage_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeroSideImage_useStyles = Object(styles_["makeStyles"])(theme => ({
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
    background: core_["colors"].indigo[900],
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
        rest = HeroSideImage_objectWithoutProperties(props, ["imageSrc", "imageSrcSet", "children", "backgroundColor", "reverse", "className"]);

  const classes = HeroSideImage_useStyles();
  const useCustomStyles = Object(styles_["makeStyles"])(() => ({
    coverBg: {
      background: backgroundColor
    }
  }));
  const customClasses = useCustomStyles();
  return HeroSideImage_jsx(core_["Grid"], HeroSideImage_extends({
    container: true,
    className: external_clsx_default()('hero-side-image', classes.root, className),
    direction: reverse ? 'row-reverse' : 'row'
  }, rest), HeroSideImage_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: external_clsx_default()('hero-side-image__image-wrapper', classes.imageWrapper)
  }, HeroSideImage_jsx(atoms["d" /* Image */], {
    src: imageSrc,
    srcSet: imageSrcSet ? imageSrcSet : '',
    alt: '...',
    className: external_clsx_default()('hero-side-image__image', classes.image),
    lazy: false
  }), HeroSideImage_jsx("div", {
    className: external_clsx_default()('hero-side-image__cover', classes.cover, backgroundColor ? customClasses.coverBg : {})
  })), HeroSideImage_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    className: external_clsx_default()('hero-side-image__content', classes.content)
  }, children));
};

/* harmony default export */ var HeroSideImage_HeroSideImage = (HeroSideImage);
// CONCATENATED MODULE: ./src/components/organisms/HeroSideImage/index.js

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/components/organisms/CardPromo/CardPromo.js
var CardPromo_jsx = external_react_default.a.createElement;

function CardPromo_extends() { CardPromo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardPromo_extends.apply(this, arguments); }

function CardPromo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardPromo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardPromo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const CardPromo_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardPromo_objectWithoutProperties(props, ["titleColor", "fontIconClass", "color", "title", "subtitle", "description", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps", "descriptionProps"]);

  const classes = CardPromo_useStyles();
  let justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return CardPromo_jsx(CardBase_CardBase, CardPromo_extends({
    className: external_clsx_default()('card__promo', classes.root, className)
  }, rest), CardPromo_jsx(core_["Grid"], {
    container: true,
    spacing: 2,
    className: "card-promo__wrapper"
  }, CardPromo_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "card-promo__icon-wrapper"
  }, CardPromo_jsx(molecules["c" /* IconAlternate */], CardPromo_extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium",
    className: "card-promo__icon"
  }, iconAlternateProps))), CardPromo_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__title-wrapper"
  }, CardPromo_jsx(core_["Typography"], CardPromo_extends({
    variant: "h4",
    align: align,
    className: external_clsx_default()('card-promo__title', classes.fontWeight700),
    color: titleColor || 'textPrimary'
  }, titleProps), title)), subtitle && CardPromo_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__subtitle-wrapper"
  }, CardPromo_jsx(core_["Typography"], CardPromo_extends({
    variant: "h6",
    align: align,
    className: external_clsx_default()('card-promo__subtitle', classes.fontWeight700)
  }, subtitleProps), subtitle)), description && CardPromo_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-promo__description-wrapper"
  }, CardPromo_jsx(core_["Typography"], CardPromo_extends({
    variant: "subtitle1",
    color: "textSecondary",
    align: align,
    className: "card-promo__description"
  }, descriptionProps), description))));
};

CardPromo.defaultProps = {
  align: 'left',
  iconAlternateProps: {},
  titleProps: {},
  subtitleProps: {},
  descriptionProps: {}
};
/* harmony default export */ var CardPromo_CardPromo = (CardPromo);
// CONCATENATED MODULE: ./src/components/organisms/CardPromo/index.js

// EXTERNAL MODULE: external "@material-ui/icons/ArrowRightAlt"
var ArrowRightAlt_ = __webpack_require__("NotL");
var ArrowRightAlt_default = /*#__PURE__*/__webpack_require__.n(ArrowRightAlt_);

// CONCATENATED MODULE: ./src/components/organisms/CardCategoryLink/CardCategoryLink.js
var CardCategoryLink_jsx = external_react_default.a.createElement;

function CardCategoryLink_extends() { CardCategoryLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardCategoryLink_extends.apply(this, arguments); }

function CardCategoryLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardCategoryLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardCategoryLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const CardCategoryLink_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardCategoryLink_objectWithoutProperties(props, ["fontIconClass", "color", "title", "subtitle", "href", "align", "className", "iconAlternateProps", "titleProps", "subtitleProps"]);

  const classes = CardCategoryLink_useStyles();
  let justifyGrid = 'flex-start';

  if (align === 'center') {
    justifyGrid = 'center';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return CardCategoryLink_jsx(CardBase_CardBase, CardCategoryLink_extends({
    className: external_clsx_default()('card-category-link', classes.root, className)
  }, rest), CardCategoryLink_jsx(external_react_default.a.Fragment, null, CardCategoryLink_jsx(core_["Grid"], {
    container: true,
    spacing: 2,
    className: "card-category-link__wrapper"
  }, CardCategoryLink_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12
  }, CardCategoryLink_jsx(molecules["c" /* IconAlternate */], CardCategoryLink_extends({
    fontIconClass: fontIconClass,
    color: color,
    size: "medium"
  }, iconAlternateProps))), CardCategoryLink_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardCategoryLink_jsx(core_["Typography"], CardCategoryLink_extends({
    variant: "h6",
    align: align,
    className: classes.fontWeight700
  }, titleProps), title)), subtitle && CardCategoryLink_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, CardCategoryLink_jsx(core_["Typography"], CardCategoryLink_extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary"
  }, subtitleProps), subtitle))), CardCategoryLink_jsx("a", {
    href: href,
    className: external_clsx_default()('card-category-link__item', classes.categoryIconButton)
  }, CardCategoryLink_jsx(core_["IconButton"], {
    className: "card-category-link__icon-button"
  }, CardCategoryLink_jsx(ArrowRightAlt_default.a, {
    className: "card-category-link__icon",
    style: {
      color: color[500]
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
/* harmony default export */ var CardCategoryLink_CardCategoryLink = (CardCategoryLink);
// CONCATENATED MODULE: ./src/components/organisms/CardCategoryLink/index.js

// CONCATENATED MODULE: ./src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js
var HeroSimpleBackground_jsx = external_react_default.a.createElement;

function HeroSimpleBackground_extends() { HeroSimpleBackground_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeroSimpleBackground_extends.apply(this, arguments); }

function HeroSimpleBackground_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeroSimpleBackground_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeroSimpleBackground_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const HeroSimpleBackground_useStyles = Object(styles_["makeStyles"])(() => ({
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
        rest = HeroSimpleBackground_objectWithoutProperties(props, ["children", "backgroundSize", "backgroundImage", "backgroundPosition", "className"]);

  const classes = HeroSimpleBackground_useStyles();
  const useBackground = Object(styles_["makeStyles"])(() => ({
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
  return HeroSimpleBackground_jsx("div", HeroSimpleBackground_extends({
    className: external_clsx_default()('hero-simple-background', classes.root, className, backgroundClasses.backgroundImage, backgroundClasses.backgroundSize, backgroundClasses.backgroundPosition)
  }, rest), HeroSimpleBackground_jsx(Section_Section, {
    className: "hero-simple-background__section"
  }, children));
};

HeroSimpleBackground.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
/* harmony default export */ var HeroSimpleBackground_HeroSimpleBackground = (HeroSimpleBackground);
// CONCATENATED MODULE: ./src/components/organisms/HeroSimpleBackground/index.js

// CONCATENATED MODULE: ./src/components/organisms/CardPricingStandard/CardPricingStandard.js
var CardPricingStandard_jsx = external_react_default.a.createElement;

function CardPricingStandard_extends() { CardPricingStandard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardPricingStandard_extends.apply(this, arguments); }

function CardPricingStandard_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardPricingStandard_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardPricingStandard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CardPricingStandard_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = CardPricingStandard_objectWithoutProperties(props, ["title", "subtitle", "priceComponent", "featureCheckComponent", "features", "cta", "disclaimer", "className", "titleProps", "subtitleProps", "disclaimerProps", "featureTitleProps"]);

  const classes = CardPricingStandard_useStyles();
  return CardPricingStandard_jsx(CardBase_CardBase, CardPricingStandard_extends({
    className: external_clsx_default()('card-pricing-standard', classes.root, className),
    align: "left"
  }, rest), CardPricingStandard_jsx(core_["Grid"], {
    container: true,
    spacing: 2,
    className: "card-pricing-standard__wrapper"
  }, CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__headline"
  }, CardPricingStandard_jsx(core_["Typography"], CardPricingStandard_extends({
    variant: "h5",
    gutterBottom: true,
    className: "card-pricing-standard__title"
  }, titleProps), title), subtitle && CardPricingStandard_jsx(core_["Typography"], CardPricingStandard_extends({
    variant: "subtitle1",
    color: "textSecondary",
    className: "card-pricing-standard__subtitle"
  }, subtitleProps), subtitle)), CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__divider-container"
  }, CardPricingStandard_jsx(core_["Divider"], {
    className: "card-pricing-standard__divider"
  })), CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__content"
  }, priceComponent), features && CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__feature-wrapper"
  }, CardPricingStandard_jsx(core_["List"], {
    className: "card-pricing-standard__feature-list"
  }, features.map((item, index) => CardPricingStandard_jsx(core_["ListItem"], {
    key: index,
    disableGutters: true,
    className: "card-pricing-standard__feature-list-item"
  }, featureCheckComponent && CardPricingStandard_jsx("div", {
    className: external_clsx_default()('card-pricing-standard__feature-check', classes.featureCheck)
  }, featureCheckComponent), CardPricingStandard_jsx(core_["Typography"], CardPricingStandard_extends({
    variant: "h6",
    noWrap: true,
    className: "card-pricing-standard__feature-title"
  }, featureTitleProps), item))))), CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__cta-wrapper"
  }, cta), disclaimer && CardPricingStandard_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "card-pricing-standard__disclaimer-wrapper"
  }, CardPricingStandard_jsx(core_["Typography"], CardPricingStandard_extends({
    variant: "caption",
    component: "p",
    align: "center",
    className: "card-pricing-standard__disclaimer-title"
  }, disclaimerProps), disclaimer))));
};

CardPricingStandard.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  disclaimerProps: {},
  featureTitleProps: {}
};
/* harmony default export */ var CardPricingStandard_CardPricingStandard = (CardPricingStandard);
// CONCATENATED MODULE: ./src/components/organisms/CardPricingStandard/index.js

// CONCATENATED MODULE: ./src/components/organisms/Parallax/Parallax.js
var Parallax_jsx = external_react_default.a.createElement;

function Parallax_extends() { Parallax_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Parallax_extends.apply(this, arguments); }

function Parallax_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Parallax_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Parallax_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Parallax_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = Parallax_objectWithoutProperties(props, ["backgroundImage", "children", "className"]);

  const classes = Parallax_useStyles();
  external_react_default.a.useEffect(() => {
    const jarallaxElems = document.querySelectorAll('.jarallax');

    if (!jarallaxElems || jarallaxElems && jarallaxElems.length === 0) {
      return;
    }

    const jarallax = __webpack_require__("9g36").jarallax;

    jarallax(jarallaxElems, {
      speed: 0.2
    });
  });
  return Parallax_jsx("div", Parallax_extends({
    className: external_clsx_default()('jarallax', 'parallax', classes.root, className),
    "data-jarallax": true,
    "data-speed": "0.2"
  }, rest), Parallax_jsx("div", {
    className: external_clsx_default()('jarallax-img', 'parallax__image', classes.image),
    style: {
      backgroundImage: `url(${backgroundImage})`
    },
    alt: "..."
  }), children);
};

/* harmony default export */ var Parallax_Parallax = (Parallax);
// CONCATENATED MODULE: ./src/components/organisms/Parallax/index.js

// EXTERNAL MODULE: external "validate.js"
var external_validate_js_ = __webpack_require__("iEfC");
var external_validate_js_default = /*#__PURE__*/__webpack_require__.n(external_validate_js_);

// CONCATENATED MODULE: ./src/components/organisms/ContactForm/ContactForm.js
var ContactForm_jsx = external_react_default.a.createElement;

function ContactForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ContactForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContactForm_ownKeys(Object(source), true).forEach(function (key) { ContactForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContactForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContactForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ContactForm_useStyles = Object(styles_["makeStyles"])(theme => ({
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
  const classes = ContactForm_useStyles();
  const [formState, setFormState] = external_react_default.a.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  external_react_default.a.useEffect(() => {
    const errors = external_validate_js_default()(formState.values, schema);
    setFormState(formState => ContactForm_objectSpread(ContactForm_objectSpread({}, formState), {}, {
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ContactForm_objectSpread(ContactForm_objectSpread({}, formState), {}, {
      values: ContactForm_objectSpread(ContactForm_objectSpread({}, formState.values), {}, {
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }),
      touched: ContactForm_objectSpread(ContactForm_objectSpread({}, formState.touched), {}, {
        [event.target.name]: true
      })
    }));
  };

  const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

  return ContactForm_jsx("div", {
    className: classes.root
  }, ContactForm_jsx("form", {
    name: "contact-form",
    method: "post",
    action: "/submition.html?contact-form-submit-success=true"
  }, ContactForm_jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact-form"
  }), ContactForm_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, ContactForm_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, ContactForm_jsx(core_["Typography"], {
    variant: "h4",
    align: "center"
  }, ContactForm_jsx("strong", null, "Contact Us")), ContactForm_jsx(core_["Typography"], {
    variant: "h6",
    color: "textSecondary",
    align: "center"
  }, "We carefully read and answer to all our emails.")), ContactForm_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, ContactForm_jsx(core_["TextField"], {
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
    value: formState.values.fullname || ''
  })), ContactForm_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, ContactForm_jsx(core_["TextField"], {
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
    value: formState.values.email || ''
  })), ContactForm_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, ContactForm_jsx(core_["TextField"], {
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
    value: formState.values.message || ''
  })), ContactForm_jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, ContactForm_jsx(core_["Typography"], {
    variant: "subtitle2",
    gutterBottom: true
  }, "Fields that are marked with * sign are required."), ContactForm_jsx(core_["Button"], {
    size: "large",
    variant: "contained",
    type: "submit",
    color: "primary",
    disabled: !formState.isValid
  }, "Send")))));
};

/* harmony default export */ var ContactForm_ContactForm = (ContactForm);
// CONCATENATED MODULE: ./src/components/organisms/ContactForm/index.js

// CONCATENATED MODULE: ./src/components/organisms/index.js























/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ac1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "5+R5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"

/***/ }),

/***/ "69Y9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ WithLayout; });

// UNUSED EXPORTS: useDarkMode

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// CONCATENATED MODULE: ./src/theme/palette.js
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
// CONCATENATED MODULE: ./src/theme/index.js



const getTheme = mode => Object(core_["responsiveFontSizes"])(Object(core_["createMuiTheme"])({
  palette: mode === 'light' ? light : dark,
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

/* harmony default export */ var theme = (getTheme);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__("+UYx");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// CONCATENATED MODULE: ./src/WithLayout.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useDarkMode = () => {
  const {
    0: themeMode,
    1: setTheme
  } = Object(external_react_["useState"])('light');
  const {
    0: mountedComponent,
    1: setMountedComponent
  } = Object(external_react_["useState"])(false);

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  Object(external_react_["useEffect"])(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
    external_aos_default.a.refresh();
  }, []);
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.refresh();
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
  external_react_default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    external_aos_default.a.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out'
    });
  }, []);
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  Object(external_react_["useEffect"])(() => {
    external_aos_default.a.refresh();
  }, [mountedComponent]);
  return __jsx(styles_["ThemeProvider"], {
    theme: theme(themeMode)
  }, __jsx(CssBaseline_default.a, null), __jsx(core_["Paper"], {
    elevation: 0
  }, __jsx(Layout, {
    themeMode: themeMode,
    themeToggler: themeToggler
  }, __jsx(Component, _extends({
    data: rest.data,
    themeMode: themeMode
  }, rest)))));
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MXaO");


/***/ }),

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9g36":
/***/ (function(module, exports) {

module.exports = require("jarallax");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AP8i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHelpCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFaqsCategory; });
const D9_URL = process.env.API_BASE_URL;

const getArticle = async data => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${D9_URL}api/articles-test?page=0`, requestOptions);
  const regResponse = await response.json();
  console.log('fetcher', D9_URL);
  return regResponse;
}; // get health article details


const getArticleDetails = async data => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${D9_URL}api/get-article/${data.nid}`, requestOptions);
  const regResponse = await response.json();
  return regResponse;
}; // get help center


const getHelpCenter = async data => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${D9_URL}api/faqs/${data.tid}`, requestOptions);
  const regResponse = await response.json(); // console.log('fetcher', D9_URL);

  return regResponse;
}; // get faqs category
// get help center


const getFaqsCategory = async data => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${D9_URL}api/faqs-type`, requestOptions);
  const regResponse = await response.json(); // console.log('fetcher', D9_URL);

  return regResponse;
};



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "AuoD":
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Exl5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Main_Main; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__("0F/j");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);

// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__("s4mK");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__("JDU/");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);

// EXTERNAL MODULE: external "@material-ui/icons/Pinterest"
var Pinterest_ = __webpack_require__("Fv0s");
var Pinterest_default = /*#__PURE__*/__webpack_require__.n(Pinterest_);

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/layouts/Main/components/Footer/Footer.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0)
    },
    background: '#e4e6e6'
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    }
  },
  logoContainerItem: {
    paddingTop: 0
  },
  logoContainer: {// width: 120,
    // height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    marginTop: '-18px'
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1)
  },
  socialIcon: {
    padding: 0,
    position: 'relative',
    top: '-26px',
    left: '6px',
    marginRight: theme.spacing(1),
    color: '#5e5e64',
    '&:hover': {
      background: 'transparent'
    },
    '&:last-child': {
      marginRight: 0
    }
  },
  icon: {
    fontSize: 24
  },
  menuListContainer: {
    padding: '0 !important'
  },
  menu: {
    display: 'flex'
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0
    }
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: '#ec3832'
  },
  divider: {
    width: '100%'
  },
  navLink: {
    color: 'rgb(78 77 84)'
  }
}));

const Footer = props => {
  const {
    pages,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["pages", "className"]);

  console.log(pages);
  const classes = useStyles();
  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const {
      item
    } = props;
    return __jsx(core_["List"], {
      disablePadding: true,
      className: classes.menuItem
    }, __jsx(core_["ListItem"], {
      disableGutters: true,
      className: classes.menuGroupItem
    }, __jsx(core_["Typography"], {
      variant: "body2",
      className: classes.menuGroupTitle
    }, item.groupTitle)), item.pages.map((page, i) => __jsx(core_["ListItem"], {
      disableGutters: true,
      key: i,
      className: classes.menuGroupItem
    }, __jsx(core_["Typography"], {
      variant: "body2",
      component: 'a',
      href: page.href,
      className: external_clsx_default()(classes.navLink, 'submenu-item')
    }, page.title))));
  };

  const LandingPages = () => {
    const {
      services,
      apps,
      web
    } = landings.children;
    return __jsx("div", {
      className: classes.menu
    }, __jsx("div", null, __jsx(MenuGroup, {
      item: services
    }), __jsx(MenuGroup, {
      item: apps
    })), __jsx("div", null, __jsx(MenuGroup, {
      item: web
    })));
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio
    } = supportedPages.children;
    return __jsx("div", {
      className: classes.menu
    }, __jsx("div", null, __jsx(MenuGroup, {
      item: career
    }), __jsx(MenuGroup, {
      item: helpCenter
    })), __jsx("div", null, __jsx(MenuGroup, {
      item: company
    })), __jsx("div", null, __jsx(MenuGroup, {
      item: blog
    }), __jsx(MenuGroup, {
      item: portfolio
    })));
  };

  const AccountPages = () => {
    const {
      settings,
      signup,
      signin,
      password,
      error
    } = account.children;
    return __jsx("div", {
      className: classes.menu
    }, __jsx("div", null, __jsx(MenuGroup, {
      item: settings
    }), __jsx(MenuGroup, {
      item: signup
    })), __jsx("div", null, __jsx(MenuGroup, {
      item: signin
    }), __jsx(MenuGroup, {
      item: password
    }), __jsx(MenuGroup, {
      item: error
    })));
  };

  return __jsx("div", _extends({}, rest, {
    className: external_clsx_default()(classes.root, className)
  }), __jsx("div", {
    className: classes.footerContainer
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 2
  }, __jsx(core_["List"], {
    disablePadding: true
  }, __jsx(core_["ListItem"], {
    disableGutters: true,
    className: classes.logoContainerItem
  }, __jsx("div", {
    className: classes.logoContainer
  }, __jsx("a", {
    href: "/",
    title: "Oaarogya"
  }, __jsx(atoms["d" /* Image */], {
    className: classes.logoImage,
    src: "https://www.onlineaarogya.com" + '/assets/logo-blue.png',
    alt: "Oaarogya",
    lazy: false
  })))), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Facebook_default.a, {
    className: classes.icon
  })), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Instagram_default.a, {
    className: classes.icon
  })), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Twitter_default.a, {
    className: classes.icon
  })), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Pinterest_default.a, {
    className: classes.icon
  }))))), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 10,
    className: classes.menuListContainer
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 0
  }, __jsx(core_["Grid"], {
    item: true
  }, __jsx(LandingPages, null)), __jsx(core_["Grid"], {
    item: true
  }, __jsx(SupportedPages, null)), __jsx(core_["Grid"], {
    item: true
  }, __jsx(core_["List"], {
    disablePadding: true,
    className: classes.menuItem
  }, __jsx(core_["ListItem"], {
    disableGutters: true,
    className: classes.menuGroupItem
  }, __jsx(core_["Typography"], {
    variant: "body2",
    className: classes.menuGroupTitle
  }, "Aarogya Consult Private Limited")), __jsx(core_["Typography"], {
    variant: "body2",
    className: classes.menuGroupItem
  }, "802, Landmark Business Hub, Silvassa, ", __jsx("br", null), "Dadra and Nagar Haveli and Daman and Diu, 396230"), __jsx(core_["Typography"], {
    variant: "body2",
    className: classes.menuGroupItem
  }, "hr@oaarogya.com"), __jsx(core_["Typography"], {
    variant: "body2",
    className: classes.menuGroupItem
  }, "+91 8866126777"))))))));
};

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./src/layouts/Main/components/Footer/index.js

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// CONCATENATED MODULE: ./src/layouts/Main/components/Topbar/Topbar.js
var Topbar_jsx = external_react_default.a.createElement;

function Topbar_extends() { Topbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Topbar_extends.apply(this, arguments); }

function Topbar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Topbar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Topbar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Topbar_useStyles = Object(styles_["makeStyles"])(theme => ({
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    }
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0
    }
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark
    }
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    fontWeight: 600
  },
  listItemButton: {
    whiteSpace: 'nowrap'
  },
  listItemIcon: {
    minWidth: 'auto'
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 200,
    marginTop: theme.spacing(2)
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent'
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark
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
  menu: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: 'uppercase'
  },
  pointer: {
    cursor: 'pointer'
  }
}));

const Topbar = (_ref) => {
  let {
    themeMode,
    themeToggler,
    onSidebarOpen,
    pages,
    className
  } = _ref,
      rest = Topbar_objectWithoutProperties(_ref, ["themeMode", "themeToggler", "onSidebarOpen", "pages", "className"]);

  const classes = Topbar_useStyles();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: openedPopoverId,
    1: setOpenedPopoverId
  } = Object(external_react_["useState"])(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const {
      item
    } = props;
    return Topbar_jsx(core_["List"], {
      disablePadding: true
    }, item.pages.map((page, i) => Topbar_jsx(core_["ListItem"], {
      disableGutters: true,
      key: i,
      className: classes.menuGroupItem
    }, Topbar_jsx(link_default.a, {
      href: page.href
    }, Topbar_jsx(core_["Typography"], {
      variant: "body1",
      component: "a",
      href: page.href,
      className: external_clsx_default()(classes.navLink, 'submenu-item', classes.pointer),
      color: "textSecondary",
      onClick: handleClose
    }, page.title)))));
  };

  const LandingPages = () => {
    const {
      services,
      apps,
      web,
      career
    } = landings.children;
    return Topbar_jsx("div", {
      className: classes.menu
    }, Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: web
    })));
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio
    } = supportedPages.children;
    return Topbar_jsx("div", {
      className: classes.menu
    }, Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: career
    }), Topbar_jsx(MenuGroup, {
      item: helpCenter
    })), Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: company
    }), Topbar_jsx(MenuGroup, {
      item: contact
    })), Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: blog
    }), Topbar_jsx(MenuGroup, {
      item: portfolio
    })));
  };

  const AccountPages = () => {
    const {
      settings,
      signup,
      signin,
      password,
      error
    } = account.children;
    return Topbar_jsx("div", {
      className: classes.menu
    }, Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: settings
    })), Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: signup
    }), Topbar_jsx(MenuGroup, {
      item: signin
    })), Topbar_jsx("div", {
      className: classes.menuItem
    }, Topbar_jsx(MenuGroup, {
      item: password
    }), Topbar_jsx(MenuGroup, {
      item: error
    })));
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return Topbar_jsx(LandingPages, null);
    }

    if (id === 'supported-pages') {
      return Topbar_jsx(SupportedPages, null);
    }

    if (id === 'account') {
      return Topbar_jsx(AccountPages, null);
    }
  };

  return Topbar_jsx(core_["Toolbar"], Topbar_extends({
    disableGutters: true,
    className: classes.toolbar
  }, rest), Topbar_jsx("div", {
    className: classes.logoContainer
  }, Topbar_jsx(link_default.a, {
    href: "/"
  }, Topbar_jsx("a", {
    title: "OnlineAarogya"
  }, Topbar_jsx(atoms["d" /* Image */], {
    className: classes.logoImage,
    src: themeMode === 'light' ? "https://www.onlineaarogya.com" + '/assets/logo-blue.png' : "https://www.onlineaarogya.com" + '/assets/logo-blue.png',
    alt: "thefront",
    lazy: false
  })))), Topbar_jsx("div", {
    className: classes.flexGrow
  }), Topbar_jsx(core_["Hidden"], {
    smDown: true
  }, Topbar_jsx(core_["List"], {
    disablePadding: true,
    className: classes.navigationContainer
  }, Topbar_jsx(link_default.a, {
    href: "/",
    color: "textPrimary",
    variant: "body1",
    className: external_clsx_default()(classes.listItemText, 'menu-item')
  }, Topbar_jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary",
    className: external_clsx_default()(classes.listItemText, 'menu-item', classes.pointer)
  }, "Home")), Topbar_jsx(link_default.a, {
    href: `${"https://www.onlineaarogya.com"}/about-us`,
    color: "textPrimary",
    variant: "body1",
    className: external_clsx_default()(classes.listItemText, 'menu-item')
  }, Topbar_jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary",
    className: external_clsx_default()(classes.listItemText, 'menu-item', classes.pointer, classes.navLink)
  }, "About Us")), Topbar_jsx(link_default.a, {
    href: `${"https://www.onlineaarogya.com"}/career`,
    color: "textPrimary",
    variant: "body1",
    className: external_clsx_default()(classes.listItemText, 'menu-item')
  }, Topbar_jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary",
    className: external_clsx_default()(classes.listItemText, 'menu-item', classes.pointer, classes.navLink)
  }, "Career")), Topbar_jsx(link_default.a, {
    href: `${"https://www.onlineaarogya.com"}/contact-us`,
    color: "textPrimary",
    variant: "body1",
    className: external_clsx_default()(classes.listItemText, 'menu-item')
  }, Topbar_jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary",
    component: "a",
    className: external_clsx_default()(classes.listItemText, 'menu-item', classes.pointer, classes.navLink)
  }, "Contact Us")), [landings].map((page, i) => Topbar_jsx("div", {
    key: page.id
  }, Topbar_jsx(core_["ListItem"], {
    "aria-describedby": page.id,
    onClick: e => handleClick(e, page.id),
    className: external_clsx_default()(classes.listItem, openedPopoverId === page.id ? classes.listItemActive : '')
  }, Topbar_jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary",
    className: external_clsx_default()(classes.listItemText, 'menu-item')
  }, page.title), Topbar_jsx(core_["ListItemIcon"], {
    className: classes.listItemIcon
  }, Topbar_jsx(ExpandMore_default.a, {
    className: openedPopoverId === page.id ? classes.expandOpen : '',
    fontSize: "small"
  }))), Topbar_jsx(core_["Popover"], {
    elevation: 1,
    id: page.id,
    open: openedPopoverId === page.id,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    classes: {
      paper: classes.popover
    }
  }, Topbar_jsx("div", null, renderPages(page.id))))), Topbar_jsx(core_["ListItem"], {
    className: external_clsx_default()(classes.listItem, 'menu-item--no-dropdown')
  }, Topbar_jsx(atoms["a" /* DarkModeToggler */], {
    themeMode: themeMode,
    onClick: () => themeToggler()
  })), Topbar_jsx(core_["ListItem"], {
    style: {
      width: '130px'
    },
    className: external_clsx_default()(classes.listItem, 'menu-item--no-dropdown')
  }, Topbar_jsx("a", null, Topbar_jsx(core_["Button"], {
    style: {
      width: '119px',
      padding: '0px 2px'
    },
    variant: "outlined",
    color: "primary"
  }, "Doctor login"))), Topbar_jsx(core_["ListItem"], {
    style: {
      width: '130px'
    },
    className: external_clsx_default()(classes.listItem, 'menu-item--no-dropdown')
  }, Topbar_jsx(link_default.a, {
    href: `${"https://www.onlineaarogya.com"}/signin`
  }, Topbar_jsx("a", null, Topbar_jsx(core_["Button"], {
    style: {
      width: '119px',
      padding: '0px 2px'
    },
    variant: "outlined",
    color: "primary"
  }, "Patient login")))))), Topbar_jsx(core_["Hidden"], {
    mdUp: true
  }, Topbar_jsx(atoms["a" /* DarkModeToggler */], {
    themeMode: themeMode,
    onClick: () => themeToggler()
  }), Topbar_jsx(core_["IconButton"], {
    className: classes.iconButton,
    onClick: onSidebarOpen,
    "aria-label": "Menu"
  }, Topbar_jsx(Menu_default.a, null))));
};

/* harmony default export */ var Topbar_Topbar = (Topbar);
// CONCATENATED MODULE: ./src/layouts/Main/components/Topbar/index.js

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./src/layouts/Main/components/Sidebar/components/SidebarNav/SidebarNav.js
var SidebarNav_jsx = external_react_default.a.createElement;

function SidebarNav_extends() { SidebarNav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SidebarNav_extends.apply(this, arguments); }

function SidebarNav_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidebarNav_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidebarNav_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/display-name */





const SidebarNav_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
  listItemIcon: {
    minWidth: 'auto'
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer'
  },
  menu: {
    display: 'flex'
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: 'uppercase'
  },
  divider: {
    width: '100%'
  }
}));

const SidebarNav = props => {
  const {
    pages,
    onClose,
    className
  } = props,
        rest = SidebarNav_objectWithoutProperties(props, ["pages", "onClose", "className"]);

  console.log('pages', pages);
  const classes = SidebarNav_useStyles();
  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const {
      item
    } = props;
    return SidebarNav_jsx(core_["List"], {
      disablePadding: true
    }, SidebarNav_jsx(core_["ListItem"], {
      disableGutters: true
    }, SidebarNav_jsx(core_["Typography"], {
      variant: "body2",
      color: "primary",
      className: classes.menuGroupTitle
    }, "Title")), item.pages.map((page, i) => SidebarNav_jsx(core_["ListItem"], {
      disableGutters: true,
      key: i,
      className: classes.menuGroupItem
    }, SidebarNav_jsx(core_["Typography"], {
      variant: "body2",
      component: 'a',
      href: page.href,
      className: external_clsx_default()(classes.navLink, 'submenu-item'),
      color: "textPrimary",
      onClick: () => onClose()
    }, page.title))));
  }; // const LandingPages = () => {
  //   const { services, apps, web } = landings.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={services} />
  //         <MenuGroup item={apps} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={web} />
  //       </div>
  //     </div>
  //   );
  // };


  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio
    } = supportedPages.children;
    return SidebarNav_jsx("div", {
      className: classes.menu
    }, SidebarNav_jsx("div", {
      className: classes.menuItem
    }, SidebarNav_jsx(MenuGroup, {
      item: career
    }), SidebarNav_jsx(MenuGroup, {
      item: helpCenter
    }), SidebarNav_jsx(MenuGroup, {
      item: company
    })), SidebarNav_jsx("div", {
      className: classes.menuItem
    }, SidebarNav_jsx(MenuGroup, {
      item: contact
    }), SidebarNav_jsx(MenuGroup, {
      item: blog
    }), SidebarNav_jsx(MenuGroup, {
      item: portfolio
    })));
  };

  const AccountPages = () => {
    const {
      settings,
      signup,
      signin,
      password,
      error
    } = account.children;
    return SidebarNav_jsx("div", {
      className: classes.menu
    }, SidebarNav_jsx("div", {
      className: classes.menuItem
    }, SidebarNav_jsx(MenuGroup, {
      item: settings
    }), SidebarNav_jsx(MenuGroup, {
      item: signup
    })), SidebarNav_jsx("div", {
      className: classes.menuItem
    }, SidebarNav_jsx(MenuGroup, {
      item: signin
    }), SidebarNav_jsx(MenuGroup, {
      item: password
    }), SidebarNav_jsx(MenuGroup, {
      item: error
    })));
  };

  return SidebarNav_jsx(core_["List"], SidebarNav_extends({}, rest, {
    className: external_clsx_default()(classes.root, className)
  }), SidebarNav_jsx(core_["ListItem"], {
    className: classes.closeIcon,
    onClick: () => onClose()
  }, SidebarNav_jsx(core_["ListItemIcon"], {
    className: classes.listItemIcon
  }, SidebarNav_jsx(Close_default.a, {
    fontSize: "small"
  }))), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true
  }, "Landings")), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Divider"], {
    className: classes.divider
  })), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true
  }, "Pages"), SidebarNav_jsx(SupportedPages, null)), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Divider"], {
    className: classes.divider
  })), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true
  }, "Account"), SidebarNav_jsx(AccountPages, null)), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Button"], {
    variant: "outlined",
    fullWidth: true,
    component: "a",
    href: "/documentation"
  }, "Documentation")), SidebarNav_jsx(core_["ListItem"], {
    className: classes.listItem
  }, SidebarNav_jsx(core_["Button"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    component: "a",
    target: "blank",
    href: "https://material-ui.com/store/items/the-front-landing-page/"
  }, "Buy Now")));
};

/* harmony default export */ var SidebarNav_SidebarNav = (SidebarNav);
// CONCATENATED MODULE: ./src/layouts/Main/components/Sidebar/components/SidebarNav/index.js

// CONCATENATED MODULE: ./src/layouts/Main/components/Sidebar/components/index.js

// CONCATENATED MODULE: ./src/layouts/Main/components/Sidebar/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;

function Sidebar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Sidebar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Sidebar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Sidebar_useStyles = Object(styles_["makeStyles"])(theme => ({
  drawer: {
    width: '100%',
    maxWidth: 325
  },
  root: {
    height: '100%',
    padding: theme.spacing(1)
  },
  nav: {
    marginBottom: theme.spacing(1)
  }
}));

const Sidebar = props => {
  const {
    pages,
    open,
    variant,
    onClose,
    className
  } = props,
        rest = Sidebar_objectWithoutProperties(props, ["pages", "open", "variant", "onClose", "className"]);

  const classes = Sidebar_useStyles();
  return Sidebar_jsx(core_["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.drawer
    },
    onClose: () => onClose(),
    open: open,
    variant: variant
  });
};

/* harmony default export */ var Sidebar_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./src/layouts/Main/components/Sidebar/index.js

// CONCATENATED MODULE: ./src/layouts/Main/components/index.js



// CONCATENATED MODULE: ./src/layouts/Main/Main.js
var Main_jsx = external_react_default.a.createElement;





const Main_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    height: '100%'
  }
}));

const Main = ({
  children,
  themeToggler,
  themeMode
}) => {
  const classes = Main_useStyles();
  const theme = Object(styles_["useTheme"])();
  const isMd = Object(core_["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  const pages = {
    landings: {
      title: 'Services',
      id: 'landing-pages',
      children: {
        web: {
          groupTitle: 'Web',
          pages: [{
            title: 'Quick Consultation',
            href: '/'
          }, {
            title: 'In Clinic Appointment',
            href: '/'
          }, {
            title: 'Online Consultation ',
            href: '/'
          }]
        }
      }
    },
    pages: {
      title: 'More',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [{
            title: 'Lising',
            href: '/career-listing'
          }, {
            title: 'Lising Minimal',
            href: '/career-listing-minimal'
          }, {
            title: 'Opening',
            href: '/career-opening'
          }]
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [{
            title: 'Overview',
            href: '/help-center'
          }, {
            title: 'Article',
            href: '/help-center-article'
          }]
        },
        company: {
          groupTitle: 'Company',
          pages: [{
            title: 'About1',
            href: '/about'
          }, {
            title: 'About (Cover)',
            href: '/about-side-cover'
          }, {
            title: 'Pricing',
            href: '/pricing'
          }, {
            title: 'Terms',
            href: '/company-terms'
          }]
        },
        contact: {
          groupTitle: 'Contact',
          pages: [{
            title: 'Reach View',
            href: '/contact-page'
          }, {
            title: 'Sidebar Map',
            href: '/contact-sidebar-map'
          }, {
            title: 'Cover',
            href: '/contact-page-cover'
          }]
        },
        blog: {
          groupTitle: 'Blog',
          pages: [{
            title: 'Newsroom',
            href: '/blog-newsroom'
          }, {
            title: 'Reach View',
            href: '/blog-reach-view'
          }, {
            title: 'Search',
            href: '/blog-search'
          }, {
            title: 'Article',
            href: '/blog-article'
          }]
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [{
            title: 'Basic',
            href: '/portfolio-page'
          }, {
            title: 'Masonry',
            href: '/portfolio-masonry'
          }, {
            title: 'Grid View',
            href: '/portfolio-grid'
          }, {
            title: 'Parallax Effect',
            href: '/agency'
          }]
        }
      }
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [{
            title: 'General',
            href: '/account/?pid=general'
          }, {
            title: 'Security',
            href: '/account/?pid=security'
          }, {
            title: 'Notifications',
            href: '/account/?pid=notifications'
          }, {
            title: 'Billing',
            href: '/account/?pid=billing'
          }]
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [{
            title: 'Simple',
            href: '/signup-simple'
          }, {
            title: 'Cover',
            href: '/signup-cover'
          }]
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [{
            title: 'Simple',
            href: '/signin-simple'
          }, {
            title: 'Cover',
            href: '/signin-cover'
          }]
        },
        password: {
          groupTitle: 'Password reset',
          pages: [{
            title: 'Simple',
            href: '/password-reset-simple'
          }, {
            title: 'Cover',
            href: '/password-reset-cover'
          }]
        },
        error: {
          groupTitle: 'Error',
          pages: [{
            title: 'Simple',
            href: '/not-found'
          }, {
            title: 'Cover',
            href: '/not-found-cover'
          }]
        }
      }
    }
  };
  const {
    0: openSidebar,
    1: setOpenSidebar
  } = Object(external_react_["useState"])(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;
  const footer_links = {
    landings: {
      children: {
        services: {
          groupTitle: 'Services',
          pages: [{
            title: 'Quick Consultation' // href: '/quick-consultation ',

          }, {
            title: 'In Clinic Appointment' // href: '/in-clinic-appointment',

          }, {
            title: 'Online Consultation ' // href: '/Oline-consultation ',

          }]
        },
        apps: {
          groupTitle: 'Apps',
          pages: [{
            title: 'Desktop App' // href: '/desktop-app',

          }, {
            title: 'Mobile App' // href: '/mobile-app',

          }]
        },
        web: {
          groupTitle: 'Company',
          pages: [{
            title: 'About Us',
            href: 'about-us'
          }, {
            title: 'Leadership Team',
            href: 'our-leadership-team'
          }, {
            title: 'How it Works' // href: '/service',

          }, {
            title: 'Contact Us',
            href: '/contact-us'
          }, {
            title: 'Packages' // href: '/contact-us',

          }]
        }
      }
    },
    pages: {
      title: 'More',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [{
            title: 'Job Listing' // href: '/career-listing',

          }, // {
          //   title: 'Lising Minimal',
          //   href: '/career-listing-minimal',
          // },
          {
            title: 'Opening' // href: '/career-opening',

          }]
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [{
            title: 'Overview' // href: '/help-center',

          }, {
            title: 'Accounts' // href: '/help-center-article',

          }, {
            title: 'Billings' // href: '/help-center-article',

          }]
        },
        company: {
          groupTitle: 'City',
          pages: [{
            title: 'Silvassa' // href: '/about',

          }, {
            title: 'Daman' // href: '/about-side-cover',

          }, {
            title: 'Vapi' // href: '/pricing',

          }, {
            title: 'Jamshedpur' // href: '/company-terms',

          }, {
            title: 'Valsad' // href: '/company-terms',

          }, {
            title: 'Jaipur' // href: '/company-terms',

          }]
        },
        contact: {
          groupTitle: 'Contact',
          pages: [{
            title: 'Reach View',
            href: '/contact-page'
          }, {
            title: 'Sidebar Map',
            href: '/contact-sidebar-map'
          }, {
            title: 'Cover',
            href: '/contact-page-cover'
          }]
        },
        blog: {
          groupTitle: 'Blog',
          pages: [{
            title: 'Health Blog' // href: '/home',

          }, {
            title: 'Health Article' // href: '/web-basic',

          }]
        },
        portfolio: {
          groupTitle: 'Legal',
          pages: [{
            title: 'Privacy Policy' // href: '/portfolio-page',

          }, {
            title: 'Terms of Services',
            href: '/'
          }]
        }
      }
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [{
            title: 'General',
            href: '/account/?pid=general'
          }, {
            title: 'Security',
            href: '/account/?pid=security'
          }, {
            title: 'Notifications',
            href: '/account/?pid=notifications'
          }, {
            title: 'Billing',
            href: '/account/?pid=billing'
          }]
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [{
            title: 'Simple',
            href: '/signup-simple'
          }, {
            title: 'Cover',
            href: '/signup-cover'
          }]
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [{
            title: 'Simple',
            href: '/signin-simple'
          }, {
            title: 'Cover',
            href: '/signin-cover'
          }]
        },
        password: {
          groupTitle: 'Password reset',
          pages: [{
            title: 'Simple',
            href: '/password-reset-simple'
          }, {
            title: 'Cover',
            href: '/password-reset-cover'
          }]
        },
        error: {
          groupTitle: 'Error',
          pages: [{
            title: 'Simple',
            href: '/not-found'
          }, {
            title: 'Cover',
            href: '/not-found-cover'
          }]
        }
      }
    }
  };
  return Main_jsx("div", {
    className: external_clsx_default()({
      [classes.root]: true
    })
  }, Main_jsx(Topbar_Topbar, {
    onSidebarOpen: handleSidebarOpen,
    pages: pages,
    themeMode: themeMode,
    themeToggler: themeToggler
  }), Main_jsx(Sidebar_Sidebar, {
    onClose: handleSidebarClose,
    open: open,
    variant: "temporary",
    pages: pages
  }), Main_jsx("main", null, Main_jsx(core_["Divider"], null), children), Main_jsx(Footer_Footer, {
    pages: footer_links
  }));
};

/* harmony default export */ var Main_Main = (Main);
// CONCATENATED MODULE: ./src/layouts/Main/index.js


/***/ }),

/***/ "Fv0s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pinterest");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JDU/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "Jc4N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ SectionHeader_SectionHeader; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ IconAlternate_IconAlternate; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ SwiperImage_SwiperImage; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ DescriptionCta_DescriptionCta; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ CountUpNumber_CountUpNumber; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ OverlapedImages_OverlapedImages; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ SwiperNumber_SwiperNumber; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ TypedText_TypedText; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/components/molecules/SectionHeader/SectionHeader.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(styles_["makeStyles"])(theme => ({
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

  return __jsx(core_["Grid"], _extends({
    container: true,
    spacing: 2,
    "data-aos": fadeUp ? 'fade-up' : '',
    className: external_clsx_default()('section-header', classes.root, disableGutter ? classes.disableGutter : {}, className)
  }, rest), overline && __jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: justifyGrid,
    xs: 12,
    className: "section-header__overline-wrapper"
  }, overline), label && __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__label-wrapper"
  }, __jsx(core_["Typography"], _extends({
    variant: "overline",
    color: "primary",
    component: "p",
    align: align || 'center'
  }, labelProps), label)), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__title-wrapper"
  }, __jsx(core_["Typography"], _extends({
    variant: titleVariant,
    align: align || 'center',
    className: external_clsx_default()('section-header__title', classes.title, titleClasses ? titleClasses : {}),
    color: "textPrimary"
  }, titleProps), title)), subtitle && __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__subtitle-wrapper"
  }, __jsx(core_["Typography"], _extends({
    variant: subtitleVariant || 'h6',
    align: align || 'center',
    color: subtitleColor || 'textSecondary',
    className: "section-header__subtitle"
  }, subtitleProps), subtitle)), ctaGroup && ctaGroup.length && __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "section-header__cta-wrapper"
  }, __jsx(core_["Grid"], {
    container: true,
    justify: justifyGrid,
    alignItems: "center",
    wrap: "nowrap",
    className: "section-header__cta-container"
  }, ctaGroup.map((item, index) => __jsx("div", {
    key: index,
    className: external_clsx_default()('section-header__cta-item-wrapper', classes.cta)
  }, item)))));
};

SectionHeader.defaultProps = {
  titleVariant: 'h4',
  labelProps: {},
  titleProps: {},
  subtitleProps: {}
};
/* harmony default export */ var SectionHeader_SectionHeader = (SectionHeader);
// CONCATENATED MODULE: ./src/components/molecules/SectionHeader/index.js

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/components/molecules/IconAlternate/IconAlternate.js
var IconAlternate_jsx = external_react_default.a.createElement;

function IconAlternate_extends() { IconAlternate_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return IconAlternate_extends.apply(this, arguments); }

function IconAlternate_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = IconAlternate_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function IconAlternate_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const IconAlternate_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = IconAlternate_objectWithoutProperties(props, ["iconProps", "fontIconClass", "size", "color", "shape", "className"]);

  const classes = IconAlternate_useStyles();
  const useBackgroundStyles = Object(styles_["makeStyles"])(() => ({
    background: {
      background: color[50]
    }
  }));
  const backgroundClasses = useBackgroundStyles();
  return IconAlternate_jsx(core_["Avatar"], IconAlternate_extends({
    className: external_clsx_default()('icon-alternate', classes[size], classes[shape], backgroundClasses.background, className)
  }, rest), IconAlternate_jsx(atoms["b" /* Icon */], IconAlternate_extends({
    size: size,
    fontIconClass: fontIconClass,
    fontIconColor: color[500],
    className: "icon-alternate__icon"
  }, iconProps)));
};

IconAlternate.defaultProps = {
  size: 'medium',
  shape: 'square',
  iconProps: {}
};
/* harmony default export */ var IconAlternate_IconAlternate = (IconAlternate);
// CONCATENATED MODULE: ./src/components/molecules/IconAlternate/index.js

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./src/components/molecules/SwiperImage/SwiperImage.js
var SwiperImage_jsx = external_react_default.a.createElement;

function SwiperImage_extends() { SwiperImage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SwiperImage_extends.apply(this, arguments); }

function SwiperImage_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SwiperImage_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SwiperImage_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SwiperImage_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = SwiperImage_objectWithoutProperties(props, ["items", "navigationButtonStyle", "imageClassName", "className"]);

  const classes = SwiperImage_useStyles();
  external_react_default.a.useEffect(() => {
    new external_swiper_default.a('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev'
      }
    });
  });
  return SwiperImage_jsx("div", SwiperImage_extends({
    className: external_clsx_default()('swiper-container', 'swiper-image', classes.root, className)
  }, rest), SwiperImage_jsx("div", {
    className: "swiper-image__wrapper, swiper-wrapper"
  }, items.map((item, index) => SwiperImage_jsx("div", {
    className: external_clsx_default()('swiper-image__slide', 'swiper-slide', classes.swiperSlide),
    key: index
  }, SwiperImage_jsx(atoms["d" /* Image */], {
    src: item.src,
    alt: item.alt,
    srcSet: item.srcSet,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    className: external_clsx_default()('swiper-image__item', classes.image, imageClassName ? imageClassName : {})
  })))), SwiperImage_jsx("div", {
    className: external_clsx_default()('swiper-image__navigation', classes.swiperNav)
  }, SwiperImage_jsx("div", {
    className: external_clsx_default()('swiper-image__navigation-button', 'swiper-image__navigation-button--prev', 'swiper-button-prev', navigationButtonStyle || {})
  }), SwiperImage_jsx("div", {
    className: external_clsx_default()('swiper-image__navigation-button', 'swiper-image__navigation-button--next', 'swiper-button-next', navigationButtonStyle || {})
  })));
};

/* harmony default export */ var SwiperImage_SwiperImage = (SwiperImage);
// CONCATENATED MODULE: ./src/components/molecules/SwiperImage/index.js

// CONCATENATED MODULE: ./src/components/molecules/DescriptionCta/DescriptionCta.js
var DescriptionCta_jsx = external_react_default.a.createElement;

function DescriptionCta_extends() { DescriptionCta_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DescriptionCta_extends.apply(this, arguments); }

function DescriptionCta_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DescriptionCta_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DescriptionCta_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





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
        rest = DescriptionCta_objectWithoutProperties(props, ["title", "subtitle", "primaryCta", "secondaryCta", "align", "className", "wrapperProps", "titleProps", "subtitleProps", "buttonGroupProps", "primaryButtonWrapperProps", "secondaryButtonWrapperProps"]);

  const theme = Object(styles_["useTheme"])();
  const isSm = Object(core_["useMediaQuery"])(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });
  let justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = isSm ? 'flex-end' : 'flex-start';
  } else if (align === 'right') {
    justifyGrid = isSm ? 'flex-start' : 'flex-end';
  }

  return DescriptionCta_jsx(core_["Grid"], DescriptionCta_extends({
    container: true,
    spacing: 2,
    justify: "space-between",
    alignItems: "center",
    className: external_clsx_default()('description-cta', className)
  }, rest), DescriptionCta_jsx(core_["Grid"], DescriptionCta_extends({
    item: true,
    className: "description-cta__wrapper"
  }, wrapperProps), DescriptionCta_jsx(core_["Typography"], DescriptionCta_extends({
    variant: "h5",
    align: align,
    gutterBottom: true,
    className: "description-cta__title"
  }, titleProps), title), subtitle && DescriptionCta_jsx(core_["Typography"], DescriptionCta_extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary",
    className: "description-cta__subtitle"
  }, subtitleProps), subtitle)), DescriptionCta_jsx(core_["Grid"], {
    item: true
  }, DescriptionCta_jsx(core_["Grid"], DescriptionCta_extends({
    container: true,
    justify: justifyGrid,
    spacing: 1,
    className: "description-cta__button-group"
  }, buttonGroupProps), DescriptionCta_jsx(core_["Grid"], DescriptionCta_extends({
    item: true,
    className: "description-cta__primary-button-wrapper"
  }, primaryButtonWrapperProps), primaryCta), secondaryCta && DescriptionCta_jsx(core_["Grid"], DescriptionCta_extends({
    item: true,
    className: external_clsx_default()('description-cta__secondary-button-wrapper')
  }, secondaryButtonWrapperProps), secondaryCta))));
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
/* harmony default export */ var DescriptionCta_DescriptionCta = (DescriptionCta);
// CONCATENATED MODULE: ./src/components/molecules/DescriptionCta/index.js

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// CONCATENATED MODULE: ./src/components/molecules/CountUpNumber/CountUpNumber.js
var CountUpNumber_jsx = external_react_default.a.createElement;

function CountUpNumber_extends() { CountUpNumber_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CountUpNumber_extends.apply(this, arguments); }

function CountUpNumber_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CountUpNumber_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CountUpNumber_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






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
        rest = CountUpNumber_objectWithoutProperties(props, ["start", "end", "suffix", "prefix", "label", "textColor", "labelColor", "className", "visibilitySensorProps", "wrapperProps", "countWrapperProps", "countNumberProps", "labelProps"]);

  const [viewPortEntered, setViewPortEntered] = external_react_default.a.useState(false);

  const setViewPortVisibility = isVisible => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return CountUpNumber_jsx("div", CountUpNumber_extends({
    className: external_clsx_default()('countup-number', className)
  }, rest), CountUpNumber_jsx(external_react_visibility_sensor_default.a, CountUpNumber_extends({
    onChange: isVisible => setViewPortVisibility(isVisible),
    delayedCall: true
  }, visibilitySensorProps), CountUpNumber_jsx("div", CountUpNumber_extends({
    className: "countup-number__wrapper"
  }, wrapperProps), CountUpNumber_jsx(core_["Typography"], CountUpNumber_extends({
    variant: "h4",
    gutterBottom: true,
    align: "center",
    color: textColor || 'textPrimary',
    className: "countup-number__count-wrapper"
  }, countWrapperProps), CountUpNumber_jsx(external_react_countup_default.a, CountUpNumber_extends({
    delay: 1,
    redraw: false,
    end: viewPortEntered ? end : start,
    start: start,
    suffix: suffix || '',
    prefix: prefix || '',
    className: "countup-number__count"
  }, countNumberProps))), CountUpNumber_jsx(core_["Typography"], CountUpNumber_extends({
    variant: "subtitle1",
    color: labelColor || 'textSecondary',
    align: "center",
    className: "countup-number__label"
  }, labelProps), label))));
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  countNumberProps: {},
  labelProps: {}
};
/* harmony default export */ var CountUpNumber_CountUpNumber = (CountUpNumber);
// CONCATENATED MODULE: ./src/components/molecules/CountUpNumber/index.js

// CONCATENATED MODULE: ./src/components/molecules/OverlapedImages/OverlapedImages.js
var OverlapedImages_jsx = external_react_default.a.createElement;

function OverlapedImages_extends() { OverlapedImages_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return OverlapedImages_extends.apply(this, arguments); }

function OverlapedImages_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = OverlapedImages_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function OverlapedImages_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const OverlapedImages_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = OverlapedImages_objectWithoutProperties(props, ["image1", "image2", "image3", "className"]);

  const classes = OverlapedImages_useStyles();
  return OverlapedImages_jsx(core_["Grid"], OverlapedImages_extends({
    container: true,
    className: external_clsx_default()('overlaped-images', className)
  }, rest), OverlapedImages_jsx(core_["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, OverlapedImages_jsx("div", {
    className: external_clsx_default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridFirstItem)
  }, OverlapedImages_jsx(atoms["d" /* Image */], {
    src: image1.src,
    srcSet: image1.srcset,
    alt: image1.alt,
    className: "overlaped-images__item-image"
  }))), OverlapedImages_jsx(core_["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, OverlapedImages_jsx("div", {
    className: external_clsx_default()('overlaped-images__item-wrapper', classes.imageGrid)
  }, OverlapedImages_jsx(atoms["d" /* Image */], {
    src: image2.src,
    srcSet: image2.srcset,
    alt: image2.alt,
    className: "overlaped-images__item-image"
  }))), OverlapedImages_jsx(core_["Grid"], {
    item: true,
    xs: 4,
    className: "overlaped-images__item-container"
  }, OverlapedImages_jsx("div", {
    className: external_clsx_default()('overlaped-images__item-wrapper', classes.imageGrid, classes.imageGridLastItem)
  }, OverlapedImages_jsx(atoms["d" /* Image */], {
    src: image3.src,
    srcSet: image3.srcset,
    alt: image3.alt,
    className: "overlaped-images__item-image"
  }))));
};

/* harmony default export */ var OverlapedImages_OverlapedImages = (OverlapedImages);
// CONCATENATED MODULE: ./src/components/molecules/OverlapedImages/index.js

// CONCATENATED MODULE: ./src/components/molecules/SwiperNumber/SwiperNumber.js
var SwiperNumber_jsx = external_react_default.a.createElement;

function SwiperNumber_extends() { SwiperNumber_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SwiperNumber_extends.apply(this, arguments); }

function SwiperNumber_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SwiperNumber_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SwiperNumber_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SwiperNumber_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = SwiperNumber_objectWithoutProperties(props, ["items", "className", "numberProps", "labelProps"]);

  const classes = SwiperNumber_useStyles();
  const theme = Object(styles_["useTheme"])();
  const isMd = Object(core_["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  external_react_default.a.useEffect(() => {
    new external_swiper_default.a('.swiper-container', {
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
  return SwiperNumber_jsx("div", SwiperNumber_extends({
    className: external_clsx_default()('swiper-number', 'swiper-container', className)
  }, rest), SwiperNumber_jsx("div", {
    className: "swiper-number__wrapper swiper-wrapper"
  }, items.map((item, index) => SwiperNumber_jsx("div", {
    className: external_clsx_default()('swiper-number__item', classes.swiperSlide, 'swiper-slide'),
    key: index,
    style: {
      width: 'auto'
    }
  }, SwiperNumber_jsx(core_["Grid"], {
    container: true,
    spacing: 1,
    className: "swiper-number__item-container"
  }, SwiperNumber_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__number-wrapper"
  }, SwiperNumber_jsx(core_["Typography"], SwiperNumber_extends({
    variant: "h3",
    align: "center",
    className: external_clsx_default()('swiper-number__number', classes.number)
  }, numberProps), item.number)), SwiperNumber_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "swiper-number__label-wrapper"
  }, SwiperNumber_jsx(core_["Typography"], SwiperNumber_extends({
    variant: "subtitle1",
    color: "textSecondary",
    align: "center",
    className: "swiper-number__label"
  }, labelProps), item.title)))))), SwiperNumber_jsx("div", {
    className: "swiper-number__pagination swiper-pagination"
  }));
};

SwiperNumber.defaultProps = {
  numberProps: {},
  labelProps: {}
};
/* harmony default export */ var SwiperNumber_SwiperNumber = (SwiperNumber);
// CONCATENATED MODULE: ./src/components/molecules/SwiperNumber/index.js

// EXTERNAL MODULE: external "react-typed"
var external_react_typed_ = __webpack_require__("oG96");
var external_react_typed_default = /*#__PURE__*/__webpack_require__.n(external_react_typed_);

// CONCATENATED MODULE: ./src/components/molecules/TypedText/TypedText.js
var TypedText_jsx = external_react_default.a.createElement;

function TypedText_extends() { TypedText_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TypedText_extends.apply(this, arguments); }

function TypedText_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TypedText_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TypedText_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





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
        rest = TypedText_objectWithoutProperties(props, ["className", "typedProps"]);

  return TypedText_jsx(core_["Typography"], TypedText_extends({
    className: external_clsx_default()('typed-text', className)
  }, rest), TypedText_jsx(external_react_typed_default.a, TypedText_extends({
    className: "typed-text__item"
  }, typedProps)));
};

/* harmony default export */ var TypedText_TypedText = (TypedText);
// CONCATENATED MODULE: ./src/components/molecules/TypedText/index.js

// CONCATENATED MODULE: ./src/components/molecules/index.js









/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MXaO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_BlogArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yWkF");
/* harmony import */ var layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exl5");
/* harmony import */ var WithLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("69Y9");
/* harmony import */ var _lib_drupal_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AP8i");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */







const BlogArticlePage = ({
  data
}) => {
  //   const [getPostId, setPostId] = useState(23);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    postId,
    url
  } = router.query; //   console.log(postId);

  return __jsx(WithLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: data.data,
    component: views_BlogArticle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    layout: layouts_Main__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogArticlePage);
async function getServerSideProps({
  params: {
    postId
  }
}) {
  var values = {
    nid: postId
  };
  const data = await Object(_lib_drupal_fetcher__WEBPACK_IMPORTED_MODULE_5__[/* getArticleDetails */ "b"])(values);
  return {
    props: {
      data
    } // will be passed to the page component as props

  };
}

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "NotL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowRightAlt");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hgx0":
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "iEfC":
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "kbOB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Image_Image; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Icon_Icon; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ LearnMoreLink_LearnMoreLink; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ IconText_IconText; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ DarkModeToggler_DarkModeToggler; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ ScrollTop_ScrollTop; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// CONCATENATED MODULE: ./src/components/atoms/Image/Image.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(styles_["makeStyles"])(() => ({
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
    return __jsx(external_react_lazy_load_image_component_["LazyLoadImage"], _extends({
      className: external_clsx_default()('image', classes.root, classes.dBlock, className),
      alt: alt,
      src: src,
      srcSet: srcSet,
      effect: "opacity"
    }, lazyProps, rest));
  }

  return __jsx("img", _extends({
    className: external_clsx_default()('image', classes.root, className),
    alt: alt,
    src: src,
    srcSet: srcSet
  }, rest));
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto'
  }
};
/* harmony default export */ var Image_Image = (Image);
// CONCATENATED MODULE: ./src/components/atoms/Image/index.js

// EXTERNAL MODULE: external "@material-ui/core/NoSsr"
var NoSsr_ = __webpack_require__("pKbc");
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);

// CONCATENATED MODULE: ./src/components/atoms/Icon/Icon.js
var Icon_jsx = external_react_default.a.createElement;

function Icon_extends() { Icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Icon_extends.apply(this, arguments); }

function Icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Icon_useStyles = Object(styles_["makeStyles"])(() => ({
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
        rest = Icon_objectWithoutProperties(props, ["fontIconClass", "size", "fontIconColor", "className"]);

  const classes = Icon_useStyles();
  return Icon_jsx(NoSsr_default.a, null, Icon_jsx("i", Icon_extends({
    className: external_clsx_default()('icon', fontIconClass, classes[size], className),
    style: {
      color: fontIconColor
    }
  }, rest)));
};

Icon.defaultProps = {
  size: 'small'
};
/* harmony default export */ var Icon_Icon = (Icon);
// CONCATENATED MODULE: ./src/components/atoms/Icon/index.js

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/ArrowRightAlt"
var ArrowRightAlt_ = __webpack_require__("NotL");
var ArrowRightAlt_default = /*#__PURE__*/__webpack_require__.n(ArrowRightAlt_);

// CONCATENATED MODULE: ./src/components/atoms/LearnMoreLink/LearnMoreLink.js
var LearnMoreLink_jsx = external_react_default.a.createElement;

function LearnMoreLink_extends() { LearnMoreLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LearnMoreLink_extends.apply(this, arguments); }

function LearnMoreLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LearnMoreLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LearnMoreLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LearnMoreLink_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = LearnMoreLink_objectWithoutProperties(props, ["color", "component", "variant", "title", "href", "className", "iconProps", "typographyProps"]);

  const classes = LearnMoreLink_useStyles();

  const children = LearnMoreLink_jsx(external_react_default.a.Fragment, null, LearnMoreLink_jsx(core_["Typography"], LearnMoreLink_extends({
    component: "span",
    className: external_clsx_default()('learn-more-link__typography', classes.title),
    variant: variant,
    color: color || 'primary'
  }, typographyProps), title), LearnMoreLink_jsx(core_["IconButton"], LearnMoreLink_extends({
    className: external_clsx_default()('learn-more-link__icon-button', classes.icon),
    color: color || 'primary'
  }, iconProps), LearnMoreLink_jsx(ArrowRightAlt_default.a, {
    className: "learn-more-link__arrow"
  })));

  return LearnMoreLink_jsx("a", LearnMoreLink_extends({
    href: href,
    className: external_clsx_default()('learn-more-link', classes.root, className)
  }, rest), children);
};

LearnMoreLink.defaultProps = {
  variant: 'subtitle1',
  href: '#',
  typographyProps: {},
  iconProps: {},
  component: 'a'
};
/* harmony default export */ var LearnMoreLink_LearnMoreLink = (LearnMoreLink);
// CONCATENATED MODULE: ./src/components/atoms/LearnMoreLink/index.js

// CONCATENATED MODULE: ./src/components/atoms/IconText/IconText.js
var IconText_jsx = external_react_default.a.createElement;

function IconText_extends() { IconText_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return IconText_extends.apply(this, arguments); }

function IconText_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = IconText_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function IconText_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const IconText_useStyles = Object(styles_["makeStyles"])(theme => ({
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
        rest = IconText_objectWithoutProperties(props, ["title", "color", "fontIconClass", "className", "iconProps", "typographyProps"]);

  const classes = IconText_useStyles();
  return IconText_jsx("div", IconText_extends({
    className: external_clsx_default()('icon-text', classes.root, className)
  }, rest), IconText_jsx(Icon_Icon, IconText_extends({
    className: "icon-text__icon",
    size: "small",
    fontIconClass: fontIconClass,
    fontIconColor: color
  }, iconProps)), IconText_jsx(core_["Typography"], IconText_extends({
    noWrap: true,
    variant: "subtitle1",
    color: "textPrimary",
    className: external_clsx_default()('icon-text__typography', classes.title)
  }, typographyProps), title));
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {}
};
/* harmony default export */ var IconText_IconText = (IconText);
// CONCATENATED MODULE: ./src/components/atoms/IconText/index.js

// CONCATENATED MODULE: ./src/components/atoms/DarkModeToggler/DarkModeToggler.js
var DarkModeToggler_jsx = external_react_default.a.createElement;

function DarkModeToggler_extends() { DarkModeToggler_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DarkModeToggler_extends.apply(this, arguments); }

function DarkModeToggler_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DarkModeToggler_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DarkModeToggler_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DarkModeToggler_useStyles = Object(core_["makeStyles"])(theme => ({
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
    borderColor: core_["colors"].indigo[700]
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
    backgroundColor: core_["colors"].indigo[900]
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
      rest = DarkModeToggler_objectWithoutProperties(_ref, ["themeMode", "onClick", "className"]);

  const classes = DarkModeToggler_useStyles();
  return DarkModeToggler_jsx("span", DarkModeToggler_extends({
    className: external_clsx_default()(classes.root, className)
  }, rest, {
    onClick: onClick
  }), DarkModeToggler_jsx("div", {
    className: external_clsx_default()(classes.border, themeMode === 'dark' ? classes.borderDark : '')
  }), DarkModeToggler_jsx("div", {
    className: external_clsx_default()(classes.modeToggler, themeMode === 'dark' ? classes.modeTogglerDark : '')
  }, DarkModeToggler_jsx("svg", {
    className: classes.modeTogglerIcon,
    "aria-hidden": "true",
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, DarkModeToggler_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
  }))));
};

/* harmony default export */ var DarkModeToggler_DarkModeToggler = (DarkModeToggler);
// CONCATENATED MODULE: ./src/components/atoms/DarkModeToggler/index.js

// EXTERNAL MODULE: external "@material-ui/core/useScrollTrigger"
var useScrollTrigger_ = __webpack_require__("4ac1");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowUp"
var KeyboardArrowUp_ = __webpack_require__("09cN");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// CONCATENATED MODULE: ./src/components/atoms/ScrollTop/ScrollTop.js
var ScrollTop_jsx = external_react_default.a.createElement;






const ScrollTop_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollTop = () => {
  const classes = ScrollTop_useStyles();
  const trigger = useScrollTrigger_default()({
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

  return ScrollTop_jsx(Zoom_default.a, {
    in: trigger
  }, ScrollTop_jsx("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root
  }, ScrollTop_jsx(Fab_default.a, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top"
  }, ScrollTop_jsx(KeyboardArrowUp_default.a, null))));
};

/* harmony default export */ var ScrollTop_ScrollTop = (ScrollTop);
// CONCATENATED MODULE: ./src/components/atoms/ScrollTop/index.js

// CONCATENATED MODULE: ./src/components/atoms/index.js







/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oG96":
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "pKbc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "tXPP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "yWkF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ BlogArticle_BlogArticle; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__("0F/j");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);

// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__("s4mK");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__("JDU/");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);

// EXTERNAL MODULE: external "@material-ui/icons/Pinterest"
var Pinterest_ = __webpack_require__("Fv0s");
var Pinterest_default = /*#__PURE__*/__webpack_require__.n(Pinterest_);

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/BlogArticle/components/Content/Content.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = Object(styles_["makeStyles"])(theme => ({
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1)
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    '&:last-child': {
      marginRight: 0
    }
  }
}));

const Content = props => {
  const {
    data,
    api_data,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["data", "api_data", "className"]);

  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const isMd = Object(core_["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", _extends({
    className: className
  }, rest), __jsx("div", {
    className: classes.section
  }, __jsx(core_["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: api_data.body
    }
  }))), __jsx("div", {
    className: classes.section
  }, __jsx(atoms["d" /* Image */], {
    src: api_data.image,
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    }
  })), api_data.paragraph.map((item, index) => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: classes.section
  }, __jsx(core_["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: item.text
    }
  }))), __jsx("div", {
    className: classes.section
  }, __jsx(core_["GridList"], {
    cellHeight: isMd ? 360 : 260,
    cols: 2,
    spacing: isMd ? 24 : 8
  }, item.image.map((item_image, index) => __jsx(core_["GridListTile"], {
    key: index,
    cols: isMd ? item.cols : 2
  }, __jsx(atoms["d" /* Image */], {
    src: item_image.img,
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    }
  }))))))), __jsx("div", {
    className: classes.section
  }, __jsx(core_["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary"
  }, data.text2)), __jsx("div", null, __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Facebook_default.a, null)), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Instagram_default.a, null)), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Twitter_default.a, null)), __jsx(core_["IconButton"], {
    className: classes.socialIcon
  }, __jsx(Pinterest_default.a, null))));
};

/* harmony default export */ var Content_Content = (Content);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/Content/index.js

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/BlogArticle/components/FooterNewsletter/FooterNewsletter.js
var FooterNewsletter_jsx = external_react_default.a.createElement;

function FooterNewsletter_extends() { FooterNewsletter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FooterNewsletter_extends.apply(this, arguments); }

function FooterNewsletter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FooterNewsletter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FooterNewsletter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FooterNewsletter_useStyles = Object(styles_["makeStyles"])(() => ({
  textWhite: {
    color: 'white'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  formControl: {
    maxWidth: 400,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '& .MuiInputBase-root': {
      color: 'white'
    },
    '& .MuiInputAdornment-root i': {
      color: 'white !important'
    }
  },
  image: {
    maxWidth: 400
  }
}));

const FooterNewsletter = props => {
  const {
    data,
    className
  } = props,
        rest = FooterNewsletter_objectWithoutProperties(props, ["data", "className"]);

  const classes = FooterNewsletter_useStyles();
  return FooterNewsletter_jsx("div", FooterNewsletter_extends({
    className: className
  }, rest), FooterNewsletter_jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, FooterNewsletter_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    container: true
  }, FooterNewsletter_jsx(atoms["d" /* Image */], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/relax-in-sofa.svg",
    className: classes.image
  })), FooterNewsletter_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    container: true,
    alignItems: "center"
  }, FooterNewsletter_jsx("div", null, FooterNewsletter_jsx(molecules["e" /* SectionHeader */], {
    title: FooterNewsletter_jsx("span", {
      className: classes.textWhite
    }, "Subscribe To Our Newsletter"),
    subtitle: FooterNewsletter_jsx("span", {
      className: classes.textWhite
    }, "Don't lose a chance to be among the firsts to know about our upcoming news and updates."),
    fadeUp: true,
    align: "left"
  }), FooterNewsletter_jsx("div", {
    className: classes.inputContainer
  }, FooterNewsletter_jsx(core_["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    "data-aos": "fade-up",
    className: classes.formControl
  }, FooterNewsletter_jsx(core_["OutlinedInput"], {
    endAdornment: FooterNewsletter_jsx(core_["InputAdornment"], {
      position: "end"
    }, FooterNewsletter_jsx(atoms["b" /* Icon */], {
      fontIconClass: "fas fa-paper-plane",
      fontIconColor: core_["colors"].indigo[900]
    })),
    placeholder: "Enter your email"
  })))))));
};

/* harmony default export */ var FooterNewsletter_FooterNewsletter = (FooterNewsletter);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/FooterNewsletter/index.js

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./src/views/BlogArticle/components/Hero/Hero.js
var Hero_jsx = external_react_default.a.createElement;

function Hero_extends() { Hero_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Hero_extends.apply(this, arguments); }

function Hero_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Hero_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Hero_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Hero_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: 'white',
    overflow: 'hidden'
  },
  sectionWrapper: {
    height: 239,
    background: 'url(http://localhost:3000/assets/img/banner.png) no-repeat left #ed4550'
  },
  textWhite: {
    color: '#2d3748'
  },
  title: {
    fontWeight: 'bold',
    position: 'relative',
    top: 24
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemAvatar: {
    marginRight: theme.spacing(2)
  },
  avatar: {
    height: 60,
    width: 60
  }
}));

const Hero = props => {
  const {
    className,
    title,
    author
  } = props,
        rest = Hero_objectWithoutProperties(props, ["className", "title", "author"]);

  const classes = Hero_useStyles();
  return Hero_jsx("div", Hero_extends({
    className: external_clsx_default()(classes.root, className)
  }, rest), Hero_jsx(organisms["s" /* Parallax */], {
    backgroundImage: "assets/img/blogArticle.jpeg"
  }, Hero_jsx("div", {
    className: classes.sectionWrapper
  }, Hero_jsx(organisms["t" /* Section */], {
    className: classes.section
  }, Hero_jsx(external_react_default.a.Fragment, null, Hero_jsx(molecules["e" /* SectionHeader */], {
    title: props.title,
    align: "left",
    "data-aos": "fade-up",
    titleProps: {
      className: external_clsx_default()(classes.title, classes.textWhite),
      variant: 'h3'
    },
    subtitleProps: {
      className: classes.textWhite
    }
  }), Hero_jsx(core_["List"], {
    disablePadding: true
  }, Hero_jsx(core_["ListItem"], {
    disableGutters: true
  }, Hero_jsx(core_["ListItemAvatar"], {
    className: classes.listItemAvatar
  }, Hero_jsx(core_["Avatar"], Hero_extends({}, author.photo, {
    alt: author.name,
    className: classes.avatar
  }))), Hero_jsx(core_["ListItemText"], {
    primary: `Published by ${author.name}`,
    secondary: `on ${author.date}`,
    primaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    },
    secondaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    }
  }))))))));
};

/* harmony default export */ var Hero_Hero = (Hero);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/Hero/index.js

// CONCATENATED MODULE: ./src/views/BlogArticle/components/SidebarArticles/SidebarArticles.js
var SidebarArticles_jsx = external_react_default.a.createElement;

function SidebarArticles_extends() { SidebarArticles_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SidebarArticles_extends.apply(this, arguments); }

function SidebarArticles_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidebarArticles_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidebarArticles_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SidebarArticles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: `1px solid ${core_["colors"].grey[200]}`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3)
    }
  },
  gridItem: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${core_["colors"].grey[200]}`,
    '&:last-child': {
      marginBottom: 0,
      borderBottom: 0,
      paddingBottom: 0
    }
  },
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    '& .card-product__content': {
      padding: 0,
      paddingLeft: theme.spacing(2)
    },
    '& .card-product__media': {
      height: 90,
      width: 90,
      '& img': {
        height: 90,
        width: 90
      }
    }
  },
  image: {
    objectFit: 'cover'
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  blogTitle: {
    fontWeight: 700
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    margin: theme.spacing(0, 1 / 2, 1 / 2, 0),
    textTransform: 'uppercase',
    fontWeight: 700
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  }
}));

const SidebarArticles = props => {
  const {
    data,
    className
  } = props,
        rest = SidebarArticles_objectWithoutProperties(props, ["data", "className"]);

  const classes = SidebarArticles_useStyles();

  const BlogMediaContent = props => SidebarArticles_jsx(atoms["d" /* Image */], SidebarArticles_extends({}, props, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    }
  }));

  const BlogContent = props => SidebarArticles_jsx("div", {
    className: classes.blogContent
  }, SidebarArticles_jsx("div", {
    className: classes.tags
  }, props.tags.map((item, index) => SidebarArticles_jsx(core_["Typography"], {
    variant: "caption",
    color: "primary",
    className: classes.tag,
    key: index
  }, item))), SidebarArticles_jsx(core_["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.blogTitle,
    gutterBottom: true
  }, props.title), SidebarArticles_jsx(core_["Typography"], {
    variant: "caption",
    color: "textPrimary"
  }, SidebarArticles_jsx("i", null, props.author.name, " - ", props.date)));

  return SidebarArticles_jsx("div", SidebarArticles_extends({
    className: external_clsx_default()(classes.root, className)
  }, rest), SidebarArticles_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true,
    className: classes.sectionTitle
  }, "Related Articles"), SidebarArticles_jsx(core_["Grid"], {
    container: true,
    spacing: 0
  }, data.map((item, index) => SidebarArticles_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    key: index,
    "data-aos": "fade-up",
    className: classes.gridItem
  }, SidebarArticles_jsx(organisms["j" /* CardProduct */], {
    className: classes.cardProduct,
    mediaContent: SidebarArticles_jsx(BlogMediaContent, SidebarArticles_extends({}, item.cover, {
      alt: item.title
    })),
    cardContent: SidebarArticles_jsx(BlogContent, {
      title: item.title,
      subtitle: item.subtitle,
      author: item.author,
      date: item.date,
      tags: item.tags
    })
  })))));
};

/* harmony default export */ var SidebarArticles_SidebarArticles = (SidebarArticles);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/SidebarArticles/index.js

// CONCATENATED MODULE: ./src/views/BlogArticle/components/SidebarNewsletter/SidebarNewsletter.js
var SidebarNewsletter_jsx = external_react_default.a.createElement;

function SidebarNewsletter_extends() { SidebarNewsletter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SidebarNewsletter_extends.apply(this, arguments); }

function SidebarNewsletter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidebarNewsletter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidebarNewsletter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SidebarNewsletter_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.dark,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3)
    }
  },
  cover: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper
    }
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  }
}));

const Form = props => {
  const {
    className
  } = props,
        rest = SidebarNewsletter_objectWithoutProperties(props, ["className"]);

  const classes = SidebarNewsletter_useStyles();
  const theme = Object(styles_["useTheme"])();
  const isMd = Object(core_["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return SidebarNewsletter_jsx("div", SidebarNewsletter_extends({
    className: external_clsx_default()(classes.root, className)
  }, rest), SidebarNewsletter_jsx("div", {
    className: classes.cover
  }, SidebarNewsletter_jsx(atoms["d" /* Image */], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/want-to-work.svg"
  })), SidebarNewsletter_jsx(molecules["e" /* SectionHeader */], {
    title: "Email newsletter",
    subtitle: "Subscribe to our Newsletter for new blog posts, tips & new photos",
    titleProps: {
      variant: 'h4',
      color: 'textPrimary'
    },
    subtitleProps: {
      variant: 'body1',
      color: 'textPrimary'
    },
    "data-aos": "fade-up",
    align: "left"
  }), SidebarNewsletter_jsx("div", {
    className: classes.form
  }, SidebarNewsletter_jsx(core_["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2
  }, SidebarNewsletter_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up"
  }, SidebarNewsletter_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle
  }, "Full name"), SidebarNewsletter_jsx(core_["TextField"], {
    placeholder: "Your full name",
    variant: "outlined",
    size: "medium",
    name: "fullname",
    fullWidth: true,
    type: "text"
  })), SidebarNewsletter_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up"
  }, SidebarNewsletter_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle
  }, "E-mail"), SidebarNewsletter_jsx(core_["TextField"], {
    placeholder: "Your e-mail address",
    variant: "outlined",
    size: "medium",
    name: "email",
    fullWidth: true,
    type: "email"
  })), SidebarNewsletter_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "center",
    xs: 12
  }, SidebarNewsletter_jsx(core_["Button"], {
    variant: "contained",
    type: "submit",
    color: "primary",
    size: "large"
  }, "Subscribe")), SidebarNewsletter_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "center",
    xs: 12
  }, SidebarNewsletter_jsx(core_["Typography"], {
    variant: "caption",
    color: "textSecondary"
  }, "Subscribe to our Newsletter for new blog posts, tips & new photos.")))));
};

/* harmony default export */ var SidebarNewsletter = (Form);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/SidebarNewsletter/index.js

// CONCATENATED MODULE: ./src/views/BlogArticle/components/SimilarStories/SimilarStories.js
var SimilarStories_jsx = external_react_default.a.createElement;

function SimilarStories_extends() { SimilarStories_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SimilarStories_extends.apply(this, arguments); }

function SimilarStories_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SimilarStories_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SimilarStories_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SimilarStories_useStyles = Object(styles_["makeStyles"])(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      padding: theme.spacing(2)
    },
    '& .card-product__media': {
      minHeight: 300
    }
  },
  image: {
    objectFit: 'cover'
  },
  blogTitle: {
    fontWeight: 700
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0)
  },
  author: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    fontWeight: 'bold'
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  }
}));

const SimilarStories = props => {
  const {
    data,
    className
  } = props,
        rest = SimilarStories_objectWithoutProperties(props, ["data", "className"]);

  const classes = SimilarStories_useStyles();

  const BlogMediaContent = props => SimilarStories_jsx(atoms["d" /* Image */], SimilarStories_extends({}, props, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    }
  }));

  const BlogContent = props => SimilarStories_jsx("div", null, SimilarStories_jsx("div", {
    className: classes.tags
  }, props.tags.map((item, index) => SimilarStories_jsx(core_["Typography"], {
    variant: "overline",
    color: "primary",
    className: classes.tag,
    key: index
  }, item))), SimilarStories_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    align: "center"
  }, props.title), SimilarStories_jsx(core_["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    align: "center"
  }, SimilarStories_jsx("i", null, props.author.name, " - ", props.date)));

  return SimilarStories_jsx("div", SimilarStories_extends({
    className: className
  }, rest), SimilarStories_jsx(molecules["b" /* DescriptionCta */], {
    title: "Similar stories",
    primaryCta: SimilarStories_jsx(core_["Button"], {
      variant: "outlined",
      color: "primary",
      size: "large"
    }, "View all"),
    align: 'left',
    titleProps: {
      variant: 'h4',
      color: 'textPrimary',
      className: classes.title
    },
    className: classes.descriptionCta,
    "data-aos": "fade-up"
  }), SimilarStories_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, data.map((item, index) => SimilarStories_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    key: index,
    "data-aos": "fade-up"
  }, SimilarStories_jsx(organisms["j" /* CardProduct */], {
    withShadow: true,
    liftUp: true,
    className: classes.cardProduct,
    mediaContent: SimilarStories_jsx(BlogMediaContent, SimilarStories_extends({}, item.cover, {
      alt: item.title
    })),
    cardContent: SimilarStories_jsx(BlogContent, {
      title: item.title,
      subtitle: item.subtitle,
      author: item.author,
      date: item.date,
      tags: item.tags
    })
  })))));
};

/* harmony default export */ var SimilarStories_SimilarStories = (SimilarStories);
// CONCATENATED MODULE: ./src/views/BlogArticle/components/SimilarStories/index.js

// CONCATENATED MODULE: ./src/views/BlogArticle/components/index.js






// CONCATENATED MODULE: ./src/views/BlogArticle/data/index.js
const sidebarArticles = [{
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x'
  },
  title: "LARQ | World's First Self-cleaning Water Bottle‎",
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing']
}, {
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x'
  },
  title: 'NIKE Online Store launches the website‎',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['nike', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x'
  },
  title: 'Adidas will release your favourite shoes',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['adidas', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x'
  },
  title: 'Simple approach to Australian cafe',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['coffee', 'cups', 'morning coffee', 'breakfast']
}];
const similarStories = [{
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x'
  },
  title: 'Adidas will release your favourite shoes',
  subtitle: 'ss adidas shoes, clothing & accessories at the official website! adidas Training.',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x'
    },
    name: 'Akachi Luccini'
  },
  date: '04 Aug',
  tags: ['adidas', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x'
  },
  title: 'NIKE Online Store launches the website‎',
  subtitle: 'Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['nike', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x'
  },
  title: "LARQ | World's First Self-cleaning Water Bottle‎",
  subtitle: "A self-cleaning water bottle that'll help you reach your hydration goal. Neutralizes up to 99%* of harmful, odor-causing bacteria using UV-C light.",
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x'
    },
    name: 'kk Verma'
  },
  date: '04 Aug',
  tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing']
}];
const content = {
  headline: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly. It is advisable to plan the event around a theme in order to create a focal point for the barbecue party. This way, all aspects of the party such as the food, games and decorations can be fashioned around a central theme. Favorite themes for barbecue parties include a Hawaiian motif, nostalgic seventies get-together, or, if you are near the sea, opt for a beach bbq party!',
  quote: "Keep track of what's happening with your data, change permissions, against your data anywhere in the world.",
  text1: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.',
  text2: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.',
  title: 'Adidas will release your favourite shoes',
  subtitle: 'Adidas shoes, clothing & accessories at the official website! Adidas Training.',
  author: {
    photo: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x'
    },
    name: 'Jack Smith',
    date: 'May 20, 2019'
  },
  cover: {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x'
  },
  images: [{
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x',
    cols: 2
  }, {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x',
    cols: 1
  }, {
    src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg',
    srcSet: 'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x',
    cols: 1
  }]
};
// CONCATENATED MODULE: ./src/views/BlogArticle/BlogArticle.js
var BlogArticle_jsx = external_react_default.a.createElement;






const BlogArticle_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2)
    }
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark
  }
}));

const BlogArticle = props => {
  console.log('from view', props.data);
  const classes = BlogArticle_useStyles(); // author array

  const author = {
    photo: {
      src: `${props.data.user_picture}`
    },
    name: `${props.data.userName}`,
    date: `${props.data.date}`
  };
  return BlogArticle_jsx("div", {
    className: classes.root
  }, BlogArticle_jsx(Hero_Hero, {
    title: props.data.title,
    author: author
  }), BlogArticle_jsx(organisms["t" /* Section */], null, BlogArticle_jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, BlogArticle_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 8
  }, BlogArticle_jsx(Content_Content, {
    api_data: props.data,
    data: content
  })), BlogArticle_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 4
  }, BlogArticle_jsx(SidebarArticles_SidebarArticles, {
    data: sidebarArticles
  }), BlogArticle_jsx(SidebarNewsletter, {
    className: classes.sidebarNewsletter
  })))));
};

/* harmony default export */ var BlogArticle_BlogArticle = (BlogArticle);
// CONCATENATED MODULE: ./src/views/BlogArticle/index.js


/***/ })

/******/ });