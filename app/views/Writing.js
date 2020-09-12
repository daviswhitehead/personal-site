import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

const Writing = () => {
  return (
    <Main>
      <Helmet title="Writing" />
      <article className="post" id="writing">
        <header>
          <div className="title">
            <h2>
              <Link to="/writing">Writing</Link>
            </h2>
            <p>Read my mind (coming soon)</p>
          </div>
        </header>
      </article>
    </Main>
  );
};

export default Writing;
