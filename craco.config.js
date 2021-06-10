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
          "@secondary-color": "#b2fef7",
        },
        babelPluginImportOptions: {
          libraryDirectory: "es",
        },
      },
    },
  ],
};
