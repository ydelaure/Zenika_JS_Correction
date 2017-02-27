import { connect } from 'react-redux'

import { doLike, doUnlike } from './actions/likes-actions'

import LikeBtn from './like-btn'

const mapDispatchToProps = (dispatch, { rule }) => {
  return {
    doLike: () => dispatch(doLike(rule.id)),
    doUnlike: () => dispatch(doUnlike(rule.id)),
  }
}

const LikeBtnContainer = connect(
  undefined,
  mapDispatchToProps
)(LikeBtn);
export default LikeBtnContainer
