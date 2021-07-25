exports.ids = [59];
exports.modules = {

/***/ "1EGW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Introduction_Introduction; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Features/Features.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const useStyles = Object(core_["makeStyles"])(() => ({
  fontWeightBold: {
    fontWeight: 'bold'
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30
  }
}));

const Features = (_ref) => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  const classes = useStyles();
  return __jsx("div", _extends({
    className: className
  }, rest), __jsx(molecules["e" /* SectionHeader */], {
    title: "Features",
    subtitle: "theFront landing page examples can be used out of the box, but since they\u2019re built on flexible components, you can also create new pages all your own with ease. Copy-paste a section here, a component there, switch up a few variables, and you have an entirely new landing!",
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    subtitleProps: {
      color: 'textPrimary',
      variant: 'body1'
    },
    disableGutter: true
  }), __jsx(core_["List"], null, __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "More than 45 pages, 300+ component reusable compositions and 30+ stand-alone components created by following the Atomic Design Methodology")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "create-react-app & react-scripts support. NextJS & GatsbyJS server side rendering support")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "Typescript support (available in Standard Plus & Extended licences)")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "Image lazy loading support. Animated sections on scroll. Swiper support")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "Fully responsive on all modern browsers. Figma and Sketch design files (available in Standard Plus & Extended licences)")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "Rich documentation with code samples and parameters/options")), __jsx(core_["ListItem"], {
    disableGutters: true
  }, __jsx(core_["ListItemAvatar"], null, __jsx(core_["Avatar"], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg",
    className: classes.checkBox
  })), __jsx(core_["Typography"], {
    variant: "body1",
    color: "textPrimary"
  }, "Free customer support & Free updates"))));
};

/* harmony default export */ var Features_Features = (Features);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Features/index.js

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/FolderStructure/FolderStructure.js
var FolderStructure_jsx = external_react_default.a.createElement;

function FolderStructure_extends() { FolderStructure_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FolderStructure_extends.apply(this, arguments); }

function FolderStructure_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FolderStructure_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FolderStructure_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FolderStructure_useStyles = Object(core_["makeStyles"])(theme => ({
  fontWeightBold: {
    fontWeight: 'bold'
  },
  notification: {
    borderRadius: theme.spacing(1 / 2),
    border: '2px solid',
    marginBottom: theme.spacing(2),
    backgroundColor: core_["colors"].green[50],
    borderColor: core_["colors"].green[500],
    '& .MuiTypography-root': {
      color: core_["colors"].green[900]
    }
  }
}));

