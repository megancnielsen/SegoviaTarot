import React from 'react';
import ContactForm from './contact';

const Footer = () => {
    return (
        <section id="footer">
            <div className="inner">
                <h2 className="major">Get in touch</h2>
                <p>
                    Questions? Send me a message!
                </p>
                <ContactForm />
                <ul className="copyright">
                    <li>&copy; Solid State. All rights reserved.</li>
                    <li>
                        Design: <a href="http://html5up.net">HTML5 UP</a>
                    </li>
                    <li>Artwork by Erika McGinnis at <a href="http://www.erikamcginnisart.com/new-cover-page">Under the Cobalt Sky</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
