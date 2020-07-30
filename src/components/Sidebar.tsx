import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';

interface ISidebar extends IProps {
  fullMenu: any;
}

const Sidebar: React.FC<ISidebar> = ({ fullMenu }) => {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/">Solid State</Link>
        </h1>

        <nav>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
};

export default Sidebar;
