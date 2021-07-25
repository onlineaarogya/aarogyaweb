exports.ids = [57];
exports.modules = {

/***/ "bA83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ TypedTextExample_TypedTextExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/TypedTextExample/TypedTextExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { TypedText } from 'components/molecules';
// or
import TypedText from 'components/molecules/TypedText';
`;
const dataProperties = [{
  name: 'typedProps',
  type: 'object',
  default: '',
  description: 'react-typed properties. For more info visit https://www.npmjs.com/package/react-typed'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { TypedText } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <TypedText
        component="span"
        variant="h4"
        color="secondary"
        typedProps={{
            strings: [ "Web Developers.", "UI/UX Designers.", "Business Analists.", "Scrum Masters.", "Finance & Sales" ],
            typeSpeed: 50,
            loop: true,
        }}
      />
    </Box>
  );
}
`;

const TypedTextExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "TypedText",
    path: "src/components/molecules/TypedText/TypedText.js",
    description: "Component to display the typed animated texts"
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
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["h" /* TypedText */], {
    component: "span",
    variant: "h4",
    color: "secondary",
    typedProps: {
      strings: ["Web Developers.", "UI/UX Designers.", "Business Analists.", "Scrum Masters.", "Finance & Sales"],
      typeSpeed: 50,
      loop: true
    }
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var TypedTextExample_TypedTextExample = (TypedTextExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/TypedTextExample/index.js


/***/ })

};;