import { RULES_LOADED } from '../actions/rules-actions'
import { DO_LIKE, DO_UNLIKE } from '../actions/likes-actions'
import { findIndex } from 'lodash'

const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case RULES_LOADED : {
      return action.rules
    }

    case DO_LIKE: {
      const index = findIndex(state, {'id': action.ruleId})
      const newRule = { ...state[index] };
      const newRules = [...state];
      newRule.likes++;
      newRules[index] = newRule;
      return newRules;
    }

    case DO_UNLIKE: {
      const index = findIndex(state, { 'id': action.ruleId })
      const newRule = { ...state[index] };
      const newRules = [...state];
      newRule.dislikes++;
      newRules[index] = newRule;
      return newRules;
    }

    default:
      return state
  }
}

export default function(state= {}, action) {
  return {
    rules: rulesReducer(state.rules, action)
  }
}
