const CracoAntDesignPlugin = require("craco-antd");
//const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]___[hash:base64:5]",
          },
        },
        customizeTheme: {
          "@primary-color": "#263238",
          "@secondary-color": "#80cbc4",
        },
        babelPluginImportOptions: {
          libraryDirectory: "es",
        },
      },
    },
  ],
};
