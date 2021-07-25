exports.ids = [46];
exports.modules = {

/***/ "d0t4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ IconTextExample_IconTextExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/examples/IconTextExample/IconTextExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { IconText } from 'components/atoms';
// or
import IconText from 'components/atoms/IconText';
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
  type: 'string',
  default: '',
  description: 'Source set for the responsive images'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Title of the icon-text'
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
}];
const exampleCode = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { IconText } from 'components/atoms';

export default function IconExample() {
  return (
    <Box padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" minWidth="650px">
        <IconText fontIconClass="fas fa-users" color={colors.pink[50]} title="Users Icon Text" />
        <IconText fontIconClass="far fa-address-book" color={colors.purple[500]} title="Book Icon Text" />
        <IconText fontIconClass="fab fa-angellist" color={colors.blue[500]} title="Cool Icon Text" />
        <IconText fontIconClass="fas fa-phone-alt"  color={colors.green[500]} title="Phone Icon Text" />
      </Box>
    </Box>
  );
}
`;

const IconTextExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "IconText",
    path: "src/components/atoms/IconText/IconText.js",
    description: "Component to display the icon text"
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
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "650px"
  }, __jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-users",
    color: core_["colors"].pink[50],
    title: "Users Icon Text"
  }), __jsx(atoms["c" /* IconText */], {
    fontIconClass: "far fa-address-book",
    color: core_["colors"].purple[500],
    title: "Book Icon Text"
  }), __jsx(atoms["c" /* IconText */], {
    fontIconClass: "fab fa-angellist",
    color: core_["colors"].blue[500],
    title: "Cool Icon Text"
  }), __jsx(atoms["c" /* IconText */], {
    fontIconClass: "fas fa-phone-alt",
    color: core_["colors"].green[500],
    title: "Phone Icon Text"
  }))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var IconTextExample_IconTextExample = (IconTextExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/IconTextExample/index.js


/***/ })

};;