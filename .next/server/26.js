exports.ids = [26];
exports.modules = {

/***/ "jfb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardCategoryExample_CardCategoryExample; });

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

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardCategoryExample/CardCategoryExample.js
var __jsx = external_react_default.a.createElement;





const importCodeString = `
import { CardCategory } from 'components/organisms';
// or
import CardCategory from 'components/organisms/CardCategory';
`;
const dataProperties = [{
  name: 'icon',
  type: 'node',
  default: '',
  description: 'Icon to show inside the category card'
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Category title to show inside the category card'
}, {
  name: 'align',
  type: 'enum',
  default: '',
  description: 'The content alignment. One of: left, right, center'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, colors, Grid } from '@material-ui/core';
import { CardCategory } from 'components/organisms';
import { IconAlternate } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategory
            title="Web Design"
            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Business Analytics"
            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Photography"
            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
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
import { CardCategory } from 'components/organisms';
import { IconAlternate } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategory
            title="Web Design"
            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Business Analytics"
            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Photography"
            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
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
import { CardCategory } from 'components/organisms';
import { IconAlternate } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategory
            title="Web Design"
            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Business Analytics"
            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Photography"
            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
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
import { CardCategory } from 'components/organisms';
import { IconAlternate } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardCategory
            title="Web Design"
            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            withShadow
            liftUp
            align="left"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Business Analytics"
            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            withShadow
            liftUp
            align="left"
          />
        </Grid>
        <Grid item xs={4}>
          <CardCategory
            title="Photography"
            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
            withShadow
            liftUp
            align="left"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const CardCategoryExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardCategory",
    path: "src/components/organisms/CardCategory/CardCategory.js",
    description: "Component to display the category card"
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
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Web Design",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-pen-nib",
      size: "medium",
      color: core_["colors"].pink
    })
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Business Analytics",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-book-open",
      size: "medium",
      color: core_["colors"].purple
    })
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Photography",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-camera-retro",
      size: "medium",
      color: core_["colors"].blue
    })
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
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Web Design",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-pen-nib",
      size: "medium",
      color: core_["colors"].pink
    }),
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Business Analytics",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-book-open",
      size: "medium",
      color: core_["colors"].purple
    }),
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Photography",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-camera-retro",
      size: "medium",
      color: core_["colors"].blue
    }),
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
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Web Design",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-pen-nib",
      size: "medium",
      color: core_["colors"].pink
    }),
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Business Analytics",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-book-open",
      size: "medium",
      color: core_["colors"].purple
    }),
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Photography",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-camera-retro",
      size: "medium",
      color: core_["colors"].blue
    }),
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
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Web Design",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-pen-nib",
      size: "medium",
      color: core_["colors"].pink
    }),
    withShadow: true,
    liftUp: true,
    align: "left"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Business Analytics",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-book-open",
      size: "medium",
      color: core_["colors"].purple
    }),
    withShadow: true,
    liftUp: true,
    align: "left"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["c" /* CardCategory */], {
    title: "Photography",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-camera-retro",
      size: "medium",
      color: core_["colors"].blue
    }),
    withShadow: true,
    liftUp: true,
    align: "left"
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode4
  }))));
};

/* harmony default export */ var CardCategoryExample_CardCategoryExample = (CardCategoryExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardCategoryExample/index.js


/***/ })

};;