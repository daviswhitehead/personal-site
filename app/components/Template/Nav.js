import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const Nav = () => (
  <section id='sidebar'>
    <section id='intro'>
      <Link to='/' className='logo'>
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt='' />
      </Link>
      <header>
        <h2>Davis Whitehead</h2>
        <p>
          <a href='mailto:whitehead.davis@gmail.com'>
            whitehead.davis@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className='blurb'>
      <h2>About</h2>
      <p>
        Hi, I&apos;m Davis. I like building things that solve meaningful
        problems. I&apos;m currently a Product Manager working at{' '}
        <a href='https://www.whoop.com/'>WHOOP</a>.
      </p>
      <ul className='actions'>
        <li>
          <Link to='/about' className='button'>
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id='footer'>
      <ul className='icons'>
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className='copyright'>
        &copy; Davis Whitehead <Link to='/'>daviswhitehead.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
