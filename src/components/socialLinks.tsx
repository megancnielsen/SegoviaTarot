import React from 'react';
import config from '../../siteData';

const SocialLinks = () => {
    const { socialLinks } = config;

    return (
        <React.Fragment>
            {socialLinks.map(social => {
                const { icon, url } = social;
                return (
                    <li className={`${icon}`} key={url}>
                        <a href={url}>{url}</a>
                    </li>
                );
            })}
        </React.Fragment>
    );
};
export default SocialLinks;
