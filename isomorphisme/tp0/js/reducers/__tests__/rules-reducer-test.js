jest.dontMock('../rules-reducer')

import rules from '../../../../server/rules';

const reducer = require('../rules-reducer')

describe('Rules Reducer', function() {
  const initialState = { rules: [] }

  it('should return the init state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should load rules', () => {
    const action = { type: 'RULES_LOADED', rules: rules }
    const newState = reducer(initialState, action)

    expect(newState).not.toEqual(initialState)
    expect(newState.rules).toEqual(rules)
  })

  it('should increment likes', () => {
    let newState = reducer(initialState, { type: 'RULES_LOADED', rules: rules })
    expect(newState.rules[0].likes).toEqual(0);

    newState = reducer(newState, { type: 'DO_LIKE', ruleId: 1 })
    expect(newState.rules[0].likes).toEqual(1);
  })

  it('should increment dislikes', () => {
    let newState = reducer(initialState, { type: 'RULES_LOADED', rules: rules })
    expect(newState.rules[0].dislikes).toEqual(0);

    newState = reducer(newState, { type: 'DO_UNLIKE', ruleId: 1 })
    expect(newState.rules[0].dislikes).toEqual(1);
  })
});
