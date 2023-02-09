# withProps

[![npm version](https://badge.fury.io/js/with-props-hoc.svg)](https://badge.fury.io/js/with-props-hoc)
[![build](https://github.com/jeremy-faton/with-props/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jeremy-faton/with-props/actions/workflows/npm-publish.yml)

Higher order component to inject a subset of props for code reuse with TypeScript type declaration.

## About

```js
import React from 'react'

const withProps = (Composed, props) => own => <Composed {...{ ...props,...own }}>{own.children}</Composed>
```

Non-react statics methods are copied over using [hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics).

Be aware of other [HOC caveats](https://reactjs.org/docs/higher-order-components.html#caveats) when using this.

## Usage

```js
import withProps from 'with-props-hoc'

const NewComponent = withProps(SourceComponent, props)
```