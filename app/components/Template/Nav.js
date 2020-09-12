import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Davis Whitehead</h2>
      </header>
      <p>
        Hi, I&apos;m Davis. I'm a product maker intent on building things that
        solve meaningful problems. I currently work as Product Manager at{" "}
        <a href="https://www.whoop.com/">WHOOP</a> where I'm focused on leveling
        up our customer support experience. In my free time, I'm most likely...
        exercising, cooking, playing a game, reading, or dreaming about a new
        product concept.
      </p>
      <p className="icons-intro">Follow me or get in touch!</p>
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Davis Whitehead <Link to="/">daviswhitehead.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
