import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AccountsSideBar = ({ accounts, filterPosts }) => {
  // Redux solution:
  // const accounts = useSelector((state) => state.Accounts);

  // const createCheckBoxState = (accounts) => (accounts.map((acct, i) => ({
  //   [`account${i}`]: false
  // }));

  // const checkBoxState = createCheckBoxState(accounts);

  // let checkBoxState = Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({[k]: v * v})));

  // console.log('checkBoxState', checkBoxState);

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    facebook: true,
    instagram: true,
  });

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      filterPosts(newState);
      return newState;
    });
  };

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      filterPosts(newState);
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  const circleClasser = (acct) => (acct.name === 'FB account' ? 'circle yellow-bg' : 'circle blue-bg white-tx');

  const listAccounts = (accts) =>
    accts.map((acct, i) => (
      <li key={i}>
        <div className="checkbox">
          <input type="checkbox" onChange={() => toggleCheck(acct.socialMedia)} checked={checked[acct.socialMedia]} />
        </div>
        <div className={circleClasser(acct)}>
          <p>{acct.initial}</p>
        </div>
        <p>{acct.name}</p>
      </li>
    ));

  return (
    <main className="sidebar">
      <div className="select-all">
        <input type="checkbox" onChange={(event) => selectAll(event.target.checked)} checked={checkedAll} />
        <p>Select All Accounts</p>
      </div>
      <div>{listAccounts(accounts)}</div>
    </main>
  );
};

export default AccountsSideBar;
