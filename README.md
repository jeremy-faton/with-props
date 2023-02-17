# withProps

[![npm version](https://badge.fury.io/js/with-props-hoc.svg)](https://badge.fury.io/js/with-props-hoc)
[![build](https://github.com/jeremy-faton/with-props/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jeremy-faton/with-props/actions/workflows/npm-publish.yml)
[![Test](https://github.com/jeremy-faton/with-props/actions/workflows/test.yml/badge.svg)](https://github.com/jeremy-faton/with-props/actions/workflows/test.yml)

Higher order component to inject a subset of props for code reuse with TypeScript type declaration.

## About

```js
import React from 'react'

const withProps = (Composed, props) => own => <Composed {...{ ...props,...own }}>{own.children}</Composed>
```

Improvements over this one-liner are :

- Non-react statics methods are copied over using [hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics).

- ref is forwarded to the component being wrapped

- displayName will appear as 
```js
`withProps${Component.displayName}`
```

- TypeScript type declaration

⚠ Be aware of other [HOC caveats](https://reactjs.org/docs/higher-order-components.html#caveats) when using this. ⚠

## Usage

```js
import withProps from 'with-props-hoc'

const NewComponent = withProps(SourceComponent, props)
```
