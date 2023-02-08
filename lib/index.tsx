import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

/**
 * Simple Higher Order Component to inject an initialised subset of props in a component.
 *
 * @param Composed
 * @param props
 *
 * @author Jeremy Faton
 */
const withProps = function<P extends React.PropsWithChildren>(Composed: React.ComponentType<P>, props: P): React.ComponentType<P> {
  class WithProps extends React.Component<P> {
    render (): React.ReactNode {
      return <Composed {...{ ...props, ...this.props }}>{this.props.children}</Composed>
    }
  }
  hoistNonReactStatics(WithProps, Composed)
  return WithProps
}

export default withProps