const FolderStructure = (_ref) => {
  let {
    className
  } = _ref,
      rest = FolderStructure_objectWithoutProperties(_ref, ["className"]);

  const classes = FolderStructure_useStyles();

  const Folder = ({
    title,
    subtitle,
    depth
  }) => FolderStructure_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column",
    marginLeft: depth || 0
  }, FolderStructure_jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-folder",
    color: core_["colors"].blueGrey[900],
    title: title
  }), subtitle && FolderStructure_jsx(core_["Typography"], {
    variant: "caption",
    color: "textSecondary"
  }, subtitle));

  return FolderStructure_jsx("div", FolderStructure_extends({
    className: className
  }, rest), FolderStructure_jsx(molecules["e" /* SectionHeader */], {
    title: "Folder structure",
    subtitle: "In your copy of the kit you will find 3 main repos corresponding to the React-Scripts, NextJS and GatsbyJS frameworks",
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    disableGutter: true
  }), FolderStructure_jsx(core_["List"], null, FolderStructure_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column"
  }, FolderStructure_jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-folder",
    color: core_["colors"].blueGrey[900],
    title: "gatsbyjs"
  }), FolderStructure_jsx(core_["Typography"], {
    variant: "caption",
    color: "textSecondary"
  }, "The GatsbyJS version of the kit is located in this folder.")), FolderStructure_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column"
  }, FolderStructure_jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-folder",
    color: core_["colors"].blueGrey[900],
    title: "nextjs"
  }), FolderStructure_jsx(core_["Typography"], {
    variant: "caption",
    color: "textSecondary"
  }, "The NextJS version of the kit is located in this folder.")), FolderStructure_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column"
  }, FolderStructure_jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-folder",
    color: core_["colors"].blueGrey[900],
    title: "react-scripts"
  }), FolderStructure_jsx(core_["Typography"], {
    variant: "caption",
    color: "textSecondary"
  }, "The React-Scripts version of the kit is located in this folder."))), FolderStructure_jsx(core_["Box"], {
    marginTop: 2
  }, FolderStructure_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary"
  }, "gatsbyjs folder")), FolderStructure_jsx(core_["List"], null, FolderStructure_jsx(Folder, {
    title: "pages",
    subtitle: "GatsbyJS pages are located under this folder"
  }), FolderStructure_jsx(Folder, {
    title: "plugins",
    subtitle: "GatsbyJS custom plugins are located under this folder"
  }), FolderStructure_jsx(Folder, {
    title: "src"
  }), FolderStructure_jsx(Folder, {
    title: "assets",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "components",
    depth: 3,
    subtitle: "The reusable and stand-alone components are stored here, by following Atomic Design Methodology"
  }), FolderStructure_jsx(Folder, {
    title: "atoms",
    depth: 7,
    subtitle: "These are small functional components that are not using any other atomic components"
  }), FolderStructure_jsx(Folder, {
    title: "molecules",
    depth: 7,
    subtitle: "These are those functional components which have dependencies from other atoms"
  }), FolderStructure_jsx(Folder, {
    title: "organisms",
    depth: 7,
    subtitle: "These are the functional components that are using other molecules and atoms"
  }), FolderStructure_jsx(Folder, {
    title: "layouts",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "Main",
    depth: 7,
    subtitle: "The main layout: header navigation, the main container and footer part"
  }), FolderStructure_jsx(Folder, {
    title: "Minimal",
    depth: 7,
    subtitle: "The minimal layout"
  }), FolderStructure_jsx(Folder, {
    title: "DocsLayout",
    depth: 7,
    subtitle: " Documentation layout"
  }), FolderStructure_jsx(Folder, {
    title: "theme",
    depth: 3,
    subtitle: "In this folder there are overrides of the default color palette coming from MUI"
  }), FolderStructure_jsx(Folder, {
    title: "views",
    depth: 3,
    subtitle: "All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations."
  })), FolderStructure_jsx(core_["Box"], {
    marginTop: 2
  }, FolderStructure_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary"
  }, "nextjs folder")), FolderStructure_jsx(core_["List"], null, FolderStructure_jsx(Folder, {
    title: "pages",
    subtitle: "NextJS pages are located under this folder"
  }), FolderStructure_jsx(Folder, {
    title: "public"
  }), FolderStructure_jsx(Folder, {
    title: "src"
  }), FolderStructure_jsx(Folder, {
    title: "assets",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "components",
    depth: 3,
    subtitle: "The reusable and stand-alone components are stored here, by following Atomic Design Methodology"
  }), FolderStructure_jsx(Folder, {
    title: "atoms",
    depth: 7,
    subtitle: "These are small functional components that are not using any other atomic components"
  }), FolderStructure_jsx(Folder, {
    title: "molecules",
    depth: 7,
    subtitle: "These are those functional components which have dependencies from other atoms"
  }), FolderStructure_jsx(Folder, {
    title: "organisms",
    depth: 7,
    subtitle: "These are the functional components that are using other molecules and atoms"
  }), FolderStructure_jsx(Folder, {
    title: "layouts",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "Main",
    depth: 7,
    subtitle: "The main layout: header navigation, the main container and footer part"
  }), FolderStructure_jsx(Folder, {
    title: "Minimal",
    depth: 7,
    subtitle: "The minimal layout"
  }), FolderStructure_jsx(Folder, {
    title: "DocsLayout",
    depth: 7,
    subtitle: " Documentation layout"
  }), FolderStructure_jsx(Folder, {
    title: "theme",
    depth: 3,
    subtitle: "In this folder there are overrides of the default color palette coming from MUI"
  }), FolderStructure_jsx(Folder, {
    title: "views",
    depth: 3,
    subtitle: "All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations."
  })), FolderStructure_jsx(core_["Box"], {
    marginTop: 2
  }, FolderStructure_jsx(core_["Typography"], {
    variant: "h6",
    color: "textPrimary"
  }, "react-scripts folder")), FolderStructure_jsx(core_["List"], null, FolderStructure_jsx(Folder, {
    title: "public"
  }), FolderStructure_jsx(Folder, {
    title: "src"
  }), FolderStructure_jsx(Folder, {
    title: "assets",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "components",
    depth: 3,
    subtitle: "The reusable and stand-alone components are stored here, by following Atomic Design Methodology"
  }), FolderStructure_jsx(Folder, {
    title: "atoms",
    depth: 7,
    subtitle: "These are small functional components that are not using any other atomic components"
  }), FolderStructure_jsx(Folder, {
    title: "molecules",
    depth: 7,
    subtitle: "These are those functional components which have dependencies from other atoms"
  }), FolderStructure_jsx(Folder, {
    title: "organisms",
    depth: 7,
    subtitle: "These are the functional components that are using other molecules and atoms"
  }), FolderStructure_jsx(Folder, {
    title: "layouts",
    depth: 3
  }), FolderStructure_jsx(Folder, {
    title: "Main",
    depth: 7,
    subtitle: "The main layout: header navigation, the main container and footer part"
  }), FolderStructure_jsx(Folder, {
    title: "Minimal",
    depth: 7,
    subtitle: "The minimal layout"
  }), FolderStructure_jsx(Folder, {
    title: "DocsLayout",
    depth: 7,
    subtitle: " Documentation layout"
  }), FolderStructure_jsx(Folder, {
    title: "theme",
    depth: 3,
    subtitle: "In this folder there are overrides of the default color palette coming from MUI"
  }), FolderStructure_jsx(Folder, {
    title: "views",
    depth: 3,
    subtitle: "All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations."
  })));
};

