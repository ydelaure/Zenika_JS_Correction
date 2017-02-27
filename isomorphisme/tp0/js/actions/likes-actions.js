import superagent from 'superagent'

export const DO_LIKE = 'DO_LIKE'
export const doLike = (ruleId) => {
  return (dispatch) => {
    superagent.post(`/rest/rules/${ruleId}/likes`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        dispatch({
          type: DO_LIKE,
          ruleId
        })
      })
  }
}

export const DO_UNLIKE = 'DO_UNLIKE'
export const doUnlike = (ruleId) => {
  return (dispatch) => {
    superagent.post(`/rest/rules/${ruleId}/dislikes`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        dispatch({
          type: DO_UNLIKE,
          ruleId
        })
      })
  }
}
