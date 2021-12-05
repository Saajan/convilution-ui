import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ScreenCapture } from 'react-screen-capture';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Select, Modal,Button } from 'antd';
import MainWidget from '../Components/MainWidget';


const { Option } = Select;

function Widget() {
    const [chartType, setChartType] = useState('multiline');
    const [imageData, setImageData] = useState(null);
    const { widgetId } = useParams();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setImageData(null);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setImageData(null);
        setIsModalVisible(false);
    };

    function handleChange(value) {
        setChartType(value);
    }

    const handleScreenCapture = screenCapture => {
        setImageData(screenCapture);
        showModal(true);
    };

    return (
        <div className="w-full h-full border border-grey-500 m-2">
            <ScreenCapture onEndCapture={handleScreenCapture}>
                {({ onStartCapture }) => (
                    <Fragment>
                        <header className="m-5">
                            <Select defaultValue="multiline" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="multiline">MultiLine</Option>
                                <Option value="multiline-area">Multiline Area</Option>
                                <Option value="stacked-bar">Stacked Bar</Option>
                            </Select>
                            <button className="ml-2 border py-1 px-2 rounded">Share</button>
                            <button className="ml-2 border py-1 px-2 rounded" onClick={onStartCapture}>Annotate</button>
                        </header>

                        <MainWidget widgetId={widgetId} url={true} chartType={chartType} />
                    </Fragment>
                )}

            </ScreenCapture>

            <Modal title="Annotate" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button
                        type="warning"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>,
                    <Button type="primary" onClick={handleOk}>
                        Save
                    </Button>,
                    <Button
                        type="primary"
                        onClick={handleOk}
                    >
                        Share It
                    </Button>
                ]}>
                <ReactSketchCanvas
                    height="500px"
                    strokeWidth={4}
                    strokeColor="red"
                    backgroundImage={imageData}
                />
            </Modal>
        </div >
    );
}

export default Widget;