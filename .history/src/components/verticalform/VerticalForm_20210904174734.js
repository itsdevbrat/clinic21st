import React, useState} from 'react'
import Loader from '../../components/loader/Loader'
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput'

const VerticalForm = props => {

    const [loader, setLoader] = useState(false)

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
