import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import Main from "../layouts/Main";
import markdown from "../data/about.md";

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main fullPage>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About</Link>
          </h2>
          <p>Get to know me</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
