import React from "react";
import {Form, Field} from 'react-final-form'
import {required} from "../../../utils/validators";
import s from "../../Login/Login.module.css";

let NewPostForm = (props) => {
    return (
        <Form onSubmit={(values)=>{
            props.addProfilePost(values.newPostValue)
        } }>
            {({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'newPostValue'}
                           validate={required}>
                    {({input, meta}) => (
                        <div className={`${s.formControl} ${meta.touched && meta.error ? s.error : ''}`}>
                            <textarea {...input} {...meta} placeholder={'Print new post here..'}/>
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}</Field>
                    <button type="submit"
                            disabled={submitting}>Add post</button>
                </form>)}
        </Form>
    )
}
export default NewPostForm