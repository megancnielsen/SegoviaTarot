import React from 'react';
import { Link } from 'gatsby';

interface INavbarProps {
    className: string;
    callback: () => void;
}

export default ({ className = '', onMenuToggle = () => {} }) => {
    return (
        <div className={`menu ${className}`}>
            {/* <div className=""> */}
            <ul className="inner links">
                <li>
                    <Link
                        onClick={e => {
                            onMenuToggle();
                        }}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={e => {
                            onMenuToggle();
                        }}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={e => {
                            onMenuToggle();
                        }}
                        to="/generic"
                    >
                        Generic Page
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={e => {
                            onMenuToggle();
                        }}
                        to="/elements"
                    >
                        Elements
                    </Link>
                </li>
            </ul>
        </div>
    );
};
