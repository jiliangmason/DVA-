const path = require('path');
const svgSpriteDirs = [
  path.resolve(__dirname, 'src/icon/'),
];

export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  svgSpriteLoaderDirs: svgSpriteDirs,
  "proxy": {
    "/api": {
      "target": "http://m.maizuo.com/v4/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
