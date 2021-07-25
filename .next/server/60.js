exports.ids = [60];
exports.modules = {

/***/ "nevj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ QuickStart_QuickStart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// CONCATENATED MODULE: ./src/views/Documentation/parts/QuickStart/QuickStart.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(core_["makeStyles"])(theme => ({
  fontWeightBold: {
    fontWeight: 'bold'
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  }
}));

const QuickStart = (_ref) => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: className
  }, rest), __jsx(molecules["e" /* SectionHeader */], {
    title: "Quick start with React Scripts",
    subtitle: __jsx(core_["Typography"], {
      variant: "h6",
      component: "p",
      color: "textPrimary"
    }, "Open ", __jsx(core_["Typography"], {
      color: "primary",
      component: "span",
      variant: "h6"
    }, "`./react-scripts`"), " folder and do the following:"),
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    disableGutter: true
  }), __jsx(core_["List"], {
    className: classes.list
  }, __jsx(components["a" /* CodeHighlighter */], {
    code: `
> $ npm install

// Everything installed!


> $ npm start

// LiveReload started. Opening localhost:3000


> $ npm run build

// Generated the production bundle
          `
  })), __jsx(molecules["e" /* SectionHeader */], {
    title: "Quick start with NextJS",
    subtitle: __jsx(core_["Typography"], {
      variant: "h6",
      component: "p",
      color: "textPrimary"
    }, "Open ", __jsx(core_["Typography"], {
      color: "primary",
      component: "span",
      variant: "h6"
    }, "`./nextjs`"), " folder and do the following:"),
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    disableGutter: true
  }), __jsx(core_["List"], {
    className: classes.list
  }, __jsx(components["a" /* CodeHighlighter */], {
    code: `
> $ npm install

// Everything installed!


> $ npm run dev

// LiveReload started. Opening localhost:3000


> $ npm run build

// Generated the production bundle


> $ npm run start

// Production bundle is up & running on localhost:3000
          `
  })), __jsx(molecules["e" /* SectionHeader */], {
    title: "Quick start with GatsbyJS",
    subtitle: __jsx(core_["Typography"], {
      variant: "h6",
      component: "p",
      color: "textPrimary"
    }, "Open ", __jsx(core_["Typography"], {
      color: "primary",
      component: "span",
      variant: "h6"
    }, "`./gatsbyjs`"), " folder and do the following:"),
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    disableGutter: true
  }), __jsx(core_["List"], null, __jsx(components["a" /* CodeHighlighter */], {
    code: `
> $ npm install

// Everything installed!


> $ npm run develop

// LiveReload started. Opening localhost:8080


> $ npm run build

// Generated the production bundle. The sources are in \`public\` folder
          `
  })));
};

/* harmony default export */ var QuickStart_QuickStart = (QuickStart);
// CONCATENATED MODULE: ./src/views/Documentation/parts/QuickStart/index.js


/***/ })

};;