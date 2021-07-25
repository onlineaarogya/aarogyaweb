exports.ids = [56];
exports.modules = {

/***/ "7LjA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ SwiperNumberExample_SwiperNumberExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/molecules/index.js + 16 modules
var molecules = __webpack_require__("Jc4N");

// CONCATENATED MODULE: ./src/views/Documentation/examples/SwiperNumberExample/SwiperNumberExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { SwiperNumber } from 'components/molecules';
// or
import SwiperNumber from 'components/molecules/SwiperNumber';
`;
const dataProperties = [{
  name: 'items',
  type: 'object[]',
  default: '',
  description: 'The array of numbers object which should consist of number and title'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'labelProps',
  type: 'object',
  default: '',
  description: 'The additional properties to pass to the label Typography component'
}, {
  name: 'numberProps',
  type: 'object',
  default: '',
  description: 'The additional properties to pass to the number Typography component'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { SwiperNumber } from 'components/molecules';
import 'swiper/css/swiper.min.css';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SwiperNumber
        items={[{
            title: 'attendees',
            number: '70,000+'
        }, {
            title: 'countries',
            number: '160+'
        }, {
            title: 'speakers',
            number: '1,200+'
        }, {
            title: 'journalists',
            number: '2,500+'
        }, {
            title: 'CEO's',
            number: '11,000+'
        }, {
            title: 'fimale',
            number: '46%'
        }, {
            title: 'investors',
            number: '1,200+'
        }]}
      />
    </Box>
  );
}
`;

const SwiperNumberExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "SwiperNumber",
    path: "src/components/molecules/SwiperNumber/SwiperNumber.js",
    description: "Component to display the number swiper"
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
  }, __jsx(molecules["g" /* SwiperNumber */], {
    items: [{
      title: 'attendees',
      number: '70,000+'
    }, {
      title: 'countries',
      number: '160+'
    }, {
      title: 'speakers',
      number: '1,200+'
    }, {
      title: 'journalists',
      number: '2,500+'
    }, {
      title: 'CEO\'s',
      number: '11,000+'
    }, {
      title: 'fimale',
      number: '46%'
    }, {
      title: 'investors',
      number: '1,200+'
    }]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var SwiperNumberExample_SwiperNumberExample = (SwiperNumberExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/SwiperNumberExample/index.js


/***/ })

};;