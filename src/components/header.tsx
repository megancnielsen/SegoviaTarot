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
            <Nav
                className={`${headerOpen ? 'is-visible' : ''}`}
                onMenuToggle={() => toggleHeader(!headerOpen)}
            />
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
    );
};

export default Sidebar;
