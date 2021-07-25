exports.ids = [36];
exports.modules = {

/***/ "JWbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CountUpNumberExample_CountUpNumberExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CountUpNumberExample/CountUpNumberExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CountUpNumber } from 'components/molecules';
// or
import CountUpNumber from 'components/molecules/CountUpNumber';
`;
const dataProperties = [{
  name: 'end',
  type: 'number',
  default: '',
  description: 'The final number'
}, {
  name: 'label',
  type: 'string',
  default: '',
  description: 'The label text of the count up number'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'countNumberProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the CountUp React component'
}, {
  name: 'countWrapperProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the count wrapper Typography component'
}, {
  name: 'labelColor',
  type: 'string',
  default: '',
  description: 'Label color'
}, {
  name: 'labelProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the label Typography component'
}, {
  name: 'prefix',
  type: 'string',
  default: '',
  description: 'The Prefix of the count up number'
}, {
  name: 'start',
  type: 'number',
  default: '0',
  description: 'Starting number'
}, {
  name: 'suffix',
  type: 'string',
  default: '',
  description: 'The Suffix of the count up number'
}, {
  name: 'textColor',
  type: 'string',
  default: '',
  description: 'Text color'
}, {
  name: 'visibilitySensorProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the VisibilitySensor Component'
}, {
  name: 'wrapperProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the wrapper div'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { CountUpNumber } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
      <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="600px">
        <CountUpNumber end={458} suffix="K" label="Placement" />
        <CountUpNumber end={360} prefix="$" suffix="K" label="Money Invested" />
        <CountUpNumber end={80} suffix="+" label="Locations" />
      </Box>
    </Box>
  );
}
`;

const CountUpNumberExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CountUpNumber",
    path: "src/components/molecules/CountUpNumber/CountUpNumber.js",
    description: "Component to display the Count Up Numbers"
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
  }, __jsx(molecules["a" /* CountUpNumber */], {
    end: 458,
    suffix: "K",
    label: "Placement"
  }), __jsx(molecules["a" /* CountUpNumber */], {
    end: 360,
    prefix: "$",
    suffix: "K",
    label: "Money Invested"
  }), __jsx(molecules["a" /* CountUpNumber */], {
    end: 80,
    suffix: "+",
    label: "Locations"
  }))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var CountUpNumberExample_CountUpNumberExample = (CountUpNumberExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CountUpNumberExample/index.js


/***/ })

};;