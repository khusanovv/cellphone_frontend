import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route path='/' />
    <Route path='/login' />
    <Route path='/admin' />
    <Route path='/signup' />
    <Route path='/admin/allproducts' />
    <Route path='/admin/createnew' />
  </Switch>
)