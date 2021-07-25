exports.ids = [55];
exports.modules = {

/***/ "UCcN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ SwiperImageExample_SwiperImageExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/SwiperImageExample/SwiperImageExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { SwiperImage } from 'components/molecules';
// or
import SwiperImage from 'components/molecules/SwiperImage';
`;
const dataProperties = [{
  name: 'items',
  type: 'object[]',
  default: '',
  description: 'The array of images object which should consist of src, alt and srcset attributes'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'imageClassName',
  type: 'string',
  default: '',
  description: 'External classes for the images'
}, {
  name: 'navigationButtonStyle',
  type: 'string',
  default: '',
  description: 'Styles classes of the navigation button'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SwiperImage } from 'components/molecules';
import 'swiper/css/swiper.min.css';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SwiperImage
        style={{
            width: 500,
            height: 300,
        }}
        items={[{
            src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
            srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg 2x',
            alt: '...'
        }, {
            src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
            srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg 2x',
            alt: '...'
        }]}
      />
    </Box>
  );
}
`;

const SwiperImageExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "SwiperImage",
    path: "src/components/molecules/SwiperImage/SwiperImage.js",
    description: "Component to display the image swiper"
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
  }, __jsx(molecules["f" /* SwiperImage */], {
    style: {
      width: 700,
      height: 500
    },
    items: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg 2x',
      alt: '...'
    }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg 2x',
      alt: '...'
    }]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var SwiperImageExample_SwiperImageExample = (SwiperImageExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/SwiperImageExample/index.js


/***/ })

};;