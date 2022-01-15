import { React, useState } from 'react'
import Loader from '../../components/loader/Loader'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { useFormik } from 'formik';
import * as yup from 'yup';
import useLocalStorage from '../../customHooks/useLocalStorage'
import { saveVertical } from '../../network/VerticalService'

const validationSchema = yup.object({
    verticalName: yup
        .string('Enter vertical name')
        .min(3, 'Name should be more than 3 characters')
        .required('Vertical name is required'),
    driveLink: yup
        .string('Link should be a string')
        .required('Link is required')
});


const VerticalForm = ({ toggleForm }) => {

    const [loader, setLoader] = useState(false)
    const [saveVerticalError, setSaveVerticalError] = useState()
    const [jwt] = useLocalStorage('auth-token', '')
    const [submit, setSubmit] = useState(true)

    const save = values => {
        setLoader(true)
        setSubmit(false)
        saveVertical(values, { 'Authorization': jwt })
            .then(response => {
                console.log(response)
                if (response.status === 201)
                    toggleForm()
                else
                    setSaveVerticalError('Something went wrong!')

                setLoader(false)
                setSubmit(true)
            })
            .catch(error => {
                console.log(error.response)
                setSaveVerticalError(error.response && error.response.data
                    ? error.response.data
                    : 'Something went wrong! Contact Administrator')
                setLoader(false)
                setSubmit(true)
            })
        formik.setSubmitting(false)
    }

    const formik = useFormik({
        initialValues: {
            verticalName: '',
            driveLink: '',
        },
        onSubmit: values => { save(values) },
        validationSchema: validationSchema
    });


    return (
        <form className="dashboard-form verticalForm" onSubmit={formik.handleSubmit}>
            <TextField name="verticalName" type="text" placeholder="Vertical Name" margin='dense' variant='outlined'
                value={formik.values.verticalName} onChange={formik.handleChange}
                error={formik.touched.verticalName && Boolean(formik.errors.verticalName)}
                helperText={formik.errors.verticalName === '' ? '' : formik.errors.verticalName} />
            <TextField name="driveLink" type="text" multiline placeholder="Google drive folder link" margin='dense' variant='outlined'
                value={formik.values.driveLink} onChange={formik.handleChange}
                error={formik.touched.driveLink && Boolean(formik.errors.driveLink)}
                helperText={formik.errors.driveLink === '' ? '' : formik.errors.driveLink} />
            {loader && <Loader />}
            {
                submit &&
                <Button type='submit' className='dashboard-button'>Save</Button>
            }
            {saveVerticalError && saveVerticalError}
        </form>
    )
}

export default VerticalForm
