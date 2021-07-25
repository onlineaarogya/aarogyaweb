exports.ids = [44];
exports.modules = {

/***/ "ZIW4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ IconAlternateExample_IconAlternateExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/IconAlternateExample/IconAlternateExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { IconAlternate } from 'components/molecules';
// or
import IconAlternate from 'components/molecules/IconAlternate';
`;
const dataProperties = [{
  name: 'fontIconClass',
  type: 'string',
  default: '',
  description: 'The classes of the font icon'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'color',
  type: 'enum',
  default: '',
  description: 'Color of the icon. One of: colors.red, colors.pink, colors.purple, colors.deepPurple, colors.indigo, colors.blue, colors.lightBlue, colors.cyan, colors.teal, colors.green, colors.lightGreen, colors.lime, colors.yellow, colors.amber, colors.orange, colors.deepOrange, colors.brown, colors.grey, colors.blueGrey'
}, {
  name: 'iconProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the Icon component'
}, {
  name: 'shape',
  type: 'enum',
  default: '',
  description: 'The shape of the alternate icon. One of: circle, square'
}, {
  name: 'size',
  type: 'enum',
  default: 'medium',
  description: 'Sizes of the icon. One of: extraSmall, small, medium, large'
}];
const exampleCode = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { IconAlternate } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
      <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="600px">
        <IconAlternate shape="circle" size="small" fontIconClass="far fa-address-book" color={colors.purple} />
        <IconAlternate fontIconClass="fas fa-users" color={colors.pink} />
        <IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.blue} />
        <IconAlternate fontIconClass="fas fa-phone-alt" size="large" color={colors.green} />
      </Box>
    </Box>
  );
}
`;

const IconAlternateExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "IconAlternate",
    path: "src/components/molecules/IconAlternate/IconAlternate.js",
    description: "Component to display the alternate icon"
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
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "auto"
  }, __jsx(core_["Box"], {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "600px"
  }, __jsx(molecules["c" /* IconAlternate */], {
    shape: "circle",
    size: "small",
    fontIconClass: "far fa-address-book",
    color: core_["colors"].purple
  }), __jsx(molecules["c" /* IconAlternate */], {
    fontIconClass: "fas fa-users",
    color: core_["colors"].pink
  }), __jsx(molecules["c" /* IconAlternate */], {
    fontIconClass: "fas fa-quote-right",
    size: "medium",
    color: core_["colors"].blue
  }), __jsx(molecules["c" /* IconAlternate */], {
    fontIconClass: "fas fa-phone-alt",
    size: "large",
    color: core_["colors"].green
  }))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var IconAlternateExample_IconAlternateExample = (IconAlternateExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/IconAlternateExample/index.js


/***/ })

};;