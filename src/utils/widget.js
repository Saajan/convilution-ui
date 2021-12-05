import _ from 'lodash';

export const getSortedWidget = (widgets) => {
    const dataToSend = {
        shared: [],
        conviva: [],
        custom: [],
    }
    _.forEach(widgets, (widget) => {
        if (dataToSend[widget.type]) {
            dataToSend[widget.type].push(widget);
        }
    });
    return dataToSend;
}