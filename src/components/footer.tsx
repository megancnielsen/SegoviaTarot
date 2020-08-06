import React from 'react';
import ContactForm from './contact';

export default function Footer() {
    return (
        <section id="footer">
            <div className="inner">
                <h2 className="major">Get in touch</h2>
                <p>
                    Cras mattis ante fermentum, malesuada neque vitae, eleifend
                    erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl
                    eget mattis egestas, purus ipsum consequat orci, sit amet
                    lobortis lorem lacus in tellus. Sed ac elementum arcu.
                    Quisque placerat auctor laoreet.
                </p>
                <ContactForm />
                <ul className="copyright">
                    <li>&copy; Solid State. All rights reserved.</li>
                    <li>
                        Design: <a href="http://html5up.net">HTML5 UP</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
