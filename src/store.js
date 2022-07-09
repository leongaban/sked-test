import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { PostsReducer } from './redux/reducers/postsReducer';
import { AccountsReducer } from './redux/reducers/accountsReducer';

const middlewares = [ReduxThunk];

const reducer = {
  accounts: AccountsReducer,
  posts: PostsReducer,
};

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
