import React from 'react';
import Layout from '../components/layout';
// import Image from 'gatsby-image'

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import aWoodenWindow from '../assets/images/a-wooden-window.jpg';
import lakeside from '../assets/images/lakeside.jpg';
import trees from '../assets/images/through-the-trees.jpg';

import config from '../../config/website';

const IndexPage = () => (
    <Layout fullMenu={false}>
        <section id="banner">
            <div className="inner">
                <div className="logo">
                    <span className="icon fa-diamond"></span>
                </div>
                <h2>{config.heading}</h2>
                <p>{config.subHeading}</p>
            </div>
        </section>
        <section id="wrapper">
            <section id="one" className="wrapper spotlight style1">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={aWoodenWindow} alt="" />
                    </a>
                    <div className="content">
                        <h2 className="major">Magna arcu feugiat</h2>
                        <p>
                            Juanita Segovia is an intuitive diviner and tarot
                            reader who does personal readings by live zoom
                            sessions & telephone. With Juanita’s intuitive
                            guidance you may discover information that will
                            provide you with clarity in making advantageous
                            decisions in your future.
                        </p>
                        <a href="/#" className="special">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
            <section id="two" className="wrapper alt spotlight style4">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={trees} alt="" />
                    </a>
                    <h2 className="major">Vitae phasellus</h2>
                    <p>
                        Cras mattis ante fermentum, malesuada neque vitae,
                        eleifend erat. Phasellus non pulvinar erat. Fusce
                        tincidunt, nisl eget mattis egestas, purus ipsum
                        consequat orci, sit amet lobortis lorem lacus in tellus.
                        Sed ac elementum arcu. Quisque placerat auctor laoreet.
                    </p>
                </div>
            </section>
            <section id="three" className="wrapper spotlight style3">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={lakeside} alt="" />
                    </a>
                    <div className="content">
                        <h2 className="major">Tempus adipiscing</h2>
                        <p>
                            Lorem ipsum dolor sit amet, etiam lorem adipiscing
                            elit. Cras turpis ante, nullam sit amet turpis non,
                            sollicitudin posuere urna. Mauris id tellus arcu.
                            Nunc vehicula id nulla dignissim dapibus. Nullam
                            ultrices, neque et faucibus viverra, ex nulla
                            cursus.
                        </p>
                        <a href="/#" className="special">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
        </section>
    </Layout>
);

export default IndexPage;
