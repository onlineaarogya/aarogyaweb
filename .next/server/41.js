exports.ids = [41];
exports.modules = {

/***/ "Xi0l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ HeroShapedExample_HeroShapedExample; });

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

// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroShapedExample/HeroShapedExample.js
var __jsx = external_react_default.a.createElement;






const importCodeString = `
import { HeroShaped } from 'components/organisms';
// or
import HeroShaped from 'components/organisms/HeroShaped';
`;
const dataProperties = [{
  name: 'leftSide',
  type: 'node',
  default: '',
  description: 'Children to placed inside the section left side'
}, {
  name: 'rightSide',
  type: 'node',
  default: '',
  description: 'Children to placed inside the section right side'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode = `
import React from 'react';
import { Box, Button } from '@material-ui/core';
import { HeroShaped } from 'components/organisms';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <HeroShaped
        leftSide={(
          <SectionHeader
            title="Coworking made easy"
            subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
            ctaGroup={[
              <Button variant="contained" color="primary">Book</Button>,
              <Button variant="outlined" color="primary">Browse</Button>
            ]}
            align="left"
          />
        )}
        rightSide={(
          <Image src="https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg" alt="..." style={{ objectFit: 'cover' }} lazy={false} />
        )}
      />
    </Box>
  );
}
`;

const HeroShapedExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "HeroShaped",
    path: "src/components/organisms/HeroShaped/HeroShaped.js",
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
  }, __jsx(organisms["o" /* HeroShaped */], {
    leftSide: __jsx(molecules["e" /* SectionHeader */], {
      title: "Coworking made easy",
      subtitle: "For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people.",
      ctaGroup: [__jsx(core_["Button"], {
        variant: "contained",
        color: "primary"
      }, "Book"), __jsx(core_["Button"], {
        variant: "outlined",
        color: "primary"
      }, "Browse")],
      align: "left"
    }),
    rightSide: __jsx(atoms["d" /* Image */], {
      src: "https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg",
      alt: "...",
      style: {
        objectFit: 'cover'
      },
      lazy: false
    })
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var HeroShapedExample_HeroShapedExample = (HeroShapedExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/HeroShapedExample/index.js


/***/ })

};;