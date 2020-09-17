import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';
import Footer from './footer';
import Header from './header';
import ScrollToTopButton from './scrollToTop';

interface ILayoutProps {
    children: React.ReactNode;
    fullMenu: boolean;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    const [isPreloaded, setIsPreloaded] = useState<boolean>(true);
    const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);
    const [isAtTop, setIsAtTop] = useState<string>('');
    const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const { children } = props;

    useEffect(() => {
        // sets timeoutId when component mounts
        setTimeoutId(
            setTimeout(() => {
                setIsPreloaded(false);
            }, 100)
        );
    }, []);

    useEffect(() => {
        // clears timeoutId when component unmounts
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current) {
                const pagePositionY = ref.current.getBoundingClientRect().top;
                const top = window.scrollY;
                if (pagePositionY === top) {
                    setIsAtTop('top');
                } else {
                    setIsAtTop('');
                }
            }
        });
    }, []);

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Solid State' },
                            { name: 'keywords', content: 'site, web' },
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    <div
                        className={
                            isPreloaded
                                ? ' main-body  is-preload'
                                : ' main-body'
                        }
                    >
                        <div id="page-wrapper" ref={ref}>
                            <Header />
                            {children}
                            <ScrollToTopButton isAtTop={isAtTop} />
                            <Footer />
                        </div>
                    </div>
                </>
            )}
        />
    );
};

export default Layout;
