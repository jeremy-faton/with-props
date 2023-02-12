import React from 'react'

const TestInputComponent: React.FC = props => {
  return (
    <input { ...{ ...props } } />
  )
}

export default TestInputComponent
