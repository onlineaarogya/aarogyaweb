exports.ids = [25];
exports.modules = {

/***/ "PHpM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardBaseExample_CardBaseExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardBaseExample/CardBaseExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CardBase } from 'components/organisms';
// or
import CardBase from 'components/organisms/CardBase';
`;
const dataProperties = [{
  name: 'children',
  type: 'node',
  default: '',
  description: 'The children content of the basic card'
}, {
  name: 'align',
  type: 'enum',
  default: 'center',
  description: 'The content alignment. One of: left, right, center'
}, {
  name: 'cardContentProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the CardContent component'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'liftUp',
  type: 'bool',
  default: '',
  description: 'Whether to lift up on hover'
}, {
  name: 'noBg',
  type: 'bool',
  default: '',
  description: 'Whether to show transparent background'
}, {
  name: 'noBorder',
  type: 'bool',
  default: '',
  description: 'Whether to hide the card borders'
}, {
  name: 'noShadow',
  type: 'bool',
  default: '',
  description: 'Whether to render the card without shadow'
}, {
  name: 'withShadow',
  type: 'bool',
  default: '',
  description: 'Whether to show custom shadow'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardBase>
        <Typography variant="h6">This is basic card</Typography>
      </CardBase>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardBase withShadow>
        <Typography variant="h6">This is basic card with custom shadows</Typography>
      </CardBase>
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardBase withShadow liftUp>
        <Typography variant="h6">This is basic card will lift up on hover</Typography>
      </CardBase>
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardBase noBorder noShadow>
        <Typography variant="h6">This is basic card without border and without shadow</Typography>
      </CardBase>
    </Box>
  );
}
`;
const exampleCode5 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CardBase } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardBase variant="outlined">
        <Typography variant="h6">This is basic card with outlined effect</Typography>
      </CardBase>
    </Box>
  );
}
`;

const CardBaseExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardBase",
    path: "src/components/organisms/CardBase/CardBase.js",
    description: "Component to display the basic card"
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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["b" /* CardBase */], null, __jsx(core_["Typography"], {
    variant: "h6"
  }, "This is basic card"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Custom Shadow Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["b" /* CardBase */], {
    withShadow: true
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "This is basic card with custom shadows"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Hover lift up",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["b" /* CardBase */], {
    withShadow: true,
    liftUp: true
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "This is basic card will lift up on hover"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))), __jsx(components["e" /* SectionBox */], {
    title: "No border, no shadow",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["b" /* CardBase */], {
    noBorder: true,
    noShadow: true
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "This is basic card without border and without shadow"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Outlined",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["b" /* CardBase */], {
    variant: "outlined"
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "This is basic card with outlined effect"))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode5
  }))));
};

/* harmony default export */ var CardBaseExample_CardBaseExample = (CardBaseExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardBaseExample/index.js


/***/ })

};;