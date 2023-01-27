// import React from "react";
// import { default as NativebaseDocument } from "@native-base/next-adapter/document";

// // Icon Font Library Imports
// import MaterialIconsFont from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";
// import EntypoFontFaceCSS from "@native-base/icons/FontsCSS/EntypoFontFaceCSS";
// const fontsCSS = `${MaterialIconsFont} ${EntypoFontFaceCSS}`;

// export default class Document extends NativebaseDocument {
//   static async getInitialProps(ctx) {
//     const props = await NativebaseDocument.getInitialProps(ctx);
//     const styles = [
//       <style
//         key={"fontsCSS"}
//         dangerouslySetInnerHTML={{ __html: fontsCSS }}
//       ></style>,
//       ...props.styles,
//     ];
//     return { ...props, styles: React.Children.toArray(styles) };
//   }
// }

// https://github.com/GeekyAnts/native-base-icons
import { default as NativebaseDocument } from "@native-base/next-adapter/document";
import fontsCSS from "@native-base/icons/FontsCSS";
// import { AppRegistry } from "react-native";
// import { Main } from "next/document";
import * as React from "react";

// import AntDesignFontFaceCSS from "@native-base/icons/FontsCSS/AntDesignFontFaceCSS";
// import MaterialIconsFontFaceCSS from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";

// const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;
class Document extends NativebaseDocument {
  //
}

async function getInitialProps({ renderPage }) {
  const res = await NativebaseDocument.getInitialProps({ renderPage });
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
    ...res.styles,
  ];
  return { ...res, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;
