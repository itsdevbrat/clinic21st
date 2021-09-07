import React, { useState } from 'react'
import Loader from '../../components/loader/Loader'
import Vertical from '../vertical/Vertical'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { save } from '../../network/UserService';
import useLocalStorage from '../../customHooks/useLocalStorage'

const validationSchema = yup.object({
    userName: yup
        .string('Enter Name')
        .min(3, 'Name should be more than 3 characters')
        .required('Name is required'),
    phoneNumber: yup
        .string('Enter Phone number')
        .required('Phone number is required'),
    email: yup
        .string('Enter Email')
        .email('Enter a valid email eg:dev@gmail.com')
        .required('Email is required'),
});

const UserForm = props => {

    const [saveUserError, setSaveUserError] = useState([])
    const [jwt] = useLocalStorage('auth-token', '')
    const [verticalsSelected = []
    const [loader, setLoader] = useState(false)
    const [submit, setSubmit] = useState(true)

    const verticals = [
        { key: 1, value: 'ASIC (IVF Clinics)' },
        { key: 2, value: 'NABH SHCO' },
        { key: 3, value: 'Medical Laboratories' },
        { key: 4, value: 'ISO 9001:2015' }
    ]
    const [verticalsClicked, setVerticalsClicked] = useState(new Array(verticals.length).fill(false))

    const addVertical = (vertical) => verticalsSelected.push(vertical)

    const removeVertical = (vertical) => verticalsSelected.filter(verticalSelected => verticalSelected !== vertical)

    const verticalClicked = (idx) => {
        setVerticalsClicked(verticalsClicked.map((verticalClicked, index) => {
            if (index === idx) {
                if (verticalClicked === true)
                    removeVertical(verticals[idx].value)
                else
                    addVertical(verticals[idx].value)
                return !verticalClicked
            } else
                return verticalClicked
        }))
        console.log(verticalsSelected)
    }


    const saveUser = values => {
        setLoader(true)
        setSubmit(false)
        save(values, { 'Authorization': jwt })
            .then(response => {
                console.log(response)
                response.status === 200
                    ? setLoader(false)
                    : setSaveUserError('Something went wrong!')
                setLoader(false)
                setSubmit(true)
            })
            .catch(error => {
                console.log(error.response)
                setSaveUserError(error.response && error.response.data
                    ? error.response.data
                    : 'Something went wrong! Contact Administrator')
                setLoader(false)
                setSubmit(true)
            })
        formik.setSubmitting(false)
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            designation: '',
            phoneNumber: '',
            email: '',
            instituteName: '',
            address: '',
            birthDate: '',
            verticals: []
        },
        onSubmit: values => { saveUser(values) },
        validationSchema: validationSchema
    });

    return (
        <form className="dashboard-form userForm" onSubmit={formik.handleSubmit}>
            <TextField className='upper-margin-20' name="userName" type="text" placeholder="Name" margin='dense'
                variant='outlined' value={formik.values.userName} onChange={formik.handleChange}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
                helperText={formik.errors.userName === '' ? '' : formik.errors.userName} />
            <TextField className='upper-margin-20' name="designation" type="text" placeholder="Designation" margin='dense'
                variant='outlined' value={formik.values.designation} onChange={formik.handleChange} />
            <TextField className='upper-margin-20' name="phoneNumber" type="number" placeholder="Phone Number" margin='dense'
                variant='outlined' value={formik.values.phoneNumber} onChange={formik.handleChange}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.errors.phoneNumber === '' ? '' : formik.errors.phoneNumber} />
            <TextField className='upper-margin-20' name="email" type="email" placeholder="Email" margin='dense'
                variant='outlined' value={formik.values.email} onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.errors.email === '' ? '' : formik.errors.email} />
            <TextField className='upper-margin-20' name="instituteName" type="text" placeholder="Institute Name" margin='dense'
                variant='outlined' value={formik.values.instituteName} onChange={formik.handleChange} />
            <TextField className='upper-margin-20' name="address" type="text" placeholder="Address" multiline={true} maxRows='4' minRows='2' margin='dense'
                variant='outlined' value={formik.values.address} onChange={formik.handleChange} />
            <br />Date of birth
            <TextField className='upper-margin-20' name="birthDate" type="date" placeholder="Birth Date" margin='dense'
                variant='outlined' value={formik.values.birthDate} onChange={formik.handleChange} />
            <div>
                <h2>Assign a vertical</h2>
                <div className="flexbox-row">

                    {verticals.map((vertical, index) => (
                        <Vertical
                            key={vertical.key}
                            index={index}
                            clicked={verticalsClicked[index]}
                            onClick={verticalClicked}
                            title={vertical.value}>
                        </Vertical>
                    ))}
                </div>
            </div>
            <br />
            {loader && <Loader />}
            {
                submit &&
                <Button type='submit' className='dashboard-button'>Submit</Button>
            }
            {saveUserError && saveUserError}
        </form>
    )
}

export default UserForm
