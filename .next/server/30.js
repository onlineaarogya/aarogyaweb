exports.ids = [30];
exports.modules = {

/***/ "iegy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardJobMinimalExample_CardJobMinimalExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobMinimalExample/CardJobMinimalExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CardJobMinimal } from 'components/organisms';
// or
import CardJobMinimal from 'components/organisms/CardJobMinimal';
`;
const dataProperties = [{
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'Job subtitle of the card'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Job title of the card'
}, {
  name: 'showArrow',
  type: 'bool',
  default: 'false',
  description: 'Should show arrow or not'
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the subtitle Typography component'
}, {
  name: 'titleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the title Typography component'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { CardJobMinimal } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardJobMinimal
        title={'Front-end developer'}
        subtitle={'Paris / Full time'}
      />
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { CardJobMinimal } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardJobMinimal
        title={'Front-end developer'}
        subtitle={'Paris / Full time'}
        showArrow
        titleProps={{
            variant: 'h6',
        }}
        subtitleProps={{
            variant: 'subtitle1',
        }}
      />
    </Box>
  );
}
`;

const CardJobMinimalExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardJobMinimal",
    path: "src/components/organisms/CardJobMinimal/CardJobMinimal.js",
    description: "Component to display the job minimal card"
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
  }, __jsx(organisms["g" /* CardJobMinimal */], {
    title: 'Front-end developer',
    subtitle: `Paris / Full time`
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Outlined",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["g" /* CardJobMinimal */], {
    title: 'Front-end developer',
    subtitle: `Paris / Full time`,
    showArrow: true,
    titleProps: {
      variant: 'h6'
    },
    subtitleProps: {
      variant: 'subtitle1'
    }
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))));
};

/* harmony default export */ var CardJobMinimalExample_CardJobMinimalExample = (CardJobMinimalExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobMinimalExample/index.js


/***/ })

};;