import React from 'react'

interface Props extends React.PropsWithChildren {
  foo?: string
  bar?: string
}

const TestComponent: React.FC<Props> = ({ foo, bar, children }) => {
  return (
    <>
      {
        foo
          ? <p>{foo}</p>
          : null
      }
      {children}
      {
        bar
          ? <p>{bar}</p>
          : null
      }
    </>
  )
}

export default TestComponent
