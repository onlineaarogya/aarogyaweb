exports.ids = [43];
exports.modules = {

/***/ "XyQ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ HeroSimpleBackgroundExample_HeroSimpleBackgroundExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroSimpleBackgroundExample/HeroSimpleBackgroundExample.js
var __jsx = external_react_default.a.createElement;






const importCodeString = `
import { HeroSimpleBackground } from 'components/organisms';
// or
import HeroSimpleBackground from 'components/organisms/HeroSimpleBackground';
`;
const dataProperties = [{
  name: 'backgroundImage',
  type: 'string',
  default: '',
  description: 'The background image of the hero'
}, {
  name: 'children',
  type: 'node',
  default: '',
  description: 'The main content'
}, {
  name: 'backgroundPosition',
  type: 'string',
  default: 'center',
  description: 'The background position of the hero'
}, {
  name: 'backgroundSize',
  type: 'string',
  default: 'cover',
  description: 'The background size of the hero'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { HeroSimpleBackground } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">
        <Section narrow>
          <SectionHeader
            title="Supercharge Your Web Product's UI/UX Design"
            titleVariant="h2"
            subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
            ctaGroup={[(
              <Button color="primary" variant="contained" size="large">Try for free</Button>
            ), (
              <Button color="primary" variant="outlined" size="large">See pricings</Button>
            )]}
          />
        </Section>
      </HeroSimpleBackground>
    </Box>
  );
}
`;

const HeroSimpleBackgroundExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "HeroSimpleBackground",
    path: "src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js",
    description: "Component to display the background heros"
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
  }, __jsx(organisms["q" /* HeroSimpleBackground */], {
    backgroundImage: "https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg"
  }, __jsx(organisms["t" /* Section */], {
    narrow: true
  }, __jsx(molecules["e" /* SectionHeader */], {
    title: "Supercharge Your Web Product's UI/UX Design",
    titleVariant: "h2",
    subtitle: "Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",
    ctaGroup: [__jsx(core_["Button"], {
      color: "primary",
      variant: "contained",
      size: "large"
    }, "Try for free"), __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      size: "large"
    }, "See pricings")]
  })))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))));
};

/* harmony default export */ var HeroSimpleBackgroundExample_HeroSimpleBackgroundExample = (HeroSimpleBackgroundExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroSimpleBackgroundExample/index.js


/***/ })

};;