exports.ids = [31];
exports.modules = {

/***/ "dYdQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardJobTagExample_CardJobTagExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobTagExample/CardJobTagExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CardJobTag } from 'components/organisms';
// or
import CardJobTag from 'components/organisms/CardJobTag';
`;
const dataProperties = [{
  name: 'badgeColor',
  type: 'string',
  default: '',
  description: 'Badge color of the job card'
}, {
  name: 'badgeTitle',
  type: 'string',
  default: '',
  description: 'Badge title of the job card'
}, {
  name: 'jobLocation',
  type: 'string',
  default: '',
  description: 'Job location of the card'
}, {
  name: 'jobTitle',
  type: 'string',
  default: '',
  description: 'Job title of the card'
}, {
  name: 'jobType',
  type: 'string',
  default: '',
  description: 'Job type of the card'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, Grid, colors } from '@material-ui/core';
import { CardJobTag } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Senior Developer"
            badgeColor={colors.red[500]}
            badgeTitle="tech"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Web designer internship"
            badgeColor={colors.blue[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="UI/UX Designer"
            badgeColor={colors.green[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, Grid, colors } from '@material-ui/core';
import { CardJobTag } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Senior Developer"
            badgeColor={colors.red[500]}
            badgeTitle="tech"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Web designer internship"
            badgeColor={colors.blue[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="UI/UX Designer"
            badgeColor={colors.green[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
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
import { Box, Grid, colors } from '@material-ui/core';
import { CardJobTag } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Senior Developer"
            badgeColor={colors.red[500]}
            badgeTitle="tech"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="Web designer internship"
            badgeColor={colors.blue[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardJobTag
            jobTitle="UI/UX Designer"
            badgeColor={colors.green[500]}
            badgeTitle="web design"
            jobLocation="Milan, Italy"
            jobType="Full Time"
            jobDate="2 days ago"
            companyName="Slack"
            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"
            withShadow
            liftUp
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const CardJobTagExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardJobTag",
    path: "src/components/organisms/CardJobMinimal/CardJobMinimal.js",
    description: "Component to display the job minimal card"
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
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time"
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
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
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
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["h" /* CardJobTag */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    withShadow: true,
    liftUp: true
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))));
};

/* harmony default export */ var CardJobTagExample_CardJobTagExample = (CardJobTagExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobTagExample/index.js


/***/ })

};;