import React from "react";
import { default as NativebaseDocument } from "@native-base/next-adapter/document";

// Icon Font Library Imports
import MaterialIconsFont from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";
import EntypoFontFaceCSS from "@native-base/icons/FontsCSS/EntypoFontFaceCSS";
const fontsCSS = `${MaterialIconsFont} ${EntypoFontFaceCSS}`;

export default class Document extends NativebaseDocument {
  static async getInitialProps(ctx) {
    const props = await super.getInitialProps(ctx);
    const styles = [
      <style
        key={"fontsCSS"}
        dangerouslySetInnerHTML={{ __html: fontsCSS }}
      ></style>,
      // below is required based on.... https://docs.nativebase.io/install-next#h3-run-the-hello-world-example and https://necolas.github.io/react-native-web/docs/setup/#root-element
      <style key={"rootElementStyles"}>
        {`
          /* These styles make the body full-height */
          html, body { height: 100%; }
          /* These styles disable body scrolling if you are using <ScrollView> */
          body { overflow: hidden; }
          /* These styles make the root element full-height */
          #root { display:flex; height:100%; }
        `}
      </style>,
      ...props.styles,
    ];
    return { ...props, styles: React.Children.toArray(styles) };
  }
}
