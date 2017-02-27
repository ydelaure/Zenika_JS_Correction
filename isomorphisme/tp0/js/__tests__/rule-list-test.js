jest.dontMock('../rule-list');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux'
import superagent from 'superagent';
import _ from 'lodash';

import Rule from '../rule'
import rules from '../../../server/rules';
import store from '../store/app-store'

const RuleList = require('../rule-list-container');

describe('Rule List', function() {
  let provider
  let ruleListElement;
  let data

  beforeEach(function() {
    data = _.cloneDeep(rules);
    store.getRules = jest.genMockFn().mockImplementation(() => data)
    ruleListElement = <RuleList store={store} />;
 });

 it('should display list of rules', function() {
    const component = TestUtils.renderIntoDocument(ruleListElement);
    const domNode = TestUtils.findRenderedComponentWithType(component, RuleList)

    expect(domNode).toBeDefined();
    expect(component.stateProps.rules).toEqual([]);

    let children = TestUtils.scryRenderedComponentsWithType(component, Rule)
    expect(children.length).toBe(0)
  })
});
