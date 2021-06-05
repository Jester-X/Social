import React from "react";
import {Form} from 'react-final-form'
import {required} from "../../../utils/validators";
import {createField, Textarea} from "../../common/CustomTags/CustomTags";

let NewPostForm = (props) => {
    return (
        <Form onSubmit={(values)=>{
            props.addProfilePost(values.newPostValue)
        } }>
            {({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    {createField('Print new post here..', 'newPostValue',required, Textarea, 'text')}
                    <button type="submit"
                            disabled={submitting}>Add post</button>
                </form>)}
        </Form>
    )
}
export default NewPostForm