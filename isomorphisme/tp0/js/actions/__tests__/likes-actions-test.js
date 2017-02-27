/**
 * Unit Tests for likes-actions.js.
 */

jest.dontMock('../likes-actions');

import _ from 'lodash';
import superagent from 'superagent';
import rules from '../../../../server/rules';
// Use NodeJS style because of hoisting and `jest.dontMock`.
const actions = require('../likes-actions');

describe('Likes Actions', function() {
  let rule;

  beforeEach(function() {
    rule = _.cloneDeep(rules[0]);
    superagent.end.mockImplementation(function(callback) {
      callback(null, {
        ok: true,
        body: rule
      });
    });
  });

  it('should post like', function() {
    const dispatch = jest.genMockFn();
    actions.doLike(5)(dispatch);
    expect(dispatch).toBeCalledWith({
      type: actions.DO_LIKE,
      ruleId: 5
    });
  });

  it('should post dislike', function() {
    const dispatch = jest.genMockFn();
    actions.doUnlike(15)(dispatch);
    expect(dispatch).toBeCalledWith({
      type: actions.DO_UNLIKE,
      ruleId: 15
    });
  });
});
