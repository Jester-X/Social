import {Form, Field} from 'react-final-form'
import {maxLength, required} from "../../../utils/validators";
import React from "react";
import {Textarea} from "../../common/CustomTags/CustomTags";

let maxLength20 = maxLength(20)

const SendMessageForm = (props) => {
    return <Form onSubmit={props.sendMessage}>
        {({handleSubmit, submitting, pristine}) => (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea}
                   placeholder={'Enter new message..'}
                   name={"newMessageValue"}
            />
            <button type={'submit'}
                    disabled={submitting || pristine}>Send</button>
        </form>)}
    </Form>
}
export default SendMessageForm
