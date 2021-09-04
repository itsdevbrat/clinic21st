import PropTypes from 'prop-types'

const disableButton = props => {
    return (
        <div>
            {!confirm &&
                                        <Button variant="outlined" color="secondary" className='disable-button' onClick={showOptions}>Disable</Button>}
                                    {confirm &&
                                        <>
                                            <Button variant="outlined" color="secondary" className='disable-button' onClick={hideOptions}>No</Button>
                                            <Button variant="outlined" color="primary" className='disable-button'>Yes</Button>
                                        </>
                                    }
        </div>
    )
}

disableButton.propTypes = {

}

export default disableButton
