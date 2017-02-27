import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import Layout from '../layout'
import RuleList  from '../rule-list-container'
import FormRule from '../form-rule-container'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={RuleList} />
    <Route path="/edit" component={FormRule} />
    <Route path="/edit/:id" component={FormRule} />
  </Route>
);
