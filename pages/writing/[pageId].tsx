import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "../../components/NotionPage";
import { rootNotionPageId } from "../../lib/notionConfig";
import notion from "../../lib/notion";

// export const getStaticProps = async (context) => {
export const getStaticProps = async () => {
  const pageId = "5d0365ba72cb450e88fcf8a5df7a1cce";
  //   const pageId = (context.params.pageId as string) || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
