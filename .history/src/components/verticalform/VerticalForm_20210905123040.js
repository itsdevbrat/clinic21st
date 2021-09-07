import { React, useState } from 'react'
import Loader from '../../components/loader/Loader'
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import useLocalStorage from '../../customHooks/useLocalStorage'
import { save } from '../../network/VerticalService'

const validationSchema = yup.object({
    verticalName: yup
        .string('Enter vertical name')
        .min(3, 'Name should be more than 3 characters')
        .required('Vertical name is required'),
    driveLink: yup
        .string('Link should be a string')
        .min(3, 'Link should be more than 3 characters')
        .url('It should be an URL')
        .required('Link is required')
});


const VerticalForm = props => {

    const [loader, setLoader] = useState(false)
    const [saveVerticalError, setSaveVerticalError] = useState()
    const [jwt] = useLocalStorage('auth-token', '')
    const [submit, setSubmit] = useState(true)

    const saveVertical = values => {
        setLoader(true)
        save(values, { 'Authorization': jwt })
            .then(response => {
                console.log(response)
                response.status === 200
                    ? setLoader(false)
                    : setSaveVerticalError('Something went wrong!')
                setLoader(false)
                setSubmit(false)
            })
            .catch(error => {
                console.log(error.response)
                setSaveVerticalError(error.response && error.response.data
                    ? error.response.data
                    : 'Something went wrong! Contact Administrator')
                setLoader(false)
                setSubmit(false)
            })
        formik.setSubmitting(false)
    }

    const formik = useFormik({
        initialValues: {
            verticalName: '',
            driveLink: '',
        },
        onSubmit: values => { alert("values") },
        validationSchema: validationSchema
    });


    return (
        <form className="dashboard-form verticalForm" onSubmit={formik.handleSubmit}>
            <OutlinedInput name="verticalName" type="text" placeholder="Vertical Name" margin='dense'
                value={formik.values.verticalName} onChange={formik.handleChange} 
                error={formik.touched.verticalName && Boolean(formik.errors.verticalName)/>
            <br />
            <OutlinedInput name="driveLink" type="text" placeholder="Google drive folder link" margin='dense'
                value={formik.values.driveLink} onChange={formik.handleChange} 
                error={formik.touched.driveLink && Boolean(formik.errors.driveLink)/>
            <br />
            {loader && <Loader />}
            {
                submit &&
                <Button type='submit' className='dashboard-button'>Submit</Button>
            }
            {saveVerticalError && saveVerticalError}
        </form>
    )
}

export default VerticalForm
