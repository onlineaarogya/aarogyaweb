module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "09cN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowUp");

/***/ }),

/***/ "09qn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

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

/***/ "AuoD":
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "IN3C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Minimal_Minimal; });

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

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/layouts/Minimal/components/Topbar/Topbar.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(styles_["makeStyles"])(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    }
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
    // position: 'relative',
    // top: '-29px',
    // height: '120px',
    // width: '160px',
    top: '-19px',
    width: '139px',
    height: '70px',
    position: 'relative'
  }
}));

const Topbar = (_ref) => {
  let {
    themeMode,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["themeMode", "className"]);

  const classes = useStyles();
  return __jsx(core_["Toolbar"], _extends({
    className: external_clsx_default()(classes.toolbar, className)
  }, rest), __jsx("div", {
    className: classes.logoContainer
  }, __jsx("a", {
    href: "/",
    title: "thefront"
  }, __jsx(atoms["d" /* Image */], {
    className: classes.logoImage,
    src: themeMode === 'light' ? 'http://localhost:3000/assets/logo-blue.png' : 'http://localhost:3000/assets/logo-white.png',
    alt: "Oaarogya Logo",
    lazy: false
  }))));
};

/* harmony default export */ var Topbar_Topbar = (Topbar);
// CONCATENATED MODULE: ./src/layouts/Minimal/components/Topbar/index.js

// CONCATENATED MODULE: ./src/layouts/Minimal/components/index.js

// CONCATENATED MODULE: ./src/layouts/Minimal/Minimal.js
var Minimal_jsx = external_react_default.a.createElement;





const Minimal_useStyles = Object(styles_["makeStyles"])(() => ({
  root: {},
  content: {
    height: '100%'
  }
}));

const Minimal = ({
  themeMode,
  children,
  className
}) => {
  const classes = Minimal_useStyles();
  return Minimal_jsx("div", {
    className: external_clsx_default()(classes.root, className)
  }, Minimal_jsx(Topbar_Topbar, {
    themeMode: themeMode
  }), Minimal_jsx(core_["Divider"], null), Minimal_jsx("main", {
    className: classes.content
  }, children));
};

/* harmony default export */ var Minimal_Minimal = (Minimal);
// CONCATENATED MODULE: ./src/layouts/Minimal/index.js


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

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "NotL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowRightAlt");

/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/ServerError/ServerError.js
var __jsx = external_react_default.a.createElement;






const useStyles = Object(styles_["makeStyles"])(theme => ({
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
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return __jsx("div", null, __jsx(organisms["t" /* Section */], {
    className: classes.section
  }, __jsx("div", {
    className: classes.formContainer
  }, __jsx(molecules["e" /* SectionHeader */], {
    label: "500",
    title: "Internal Server Error",
    subtitle: __jsx("span", null, "There\u2019s nothing here, but if you feel this is an error please", ' ', __jsx(atoms["e" /* LearnMoreLink */], {
      title: "let us know",
      href: "#",
      typographyProps: {
        variant: 'h6'
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
    ctaGroup: [__jsx(core_["Button"], {
      size: "large",
      variant: "contained",
      color: "primary",
      onClick: handleClick
    }, "Go Back")],
    disableGutter: true
  }))));
};

/* harmony default export */ var ServerError_ServerError = (ServerError);
// CONCATENATED MODULE: ./src/views/ServerError/index.js

// EXTERNAL MODULE: ./src/layouts/Minimal/index.js + 4 modules
var Minimal = __webpack_require__("IN3C");

// EXTERNAL MODULE: ./src/WithLayout.js + 2 modules
var WithLayout = __webpack_require__("69Y9");

// CONCATENATED MODULE: ./pages/_error.js
var _error_jsx = external_react_default.a.createElement;





const ErrorPage = () => {
  return _error_jsx(WithLayout["a" /* default */], {
    component: ServerError_ServerError,
    layout: Minimal["a" /* default */]
  });
};

/* harmony default export */ var _error = __webpack_exports__["default"] = (ErrorPage);

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

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

/***/ "oG96":
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "pKbc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "tXPP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg=="

/***/ })

/******/ });