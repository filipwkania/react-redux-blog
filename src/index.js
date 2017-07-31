import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NoMatch from './components/NoMatch';
import NewPostForm from './components/NewPostForm';
import PostsIndex from './containers/PostsIndexContainer';
import PostDetail from './components/PostDetail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
       <Switch>
        <Route exact path ='/' component={PostsIndex}/>
        <Route path ='/posts/new' component={NewPostForm} />
        <Route path ='/posts/:id' component={PostDetail} />
        <Route path ='*' component={NoMatch} status={404} />
      </Switch>
    </BrowserRouter>
  </Provider>
, document.querySelector('.container'));