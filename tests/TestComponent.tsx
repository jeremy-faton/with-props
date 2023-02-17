import React from 'react'

interface Props extends React.PropsWithChildren {
  foo?: string
  bar?: string
}

function TestComponent ({ foo, bar, children }: Props): React.ReactNode {
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
