exports.ids = [38];
exports.modules = {

/***/ "zr1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ DescriptionCtaExample_DescriptionCtaExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/DescriptionCtaExample/DescriptionCtaExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { DescriptionCta } from 'components/molecules';
// or
import DescriptionCta from 'components/molecules/DescriptionCta';
`;
const dataProperties = [{
  name: 'primaryCta',
  type: 'node',
  default: '',
  description: 'Primary CTA of the list'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Title of the list'
}, {
  name: 'align',
  type: 'enum',
  default: 'center',
  description: 'Alignment of the items. One of: left, right, center'
}, {
  name: 'buttonGroupProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the button group div container'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'primaryButtonWrapperProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the primary button wrapper div container'
}, {
  name: 'secondaryButtonWrapperProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the secondary button wrapper div container'
}, {
  name: 'secondaryCta',
  type: 'node',
  default: '',
  description: 'Secondary CTA of the list'
}, {
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'Subtitle of the list'
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the subtitle Typography components'
}, {
  name: 'titleProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the title Typography components'
}, {
  name: 'wrapperProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the wrapper Grid item components'
}];
const exampleCode = `
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { DescriptionCta } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <DescriptionCta
          title="Apply in 15 minutes"
          subtitle="Get your dream job without the hassle."
          primaryCta={<Button variant="outlined" color="primary" size="large">Learn More</Button>}
          secondaryCta={<Button variant="contained" color="primary" size="large">Apply now</Button>}
          align="left"
      />
    </Box>
  );
}
`;

const DescriptionCtaExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "DescriptionCta",
    path: "src/components/molecules/DescriptionCta/DescriptionCta.js",
    description: "Component to display the description with CTA's"
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
  }, __jsx(molecules["b" /* DescriptionCta */], {
    title: "Apply in 15 minutes",
    subtitle: "Get your dream job without the hassle.",
    primaryCta: __jsx(core_["Button"], {
      variant: "outlined",
      color: "primary",
      size: "large"
    }, "Learn More"),
    secondaryCta: __jsx(core_["Button"], {
      variant: "contained",
      color: "primary",
      size: "large"
    }, "Apply now"),
    align: "left"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var DescriptionCtaExample_DescriptionCtaExample = (DescriptionCtaExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/DescriptionCtaExample/index.js


/***/ })

};;