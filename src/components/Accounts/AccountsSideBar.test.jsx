import { render, screen } from '@testing-library/react';
import AccountsSideBar from './AccountsSideBar';

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

describe('The AccountsSideBar component', () => {
  test('contains expected classes and text', () => {
    const filterPosts = { facebook: true, instagram: true };
    const { container, getByTestId } = render(<AccountsSideBar accounts={socialAccounts} filterPosts={filterPosts} />);
    expect(container.getElementsByClassName('sidebar').length).toBe(1);
    expect(container.getElementsByClassName('select-all').length).toBe(1);
    expect(container.getElementsByClassName('checkbox').length).toBe(2);

    expect(screen.getByText('Select All Accounts')).toBeVisible();
    expect(screen.getByText('FB account')).toBeVisible();
    expect(screen.getByText('IG account')).toBeVisible();

    expect(getByTestId('check0')).toHaveAttribute('id', 'check0');
    expect(getByTestId('check1')).toHaveAttribute('id', 'check1');

    // expect(getByTestId('check0')).toHaveAttribute('checked', 'true');
    // expect(getByTestId('check1')).toHaveAttribute('checked', 'true');
  });

  // test('FB post is not visible if facebook is filtered out', () => {
  //   const filterPosts = { facebook: false, instagram: true };
  //   const { container } = render(<AccountsSideBar accounts={socialAccounts} filterPosts={filterPosts} />);
  //   expect(container.getElementsByClassName('sidebar').length).toBe(1);
  //   expect(screen.getByText('FB account')).not.toBeVisible();
  //   expect(screen.getByText('IG account')).toBeVisible();
  // });
});
