import React from "react";
import { Stack, useBreakpointValue } from "native-base";
import PromotedWriting from "./PromotedWriting";
import PromotedWriting2 from "./PromotedWriting2";
import PromotedCollaborate from "./PromotedCollaborate";
import PromotedProduct from "./PromotedProduct";

export default function Promoted() {
  return (
    <Stack
      direction="column"
      overflow="hidden"
      space={useBreakpointValue({
        base: "5",
        md: "10",
      })}
      py={useBreakpointValue({
        base: "5",
        md: "10",
      })}
    >
      <PromotedProduct />
      <PromotedWriting />
      <PromotedWriting2 />
      <PromotedCollaborate />
    </Stack>
  );
}
