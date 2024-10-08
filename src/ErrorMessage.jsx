import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An an error occured: {error.toString()}</div>
)

export default ErrorMessage