/* harmony default export */ var FolderStructure_FolderStructure = (FolderStructure);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/FolderStructure/index.js

// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Headline/Headline.js
var Headline_jsx = external_react_default.a.createElement;

function Headline_extends() { Headline_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Headline_extends.apply(this, arguments); }

function Headline_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Headline_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Headline_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Headline_useStyles = Object(core_["makeStyles"])(() => ({
  fontWeightBold: {
    fontWeight: 'bold'
  }
}));

const Headline = (_ref) => {
  let {
    className
  } = _ref,
      rest = Headline_objectWithoutProperties(_ref, ["className"]);

  const classes = Headline_useStyles();
  return Headline_jsx("div", Headline_extends({
    className: className
  }, rest), Headline_jsx(molecules["e" /* SectionHeader */], {
    title: "Introduction",
    subtitle: "Material-UI & ReactJS based Landing Pages Kit made with Material UI's components, React. It supports create-react-app build-tools (react-scripts), NextJS, GatsbyJS and Typescript to boost your app development process! A professional React Kit that comes with plenty of ready-to-use Material-UI components that will help you to build faster & beautiful fontend pages. Each component is fully customizable, responsive and easy to integrate.",
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    subtitleProps: {
      color: 'textPrimary',
      variant: 'body1'
    },
    ctaGroup: [Headline_jsx(core_["Button"], {
      variant: "outlined",
      component: "a",
      href: "/"
    }, "Launch a live demo")],
    disableGutter: true
  }));
};

/* harmony default export */ var Headline_Headline = (Headline);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Headline/index.js

// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Technologies/Technologies.js
var Technologies_jsx = external_react_default.a.createElement;

function Technologies_extends() { Technologies_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Technologies_extends.apply(this, arguments); }

function Technologies_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Technologies_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Technologies_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Technologies_useStyles = Object(core_["makeStyles"])(theme => ({
  fontWeightBold: {
    fontWeight: 'bold'
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  list: {
    marginBottom: theme.spacing(-1)
  }
}));

const Technologies = (_ref) => {
  let {
    className
  } = _ref,
      rest = Technologies_objectWithoutProperties(_ref, ["className"]);

  const classes = Technologies_useStyles();
  return Technologies_jsx("div", Technologies_extends({
    className: className
  }, rest), Technologies_jsx(molecules["e" /* SectionHeader */], {
    title: "Build with",
    align: "left",
    titleProps: {
      className: classes.fontWeightBold,
      color: 'textPrimary'
    },
    disableGutter: true
  }), Technologies_jsx(core_["List"], {
    className: classes.list
  }, Technologies_jsx(core_["Chip"], {
    label: "React",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "Material-UI",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "React Scripts",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "NextJS",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "GatsbyJS",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "TypeScript",
    className: classes.chip
  }), Technologies_jsx(core_["Chip"], {
    label: "Figma & Sketch",
    className: classes.chip
  })));
};

/* harmony default export */ var Technologies_Technologies = (Technologies);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/Technologies/index.js

// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/components/index.js




// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/Introduction.js
var Introduction_jsx = external_react_default.a.createElement;

function Introduction_extends() { Introduction_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Introduction_extends.apply(this, arguments); }

function Introduction_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Introduction_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Introduction_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Introduction_useStyles = Object(core_["makeStyles"])(theme => ({
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0)
    }
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  }
}));

const Introduction = (_ref) => {
  let {
    className
  } = _ref,
      rest = Introduction_objectWithoutProperties(_ref, ["className"]);

  const classes = Introduction_useStyles();
  return Introduction_jsx("div", Introduction_extends({
    className: className
  }, rest), Introduction_jsx(Headline_Headline, null), Introduction_jsx(core_["Divider"], {
    className: classes.divider
  }), Introduction_jsx(Features_Features, {
    className: classes.list
  }), Introduction_jsx(Technologies_Technologies, {
    className: classes.list
  }), Introduction_jsx(FolderStructure_FolderStructure, {
    className: classes.list
  }));
};

/* harmony default export */ var Introduction_Introduction = (Introduction);
// CONCATENATED MODULE: ./src/views/Documentation/parts/Introduction/index.js


/***/ })

};;