import withProps from '../lib/index'
import renderer from 'react-test-renderer'
import TestComponent from './TestComponent'

it('copies static properties', () => {
  TestComponent.staticProp = 'test'
  const NewComponent = withProps(TestComponent, {})
  expect(NewComponent.staticProp).toEqual('test')
})

it('injects properties', () => {
  const NewComponent = withProps(TestComponent, { foo: 'value1', bar: 'value2' })
  const rendered = renderer.create(<NewComponent>foobar</NewComponent>)
  const tree = rendered.toJSON()
  expect(tree).toMatchSnapshot()
})

it('overrides injected properties', () => {
  const NewComponent = withProps(TestComponent, { foo: 'value1' })
  const rendered = renderer.create(<NewComponent foo="value3">foobar</NewComponent>)
  const tree = rendered.toJSON()
  expect(tree).toMatchSnapshot()
})
