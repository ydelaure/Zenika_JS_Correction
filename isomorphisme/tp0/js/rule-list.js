import React from 'react';
import Rule from './rule';

import superagent from 'superagent';

export default class RuleList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadRules()
  }

  render() {
    const elements = this.props.rules.map(rule => <Rule key={rule.id} rule={rule} />)
    return <div>{elements}</div>;
  }
}
