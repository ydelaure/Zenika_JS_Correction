jest.dontMock('../rule');

import React from 'react';
import TestUtils from 'react-addons-test-utils';


const Rule = require('../rule')
const rules = require('../../../server/rules')

describe('test rule', () => {
  let rule
  let element

  beforeEach(() => {
    rule = rules[0]
    element = <Rule rule={rule} />
  })

  it('should render rule', () => {
    const component = TestUtils.renderIntoDocument(element);
    expect(component).not.toBe(null)

    const panelHeader = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-heading');
    expect(panelHeader).toBeDefined()
    expect(panelHeader.textContent).toEqual(rule.title)

    const panelBody = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-body');
    expect(panelBody).toBeDefined()
    expect(panelBody.textContent).toEqual(rule.description)

    const panelFooter = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-footer');
    expect(panelFooter).toBeDefined()
  });

  it('should test shallow rendering', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(element)

    const result = renderer.getRenderOutput()
    expect(result.props.className).toBe('panel panel-primary')

    const children = result.props.children
    expect(children.length).toBe(3)
    const [header, body, footer] = children

    expect(header).toBeDefined()
    expect(header.props.className).toBe('panel-heading')
    expect(header.props.children[0]).toEqual(rule.title)

    expect(body).toBeDefined()
    expect(body.props.className).toBe('panel-body')
    expect(body.props.children).toEqual(<p>{rule.description}</p>)
    
    expect(footer).toBeDefined()
    expect(footer.props.className).toBe('panel-footer')
    expect(footer.props.children.length).toBe(4)
  })
});
