exports.ids = [40];
exports.modules = {

/***/ "2Jut":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ HeroBackgroundExample_HeroBackgroundExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroBackgroundExample/HeroBackgroundExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { HeroBackground } from 'components/organisms';
// or
import HeroBackground from 'components/organisms/HeroBackground';
`;
const dataProperties = [{
  name: 'backgroundColor',
  type: 'string',
  default: '',
  description: 'Background color of the hero'
}, {
  name: 'backgroundImg',
  type: 'string',
  default: '',
  description: 'Background image of the hero'
}, {
  name: 'backgroundPosition',
  type: 'string',
  default: '',
  description: 'Background position of the hero'
}, {
  name: 'children',
  type: 'node',
  default: '',
  description: 'Children to placed inside the hero'
}, {
  name: 'contentSectionClassName',
  type: 'string',
  default: '',
  description: 'Custom classes for the content section'
}, {
  name: 'disbaleCoverOpacity',
  type: 'bool',
  default: '',
  description: 'Should disable here cover opacity'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroBackground>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ color: 'white', fontWeight: 900, }}>
                Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
                Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.
            </Typography>
            <Typography variant="h5" style={{ color: 'white' }}>
                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained">Download exhibitor overview</Button>
          </Grid>
        </Grid>
      </HeroBackground>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Grid, Typography, Button, colors } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroBackground backgroundColor={colors.blue[500]}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ color: 'white', fontWeight: 900, }}>
                Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
                Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.
            </Typography>
            <Typography variant="h5" style={{ color: 'white' }}>
                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained">Download exhibitor overview</Button>
          </Grid>
        </Grid>
      </HeroBackground>
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, Grid, Typography, Button, colors } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroBackground backgroundImg="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ color: 'white', fontWeight: 900, }}>
              Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ color: 'white' }} gutterBottom>
              Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.
            </Typography>
            <Typography variant="h5" style={{ color: 'white' }}>
              Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained">Download exhibitor overview</Button>
          </Grid>
        </Grid>
      </HeroBackground>
    </Box>
  );
}
`;

const HeroBackgroundExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "HeroBackground",
    path: "src/components/organisms/HeroBackground/HeroBackground.js",
    description: "Component to display the background hero"
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
  }, __jsx(organisms["n" /* HeroBackground */], null, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h3",
    style: {
      color: 'white',
      fontWeight: 900
    }
  }, "Join the world's leading companies at TheFront 2020")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    },
    gutterBottom: true
  }, "Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."), __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    }
  }, "Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Button"], {
    variant: "contained"
  }, "Download exhibitor overview"))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Custom Background Color Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["n" /* HeroBackground */], {
    backgroundColor: core_["colors"].blue[500]
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h3",
    style: {
      color: 'white',
      fontWeight: 900
    }
  }, "Join the world's leading companies at TheFront 2020")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    },
    gutterBottom: true
  }, "Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."), __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    }
  }, "Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Button"], {
    variant: "contained"
  }, "Download exhibitor overview"))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Custom Background Image Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["n" /* HeroBackground */], {
    backgroundImg: "https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h3",
    style: {
      color: 'white',
      fontWeight: 900
    }
  }, "Join the world's leading companies at TheFront 2020")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    },
    gutterBottom: true
  }, "Whether it\u2019s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."), __jsx(core_["Typography"], {
    variant: "h5",
    style: {
      color: 'white'
    }
  }, "Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")), __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(core_["Button"], {
    variant: "contained"
  }, "Download exhibitor overview"))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))));
};

/* harmony default export */ var HeroBackgroundExample_HeroBackgroundExample = (HeroBackgroundExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroBackgroundExample/index.js


/***/ })

};;