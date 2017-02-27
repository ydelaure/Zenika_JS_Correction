import superagent from 'superagent'

export const RULES_LOADED = 'RULES_LOADED'
export const loadRules = () => {
  return (dispatch) => {
    superagent.get('/rest/rules')
      .set('Accept', 'application/json')
      .end((err, res) => {
        dispatch({
          type: RULES_LOADED,
          rules: res.body
        })
      })
  }
}
