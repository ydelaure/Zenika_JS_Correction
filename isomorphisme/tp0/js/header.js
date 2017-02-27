import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand brand">Rules of Developers</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/" activeClassName="active">Accueil</Link></li>
            <li><Link to="/edit">Nouveau</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
