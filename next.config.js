const { withNativebase } = require("@native-base/next-adapter");
// const withFonts = require("next-fonts");
// const { withExpo } = require("@expo/next-adapter");
const path = require("path");

// module.exports = withNativebase([withExpo], {
module.exports = withNativebase({
  dependencies: [
    "@native-base/icons",
    // "@expo/next-adapter",
    "react-native-vector-icons",
    "react-native-vector-icons-for-web",
  ],
  nextConfig: {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "@expo/vector-icons": "react-native-vector-icons",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
  env: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
  },
});
