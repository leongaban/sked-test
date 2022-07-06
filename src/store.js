// import { configureStore } from '@reduxjs/toolkit';

// import { PostsReducer } from './redux/reducers/postsReducer';

// const store = configureStore({ reducer: PostsReducer });

// export default store;

import ReduxThunk from 'redux-thunk';
import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import { PostsReducer } from './redux/reducers/postsReducer';

const middlewares = [ReduxThunk];

const reducer = {
  // accounts: AccountsReducer,
  posts: PostsReducer,
};

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
