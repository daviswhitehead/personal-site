import React from "react";
import { Box, Text } from "native-base";
import PageLayout from "../components/PageLayout";
import Head from "next/head";
import routes from "../lib/routes";
import { NotionAPI } from "notion-client";
import { GetStaticProps } from "next";

// you can optionally pass an authToken to access private notion resources
const api = new NotionAPI();

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps");

  // fetch a page's content, including all async blocks, collection queries, and signed urls
  const page = await api.getPage("5d0365ba72cb450e88fcf8a5df7a1cce");
  // const page = await api.getPage("067dd719-a912-471e-a9a3-ac10710e7fdf");
  console.log("page", page);

  // fetch the data for a specific collection instance
  // const collectionId = "2d8aec23-8281-4a94-9090-caaf823dd21a";
  // const collectionViewId = "ab639a5a-853e-45e1-9ef7-133b486c0acf";
  // const collectionData = await api.getCollectionData(
  //   collectionId,
  //   collectionViewId
  // );

  return {
    props: {
      page,
    },
  };
};

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>{routes.WRITING.title} | daviswhitehead.com</title>
        <meta name="description" content="Writing by Davis Whitehead." />
      </Head>
      <PageLayout>
        <Box justifyContent="center" alignItems="center" h="100">
          <Text>COMING SOON</Text>
        </Box>
      </PageLayout>
    </>
  );
}

// import { useNotionPage } from "react-notion-x";
// import { GetStaticProps } from "next";

// interface BlogPost {
//   title: string;
//   date: Date;
//   author: string;
//   content: string;
// }

// interface BlogPageProps {
//   blogPost: BlogPost;
// }

// const BlogPage: React.FC<BlogPageProps> = ({ blogPost }) => {
//   return (
//     <div>
//       <h1>{blogPost.title}</h1>
//       <p>
//         Published on {blogPost.date.toLocaleDateString()} by {blogPost.author}
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const { blockMap } = await useNotionPage(
//     "https://www.notion.so/your-database-url"
//   );

//   const blogPost: BlogPost = {
//     title:
//       blockMap[Object.keys(blockMap)[0]].value.properties.title[0][0]
//         .plain_text,
//     date: new Date(
//       blockMap[Object.keys(blockMap)[0]].value.properties.Date.date.start
//     ),
//     author:
//       blockMap[Object.keys(blockMap)[0]].value.properties.Author.title[0]
//         .plain_text,
//     content: blockMap[Object.keys(blockMap)[0]].value.content,
//   };

//   return {
//     props: {
//       blogPost,
//     },
//   };
// };

// export default BlogPage;
