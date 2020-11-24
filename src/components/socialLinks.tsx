import React from 'react';
import config from '../../config/website';

const SocialLinks = () => {
    const { socialLinks } = config;

    return (
        <React.Fragment>
            {socialLinks.map((social: { icon: any; url: any; }) => {
                const { icon, url } = social;
                return (
                    <li className={`${icon}`} key={url}>
                        <a href={url} target="_blank">{url}</a>
                    </li>
                );
            })}
        </React.Fragment>
    );
};
export default SocialLinks;
