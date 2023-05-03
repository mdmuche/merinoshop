import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>oops! wrong url <Link to={'/'}>Home</Link></h2>
    </div>
  )
}

export default Error