import React from "react";
import s from './CustomTags.module.css'


export const Textarea = ({input, meta, ...props}) => {
    let hasError = (meta.touched && meta.error);
    return <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
        <textarea {...props} {...input} {...meta}/>
        {hasError && <span>{meta.error}</span>}
    </div>
}
export const Input = ({input, meta, ...props}) => {
    let hasError = (meta.touched && meta.error);
    return <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
        <input {...props} {...input} {...meta}/>
        {hasError && <span>{meta.error}</span>}
    </div>
}
