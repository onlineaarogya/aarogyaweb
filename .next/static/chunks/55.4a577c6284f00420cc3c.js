(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{XyQ1:function(e,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return d}));var r=n("HALo"),t=n("q1tI"),i=n.n(t),a=n("hlFM"),s=n("Z3vd"),c=n("VPqE"),p=n("41Hj"),u=n("Jc4N"),l=i.a.createElement,m=[{name:"backgroundImage",type:"string",default:"",description:"The background image of the hero"},{name:"children",type:"node",default:"",description:"The main content"},{name:"backgroundPosition",type:"string",default:"center",description:"The background position of the hero"},{name:"backgroundSize",type:"string",default:"cover",description:"The background size of the hero"},{name:"className",type:"string",default:"",description:"External classes"}],d=function(e){var o=Object(r.a)({},e);return l("div",o,l(c.e,{title:"Description",gutterBottom:!0},l(c.b,{title:"HeroSimpleBackground",path:"src/components/organisms/HeroSimpleBackground/HeroSimpleBackground.js",description:"Component to display the background heros"})),l(c.e,{title:"Import",gutterBottom:!0},l(c.a,{code:"\nimport { HeroSimpleBackground } from 'components/organisms';\n// or\nimport HeroSimpleBackground from 'components/organisms/HeroSimpleBackground';\n"})),l(c.e,{title:"Props & Methods",gutterBottom:!0},l(c.d,{dataProperties:m})),l(c.e,{title:"Basic Example",gutterBottom:!0},l(i.a.Fragment,null,l(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},l(p.q,{backgroundImage:"https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg"},l(p.t,{narrow:!0},l(u.e,{title:"Supercharge Your Web Product's UI/UX Design",titleVariant:"h2",subtitle:"Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",ctaGroup:[l(s.a,{color:"primary",variant:"contained",size:"large"},"Try for free"),l(s.a,{color:"primary",variant:"outlined",size:"large"},"See pricings")]})))),l(c.a,{code:'\nimport React from \'react\';\nimport { Box, Button } from \'@material-ui/core\';\nimport { HeroSimpleBackground } from \'components/organisms\';\nimport { SectionHeader } from \'components/molecules\';\nimport { Section } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">\n        <Section narrow>\n          <SectionHeader\n            title="Supercharge Your Web Product\'s UI/UX Design"\n            titleVariant="h2"\n            subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."\n            ctaGroup={[(\n              <Button color="primary" variant="contained" size="large">Try for free</Button>\n            ), (\n              <Button color="primary" variant="outlined" size="large">See pricings</Button>\n            )]}\n          />\n        </Section>\n      </HeroSimpleBackground>\n    </Box>\n  );\n}\n'}))))}}}]);