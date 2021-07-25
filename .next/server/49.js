exports.ids = [49];
exports.modules = {

/***/ "ehPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ MapExample_MapExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/MapExample/MapExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { Map } from 'components/organisms';
// or
import Map from 'components/organisms/Map';
`;
const dataProperties = [{
  name: 'center',
  type: 'array',
  default: '[0, 0]',
  description: 'Map center'
}, {
  name: 'pins',
  type: 'array',
  default: '',
  description: 'data of the locations. Example: [{ location: { x: number, y: number } }]'
}, {
  name: 'zoom',
  type: 'number',
  default: '10',
  description: 'Map zoom'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { Map } from 'components/organisms';

const mapData = [
  {
    location: {
      y: 45.453211,
      x: 9.248383,
      address: 'Via A.G. Alaimo 147, 55027',
    },
  },
  {
    location: {
      y: 45.419211,
      x: 9.021383,
      address: 'Via Rocca de Baldi 95, 440368',
    },
  },
  {
    location: {
      y: 45.473211,
      x: 9.298383,
      address: 'Via Firenze 134, 45588',
    },
  },
  {
    location: {
      y: 45.461211,
      x: 9.000383,
      address: 'Via Cavour 29, 201558',
    },
  },
  {
    location: {
      y: 45.413211,
      x: 9.398383,
      address: 'Via Bologna 33, 220156',
    },
  },
  {
    location: {
      y: 45.569211,
      x: 9.128383,
      address: 'Vicolo Tre Marchetti 127, 350125',
    },
  },
  {
    location: {
      y: 45.483211,
      x: 9.148383,
      address: 'Via Lombardi 146, 45830',
    },
  },
  {
    location: {
      y: 45.313211,
      x: 9.012383,
      address: 'Via Guantai Nuovi 99, 56989',
    },
  },
];

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Map pins={mapData} center={[45.464211, 9.011383]} />
    </Box>
  );
}
`;
const mapData = [{
  location: {
    y: 45.453211,
    x: 9.248383,
    address: 'Via A.G. Alaimo 147, 55027'
  }
}, {
  location: {
    y: 45.419211,
    x: 9.021383,
    address: 'Via Rocca de Baldi 95, 440368'
  }
}, {
  location: {
    y: 45.473211,
    x: 9.298383,
    address: 'Via Firenze 134, 45588'
  }
}, {
  location: {
    y: 45.461211,
    x: 9.000383,
    address: 'Via Cavour 29, 201558'
  }
}, {
  location: {
    y: 45.413211,
    x: 9.398383,
    address: 'Via Bologna 33, 220156'
  }
}, {
  location: {
    y: 45.569211,
    x: 9.128383,
    address: 'Vicolo Tre Marchetti 127, 350125'
  }
}, {
  location: {
    y: 45.483211,
    x: 9.148383,
    address: 'Via Lombardi 146, 45830'
  }
}, {
  location: {
    y: 45.313211,
    x: 9.012383,
    address: 'Via Guantai Nuovi 99, 56989'
  }
}];

const MapExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "Map",
    path: "src/components/organisms/Map/Map.js",
    description: "Component to display the map"
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
    borderRadius: "4px",
    position: "relative",
    height: "400px"
  }, __jsx(organisms["r" /* Map */], {
    pins: mapData,
    center: [45.464211, 9.011383]
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode
  }))));
};

/* harmony default export */ var MapExample_MapExample = (MapExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/MapExample/index.js


/***/ })

};;