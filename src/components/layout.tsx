import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './footer';
import SideBar from './header';

interface ILayoutProps {
    children: React.ReactNode;
    fullMenu: boolean;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    const [isPreloaded, setIsPreloaded] = useState<boolean>(true);
    const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);

    const { children, fullMenu } = props;

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
                            <SideBar fullMenu={fullMenu} />
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

// class Layout extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         isPreloaded: true,
//     };
// }

// componentDidMount() {
//     this.timeoutId = setTimeout(() => {
//         this.setState({ isPreloaded: false });
//     }, 100);
// }

// componentWillUnmount() {
//     if (this.timeoutId) {
//         clearTimeout(this.timeoutId);
//     }
// }

//     render() {
//         const { children, fullMenu } = this.props;
//         const { isPreloaded } = this.state;
//         return (
//             <StaticQuery
//                 query={graphql`
//                     query SiteTitleQuery {
//                         site {
//                             siteMetadata {
//                                 title
//                             }
//                         }
//                     }
//                 `}
//                 render={data => (
//                     <>
//                         <Helmet
//                             title={data.site.siteMetadata.title}
//                             meta={[
//                                 { name: 'description', content: 'Solid State' },
//                                 { name: 'keywords', content: 'site, web' },
//                             ]}
//                         >
//                             <html lang="en" />
//                         </Helmet>
//                         <div
//                             className={
//                                 isPreloaded
//                                     ? ' main-body  is-preload'
//                                     : ' main-body'
//                             }
//                         >
//                             <div id="page-wrapper">
//                                 <SideBar fullMenu={fullMenu} />
//                                 {children}
//                                 <Footer />
//                             </div>
//                         </div>
//                     </>
//                 )}
//             />
//         );
//     }
// }

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// };
