import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";
import ReactMarkdown from "react-markdown";
import about from "../data/about.md";
import Cell from "../components/Projects/Cell";
import data from "../data/projects";

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main>
    <article className="post" id="index/about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">ABOUT</Link>
          </h2>
          <p>Get to know me</p>
        </div>
      </header>
      <ReactMarkdown
        source={about.split("<br><br>")[0]}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            More
          </Link>
        </li>
      </ul>
    </article>
    <article className="post" id="index/projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>Check out my work</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
      <ul className="actions">
        <li>
          <Link to="/projects" className="button">
            More
          </Link>
        </li>
      </ul>
    </article>
    <article className="post" id="index/writing">
      <header>
        <div className="title">
          <h2>
            <Link to="/writing">WRITING</Link>
          </h2>
          <p>Read my mind (coming soon)</p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
