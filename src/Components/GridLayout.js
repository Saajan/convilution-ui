import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import GridItem from "./GridItem";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = (props) => {
    const { data } = props;
    const [layout, setLayout] = useState([]);
    const [breakPoint, setBreakPoint] = useState('lg');
    console.log({ data });
    const handleBreakPointChange = breakpoint => {
        setBreakPoint(breakpoint);
    };

    useEffect(() => {
        if (data) {
            setLayout({
                lg: data.widgets,
                xs: data.widgets,
            })
        }
    }, [data]);

    if (layout.lg) {
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layout}
                onBreakpointChange={handleBreakPointChange}
                isDraggable
                isRearrangeable
                isResizable
                draggableHandle=".grid-item__title"
                breakpoints={{ lg: 1200, xs: 480 }}
                cols={{ lg: 12, xs: 3 }}
                items={12}
                rowHeight={100}
            >
                {layout[breakPoint].map(item => <GridItem key={item._id} item={item} />)}
            </ResponsiveGridLayout>
        );
    } else {
        return <div>Loading...</div>
    }
}

export default GridLayout;
