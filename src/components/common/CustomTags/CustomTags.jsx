import React from "react";
import s from './CustomTags.module.css'
import {Field} from "react-final-form";

export const createField = (placeholder, name, validator, component, type, text = '', props = {}) => {
    return <>
        <Field placeholder={placeholder}
               name={name}
               validate={validator}
               component={component}
               type={type}
               {...props}
        /> {text}
    </>
}

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <>
                {children}
                {hasError && <span className={s.errorMessage}>{error}</span>}
            </>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, placeholder, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} placeholder={placeholder} {...restProps}/>
    </FormControl>


}
export const Input = (props) => {
    const {input, meta, placeholder, ...restProps} = props
    return <FormControl {...props}>
        <label>{placeholder}</label>
        <input {...input} {...restProps}/>
    </FormControl>
}

