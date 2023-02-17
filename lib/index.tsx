import React, {
  type PropsWithChildren,
  type PropsWithRef as BasePropsWithRef,
  type ForwardedRef,
  type RefAttributes,
  type ForwardRefExoticComponent,
  type ComponentType
} from 'react'
import hoistNonReactStatics, { type NonReactStatics } from 'hoist-non-react-statics'

type PropsWithForwardedRef<T> = PropsWithChildren & { forwardedRef?: ForwardedRef<T> }
type PropsWithRef<T> = PropsWithChildren & BasePropsWithRef<T>

/**
 * Simple Higher Order Component to inject an initialised subset of props in a component.
 *
 * @param Composed
 * @param props
 *
 * @author Jeremy Faton
 */
const withProps = function<T> (Composed: React.ComponentType<PropsWithRef<T>>, props: PropsWithRef<T>): ForwardRefExoticComponent<RefAttributes<T>> & NonReactStatics<ComponentType<PropsWithRef<T>>> {
  class WithProps extends React.Component<PropsWithForwardedRef<T>> {
    render (): React.ReactNode {
      const { forwardedRef, children, ...rest } = this.props
      return (
        <Composed ref={forwardedRef} {...{ ...props, ...rest }}>
          {children ?? props.children}
        </Composed>
      )
    }
  }
  const WithPropsAndForwardedRef = React.forwardRef<T>((props, ref) => (
    <WithProps {...props} forwardedRef={ref} />
  ))
  const name = Composed.displayName ?? Composed.name
  WithPropsAndForwardedRef.displayName = `withProps(${name})`
  return hoistNonReactStatics(WithPropsAndForwardedRef, Composed)
}

export default withProps
