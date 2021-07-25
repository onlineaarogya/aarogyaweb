exports.ids = [42];
exports.modules = {

/***/ "/bAl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ HeroSideImageExample_HeroSideImageExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroSideImageExample/HeroSideImageExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { HeroSideImage } from 'components/organisms';
// or
import HeroSideImage from 'components/organisms/HeroSideImage';
`;
const dataProperties = [{
  name: 'imageSrc',
  type: 'string',
  default: '',
  description: 'Side image'
}, {
  name: 'backgroundColor',
  type: 'string',
  default: '',
  description: 'Background color of the hero'
}, {
  name: 'children',
  type: 'node',
  default: '',
  description: 'Children to placed inside the hero'
}, {
  name: 'imageSrcSet',
  type: 'string',
  default: '',
  description: 'Side image srcset'
}, {
  name: 'reverse',
  type: 'bool',
  default: '',
  description: 'Should show in reverse order'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { HeroSideImage } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroSideImage imageSrc="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ color: isMd ? 'inherit' : 'white' }}>
              Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ color: isMd ? 'inherit' : 'white' }}>
              Download our overview and a member of our specialist team will be in touch.
            </Typography>
          </Grid>
        </Grid>
      </HeroSideImage>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { HeroSideImage } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroSideImage imageSrc="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg" reverse>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Download our overview and a member of our specialist team will be in touch.
            </Typography>
          </Grid>
        </Grid>
      </HeroSideImage>
    </Box>
  );
}
`;

const HeroSideImageExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "HeroSideImage",
    path: "src/components/organisms/HeroSideImage/HeroSideImage.js",
    description: "Component to display the side image hero"
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
  }, __jsx(organisms["p" /* HeroSideImage */], {
    imageSrc: "https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h4"
  }, "Join the world's leading companies at TheFront 2020")), __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "Download our overview and a member of our specialist team will be in touch."))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Reverse Order Example",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["p" /* HeroSideImage */], {
    imageSrc: "https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",
    reverse: true
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 4
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h4"
  }, "Join the world's leading companies at TheFront 2020")), __jsx(core_["Grid"], {
    item: true,
    xs: 12
  }, __jsx(core_["Typography"], {
    variant: "h6"
  }, "Download our overview and a member of our specialist team will be in touch."))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))));
};

/* harmony default export */ var HeroSideImageExample_HeroSideImageExample = (HeroSideImageExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroSideImageExample/index.js


/***/ })

};;