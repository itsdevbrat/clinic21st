import { React, useState } from 'react'

const Vertical = ({ index, onClick, title }) => {

    const clickedStyle = {
        backgroundColor: '#4c64ea',
        color: '#fff'
    }

    const [clicked, setClicked] = useState(false)

    const buttonClicked = () => {
        setClicked(true)
        onClick(index)
    }

    return (
        <div className="padded-box vertical"
            onClick={buttonClicked}
            style={clicked ? clickedStyle : null}>
            {title}
        </div>
    )
}

Vertical.propTypes = {

}

export default Vertical
