import React, { createRef } from 'react'
import renderer from 'react-test-renderer'
import withProps from '../lib/index'
import TestComponent from './TestComponent'
import TestInputComponent from './TestInputComponent'
import TestRefComponent from './TestRefComponent'

it('copies static properties', () => {
  TestComponent.staticProp = 'test'
  const NewComponent = withProps(TestComponent, {})
  expect(NewComponent.staticProp).toEqual('test')
})

it('injects properties', () => {
  const NewComponent = withProps(TestComponent, { foo: 'value1', bar: 'value2' })
  const instance = renderer.create(<NewComponent>foobar</NewComponent>)
  const tree = instance.toJSON()
  expect(tree).toMatchSnapshot()
})

it('overrides injected properties', () => {
  const NewComponent = withProps(TestComponent, { foo: 'value1' })
  const instance = renderer.create(<NewComponent foo="value3">foobar</NewComponent>)
  const tree = instance.toJSON()
  expect(tree).toMatchSnapshot()
})

it('works with DOM', () => {
  const Input = withProps(TestInputComponent, { type: 'password' })
  const instance = renderer.create(<Input />)
  const tree = instance.toJSON()
  expect(tree).toMatchSnapshot()
})

it('forwards ref', () => {
  const NewComponent = withProps(TestRefComponent, {})
  const ref = createRef()
  renderer.create(
    <NewComponent ref={ref} />,
    {
      createNodeMock: (element) => {
        if (element.type === 'input') {
          return {
            test: 'value'
          }
        }
        return null
      }
    }
  )
  expect(ref).toMatchSnapshot()
})

it('has a display name', () => {
  TestComponent.displayName = 'TestComponent'
  const NewComponent = withProps(TestComponent, {})
  expect(NewComponent.displayName).toMatchSnapshot()
})

it('injects children property', () => {
  const NewComponent = withProps(TestComponent, { children: <TestInputComponent /> })
  const instance = renderer.create(<NewComponent />)
  expect(instance.toJSON()).toMatchSnapshot()
})

it('overrides injected children property', () => {
  const NewComponent = withProps(TestComponent, { children: <TestInputComponent /> })
  const instance = renderer.create(<NewComponent><p>test</p></NewComponent>)
  expect(instance.toJSON()).toMatchSnapshot()
})
