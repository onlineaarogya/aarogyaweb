exports.ids = [33];
exports.modules = {

/***/ "FQLy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardProductExample_CardProductExample; });

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

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardProductExample/CardProductExample.js
var __jsx = external_react_default.a.createElement;





const importCodeString = `
import { CardProduct } from 'components/organisms';
// or
import CardProduct from 'components/organisms/CardProduct';
`;
const dataProperties = [{
  name: 'cardContent',
  type: 'any',
  default: '',
  description: 'The Card content'
}, {
  name: 'mediaContent',
  type: 'any',
  default: '',
  description: 'The Card Media content'
}, {
  name: 'align',
  type: 'enum',
  default: 'left',
  description: 'The content alignment. One of: left, right, center'
}, {
  name: 'liftUp',
  type: 'bool',
  default: '',
  description: 'Whether to lift up on hover'
}, {
  name: 'mediaClassName',
  type: 'string',
  default: '',
  description: 'External classes for the media'
}, {
  name: 'noBg',
  type: 'bool',
  default: '',
  description: 'Whether to show transparent background'
}, {
  name: 'noBorder',
  type: 'bool',
  default: '',
  description: 'Whether to hide the card borders'
}, {
  name: 'noShadow',
  type: 'bool',
  default: '',
  description: 'Whether to render the card without shadow'
}, {
  name: 'withShadow',
  type: 'bool',
  default: '',
  description: 'Whether to show custom shadow'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';

const item = {
  images: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      alt: '', 
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month',
};

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardProduct
        style={{ maxWidth: 500 }}
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';

const item = {
  images: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      alt: '', 
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month',
};

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardProduct
        withShadow
        style={{ maxWidth: 500 }}
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';

const item = {
  images: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      alt: '', 
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month',
};

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardProduct
        withShadow
        liftUp
        style={{ maxWidth: 500 }}
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';

const item = {
  images: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      alt: '', 
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month',
};

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardProduct
        noBorder
        noShadow
        style={{ maxWidth: 500 }}
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Box>
  );
}
`;
const exampleCode5 = `
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { CardProduct } from 'components/organisms';
import { SwiperImage } from 'components/molecules';

const item = {
  images: [{
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
      alt: '', 
  }, {
      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
      alt: '', 
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month',
};

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardProduct
        variant="outlined"
        style={{ maxWidth: 500 }}
        mediaContent={(
          <>
            <SwiperImage
              items={item.images}
            />
            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
              <Typography variant="body1" color="primary">
                {item.price}
              </Typography>
            </div>
          </>
        )}
        cardContent={(
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" align="left">
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
            </Grid>
          </Grid>
        )}
      />
    </Box>
  );
}
`;
const item = {
  images: [{
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
    alt: ''
  }, {
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
    alt: ''
  }, {
    src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
    alt: ''
  }],
  title: 'Tenoha Space',
  address: 'Via E. Gola 4, 20147 Milan, Italy',
  price: '$980 / month'
};

const CardProductExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardProduct",
    path: "src/components/organisms/CardProduct/CardProduct.js",
    description: "Component to display the product card"
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
  }, __jsx(organisms["j" /* CardProduct */], {
    style: {
      maxWidth: 500
    },
    mediaContent: __jsx(external_react_default.a.Fragment, null, __jsx(molecules["f" /* SwiperImage */], {
      items: item.images
    }), __jsx("div", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 16,
        zIndex: 9,
        background: 'white',
        padding: '4px 8px',
        borderRadius: '8px'
      }
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "primary"
    }, item.price))),
    cardContent: __jsx(core_["Grid"], {
      container: true,
      spacing: 1
    }, __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "h6",
      color: "textPrimary",
      align: "left"
    }, item.title)), __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "textSecondary",
      align: "left"
    }, item.address)))
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
  }, __jsx(organisms["j" /* CardProduct */], {
    withShadow: true,
    style: {
      maxWidth: 500
    },
    mediaContent: __jsx(external_react_default.a.Fragment, null, __jsx(molecules["f" /* SwiperImage */], {
      items: item.images
    }), __jsx("div", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 16,
        zIndex: 9,
        background: 'white',
        padding: '4px 8px',
        borderRadius: '8px'
      }
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "primary"
    }, item.price))),
    cardContent: __jsx(core_["Grid"], {
      container: true,
      spacing: 1
    }, __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "h6",
      color: "textPrimary",
      align: "left"
    }, item.title)), __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "textSecondary",
      align: "left"
    }, item.address)))
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
  }, __jsx(organisms["j" /* CardProduct */], {
    withShadow: true,
    liftUp: true,
    style: {
      maxWidth: 500
    },
    mediaContent: __jsx(external_react_default.a.Fragment, null, __jsx(molecules["f" /* SwiperImage */], {
      items: item.images
    }), __jsx("div", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 16,
        zIndex: 9,
        background: 'white',
        padding: '4px 8px',
        borderRadius: '8px'
      }
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "primary"
    }, item.price))),
    cardContent: __jsx(core_["Grid"], {
      container: true,
      spacing: 1
    }, __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "h6",
      color: "textPrimary",
      align: "left"
    }, item.title)), __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "textSecondary",
      align: "left"
    }, item.address)))
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
  }, __jsx(organisms["j" /* CardProduct */], {
    noBorder: true,
    noShadow: true,
    style: {
      maxWidth: 500
    },
    mediaContent: __jsx(external_react_default.a.Fragment, null, __jsx(molecules["f" /* SwiperImage */], {
      items: item.images
    }), __jsx("div", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 16,
        zIndex: 9,
        background: 'white',
        padding: '4px 8px',
        borderRadius: '8px'
      }
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "primary"
    }, item.price))),
    cardContent: __jsx(core_["Grid"], {
      container: true,
      spacing: 1
    }, __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "h6",
      color: "textPrimary",
      align: "left"
    }, item.title)), __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "textSecondary",
      align: "left"
    }, item.address)))
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Basic Card with Outlined Effect",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px"
  }, __jsx(organisms["j" /* CardProduct */], {
    variant: "outlined",
    style: {
      maxWidth: 500
    },
    mediaContent: __jsx(external_react_default.a.Fragment, null, __jsx(molecules["f" /* SwiperImage */], {
      items: item.images
    }), __jsx("div", {
      style: {
        position: 'absolute',
        left: 8,
        bottom: 16,
        zIndex: 9,
        background: 'white',
        padding: '4px 8px',
        borderRadius: '8px'
      }
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "primary"
    }, item.price))),
    cardContent: __jsx(core_["Grid"], {
      container: true,
      spacing: 1
    }, __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "h6",
      color: "textPrimary",
      align: "left"
    }, item.title)), __jsx(core_["Grid"], {
      item: true,
      xs: 12
    }, __jsx(core_["Typography"], {
      variant: "body1",
      color: "textSecondary",
      align: "left"
    }, item.address)))
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode5
  }))));
};

/* harmony default export */ var CardProductExample_CardProductExample = (CardProductExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardProductExample/index.js


/***/ })

};;