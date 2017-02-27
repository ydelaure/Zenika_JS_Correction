/**
 * Unit tests for like-btn.js
 */

jest.dontMock('../like-btn');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import superagent from 'superagent';
import rules from '../../../server/rules';
import actions from '../actions/likes-actions';
import store from '../store/app-store';

// Use NodeJS style because of hoisting and `jest.dontMock`.
const Btn = require('../like-btn');

describe('LikeBtn', function() {
  let rule;
  let button;

  beforeEach(function() {
    rule = _.cloneDeep(rules[0]);
    store.getRules = jest.genMockFn().mockImplementation(() => data)
    button = <Btn type="up" rule={rule} />;
    // actions.doUnlike = jest.genMockFn();
  });

  it('should increment counter up', function() {
    const instance = TestUtils.renderIntoDocument(button);
    const component = TestUtils.findRenderedComponentWithType(instance, Btn);
    const domNode = ReactDOM.findDOMNode(component);

    // TestUtils.Simulate.click(domNode);
    actions.doLike = jest.genMockFn();
    TestUtils.Simulate.click(domNode);
    expect(doLike).toBeCalled();
    // expect(actions.doUnlike).not.toBeCalled();
  });

  // it('should increment counter down', function() {
  //   const instance = TestUtils.renderIntoDocument(button);
  //   const component = TestUtils.findRenderedComponentWithType(instance, Btn);
  //   const domNode = ReactDOM.findDOMNode(component);
  //
  //   TestUtils.Simulate.click(domNode);
  //
  //   expect(actions.doUnlike).toBeCalledWith(rule);
  //   expect(actions.doLike).not.toBeCalled();
  // });
});
