import { connect } from 'react-redux'
import { find } from 'lodash'

import { loadRules } from './actions/rules-actions'

import Component from './form-rule'

const mapStateToProps = ({ rules }, { params }) => {
  return {
    rule: find(rules, { 'id': parseInt(params.id) }) || {}
  }
}

export default connect(mapStateToProps)(Component)
