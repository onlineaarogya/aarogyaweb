exports.ids = [50];
exports.modules = {

/***/ "ghd5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ OverlapedImagesExample_OverlapedImagesExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/OverlapedImagesExample/OverlapedImagesExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { OverlapedImages } from 'components/molecules';
// or
import OverlapedImages from 'components/molecules/OverlapedImages';
`;
const dataProperties = [{
  name: 'image1',
  type: 'object',
  default: '',
  description: 'Image item - Object of src, srcset and alt properties'
}, {
  name: 'image2',
  type: 'object',
  default: '',
  description: 'Image item - Object of src, srcset and alt properties'
}, {
  name: 'image3',
  type: 'object',
  default: '',
  description: 'Image item - Object of src, srcset and alt properties'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { OverlapedImages } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <OverlapedImages
        image1={{
            src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
            srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
            alt: '...',
        }}
        image2={{
            src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg',
            srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x',
            alt: '...',
        }}
        image3={{
            src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg',
            srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x',
            alt: '...',
        }}
      />
    </Box>
  );
}
`;

const OverlapedImagesExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "OverlapedImages",
    path: "src/components/molecules/OverlapedImages/OverlapedImages.js",
    description: "Component to display the overlaped images"
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
  }, __jsx(molecules["d" /* OverlapedImages */], {
    image1: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
      alt: '...'
    },
    image2: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x',
      alt: '...'
    },
    image3: {
      src: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x',
      alt: '...'
    }
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var OverlapedImagesExample_OverlapedImagesExample = (OverlapedImagesExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/OverlapedImagesExample/index.js


/***/ })

};;