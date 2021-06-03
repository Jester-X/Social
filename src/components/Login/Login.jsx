import React from "react";
import {Form, Field} from 'react-final-form'
import {required, isValidEmail, minLength, composeValidators} from "../../utils/validators";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

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

const LoginForm = props => {
    return <Form onSubmit={props.onSubmit}
                 subscription={{
                     submitting: true
                 }}
                >

        {({
              handleSubmit,
              values,
              form,
              submitting,
              pristine
          }) => (
            <form onSubmit={handleSubmit}>
                <div className={s.formControl}>
                    <Field name={'email'}
                           validate={composeValidators(required, isValidEmail)}
                    >{({input, meta}) =>
                        (
                            <div
                                className={`${meta.active ? s.active : ''} ${meta.touched && meta.error ? s.error : ''}`}>
                                <label>Email</label>
                                <input {...input} type={'text'} placeholder={'Email@..'}/>
                                {meta.touched && meta.error && <span className={s.error}>{meta.error}</span>}
                            </div>)
                    }</Field>
                </div>
                <div className={s.formControl}>

                    <Field name={'password'}
                           validate={composeValidators(required, minLength(8))}>
                        {({input, meta}) => (
                            <div
                                className={`${meta.active ? s.active : ''} ${meta.touched && meta.error ? s.error : ''}`}>
                                <label>Password</label>
                                <input {...input} type={'password'} placeholder={'Password..'}/>
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <div className={s.formControl}>
                    <Field type={'checkbox'}
                           name={'rememberMe'}
                           component={'input'}
                    />Remember Me
                </div>
                <div className={s.buttons}>
                    <button type="submit" disabled={submitting || pristine}>Login</button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >Reset
                    </button>
                </div>
                {props.error ? <div className={s.errorMessage}>{props.error}</div> : ''}
            </form>
        )}
    </Form>
}


let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
})

export default connect(mapStateToProps, {login})(Login)