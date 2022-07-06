import { render, screen } from '@testing-library/react';
import AccountsSideBar from './AccountsSideBar';

describe('The AccountsSideBar component', () => {
  test('containes expected classes', () => {
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

    const filterPosts = { facebook: true, instagram: true };
    const { container } = render(<AccountsSideBar accounts={socialAccounts} filterPosts={filterPosts} />);
    expect(container.getElementsByClassName('sidebar').length).toBe(1);
    expect(container.getElementsByClassName('select-all').length).toBe(1);
    expect(container.getElementsByClassName('checkbox').length).toBe(2);
  });
});
