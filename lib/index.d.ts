import React from "react"

declare function withProps<P extends React.PropsWithChildren>(Composed: React.ComponentType<P>, props: P): React.ComponentType<P>

export = withProps