exports.ids = [47];
exports.modules = {

/***/ "brkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ImageExample_ImageExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/examples/ImageExample/ImageExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { Image } from 'components/atoms';
// or
import Image from 'components/atoms/Image';
`;
const dataProperties = [{
  name: 'src',
  type: 'string',
  default: '',
  description: 'Source of the image'
}, {
  name: 'alt',
  type: 'string',
  default: '...',
  description: 'Image title'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'lazy',
  type: 'boolean',
  default: 'true',
  description: 'Should lazy load the image'
}, {
  name: 'lazyProps',
  type: 'object',
  default: '',
  description: 'Lazy loading properties'
}, {
  name: 'srcSet',
  type: 'string',
  default: '',
  description: 'Source set for the responsive images'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { Image } from 'components/atoms';

export default function Example() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Image src="https://assets.maccarianagency.com/the-front/illustrations/brand-platform.svg" />
    </Box>
  );
}
`;

const ImageExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "Image",
    path: "src/components/atoms/Image/Image.js",
    description: "Component to display the images"
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
  }, __jsx(atoms["d" /* Image */], {
    src: "https://assets.maccarianagency.com/the-front/illustrations/brand-platform.svg"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var ImageExample_ImageExample = (ImageExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/ImageExample/index.js


/***/ })

};;