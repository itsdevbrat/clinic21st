import { React, useState } from 'react'
import "./Signin.css";
import { useFormik } from 'formik';
import { login } from '../../network/UserService';
import { useHistory } from "react-router-dom";
import useLocalStorage from '../../customHooks/useLocalStorage'
import Loader from '../../components/loader/Loader'
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(3, 'Password should be of minimum 3 characters length')
        .required('Password is required'),
});

const Signin = props => {

    const [loginError, setLoginError] = useState()
    const history = useHistory()
    const [jwt, setJwt] = useLocalStorage('auth-token', '')
    const [loader, setLoader] = useState(false)


    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: values => signInUser(values),
        validationSchema
    });

    const signInUser = (values) => {
        setLoader(true)
        login(values)
            .then(response => {
                setJwt(response.data)
                console.log(response)
                setLoader(false)
                response.status === 200
                    ? history.push('/')
                    : setLoginError('Something went wrong! Contact Administrator')
            })
            .catch(error => {
                console.log(error)
                setLoader(false)
                setLoginError(error.response && error.response.data ? error.response.data : 'Something went wrong! Contact Administrator')
            })
        formik.setSubmitting(false)
    }

    return (
        <div>
            <div className="grid">
                <form className="form login" onSubmit={formik.handleSubmit} >
                    <div className="form__field">
                        <label htmlFor="login__username">
                            <img alt="user" src={"./assets/user.png"} />
                            <span className="hidden">Username</span>
                        </label>
                        <input
                            autoComplete="username"
                            id="login__username"
                            type="text" name="email" value={formik.values.email} onChange={formik.handleChange}
                            className="form__input"
                            placeholder="Email" required />
                    </div>
                    {formik.errors.email}
                    <div className="form__field">
                        <label htmlFor="login__password">
                            <img alt="password" src={"./assets/pass.png"} />
                            <span className="hidden">Password</span></label>
                        <input
                            id="login__password"
                            type="password" name="password" value={formik.values.password} onChange={formik.handleChange}
                            className="form__input"
                            placeholder="Password" required />
                    </div>
                    {formik.errors.password}
                    {loader ? <Loader /> :
                        <div className="form__field">
                            <input type="submit" value="Sign In" disabled={formik.isSubmitting} />
                        </div>}
                    {loginError}
                </form>
            </div>
        </div>
    )
}

export default Signin
