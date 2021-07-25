exports.ids = [52];
exports.modules = {

/***/ "vkos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ SectionAlternateExample_SectionAlternateExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/SectionAlternateExample/SectionAlternateExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { SectionAlternate } from 'components/organisms';
// or
import SectionAlternate from 'components/organisms/SectionAlternate';
`;
const dataProperties = [{
  name: 'children',
  type: 'node',
  default: '',
  description: 'Children to placed inside the section'
}, {
  name: 'innerNarrowed',
  type: 'bool',
  default: '',
  description: 'Should show narrow sections'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { SectionAlternate } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionAlternate>
        <Typography>This is section with default padding</Typography>
      </SectionAlternate>
    </Box>
  );
}
`;

const SectionAlternateExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "SectionAlternate",
    path: "src/components/organisms/SectionAlternate/SectionAlternate.js",
    description: "Component to display the alternative sections"
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
    title: "Basic Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["u" /* SectionAlternate */], null, __jsx(core_["Typography"], null, "This is section with default padding"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var SectionAlternateExample_SectionAlternateExample = (SectionAlternateExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/SectionAlternateExample/index.js


/***/ })

};;