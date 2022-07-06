import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AccountsSideBar from './AccountsSideBar.jsx';
import Posts from '../Posts/Posts.jsx';

import { getAllPosts } from '../../redux/actions/postsActions';
import { getAllAccounts } from '../../redux/actions/accountsActions';

const AccountsView = () => {
  // Redux solution:
  // const dispatch = useDispatch();

  // const fetchPosts = () => {
  //   try {
  //     dispatch(getAllPosts());
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  //   dispatch(getAllAccounts());
  // }, []);

  const socialAccounts = [
    {
      name: 'FB account',
      socialMedia: 'facebook',
      initial: 'J',
    },
    {
      name: 'IG account',
      socialMedia: 'instagram',
      initial: 'J',
    },
  ];

  const scheduledPosts = [
    {
      name: 'FB account',
      socialMedia: 'facebook',
      initial: 'J',
      caption: 'caption',
      timestamp: 'Sat 30 Oct, 6:00pm',
    },
    {
      name: 'IG account',
      socialMedia: 'instagram',
      initial: 'J',
      caption: 'test',
      timestamp: 'Sat 30 Oct, 9:00am',
    },
  ];

  let myPosts = scheduledPosts;

  const filterPosts = (checkedAccounts) => {
    console.log(`filterPosts checkedAccounts:`);
    console.log(checkedAccounts);
    return checkedAccounts;
  };

  return (
    <main className="accounts-view">
      <AccountsSideBar accounts={socialAccounts} filterPosts={filterPosts} />
      <Posts scheduledPosts={myPosts} />
    </main>
  );
};

export default AccountsView;
