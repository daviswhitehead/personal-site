import React from "react";
import { Image } from "native-base";
import headshot from "../public/images/headshot.png";

export default function Avatar() {
  return (
    <Image
      source={{ uri: headshot.src }}
      alt="A photo of Davis Whitehead."
      size={"150"}
      resizeMode="contain"
    />
  );
}
