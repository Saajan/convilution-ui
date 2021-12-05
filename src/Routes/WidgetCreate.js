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

const options=["Line Chart","Bar Chart","Pie Chart"];
const filterOptions = ["Assets", "CDN", "Player Framework Name", "Channel", "Device Type", "Device OS"];

const WidgetCreate = () => {
    let navigate = useNavigate();
    const onSuccess = (resp) => {
        navigate(`/widget/${resp.data.id}`);
    }
    const onSubmit = async (values) => {
        http.post('widgets', values, onSuccess);
    };
    const getPreview = async(value) => {
        setPreviewData({
            axis: value.axis,
            metric: value.metric,
            data: [
                {
                    date: "5 December",
                    CIRR:  0.2
                },
                {
                    date: "4 December",
                    CIRR:  0.1
                },
                {
                    date: "3 December",
                    CIRR:  0.35
                },
                {
                    date: "2 December",
                    CIRR:  0.15
                },
                {
                    date: "1 December",
                    CIRR:  0.24
                },
                {
                    date: "30 November",
                    CIRR:  0.11
                },
            ]
        })
    }
    const evaluate = () => {
        console.log(query);
        if(query.startsWith('C')) {
            window.setFormValue('xaxis', ['CIRR']);
            window.setFormValue('yaxis', ['Live', 'VoD']);
            window.setFormValue('chart', 'Line Chart');
            window.setFormValue('name', 'My Widget 1');
            window.setFormValue('filter', 'Player Framework Name');
            window.setFormValue('type', 'custom');
        }        
    }
    const handleChange = function(e) {
        setQuery(e.target.value);
    }
    
    const [previewData, setPreviewData] = useState({});
    const [query, setQuery] = useState('');
    
  return (
    <div>    
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
                    <div className="grid grid-cols-3 gap-4">
                        <div className="max-w-md w-240 h-240 p-8 m-10 border border-gray-900 col-span-1">
                            <form onSubmit={handleSubmit}>
                                <div className="p-2">
                                    <div className="pb-2"><label>Query</label></div>
                                    <div className="block w-full grid grid-cols-12">
                                        <input
                                            className="w-full shadow-sm sm:text-sm rounded-sm  px- 2 border border-black-900 col-span-11"
                                            value={query}
                                            type="text"
                                            onChange={handleChange}
                                            placeholder="Type your Query"
                                        />
                                        <div className="col-span-1 px-2">
                                            <CheckCircleIcon onClick={() => evaluate()} className="h-5 w-5 text-black-500"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div><label>Widget Name</label></div>
                                    <div>
                                        <Field
                                            name="name"
                                            component={InputText}
                                            type="text"
                                            placeholder="Widget Name"
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
                                            {options.map( opt => (
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
                                            {filterOptions.map( opt => (
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
                                                    <XCircleIcon className="h-5 w-5 text-black-500"/>
                                                </span>
                                            </div>
                                            <div className="px-2 col-span-1">
                                                <span onClick={() => getPreview({ metric: new String(values.xaxis[index]).toString(), axis: `X${index+1}`})} style={{ cursor: 'pointer' }}>
                                                    <TableIcon className="h-5 w-5 text-black-500"/>
                                                </span>
                                            </div>
                                        </div>
                                        ))
                                    }
                                    </FieldArray>
                                    <AddButton lable="Add more X axis" onClick={() => push('xaxis', undefined)}/>
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
                                                    <XCircleIcon className="h-5 w-5 text-black-500"/>
                                                </span>
                                            </div>
                                        </div>
                                        ))
                                    }
                                    </FieldArray>
                                    <AddButton lable="Add more Y axis" onClick={() => push('yaxis', undefined)}/>
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
                        <div className="max-w-md p-8 m-10 border border-gray-900 col-span-1">
                            <Preview {...previewData}/>
                        </div>
                    </div>
            )}}
        />
    </div>
  );
};

export default WidgetCreate;