exports.ids = [54];
exports.modules = {

/***/ "A5ll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ SectionHeaderExample_SectionHeaderExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/atoms/index.js + 12 modules
var atoms = __webpack_require__("kbOB");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/SectionHeaderExample/SectionHeaderExample.js
var __jsx = external_react_default.a.createElement;





const importCodeString = `
import { SectionHeader } from 'components/molecules';
// or
import SectionHeader from 'components/molecules/SectionHeader';
`;
const dataProperties = [{
  name: 'title',
  type: 'union',
  default: '',
  description: 'Title of the section header. One of type: string, node'
}, {
  name: 'align',
  type: 'enum',
  default: '',
  description: 'Header content (title, subtitle, CTAs) alignment. One of: right, left, center'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'ctaGroup',
  type: 'node[]',
  default: '',
  description: 'Array of the CTAs'
}, {
  name: 'disableGutter',
  type: 'bool',
  default: '',
  description: 'Whether to disable bottom margin of the section'
}, {
  name: 'fadeUp',
  type: 'bool',
  default: '',
  description: 'Whether to fade up on scroll'
}, {
  name: 'label',
  type: 'string',
  default: '',
  description: 'Label title of the section header'
}, {
  name: 'labelProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the label Typography component'
}, {
  name: 'overline',
  type: 'node',
  default: '',
  description: 'The overline component in the section header'
}, {
  name: 'subtitle',
  type: 'union',
  default: '',
  description: 'Subtitle of the section header. One of type: string, node'
}, {
  name: 'subtitleColor',
  type: 'enum',
  default: '',
  description: 'SubTitle color. One of: textPrimary, textSecondary, primary, secondary'
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the subtitle Typography component'
}, {
  name: 'subtitleVariant',
  type: 'enum',
  default: '',
  description: 'SubTitle variant. One of: h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2'
}, {
  name: 'titleClasses',
  type: 'string',
  default: '',
  description: 'Styles classes to be attached to the title from the parent component'
}, {
  name: 'titleProps',
  type: 'object',
  default: '',
  description: 'Additional properties to pass to the title Typography component'
}, {
  name: 'titleVariant',
  type: 'enum',
  default: 'h4',
  description: 'Title variant. One of: h1, h2, h3, h4, h5, h6'
}];
const exampleCode1 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
      />
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title={<span>We are reimagining renting to help you <Typography color="secondary" variant="inherit" component="span">achieve your dreams</Typography></span>}
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
      />
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
        align="left"
        fadeUp
      />
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
      />
    </Box>
  );
}
`;
const exampleCode5 = `
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
      />
    </Box>
  );
}
`;
const exampleCode6 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        title={<>Find a job you love.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}
        subtitle={<>Try it now.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
      />
    </Box>
  );
}
`;
const exampleCode7 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        label="our process"
        title={<>Find a job you love.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}
        subtitle={<>Try it now.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
      />
    </Box>
  );
}
`;
const exampleCode8 = `
import React from 'react';
import { Box } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        overline={<Image src="https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png" alt="rating" style={{ width: 120, height: 'auto' }} width="auto" />}
        title="Rated 5 out of 5 stars by our customers!"
        subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here’s what they have to say."
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
      />
    </Box>
  );
}
`;

const SectionHeaderExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "SectionHeader",
    path: "src/components/molecules/SectionHeader/SectionHeader.js",
    description: "Component to display the section headers"
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
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: "We are reimagining renting to help you achieve your dreams",
    subtitle: "Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Example With Highlighted Title",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: __jsx("span", null, "We are reimagining renting to help you ", __jsx(core_["Typography"], {
      color: "secondary",
      variant: "inherit",
      component: "span"
    }, "achieve your dreams")),
    subtitle: "Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Aligned Left and with FadeUp",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: "We are reimagining renting to help you achieve your dreams",
    subtitle: "Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",
    align: "left",
    fadeUp: true
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Title only",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: "We are reimagining renting to help you achieve your dreams"
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))), __jsx(components["e" /* SectionBox */], {
    title: "With Call to action buttons",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: "We are reimagining renting to help you achieve your dreams",
    subtitle: "Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",
    ctaGroup: [__jsx(core_["Button"], {
      color: "primary",
      variant: "contained"
    }, "Submit"), __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined"
    }, "Learn More")]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode5
  }))), __jsx(components["e" /* SectionBox */], {
    title: "With HTML injected title and subtitle",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: __jsx(external_react_default.a.Fragment, null, "Find a job you love.", __jsx("a", {
      href: "https://thefront.maccarianagency.com/"
    }, " Learn more")),
    subtitle: __jsx(external_react_default.a.Fragment, null, "Try it now.", __jsx("a", {
      href: "https://thefront.maccarianagency.com/"
    }, " Learn more")),
    ctaGroup: [__jsx(core_["Button"], {
      color: "primary",
      variant: "contained"
    }, "Submit"), __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined"
    }, "Learn More")]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode6
  }))), __jsx(components["e" /* SectionBox */], {
    title: "With label",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    label: "our process",
    title: __jsx(external_react_default.a.Fragment, null, "Find a job you love.", __jsx("a", {
      href: "https://thefront.maccarianagency.com/"
    }, " Learn more")),
    subtitle: __jsx(external_react_default.a.Fragment, null, "Try it now.", __jsx("a", {
      href: "https://thefront.maccarianagency.com/"
    }, " Learn more")),
    ctaGroup: [__jsx(core_["Button"], {
      color: "primary",
      variant: "contained"
    }, "Submit"), __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined"
    }, "Learn More")]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode7
  }))), __jsx(components["e" /* SectionBox */], {
    title: "With Overline",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(molecules["e" /* SectionHeader */], {
    overline: __jsx(atoms["d" /* Image */], {
      src: "https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png",
      alt: "rating",
      style: {
        width: 120,
        height: 'auto'
      },
      width: "auto"
    }),
    title: "Rated 5 out of 5 stars by our customers!",
    subtitle: "Companies from across the globe have had fantastic experiences using TheFront. Here\u2019s what they have to say.",
    ctaGroup: [__jsx(core_["Button"], {
      color: "primary",
      variant: "contained"
    }, "Submit"), __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined"
    }, "Learn More")]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode8
  }))));
};

/* harmony default export */ var SectionHeaderExample_SectionHeaderExample = (SectionHeaderExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/SectionHeaderExample/index.js


/***/ })

};;