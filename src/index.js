import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostIndex from './components/posts_index';
import promise from 'redux-promise';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/*put most specific route on top using Switch*/}
        <Switch> 
        <Route path ="/posts/new" component={PostsNew} />
        <Route path ="/posts/:id" component={PostsShow} />
        <Route path ="/" component={PostIndex} />
        
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
