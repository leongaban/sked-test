import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AccountsSideBar from './AccountsSideBar.jsx';
import Posts from '../Posts/Posts.jsx';

import { getAllPosts } from '../../redux/actions/postsActions';

const AccountsView = () => {
  const dispatch = useDispatch();

  const fetchPosts = () => {
    try {
      dispatch(getAllPosts());
      // const { data } = await axios.get('url/api')
      // dispatch(getItemsSuccess(data))
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="accounts-view">
      <AccountsSideBar />
      <Posts />
    </main>
  );
};

export default AccountsView;

// class AccountsView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//     };

//     componentDidMount() {
//       console.log('componentDidMount');
//     }

//     render() {
//       return (
//         <div>AccountsView</div>
//       );
//     }
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchAllPosts: () => dispatch(fetchAllPosts()),
// })

// const mapStateToProps = (state) => ({
//   posts: state.PostsReducer.posts,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AccountsView)
