// __test__/page.test.jsx
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import Page from '../src/app/page';

test('renders a heading', async () => {
  await act(async () => {
    render(<Page />);
  });

  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
});