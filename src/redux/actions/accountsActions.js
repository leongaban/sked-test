// ACTION TYPES
export const Actions = {
  GET_ACCOUNTS: 'GET_ACCOUNTS',
};

// Get Accounts
export const getAllAccounts = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.GET_ACCOUNTS,
    });
  };
};
