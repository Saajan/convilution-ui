import React, { useState, } from "react";
import GridLayout from "react-grid-layout";
import GridWidget from './GridWidget';

const GridLayoutComponent = (props) => {
    const { data, bounds: parent, mode } = props;
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
                        w: 12,
                        h: 12,
                        i: item._id,
                    }}>
                        <div className="grid-item__title component-title">
                            {item.title}
                        </div>
                        <div className="grid-item__graph">
                            <GridWidget widgetId={item._id} item={item}/>
                        </div>
                    </div>
                )
            })}
        </GridLayout>
    );
}

export default GridLayoutComponent;
