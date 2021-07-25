exports.ids = [45];
exports.modules = {

/***/ "Gfrv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ IconExample_IconExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// CONCATENATED MODULE: ./src/views/Documentation/examples/IconExample/IconExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { Icon } from 'components/atoms';
// or
import Icon from 'components/atoms/Icon';
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
  name: 'fontIconColor',
  type: 'string',
  default: '',
  description: 'Color of the icon'
}, {
  name: 'size',
  type: 'enum',
  default: 'small',
  description: 'Source set for the responsive images. One of: extraSmall, small, medium, large'
}];
const exampleCode = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { Icon } from 'components/atoms';

export default function IconExample() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Icon fontIconClass="fas fa-users" fontIconColor={colors.pink[50]} />
      <Icon fontIconClass="far fa-address-book" size="small" fontIconColor={colors.purple[500]} />
      <Icon fontIconClass="fab fa-angellist" size="medium" fontIconColor={colors.blue[500]} />
      <Icon fontIconClass="fas fa-phone-alt" size="large" fontIconColor={colors.green[500]} />
    </Box>
  );
}
`;

const IconExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "Icon",
    path: "src/components/atoms/Icon/Icon.js",
    description: "Component to display icons"
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
  }, __jsx(atoms["b" /* Icon */], {
    fontIconClass: "fas fa-users",
    fontIconColor: core_["colors"].pink[50]
  }), __jsx(atoms["b" /* Icon */], {
    fontIconClass: "far fa-address-book",
    size: "small",
    fontIconColor: core_["colors"].purple[500]
  }), __jsx(atoms["b" /* Icon */], {
    fontIconClass: "fab fa-angellist",
    size: "medium",
    fontIconColor: core_["colors"].blue[500]
  }), __jsx(atoms["b" /* Icon */], {
    fontIconClass: "fas fa-phone-alt",
    size: "large",
    fontIconColor: core_["colors"].green[500]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var IconExample_IconExample = (IconExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/IconExample/index.js


/***/ })

};;