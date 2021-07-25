exports.ids = [32];
exports.modules = {

/***/ "naat":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardPricingStandardExample_CardPricingStandardExample; });

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

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardPricingStandardExample/CardPricingStandardExample.js
var __jsx = external_react_default.a.createElement;





const importCodeString = `
import { CardPricingStandard } from 'components/organisms';
// or
import CardPricingStandard from 'components/organisms/CardPricingStandard';
`;
const dataProperties = [{
  name: 'cta',
  type: 'node',
  default: '',
  description: 'CTA button of the pricing card'
}, {
  name: 'priceComponent',
  type: 'node',
  default: '',
  description: 'The pricing component of the pricing card'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Title of the pricing card'
}, {
  name: 'disclaimer',
  type: 'string',
  default: '',
  description: 'Diclaimer of the pricing card'
}, {
  name: 'disclaimerProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the disclaimer Typography component'
}, {
  name: 'featureCheckComponent',
  type: 'node',
  default: '',
  description: 'The features check component of the pricing card'
}, {
  name: 'featureTitleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the feature title Typography component'
}, {
  name: 'features',
  type: 'array',
  default: '',
  description: 'Features array of the pricing card'
}, {
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'Subtitle of the pricing card'
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the subtitle Typography component'
}, {
  name: 'titleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the title Typography component'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, colors, Grid, Button, Typography } from '@material-ui/core';
import { CardPricingStandard } from 'components/organisms';
import { Icon } from 'components/atoms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, colors, Grid, Button, Typography } from '@material-ui/core';
import { CardPricingStandard } from 'components/organisms';
import { Icon } from 'components/atoms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, colors, Grid, Button, Typography } from '@material-ui/core';
import { CardPricingStandard } from 'components/organisms';
import { Icon } from 'components/atoms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardPricingStandard
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={(
                <div>
                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                    <Typography component="span" variant="subtitle1">/ MO</Typography>
                </div>
            )}
            features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
            disclaimer="Fully featured 30-day free trial"
            withShadow
            liftUp
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const CardPricingStandardExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardPricingStandard",
    path: "src/components/organisms/CardPricingStandard/CardPricingStandard.js",
    description: "Component to display the pricing card"
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
    overflow: "auto"
  }, __jsx(core_["Box"], {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "900px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "contained",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial"
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode1
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Outlined",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "auto"
  }, __jsx(core_["Box"], {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "900px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "contained",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    variant: "outlined"
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode2
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Custom Shadow and LiftUp Effect",
    gutterBottom: true
  }, __jsx(external_react_default.a.Fragment, null, __jsx(core_["Box"], {
    marginBottom: 2,
    padding: 2,
    border: "1px solid #ccc",
    borderRadius: "4px",
    overflow: "auto"
  }, __jsx(core_["Box"], {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "900px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "contained",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["i" /* CardPricingStandard */], {
    title: "Extended License",
    subtitle: "A pay-once license, just for you",
    priceComponent: __jsx("div", null, __jsx(core_["Typography"], {
      variant: "h3",
      component: "span",
      style: {
        fontWeight: 900
      }
    }, "$79"), __jsx(core_["Typography"], {
      component: "span",
      variant: "subtitle1"
    }, "/ MO")),
    features: ['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included'],
    featureCheckComponent: __jsx(atoms["b" /* Icon */], {
      fontIconClass: "far fa-check-circle",
      fontIconColor: core_["colors"].indigo[500]
    }),
    cta: __jsx(core_["Button"], {
      color: "primary",
      variant: "outlined",
      fullWidth: true,
      size: "large"
    }, "Subscribe now"),
    disclaimer: "Fully featured 30-day free trial",
    withShadow: true,
    liftUp: true
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))));
};

/* harmony default export */ var CardPricingStandardExample_CardPricingStandardExample = (CardPricingStandardExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardPricingStandardExample/index.js


/***/ })

};;