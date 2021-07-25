exports.ids = [37];
exports.modules = {

/***/ "Bm6Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ DarkModeTogglerExample_DarkModeTogglerExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/examples/DarkModeTogglerExample/DarkModeTogglerExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { DarkModeToggler } from 'components/atoms';
// or
import DarkModeToggler from 'components/atoms/DarkModeToggler';
`;
const dataProperties = [{
  name: 'themeMode',
  type: 'string',
  default: '',
  description: 'The theme mode'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'onClick',
  type: 'Function',
  default: '',
  description: 'Function to handle the click of teh toggler'
}];
const exampleCode = `
import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { DarkModeToggler } from 'components/atoms';

export default function DarkModeTogglerExample() {
  const [themeMode, setThemeMode] = useState('light');
  const handleClick = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <DarkModeToggler themeMode={themeMode} onClick={() => handleClick()} />
    </Box>
  );
}
`;

const DarkModeTogglerExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  const {
    0: themeMode,
    1: setThemeMode
  } = Object(external_react_["useState"])('light');

  const handleClick = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "DarkModeToggler",
    path: "src/components/atoms/DarkModeToggler/DarkModeToggler.js",
    description: "Component to display the dark mode toggler"
  })), __jsx(components["e" /* SectionBox */], {
    title: "Import",
    gutterBottom: true
  }, __jsx(components["a" /* CodeHighlighter */], {
    code: importCodeString
  })), __jsx(components["e" /* SectionBox */], {
    title: "Props & Methods",
    gutterBottom: true
  }, __jsx(components["d" /* PropsHighlighter */], {
    dataProperties: dataProperties
  })), __jsx(components["e" /* SectionBox */], {
    title: "Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(atoms["a" /* DarkModeToggler */], {
    themeMode: themeMode,
    onClick: () => handleClick()
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var DarkModeTogglerExample_DarkModeTogglerExample = (DarkModeTogglerExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/DarkModeTogglerExample/index.js


/***/ })

};;