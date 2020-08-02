const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#61dafb',
                "@text-color": "#61dafb",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};