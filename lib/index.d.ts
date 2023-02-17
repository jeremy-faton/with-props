import React, {
  PropsWithRef,
  PropsWithChildren
} from 'react'

type Props<T> = PropsWithChildren & PropsWithRef<T>

declare function withProps<T>(Composed: React.ComponentType<Props<T>>, props: Props<T>): React.ComponentType<Props<T>>

export = withProps