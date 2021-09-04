import React from 'react'
import PropTypes from 'prop-types'

const Vertical = ({ index, clicked, onClick, title }) => {

    const clickedStyle = {
        backgroundColor: '#4c64ea',
        color: '#fff'
    }

    return (
        <div className="padded-box vertical"
            onClick={() => onClick(index)}
            style={clicked ? clickedStyle : null}>
            {title}
        </div>
    )
}

Vertical.propTypes = {

}

export default Vertical
