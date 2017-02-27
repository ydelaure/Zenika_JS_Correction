/**
 * Unit Tests for likes-actions.js.
 */

jest.dontMock('../rules-actions');

import _ from 'lodash';
import superagent from 'superagent';
import rules from '../../../../server/rules';

// Use NodeJS style because of hoisting and `jest.dontMock`.
const actions = require('../rules-actions');

describe('Likes Actions', function() {
  let rule;

  beforeEach(function() {
    superagent.end.mockImplementation(function(callback) {
      callback(null, {
        ok: true,
        body: _.cloneDeep(rules)
      });
    });
  });

  it('should load rules', function() {
    const dispatch = jest.genMockFn();
    actions.loadRules()(dispatch);
    expect(dispatch).toBeCalledWith({
      type: actions.RULES_LOADED,
      rules,
    });
  });
});
