import React, { useState } from 'react';

export default () => {
    const [className, changeClassName] = useState<string>('');

    const startingPoint = 40;

    if (document.documentElement.scrollTop > startingPoint) {
        console.log('hello');
    } else {
        // changeClassName('');
        console.log('hi');
    }

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
