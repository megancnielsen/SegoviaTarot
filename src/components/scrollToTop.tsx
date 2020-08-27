import React, { useState, useEffect } from 'react';

export default () => {
    const [className, changeClassName] = useState<string>('');

    return (
        <ul className="">
            <li
                className={`${className} scroll-btn fa-arrow-up`}
                onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
            ></li>
        </ul>
    );
};
