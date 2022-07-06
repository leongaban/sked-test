import { render, screen } from '@testing-library/react';
import Circle from './Circle';

describe('The Circle partial component', () => {
  test('renders a Circle component', () => {
    const { container } = render(<Circle initial='L' name='facebook' />);
    expect(container.getElementsByClassName('circle-container').length).toBe(1);
  });
});
