import React from "react";
import { Image, IImageProps } from "native-base";
import headshot from "../public/images/headshot.png";

// interface Props extends IImageProps {
// }

export default function Avatar(props: IImageProps) {
  return (
    <Image
      source={{ uri: headshot.src }}
      alt="A photo of Davis Whitehead."
      size={"150"}
      resizeMode="contain"
      {...props}
    />
  );
}
