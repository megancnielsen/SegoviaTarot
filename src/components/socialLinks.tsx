import React from 'react';
import config from '../../config/website';

const SocialLinks = () => {
    const { socialLinks } = config;

    return (
        <React.Fragment>
            {socialLinks.map((social: { icon: any; url: any; urlName: any; }) => {
                const { icon, url, urlName } = social;
                return (
                    <li className={`${icon}`} key={url}>
                        <a href={url} target="_blank">{urlName}</a>
                    </li>
                );
            })}
        </React.Fragment>
    );
};
export default SocialLinks;