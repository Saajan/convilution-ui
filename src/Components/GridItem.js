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
    item,
    ...rest
}) => {
    const width = parseInt(style.width, 10);
    const height = parseInt(style.height, 10) - 50;
    console.log({item});
    return (
        <div className={`grid-item ${className}`} style={style} data-grid={{
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
            i: item._id,
        }} >
            <div className="grid-item__title">
                <div title={title} type={type} root={root}>{item.widgetId}</div>
            </div>
            <div className="grid-item__graph">

            </div>
            {children}
        </div>
    );
};

export default GridItem;