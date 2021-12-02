import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import GridItem from "./GridItem";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = (props) => {
    const { data } = props;
    const [breakPoint, setBreakPoint] = useState('lg');
    console.log({ data });
    const handleBreakPointChange = breakpoint => {
        setBreakPoint(breakpoint);
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={data}
            onBreakpointChange={handleBreakPointChange}
            isDraggable
            isRearrangeable
            isResizable
            draggableHandle=".grid-item__title"
            breakpoints={{ lg: 1240, sm: 767, xs: 480 }}
            cols={{ lg: 12, sm: 6, xs: 3 }}
        >
            {data[breakPoint].map(item => <GridItem key={item.i} item={item} />)}
        </ResponsiveGridLayout>
    );
}

export default GridLayout;
