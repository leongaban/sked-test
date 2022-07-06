import { configureStore } from '@reduxjs/toolkit';

import PostsReducer from './redux/reducers/postsReducer';

const store = configureStore({ reducer: PostsReducer });

export default store;
