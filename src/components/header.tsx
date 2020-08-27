import React, { useState, useRef, useEffect } from 'react';
import Nav from './nav';

export default (props: IProps) => {
    const ref: React.MutableRefObject<HTMLHeadElement | null> = useRef(null);
    const [isAtTop, setIsAtTop] = useState<string>('is-at-top');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (ref.current) {
                const headerPosition = ref.current.getBoundingClientRect().top;
                const atTop = window.scrollY;

                if (headerPosition === atTop) {
                    setIsAtTop('is-at-top');
                } else {
                    setIsAtTop('');
                }
            }
        });
    }, []);

    return (
        <header id="header" className={`header ${isAtTop}`} ref={ref}>
            <h1>Custom Site</h1>
            <Nav />
        </header>
    );
};
