import React from 'react';
import { Link } from 'gatsby';

export default () => {
    return (
        <nav id="menu" className="menu">
            <ul className="links">
                <li>
                    <Link onClick={e => {}} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={e => {}} to="/generic">
                        Generic Page
                    </Link>
                </li>
                <li>
                    <Link onClick={e => {}} to="/elements">
                        Elements
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
