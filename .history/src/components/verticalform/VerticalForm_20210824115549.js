import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../../components/loader/Loader'
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput'

const VerticalForm = props => {
    return (
        <form class="dashboard-form verticalForm">
            <OutlinedInput name="verticalName" type="text" placeholder="Vertical Name" margin='dense'/>
            <Button className='dashboard-button'>Submit</Button>
            <Loader />
        </form>
    )
}

VerticalForm.propTypes = {

}

export default VerticalForm
