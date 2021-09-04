import PropTypes from 'prop-types'

const Option = ({ title, onClick }) => {
    return (
        <div className="option" onClick={onClick}>
            {title}
            <div style={{ flexGrow: 1 }} className='arrow-div'>
                <img src="assets/next.png" style={{
                    width: '20px',
                    height: '20px',
                }} />
            </div>
        </div>
    )
}

Option.propTypes = {
    title: PropTypes.string
}

export default Option
