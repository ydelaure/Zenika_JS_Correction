import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import LikeBtn from './like-btn-container';

export default class Rule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folded: !this.props.rule.description,
    }
  }

  toggle() {
    this.setState({folded: !this.state.folded})
  }

  render() {
    // Get the rule object from props.
    const rule = this.props.rule;
    const { folded } = this.state

    // Panel Header
    const header = (
      <div className="panel-heading" onClick={e => this.toggle(e)}>
        {rule.title}
        <i
          className={classnames(
            'pull-right glyphicon',
            {
              ['glyphicon-chevron-up']: folded,
              ['glyphicon-chevron-down']: !folded,
            }
          )}
        ></i>
      </div>
    )

    // Panel Body
    const body = (
      <div className="panel-body">
        <p>{rule.description}</p>
      </div>
    )

    // Panel Footer
    const footer = (
      <div className="panel-footer">
        <LikeBtn rule={rule} type="up" />
        <LikeBtn rule={rule} type="down" />
        <ul className="list-inline">
          {rule.tags.map(tag => <li key={tag}><span className="badge">{tag}</span></li>)}
        </ul>
        <div className="pull-right">
          <Link to={`/edit/${rule.id}`} title="Modifier">
            <i className= "glyphicon glyphicon-pencil"></i>
          </Link>
        </div>
      </div>
    )

    return (
      <div className="panel panel-primary">
        {header}
        {folded || body}
        {footer}
      </div>
    )
  }
}
