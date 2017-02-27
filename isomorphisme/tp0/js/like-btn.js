import React from 'react';
import superagent from 'superagent';
import classnames from 'classnames';

export default class LikeBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  isUp() {
    return this.props.type === "up"
  }

  inc() {
    if (this.isUp()) this.props.doLike()
    else this.props.doUnlike()
  }

  render() {
    const classes = {
      "glyphicon-thumbs-up": this.isUp(),
      "glyphicon-thumbs-down": !this.isUp(),
    }
    const { rule } = this.props
    const value = this.isUp() ? rule.likes : rule.dislikes
    return (
      <a title={this.isUp() ? "+1" : "-1"} onClick={this.inc.bind(this)}>
        {value}
        <i className={classnames('glyphicon', classes)}></i>
      </a>
    )
  }
}
