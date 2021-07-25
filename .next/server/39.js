exports.ids = [39];
exports.modules = {

/***/ "4I9C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ DescriptionListIconExample_DescriptionListIconExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/DescriptionListIconExample/DescriptionListIconExample.js
var __jsx = external_react_default.a.createElement;






const importCodeString = `
import { DescriptionListIcon } from 'components/organisms';
// or
import DescriptionListIcon from 'components/organisms/DescriptionListIcon';
`;
const dataProperties = [{
  name: 'icon',
  type: 'node',
  default: '',
  description: 'Whether should show the alternate icon'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'The title'
}, {
  name: 'align',
  type: 'enum',
  default: 'center',
  description: 'The alignment of the items. One of: left, right, center'
}, {
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'The subtitle'
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the subtitle Typography component'
}, {
  name: 'subtitleVariant',
  type: 'string',
  default: 'body1',
  description: 'Subtitle variant'
}, {
  name: 'titleProps',
  type: 'object',
  default: 'body1',
  description: 'Additional props to pass to the title Typography component'
}, {
  name: 'titleVariant',
  type: 'string',
  default: 'h6',
  description: 'Title variant'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { DescriptionListIcon } from 'components/organisms';
import { Icon } from "components/atoms";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <DescriptionListIcon
        title="Coworking communities"
        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
        icon={<Icon fontIconClass="far fa-address-book" size="large" fontIconColor={colors.purple[500]} />}
      />
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { DescriptionListIcon } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <DescriptionListIcon
        title="Coworking communities"
        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.purple} />}
      />
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { DescriptionListIcon } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <DescriptionListIcon
        title="Coworking communities"
        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}
        align="left"
      />
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { DescriptionListIcon } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <DescriptionListIcon
        title="Coworking communities"
        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."
        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}
        align="right"
      />
    </Box>
  );
}
`;

const DescriptionListIconExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "DescriptionListIcon",
    path: "src/components/organisms/DescriptionListIcon/DescriptionListIcon.js",
    description: "Component to display the description list with icon"
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
  }, __jsx(organisms["m" /* DescriptionListIcon */], {
    title: "Coworking communities",
    subtitle: "Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",
    icon: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-address-book",
      size: "large",
      fontIconColor: core_["colors"].purple[500]
    })
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Custom Shadow Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["m" /* DescriptionListIcon */], {
    title: "Coworking communities",
    subtitle: "Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "far fa-address-book",
      size: "medium",
      color: core_["colors"].purple
    })
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))), __jsx(components["e" /* SectionBox */], {
    title: "LiftUp Effect Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["m" /* DescriptionListIcon */], {
    title: "Coworking communities",
    subtitle: "Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "far fa-address-book",
      size: "medium",
      color: core_["colors"].blue
    }),
    align: "left"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Basic Card with No Border and No Shadow Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["m" /* DescriptionListIcon */], {
    title: "Coworking communities",
    subtitle: "Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "far fa-address-book",
      size: "medium",
      color: core_["colors"].blue
    }),
    align: "right"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))));
};

/* harmony default export */ var DescriptionListIconExample_DescriptionListIconExample = (DescriptionListIconExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/DescriptionListIconExample/index.js


/***/ })

};;