import { connect } from 'react-redux'

import { loadRules } from './actions/rules-actions'

import Component from './rule-list'

const mapStateToProps = ({ rules }) => {
  return {
    rules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRules: () => dispatch(loadRules())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
