import React from 'react';
import { isEmpty } from 'lodash'
import classnames from 'classnames'

export default class FormRule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rule: {},
      validity: {
        title: true,
        description: true
      },
    }
  }

  componentDidMount() {
    this.setState({
      rule: this.props.rule
    })
  }

  onTitleChange(e) {
    this.setState({
      rule: {
        ...this.state.rule,
        title: e.target.value
      }
    })
  }

  onDescriptionChange(e) {
    this.setState({
      rule: {
        ...this.state.rule,
        description: e.target.value
      }
    })
  }

  validateTitle() {
    let title = document.getElementById('rule-title')
    this.setState({
      validity: {
        ...this.state.validity,
        title: title.checkValidity(),
      }
    })
  }

  validateDescription() {
    let description = this.state.rule.description || ''
    const res = description.length ? description.length > 3 && description.length < 100 : true
    this.setState({
      validity: {
        ...this.state.validity,
        description: res,
      }
    })
  }

  isValid() {
    const validity = this.state.validity
    return validity.title && validity.description
  }

  render() {
    const { rule } = this.state
    const title = isEmpty(rule) ? "Titre" : rule.title
    const description = isEmpty(rule) ? "Description" : rule.description

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>Nouvelle Soumission</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className={classnames('form-group', {'has-error': !this.state.validity.title})}>
              <label htmlFor="rule-title">Titre</label>
              <input
                type="text"
                className="form-control"
                id="rule-title"
                placeholder="Titre"
                value={title}
                onChange={this.onTitleChange.bind(this)}
                required
                maxLength="50"
                onBlur={this.validateTitle.bind(this)}
              />
            </div>
            <div className={classnames('form-group', {'has-error': !this.state.validity.description})}>
              <label htmlFor="rule-desc">Description</label>
              <textarea
                className="form-control"
                id="rule-desc"
                placeholder="Description"
                value={description}
                onChange={this.onDescriptionChange.bind(this)}
                onBlur={this.validateDescription.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-default"
              disabled={!this.isValid()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
