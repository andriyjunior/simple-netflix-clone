import { render, fireEvent, screen } from '@testing-library/react';
import { PlayButton } from './PlayButton';

test('play button', () => {
  render(<PlayButton url="/">Play</PlayButton>);

  const button = screen.getByTestId('PlayButton');
  expect(button).toHaveTextContent('Play');
});
