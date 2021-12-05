import React, { Component } from "react";
import GridLayout from "react-grid-layout";
class GridLayoutComponent extends Component {
    render() {
        const { data, bounds } = this.props;
        if (!data.widgets) return null;
        const reversedData = data.widgets.slice().reverse();
        return (
            <GridLayout
                width={bounds.width}
                className="layout"
                isDraggable={true}
                isRearrangeable={true}
                isResizable={true}
                cols={12}
                rowHeight={100}
                draggableHandle=".grid-item__title"
            >
                {reversedData.reverse().map((item,index) => {
                    return (
                        <div key={item._id} className={`grid-item component-container`} data-grid={{
                            x: item.x,
                            y: item.y,
                            w: item.w,
                            h: item.h,
                            i: item._id,
                        }} >
                            <div className="grid-item__title component-title">
                                <div>{item.name}</div>
                            </div>
                            <div className="grid-item__graph">
                                <div className="grid-item__graph-container">
                                    graph {index}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </GridLayout>
        );
    }
}

export default GridLayoutComponent;
