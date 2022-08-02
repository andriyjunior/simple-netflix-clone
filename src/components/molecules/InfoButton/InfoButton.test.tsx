import { render, fireEvent, screen } from '@testing-library/react';
import { InfoButton } from './InfoButton';

test('info button', () => {
  render(<InfoButton>Info Button test</InfoButton>);

  const button = screen.getByTestId('infoButton');
  expect(button).toHaveTextContent('Info Button test');
});
