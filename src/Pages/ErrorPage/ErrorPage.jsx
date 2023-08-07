import React from 'react'
import error from '../ErrorPage/error.module.scss'

const ErrorPage = () => {
  return (
    <div className={error.error}>
      <h1>404 Error</h1>
      <p>Sorry!!! ,Page not found</p>
    </div>
  )
}

export default ErrorPage
