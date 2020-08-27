import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/main.scss';
import Footer from './footer';
import Header from './header';

interface ILayoutProps {
    children: React.ReactNode;
    fullMenu: boolean;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    const [isPreloaded, setIsPreloaded] = useState<boolean>(true);
    const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);

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
                        <div id="page-wrapper">
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </div>
                </>
            )}
        />
    );
};

export default Layout;
