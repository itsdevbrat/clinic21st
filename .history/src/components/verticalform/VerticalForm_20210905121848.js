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

    const saveVertical = values => {
        save(values, { 'Authorization': jwt })
            .then(response => {
                console.log(response)
                response.status === 200
                    ? setLoader(false)
                    : setSaveVerticalError('Something went wrong!')
            })
            .catch(error => {
                console.log(error.response)
                setSaveVerticalError(error.response && error.response.data
                    ? error.response.data
                    : 'Something went wrong! Contact Administrator')
            })
        formik.setSubmitting(false)
        setLoader(false)

    

    return (
        <form className="dashboard-form verticalForm">
            <OutlinedInput name="verticalName" type="text" placeholder="Vertical Name" margin='dense' />
            <br />
            <OutlinedInput name="verticalName" type="text" placeholder="Google drive folder link" margin='dense' />
            <br />
            <Button className='dashboard-button'>Submit</Button>
            {loader && <Loader />}
        </form>
    )
}

export default VerticalForm
