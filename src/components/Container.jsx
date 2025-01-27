import React from 'react';
import { twMerge } from 'tailwind-merge'
const Container = ({className , children}) => {
    return (
        <div className={twMerge(`${className} max-w-[1300px] px-3 lg:px-0 mx-auto`)}>
            {children}
        </div>
    );
};

export default Container;