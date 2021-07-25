exports.ids = [27];
exports.modules = {

/***/ "uut5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardCategoryLinkExample_CardCategoryLinkExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardCategoryLinkExample/CardCategoryLinkExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CardCategoryLink } from 'components/organisms';
// or
import CardCategoryLink from 'components/organisms/CardCategoryLink';
`;
const dataProperties = [{
  name: 'color',
  type: 'enum',
  default: '',
  description: 'Promo icon color to show inside the card. One of: colors.red, colors.pink, colors.purple, colors.deepPurple, colors.indigo, colors.blue, colors.lightBlue, colors.cyan, colors.teal, colors.green, colors.lightGreen, colors.lime, colors.yellow, colors.amber, colors.orange, colors.deepOrange, colors.brown, colors.grey, colors.blueGrey'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Promo title to show inside the card'
}, {
  name: 'align',
  type: 'enum',
  default: 'left',
  description: 'The content alignment. One of: left, right, center'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}, {
  name: 'fontIconClass',
  type: 'string',
  default: '',
  description: 'Promo font icon class name to show inside the card'
}, {
  name: 'href',
  type: 'string',
  default: '#',
  description: 'Promo description to show inside the card'
}, {
  name: 'iconAlternateProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the IconAlternate component'
}, {
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'Promo subtitle to show inside the card'
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
}];
const exampleCode1 = `
import React from 'react';
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategoryLink } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Web Design"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Business Analytics"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Photography"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategoryLink } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Web Design"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Business Analytics"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Photography"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
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
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategoryLink } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Web Design"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Business Analytics"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Photography"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
            withShadow
            liftUp
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategoryLink } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Web Design"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Business Analytics"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategoryLink
            title="Photography"
            subtitle="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const CardCategoryLinkExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardCategoryLink",
    path: "src/components/organisms/CardCategoryLink/CardCategoryLink.js",
    description: "Component to display the category link card"
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
    minWidth: "700px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Web Design",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-pen-nib",
    color: core_["colors"].pink
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Business Analytics",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-book-open",
    color: core_["colors"].purple
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Photography",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-camera-retro",
    color: core_["colors"].blue
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
    minWidth: "700px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Web Design",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-pen-nib",
    color: core_["colors"].pink,
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Business Analytics",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-book-open",
    color: core_["colors"].purple,
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Photography",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-camera-retro",
    color: core_["colors"].blue,
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
    minWidth: "700px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Web Design",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-pen-nib",
    color: core_["colors"].pink,
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Business Analytics",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-book-open",
    color: core_["colors"].purple,
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Photography",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-camera-retro",
    color: core_["colors"].blue,
    withShadow: true,
    liftUp: true
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))), __jsx(components["e" /* SectionBox */], {
    title: "Left Aligned",
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
    minWidth: "700px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Web Design",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-pen-nib",
    color: core_["colors"].pink,
    withShadow: true,
    liftUp: true,
    align: "center"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Business Analytics",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-book-open",
    color: core_["colors"].purple,
    withShadow: true,
    liftUp: true,
    align: "center"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["d" /* CardCategoryLink */], {
    title: "Photography",
    subtitle: "Choose from over 1000+ online video courses.",
    fontIconClass: "fas fa-camera-retro",
    color: core_["colors"].blue,
    withShadow: true,
    liftUp: true,
    align: "center"
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))));
};

/* harmony default export */ var CardCategoryLinkExample_CardCategoryLinkExample = (CardCategoryLinkExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardCategoryLinkExample/index.js


/***/ })

};;