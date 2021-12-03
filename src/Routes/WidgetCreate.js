/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Form, Field } from "react-final-form";
import http from '../http';
import { InputText, InputSelect, AddButton } from '../Components/formElements';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { XCircleIcon } from '@heroicons/react/solid'

const onSubmit = async (values) => {
    http.post('widgets', values);
};
const options=["Line Chart","Bar Chart","Pie Chart"];

export default (props) => {

  return (
    <div>    
      <Form
        onSubmit={onSubmit}
        initialValues={{
            xaxis: [''],
            yaxis: [''],
            chart: 'Line Chart',
            type: 'Conviva',
        }}
        mutators={{
            ...arrayMutators
        }}
        render={({ 
            handleSubmit, 
            form: {
                mutators: { push, pop }
            }, 
            values }) => (
                <div className="max-w-md w-240 h-240 p-8 m-10 border border-gray-900">
                    <form onSubmit={handleSubmit}>
                        <div className="p-2 grid grid-cols-2">
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

                        <div className="px-2"><label>X-Axis</label></div>
                        <div className="border border-gray-200 p-2 rounded-md"> 
                            <FieldArray name="xaxis">
                            {({ fields }) =>
                                fields.map((name, index) => (
                                <div key={name} className="p-2 grid grid-cols-3">
                                    <div><label>X{index + 1}</label></div>
                                    <div>
                                        <Field
                                        name={`${name}`}
                                        component={InputText}
                                        placeholder="X-Axis value"
                                        />
                                    </div>
                                    <div className="px-2">
                                        <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                                            <XCircleIcon className="h-5 w-5 text-black-500"/>
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
                                <div key={name} className="p-2 grid grid-cols-3">
                                    <div><label>Y{index + 1}</label></div>
                                    <div>
                                        <Field
                                        name={`${name}`}
                                        component={InputText}
                                        placeholder="Y-Axis value"
                                        />
                                    </div>
                                    <div className="px-2">
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
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                </div>
            )}
        />
    </div>
  );
};