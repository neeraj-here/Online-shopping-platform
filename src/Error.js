import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h3> You are lost. Allow us to help! </h3>
            <Link to='/products' className='error-page-btn'> Check out products! </Link>
        </div>
    )
}

export default Error
