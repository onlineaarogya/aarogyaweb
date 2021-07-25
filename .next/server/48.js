exports.ids = [48];
exports.modules = {

/***/ "1QcC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ LearnMoreLinkExample_LearnMoreLinkExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/examples/LearnMoreLinkExample/LearnMoreLinkExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { LearnMoreLink } from 'components/atoms';
// or
import LearnMoreLink from 'components/atoms/LearnMoreLink';
`;
const dataProperties = [{
  name: 'title',
  type: 'string',
  default: '',
  description: 'Title of the link'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'color',
  type: 'string',
  default: '',
  description: 'Color of the link'
}, {
  name: 'component',
  type: 'enum',
  default: 'a',
  description: 'The component to load as a main DOM. One of: Link, a'
}, {
  name: 'href',
  type: 'string',
  default: '#',
  description: 'Href of the link'
}, {
  name: 'iconProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the Icon component'
}, {
  name: 'typographyProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the Typography component'
}, {
  name: 'variant',
  type: 'enum',
  default: 'subtitle1',
  description: 'Variant of the link. One of: h6, subtitle1, subtitle2, body1, body2'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';

export default function Example() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <LearnMoreLink title="learn more" />
    </Box>
  );
}
`;

const LearnMoreLinkExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "LearnMoreLink",
    path: "src/components/atoms/LearnMoreLink/LearnMoreLink.js",
    description: "Component to display the 'Learn More' link"
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
  }, __jsx(atoms["e" /* LearnMoreLink */], {
    title: "learn more"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var LearnMoreLinkExample_LearnMoreLinkExample = (LearnMoreLinkExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/LearnMoreLinkExample/index.js


/***/ })

};;