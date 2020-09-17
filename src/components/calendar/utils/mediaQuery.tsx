import React, { useContext } from 'react';
import { ResponsiveContext } from 'grommet';

const SIZES = ['small', 'medium', 'large'] as const;

type Size = typeof SIZES[number];

type MediaQueryProps = {
    sizes: Size[];
    children: any;
};

type Props = {
    size: Size;
    children: any;
};

const Media = ({ sizes, children }: MediaQueryProps) => {
    const currentSize = useContext(ResponsiveContext) as Size;

    return sizes.includes(currentSize) && children;
};

export const Hide = ({ size, ...rest }: Props) => {
    return <Media sizes={SIZES.filter(s => s !== size)} {...rest} />;
};

export const Show = ({ size, ...rest }: Props) => {
    return <Media sizes={[size]} {...rest} />;
};
