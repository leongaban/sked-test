import React, { useState, useEffect } from 'react';
import Circle from '../partials/Circle.jsx';

const AccountsSideBar = ({ accounts, filterPosts }) => {
  // Redux solution:
  // const accounts = useSelector((state) => state.Accounts);

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

  const listAccounts = (accts) =>
    accts.map((acct, i) => (
      <li key={i} className="social-media-account-toggle">
        <div className="checkbox">
          <input
            type="checkbox"
            data-testid={`check${i}`}
            id={`check${i}`}
            onChange={() => toggleCheck(acct.socialMedia)}
            checked={checked[acct.socialMedia]}
          />
        </div>
        <Circle initial={acct.initial} name={acct.name} />
        <p>{acct.name}</p>
      </li>
    ));

  return (
    <main className="sidebar">
      <div className="select-all">
        <input type="checkbox" id="check-all" onChange={(event) => selectAll(event.target.checked)} checked={checkedAll} />
        <p>Select All Accounts</p>
      </div>
      <div>{listAccounts(accounts)}</div>
    </main>
  );
};

export default AccountsSideBar;
