import * as React from 'react';
import '../sass/header.scss';
import '../sass/layout.scss';

export type HeaderLink = {
  name: string;
  url: string;
};

const links: HeaderLink[] = [
  {
    name: 'home',
    url: '/',
  },
  {
    name: 'series',
    url: 'https://devlog.bencuan.me',
  },
];

type props = {
  currPage: string;
  customPages?: HeaderLink[];
};

const Header = ({ currPage, customPages }: props) => {
  const [mobileNavVisible, setMobileNavVisible] = React.useState(false);
  // const [moreMenuVisible, setMoreMenuVisible] = React.useState<undefined | boolean>(undefined);
  const mobileClick = () => {
    setMobileNavVisible(!mobileNavVisible);
  };
  const allLinks = customPages && !mobileNavVisible ? links.concat(customPages) : links;

  return (
    <header>
      <div className={`nav-container ${mobileNavVisible ? 'mobile-visible' : 'mobile-hidden'}`}>
        <div className="nav-links">
          {allLinks.map((link, i, row) => (
            <span className="nav-link" key={link.name}>
              <a className={currPage === link.name ? 'link nav-link nav-current' : 'link nav-link'} href={link.url}>
                {link.name}
              </a>
              {i + 1 !== row.length && !mobileNavVisible && <span> | </span>}
            </span>
          ))}
        </div>
      </div>
      <div className="nav-container-mobile">
        <button
          className={`hamburger hamburger--vortex ${mobileNavVisible ? 'is-active' : ''}`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={mobileNavVisible}
          onClick={mobileClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
