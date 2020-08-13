import React, { useState } from 'react';
import Nav from './nav';
import { Link } from 'gatsby';

interface ISidebar extends IProps {
    fullMenu: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ fullMenu }) => {
    const [headerOpen, toggleHeader] = useState(false);
    return (
        <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
            <h1>
                <Link to="/">Solid State</Link>
            </h1>

            <nav>
                <div className={`${headerOpen ? 'is-menu-visible' : ''}`}>
                    <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
                </div>
                <a
                    href="#menu"
                    onClick={e => {
                        e.preventDefault();
                        toggleHeader(!headerOpen);
                    }}
                    className="menuToggle"
                >
                    <span>Menuss</span>
                </a>
            </nav>
        </header>
    );
};

export default Sidebar;
