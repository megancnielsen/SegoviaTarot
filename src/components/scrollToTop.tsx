import React, { useState } from 'react';

interface IScrollProps {
    isAtTop: string;
}
export default ({ isAtTop }: IScrollProps) => {
    const [className, changeClassName] = useState<string>('');

    return (
        <ul>
            <li
                className={`${className} scroll-btn fa-arrow-up ${isAtTop}`}
                onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
            ></li>
        </ul>
    );
};
