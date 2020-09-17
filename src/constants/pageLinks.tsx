import React from 'react';
import { Link } from 'gatsby';
import routes from './routes';

const PageLinks = () => {
    const { homepage, calendar } = routes;
    return (
        <ul className="links">
            <li>
                <Link onClick={e => {}} to={homepage}>
                    Home
                </Link>
            </li>
            <li>
                <Link onClick={e => {}} to={calendar}>
                    Schedule an Appointment
                </Link>
            </li>
        </ul>
    );
};

export default PageLinks;
