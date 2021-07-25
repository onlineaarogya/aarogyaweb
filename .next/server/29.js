exports.ids = [29];
exports.modules = {

/***/ "pwrc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardJobExample_CardJobExample; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/views/Documentation/components/index.js + 10 modules
var components = __webpack_require__("VPqE");

// EXTERNAL MODULE: ./src/components/organisms/index.js + 44 modules
var organisms = __webpack_require__("41Hj");

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobExample/CardJobExample.js
var __jsx = external_react_default.a.createElement;




const importCodeString = `
import { CardJob } from 'components/organisms';
// or
import CardJob from 'components/organisms/CardJob';
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
  name: 'companyLogo',
  type: 'string',
  default: '',
  description: 'Company logo of the card'
}, {
  name: 'companyName',
  type: 'string',
  default: '',
  description: 'Company name of the card'
}, {
  name: 'jobDate',
  type: 'string',
  default: '',
  description: 'Job date of the card'
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
import { Box, colors, Grid } from '@material-ui/core';
import { CardJob } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJob
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
          <CardJob
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
          <CardJob
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
import { Box, colors, Grid } from '@material-ui/core';
import { CardJob } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJob
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
          <CardJob
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
          <CardJob
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
import { Box, colors, Grid } from '@material-ui/core';
import { CardJob } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardJob
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
          <CardJob
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
          <CardJob
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

const CardJobExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardJob",
    path: "src/components/organisms/CardJob/CardJob.js",
    description: "Component to display the job card"
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
    minWidth: "1000px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg"
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
    minWidth: "1000px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
    variant: "outlined"
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
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
    minWidth: "1000px"
  }, __jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Senior Developer",
    badgeColor: core_["colors"].red[500],
    badgeTitle: "tech",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "Web designer internship",
    badgeColor: core_["colors"].blue[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
    withShadow: true,
    liftUp: true
  })), __jsx(core_["Grid"], {
    item: true,
    xs: 4
  }, __jsx(organisms["e" /* CardJob */], {
    jobTitle: "UI/UX Designer",
    badgeColor: core_["colors"].green[500],
    badgeTitle: "web design",
    jobLocation: "Milan, Italy",
    jobType: "Full Time",
    jobDate: "2 days ago",
    companyName: "Slack",
    companyLogo: "https://assets.maccarianagency.com/the-front/logos/slack.svg",
    withShadow: true,
    liftUp: true
  }))))), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode3
  }))));
};

/* harmony default export */ var CardJobExample_CardJobExample = (CardJobExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardJobExample/index.js


/***/ })

};;