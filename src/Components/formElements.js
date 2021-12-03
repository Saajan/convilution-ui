import React from "react";

export const InputText = (props) => (
    <div>
        <input 
            {...props.input}
            className="px-2 block w-full shadow-sm sm:text-sm rounded-sm border border-black-900"
        />
    </div>
)

export const InputSelect = (props) => (
  <select name={props.name}/>
)

export const AddButton = (props) => (
  <button
    type="button"
    onClick = {props.onClick}
    className="inline-flex border border-gray shadow-sm text-sm font-medium rounded-md bg-gray-50 text-gray-900 px-2"
  >
    {props.lable}
  </button>
)