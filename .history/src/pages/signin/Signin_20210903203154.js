import { React, useState } from 'react'
import "./Signin.css";
import { useFormik } from 'formik';
import { login } from '../../network/UserService';
import { useHistory } from "react-router-dom";
import useLocalStorage from '../../customHooks/useLoc   alStorage'

const Signin = props => {

    const [loginError, setLoginError] = useState()
    const history = useHistory()
    const [jwt, setJwt] = useLocalStorage('auth-token', '')


    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: values => signInUser(values),
        validate: values => {
            const errors = {};
            if (!formik.values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formik.values.email)) {
                errors.email = 'Invalid email address';
            } else if (formik.values.password.length < 3) {
                errors.password = 'Password should be atleast 3 characters';
            }
            return errors;
        }
    });

    const signInUser = (values) => {
        login({ email: values.email, password: values.password })
            .then(response => {
                console.log(response)
                response.status === 200
                    ? history.push('/dashboard')
                    : setLoginError('Something went wrong!')
                setJwt(response.data)
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.response.data)
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
                    <div className="form__field">
                        <input type="submit" value="Sign In" disabled={formik.isSubmitting} />
                    </div>
                    {loginError}
                </form>
            </div>
        </div>
    )
}

export default Signin
