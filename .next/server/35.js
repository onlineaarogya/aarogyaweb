exports.ids = [35];
exports.modules = {

/***/ "sQ8r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ CardReviewExample_CardReviewExample; });

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

// CONCATENATED MODULE: ./src/views/Documentation/examples/CardReviewExample/CardReviewExample.js
var __jsx = external_react_default.a.createElement;





const importCodeString = `
import { CardReview } from 'components/organisms';
// or
import CardReview from 'components/organisms/CardReview';
`;
const dataProperties = [{
  name: 'authorName',
  type: 'string',
  default: '',
  description: 'Reviewer name to show inside the review card'
}, {
  name: 'authorPhoto',
  type: 'object',
  default: '',
  description: 'Reviewer photo to show inside the review card.Should be an object with src and srcSet properties'
}, {
  name: 'icon',
  type: 'node',
  default: '',
  description: 'Icon to show inside the review card'
}, {
  name: 'text',
  type: 'string',
  default: '',
  description: 'Review text to show inside the review card'
}, {
  name: 'align',
  type: 'enum',
  default: 'center',
  description: 'Alignment of the content. One of: left, right, center'
}, {
  name: 'authorTitle',
  type: 'string',
  default: '',
  description: 'Reviewer title to show inside the review card'
}, {
  name: 'listItemPrimaryTypographyProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the list item primary text Typography component'
}, {
  name: 'listItemSecondaryTypographyProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the list item secondary text Typography component'
}, {
  name: 'textProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the text Typography component'
}, {
  name: 'textVariant',
  type: 'string',
  default: 'h6',
  description: 'Review text variant'
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes'
}];
const exampleCode1 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardReview
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg', srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x' }}
      />
    </Box>
  );
}
`;
const exampleCode2 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardReview
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg', srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x' }}
      />
    </Box>
  );
}
`;
const exampleCode3 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg', srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x' }}
      />
    </Box>
  );
}
`;
const exampleCode4 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardReview
        noBorder
        noShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg', srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x' }}
      />
    </Box>
  );
}
`;
const exampleCode5 = `
import React from 'react';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <CardReview
        variant="outlined"
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg', srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x' }}
      />
    </Box>
  );
}
`;

const CardReviewExample = (_ref) => {
  let rest = Object.assign({}, _ref);
  return __jsx("div", rest, __jsx(components["e" /* SectionBox */], {
    title: "Description",
    gutterBottom: true
  }, __jsx(components["b" /* Headline */], {
    title: "CardReview",
    path: "src/components/organisms/CardReview/CardReview.js",
    description: "Component to display the review card"
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
  }, __jsx(organisms["l" /* CardReview */], {
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-quote-right",
      size: "medium",
      color: core_["colors"].indigo
    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Veronica Adams",
    authorTitle: "Growth Marketer, Crealytics",
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    }
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
  }, __jsx(organisms["l" /* CardReview */], {
    withShadow: true,
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-quote-right",
      size: "medium",
      color: core_["colors"].indigo
    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Veronica Adams",
    authorTitle: "Growth Marketer, Crealytics",
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    }
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
  }, __jsx(organisms["l" /* CardReview */], {
    liftUp: true,
    withShadow: true,
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-quote-right",
      size: "medium",
      color: core_["colors"].indigo
    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Veronica Adams",
    authorTitle: "Growth Marketer, Crealytics",
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    }
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
  }, __jsx(organisms["l" /* CardReview */], {
    noBorder: true,
    noShadow: true,
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-quote-right",
      size: "medium",
      color: core_["colors"].indigo
    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Veronica Adams",
    authorTitle: "Growth Marketer, Crealytics",
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    }
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
  }, __jsx(organisms["l" /* CardReview */], {
    variant: "outlined",
    icon: __jsx(molecules["c" /* IconAlternate */], {
      fontIconClass: "fas fa-quote-right",
      size: "medium",
      color: core_["colors"].indigo
    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Veronica Adams",
    authorTitle: "Growth Marketer, Crealytics",
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x'
    }
  })), __jsx(components["a" /* CodeHighlighter */], {
    code: exampleCode5
  }))));
};

/* harmony default export */ var CardReviewExample_CardReviewExample = (CardReviewExample);
// CONCATENATED MODULE: ./src/views/Documentation/examples/CardReviewExample/index.js


/***/ })

};;