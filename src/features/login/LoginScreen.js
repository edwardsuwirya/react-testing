import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';

const LoginScreen = ({bloc}) => {
    const {
        onAuthenticate,
        error
    } = bloc();
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("Required!"),
            password: Yup.string().required("Required!").min(5, "minimum 5 character"),
        }),
        onSubmit: (values) => {
            onAuthenticate(values.userName, values.password);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            User Name<br/>
            <input id="userName" name="userName" type="text" value={formik.values.userName} placeholder="user name"
                   onChange={formik.handleChange}/><br/>
            {formik.errors.userName ? formik.errors.userName : null}<br/>
            Password<br/>
            <input id="password" name="password" type="password" value={formik.values.password} placeholder="password"
                   onChange={formik.handleChange}/><br/>
            {formik.errors.password ? formik.errors.password : null}<br/>
            <button type="submit">Login</button>
            <br/>
            <span>{error}</span>
        </form>
    );
}

export default LoginScreen;
