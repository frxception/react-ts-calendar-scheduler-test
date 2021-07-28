const withTM = require('next-transpile-modules')([
  "@fullcalendar/core",
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  "@fullcalendar/timegrid",
  "@fullcalendar/interaction",
  "@fullcalendar/resource-timeline",
  "@fullcalendar/timeline",
]);
module.exports = withTM({
  // any other general next.js settings
  typescript: {
    ignoreBuildErrors: true,
  },
})


// const nextTranspileModules = require('next-transpile-modules')([
//     '@fullcalendar'
//   ]);
// module.exports = nextTranspileModules({})
// const withSass = require('@zeit/next-sass');
// module.exports = withSass();