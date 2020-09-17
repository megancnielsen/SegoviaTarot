import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import config from '../../siteData';

interface INavbarProps {
    items?: NavLink[];
    header?: JSX.Element;
}

type NavLink = {
    url: string;
    name: string;
};

const links: NavLink[] = [
    {
        url: '/',
        name: 'Home',
    },
];
const scrollLnks: NavLink[] = [
    {
        url: '/',
        name: 'Testing',
    },
    {
        url: '/',
        name: 'This might be cool',
    },
];

const Navbar = ({ items, header }: INavbarProps) => {
    return (
        <nav id="menu" className="menu">
            <ul className="links">
                {items &&
                    items.map(({ url, name }, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={url}>{name}</Link>
                            </li>
                        );
                    })}
                {header && header}
            </ul>
        </nav>
    );
};

const header = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div className="logo">
                <span className="icon fa-diamond"></span>
            </div>
            <h2>{config.heading}</h2>
            <p>{config.subHeading}</p>
        </div>
    );
};

export default (props: IProps) => {
    const ref: React.MutableRefObject<HTMLHeadElement | null> = useRef(null);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current) {
                const headerPosition = ref.current.getBoundingClientRect().top;
                const atTop = window.scrollY;

                headerPosition === atTop ? setIsAtTop(true) : setIsAtTop(false);
            }
        });
    }, []);

    const siteHeader = () => {
        return <h1>Segovia Tarot</h1>;
    };

    return (
        <header
            id="header"
            className={`header ${isAtTop ? 'is-at-top' : ''}`}
            ref={ref}
        >
            {isAtTop ? <h1>Segovia Tarot</h1> : <h1>Contact Now!</h1>}
            {isAtTop ? <Navbar items={links} /> : <Navbar header={header()} />}
        </header>
    );
};
