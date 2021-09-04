import React from 'react'
import Loader from '../../components/loader/Loader'
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput'

const VerticalForm = props => {
    return (
        <form className="dashboard-form verticalForm">
            <OutlinedInput name="verticalName" type="text" placeholder="Vertical Name" margin='dense'/>
            <OutlinedInput name="verticalName" type="text" placeholder="Vertical Google Drive folder link" margin='dense'/>
            <Button className='dashboard-button'>Submit</Button>
            <Loader />
        </form>
    )
}

export default VerticalForm
