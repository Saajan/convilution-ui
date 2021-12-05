import React, { Component } from "react";
import GridLayout from "react-grid-layout";
import useMeasure from 'react-use-measure';
import MainWidget from './MainWidget';

const GridLayoutComponent = (props) => {
    const { data, bounds: parent, mode } = props;
    const [ref, bounds] = useMeasure()
    if (!data.widgets) return null;
    const reversedData = data.widgets.slice().reverse();
    return (
        <GridLayout
            width={parent.width}
            className="layout"
            isDraggable={mode === 'edit' ? true : false}
            isRearrangeable={mode === 'edit' ? true : false}
            isResizable={mode === 'edit' ? true : false}
            cols={12}
            rowHeight={100}
            draggableHandle=".grid-item__title"
        >
            {reversedData.reverse().map((item, index) => {
                return (
                    <div key={item._id} className={`grid-item component-container`} data-grid={{
                        x: item.x,
                        y: item.y,
                        w: item.w,
                        h: item.h,
                        i: item._id,
                    }} ref={ref}>
                        <div className="grid-item__title component-title">
                            <div>{item.name}</div>
                        </div>
                        <div className="grid-item__graph">
                            <div className="grid-item__graph-container" ref={ref}>
                                <MainWidget widgetId={item._id} bounds={bounds} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </GridLayout>
    );
}

export default GridLayoutComponent;
