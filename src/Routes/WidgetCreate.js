/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import http from '../http';
import { InputText, InputSelect, AddButton } from '../Components/formElements';
import Preview from '../Components/WidgetPreview';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { XCircleIcon } from '@heroicons/react/solid'
import { TableIcon, CheckCircleIcon } from '@heroicons/react/solid'

const options = ["Line Chart", "Bar Chart", "Pie Chart"];
const filterOptions = ["Assets", "CDN", "Player Framework Name", "Channel", "Device Type", "Device OS"];

const WidgetCreate = () => {
    let navigate = useNavigate();
    const onSuccess = (resp) => {
        navigate(`/widget/${resp.data.id}`);
    }
    const onSubmit = async (values) => {
        http.post('widgets', values, onSuccess);
    };
    const getPreview = async (value) => {
        setPreviewData({
            axis: value.axis,
            metric: value.metric,
            data: [
                {
                    date: "ExoPlayer",
                    CIRR:  0.67,
                    Vod: 2
                },
                {
                    date: "HTML5",
                    CIRR:  0.78,
                    Vod: 2.78
                },
                {
                    date: "UWPMediaPlayer",
                    CIRR:  0.87,
                    Vod: 3.87
                },
                {
                    date: "AVFoundation",
                    CIRR:  1.5,
                    Vod: 0.76
                },
                {
                    date: "Roku Scene Graph",
                    CIRR:  0.92,
                    Vod: 1.2
                },
                {
                    date: "DSS-HLS",
                    CIRR:  1.5,
                    Vod: 0.9
                },
            ]
        })
    }
    const evaluate = () => {
        console.log(query);
        if (query.startsWith('C')) {
            window.setFormValue('xaxis', ['CIRR']);
            window.setFormValue('yaxis', ['Live', 'VoD']);
            window.setFormValue('chart', 'Line Chart');
            window.setFormValue('name', 'Player-wise CIRR on Live and VoD');
            window.setFormValue('limit', '6');
            window.setFormValue('description', 'Double line graph for easy comparison');
            window.setFormValue('filter', 'Player Framework Name');
            window.setFormValue('type', 'custom');
        }
    }
    const handleChange = function (e) {
        setQuery(e.target.value);
    }

    const [previewData, setPreviewData] = useState({});
    const [query, setQuery] = useState('');

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{
                type: 'shared'
            }}
            mutators={{
                setValue: ([field, value], state, { changeValue }) => {
                    changeValue(state, field, () => value)
                },
                ...arrayMutators
            }}
            render={({
                handleSubmit,
                form: {
                    mutators: { push, pop, setValue }
                },
                values }) => {
                if (!window.setFormValue) window.setFormValue = setValue;

                return (
                    <div className="flex flex-col w-full h-full my-20">
                        <div className="text-lg font-bold">Create Widget</div>
                        <div className="flex w-full h-full">
                            <div className="flex-1 justify-center item-center border m-5 p-5  rounded">
                                <form onSubmit={handleSubmit}>
                                    <div className="p-2">
                                        <div className="pb-2"><label>Query</label></div>
                                        <div className="block w-full grid grid-cols-12">
                                            <input
                                                className="w-full shadow-sm sm:text-sm rounded-sm p-2 border border-black-900 col-span-11"
                                                value={query}
                                                type="text"
                                                onChange={handleChange}
                                                placeholder="Type your Query"
                                            />
                                            <div className="col-span-1 px-2">
                                                <CheckCircleIcon onClick={() => evaluate()} className="h-5 w-5 text-black-500" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div><label>Widget Name</label></div>
                                        <div>
                                            <Field
                                                name="name"
                                                className="p-2"
                                                component={InputText}
                                                type="text"
                                                placeholder="Widget Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div><label>Widget Description</label></div>
                                        <div>
                                            <Field
                                                name="description"
                                                component={InputText}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 grid grid-cols-2">
                                        <div><label>Chart type</label></div>
                                        <div>
                                            <Field
                                                name="chart"
                                                component="select"
                                            >
                                                {options.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="p-2 grid grid-cols-2">
                                        <div><label>Filter</label></div>
                                        <div>
                                            <Field
                                                name="filter"
                                                component="select"
                                            >
                                                {filterOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="px-2"><label>X-Axis</label></div>
                                    <div className="border border-gray-200 p-2 rounded-md">
                                        <FieldArray name="xaxis">
                                            {({ fields }) =>
                                                fields.map((name, index) => (
                                                    <div key={name} className="p-2 grid grid-cols-6">
                                                        <div className="col-span-1"><label>X{index + 1}</label></div>
                                                        <div className="col-span-3">
                                                            <Field
                                                                name={`${name}`}
                                                                component={InputText}
                                                                placeholder="X-Axis value"
                                                            />
                                                        </div>
                                                        <div className="px-2 col-span-1">
                                                            <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                                                                <XCircleIcon className="h-5 w-5 text-black-500" />
                                                            </span>
                                                        </div>
                                                        <div className="px-2 col-span-1">
                                                            <span onClick={() => getPreview({ metric: new String(values.xaxis[index]).toString(), axis: `X${index + 1}` })} style={{ cursor: 'pointer' }}>
                                                                <TableIcon className="h-5 w-5 text-black-500" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </FieldArray>
                                        <AddButton lable="Add more X axis" onClick={() => push('xaxis', undefined)} />
                                    </div>
                                    <div className="px-2 pt-5"><label>Y-Axis</label></div>
                                    <div className="border border-gray-200 p-2 rounded-md">
                                        <FieldArray name="yaxis">
                                            {({ fields }) =>
                                                fields.map((name, index) => (
                                                    <div key={name} className="p-2 grid grid-cols-6">
                                                        <div className="col-span-1"><label>Y{index + 1}</label></div>
                                                        <div className="col-span-3">
                                                            <Field
                                                                name={`${name}`}
                                                                component={InputText}
                                                                placeholder="Y-Axis value"
                                                            />
                                                        </div>
                                                        <div className="px-2 col-span-1">
                                                            <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                                                                <XCircleIcon className="h-5 w-5 text-black-500" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </FieldArray>
                                        <AddButton lable="Add more Y axis" onClick={() => push('yaxis', undefined)} />
                                    </div>
                                    <div className="p-2">
                                        <div><label>Limit</label></div>
                                        <div>
                                            <Field
                                                name="limit"
                                                component={InputText}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <button
                                            type="submit"
                                            className="py-1 px-4 border text-sm font-medium rounded-md text-white bg-blue-400"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex-1  justify-center  item-center border m-5 p-5  rounded">
                                <Preview {...previewData} />
                            </div>
                        </div>
                    </div>
                )
            }}
        />
    );
};

export default WidgetCreate;