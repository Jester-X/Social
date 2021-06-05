import React from "react";
import {Form} from 'react-final-form'
import {required, isValidEmail, minLength, composeValidators} from "../../utils/validators";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/CustomTags/CustomTags";

const Login = props => {
    const onSubmit = async values => {
        await props.login(values.email, values.password, values.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h2 style={{textAlign: "center"}}>LOGIN</h2>
            <LoginForm onSubmit={onSubmit} error={props.error}/>
        </div>
    )
}

const LoginForm = ({onSubmit, error}) => {
    return <Form onSubmit={onSubmit}
                 subscription={{
                     submitting: true
                 }}>
        {({handleSubmit, form, submitting, pristine}) => (
            <form onSubmit={handleSubmit}>
                {createField('Email', 'email', composeValidators(required, isValidEmail), Input, 'text')}
                {createField('Password', 'password', composeValidators(required, minLength(6)), Input, 'password')}
                {createField(null, 'rememberMe', null, Input, 'checkbox', 'Remember Me')}
                <div className={s.buttons}>
                    <button type="submit" disabled={submitting}>Login</button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >Reset
                    </button>
                </div>
                {error ? <div className={s.errorMessage}>{error}</div> : ''}
            </form>
        )}
    </Form>
}


let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
})

export default connect(mapStateToProps, {login})(Login)