import React from 'react'
import PropTypes from 'prop-types'
import './Loader.css';

const Loader = props => {
    return (
        <div style={{textAlign: "center"}}>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

Loader.propTypes = {

}

export default Loader
