exports.ids = [58];
exports.modules = {

/***/ "SAPY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Changelog_Changelog; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/views/Documentation/parts/Changelog/Changelog.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const useStyles = Object(core_["makeStyles"])(theme => ({
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0)
    }
  },
  versionTitle: {
    fontWeight: 700
  },
  date: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: 700
  },
  list: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  listItem: {
    margin: theme.spacing(1 / 2, 0)
  }
}));

const Changelog = (_ref) => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  const classes = useStyles();

  const BlockItem = ({
    versionTitle,
    date,
    list
  }) => __jsx("div", null, __jsx(core_["Typography"], {
    variant: "h4",
    component: "h4",
    className: classes.versionTitle
  }, versionTitle), __jsx(core_["Typography"], {
    variant: "body2",
    component: "p",
    color: "textSecondary",
    className: classes.date
  }, date), __jsx("ul", {
    className: classes.list
  }, list.map((item, i) => __jsx("li", {
    key: i,
    className: classes.listItem
  }, __jsx(core_["Typography"], {
    variant: "body1",
    component: "p"
  }, item)))));

  return __jsx("div", _extends({
    className: className
  }, rest), __jsx(BlockItem, {
    versionTitle: "v3.2.2",
    date: "Feb 18, 2021",
    list: ["Bug fix: Server side rendering"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v3.2.1",
    date: "Jan 16, 2021",
    list: ["Added new atomic component DarkModeToggler", "Replacing the Material-UI form toggler with the custom created DarkModeToggler component", "Handling theme mode changes with React state instead of reloading the website", `The "./src/utils.js" file is removed`, `Added "WithLayout" HOC in "./src" folder to handle the layout changes`, `The "RouteWithLayout" component is deleted`, `The "ContactForm" component is moved from "common" folder into the "organisms"`, `"common" folder is deleted from "./src" folder`, `NextJS's "_app.js" file is cleaned-up`, `GatsbyJS's "TopLayout.js" file in "./plugins" folder is cleaned-up`, "Added a new page in documentation to keep the changelog internally in the website"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v3.1.1",
    date: "Jan 6, 2021",
    list: ["Replace react-styleguidist with custom documentation that can be extended by developers", "Improve the selling product pages, redesign the overview page, fix dark mode screenshots, host images in a dedicated server", "Code clean-up"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v3.0.1",
    date: "Dec 16, 2020",
    list: ["Layout fixes in mobile and tablet screen sizes", "Code cleanup", "Removing unnecessary code dependencies", "npm scripts naming changes", `Initial support for TypeScript under the "Standard Plus" and "Extended" license`]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v3.0.0",
    date: "Nov 23, 2020",
    list: ["Add GatsbyJS support"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v2.1.0",
    date: "Nov 17, 2020",
    list: ["Add dark mode support"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v2.0.0",
    date: "Nov 8, 2020",
    list: ["Consolidate the support of CRA & Next.js under the same version", "Upgrade dependencies to the latest version, e.g. Next.js", "Bug Fixes"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v1.0.3",
    date: "July 29, 2020",
    list: ["Adapt Accordion component with Material-UI new naming convention changes", "Fix img display block issues", "Fix npm installed packages vulnerability issues"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v1.0.2",
    date: "July 24, 2020",
    list: ["View components cleanup"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v1.0.1",
    date: "July 22, 2020",
    list: ["Fix cross-platform support for npm scripts and commands"]
  }), __jsx(core_["Divider"], {
    className: classes.divider
  }), __jsx(BlockItem, {
    versionTitle: "v1.0.0",
    date: "July 18, 2020",
    list: ["Initial release"]
  }));
};

/* harmony default export */ var Changelog_Changelog = (Changelog);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Changelog/index.js


/***/ })

};;