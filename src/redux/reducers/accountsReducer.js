import { Actions } from '../actions/accountsActions';

export const defaultAccountsState = {
  accounts: [
    {
      accountName: 'FB account',
      accountImageInitial: 'J',
    },
    {
      accountName: 'IG account',
      accountImageInitial: 'J',
    },
  ],
};

export const AccountsReducer = (state = defaultAccountsState, action) => {
  switch (action.type) {
    case Actions.GET_ACCOUNTS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
