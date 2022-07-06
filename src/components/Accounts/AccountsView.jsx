import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AccountsSideBar from './AccountsSideBar.jsx';
import Posts from '../Posts/Posts.jsx';

import { getAllPosts } from '../../redux/actions/postsActions';
import { getAllAccounts } from '../../redux/actions/accountsActions';

const AccountsView = () => {
  const dispatch = useDispatch();

  const fetchPosts = () => {
    try {
      dispatch(getAllPosts());
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchPosts();
    dispatch(getAllAccounts());
  }, []);

  return (
    <main className="accounts-view">
      <AccountsSideBar />
      <Posts />
    </main>
  );
};

export default AccountsView;
