// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'
import count from '../components/Counter';
let basicCounter
let increaseCount
let decreaseCount

beforeEach(() => {
  // Render the Counter component here // we wont need to do this in the future tests
  render(<Counter />);
  basicCounter = screen.getByTestId('count')
  increaseCount = screen.getByRole('button', { name: '+' })
  decreaseCount = screen.getByRole('button', { name: '-' })
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(basicCounter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(increaseCount);
  expect(basicCounter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(decreaseCount);
  expect(basicCounter).toHaveTextContent("-1");
});
