import PropTypes from 'prop-types'
import { React, useState } from 'react'
import Button from '@material-ui/core/Button';
    
const DisableButton = props => {

    const [confirm, setConfirm] = useState(false)
    const showOptions = () => setConfirm(true)
    const hideOptions = () => setConfirm(false)

    return (
        <div>
            {!confirm &&
                <Button variant="outlined" color="secondary" className='disable-button' onClick={showOptions}>Disable</Button>}
            {confirm &&
                <>
                    <Button variant="outlined" color="secondary" className='disable-button' onClick={hideOptions}>
                        No
                    </Button>
                    <Button variant="outlined" color="primary" className='disable-button'>
                        Yes
                    </Button>
                </>
            }
        </div>
    )
}

DisableButton.propTypes = {

}

export default DisableButton
