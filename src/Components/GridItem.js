import React from 'react';

const GridItem = ({
    title,
    data,
    type,
    className,
    style,
    dispatch,
    root,
    children,
    ...rest
}) => {
    const width = parseInt(style.width, 10);
    const height = parseInt(style.height, 10) - 50;
    return (
        <div className={`grid-item ${className}`} style={style} {...rest}>
            <div className="grid-item__title">
                <div title={title} type={type} root={root} />
            </div>
            <div className="grid-item__graph">

            </div>
            {children}
        </div>
    );
};

export default GridItem;