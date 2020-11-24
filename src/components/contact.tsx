import React from 'react';
import config from '../../config/website';
import SocialLinks from './socialLinks';

const ContactForm = () => {
    const { address, phone } = config;

    return (
        <React.Fragment>
            <form method="post" action="mailto:segoviatarot@gmail.com">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                        ></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" />
                    </li>
                </ul>
            </form>
            <ul className="contact">
                <li className="fa-home">{address}</li>
                <li className="fa-phone">{phone}</li>
                <SocialLinks />
            </ul>
        </React.Fragment>
    );
};

export default ContactForm;