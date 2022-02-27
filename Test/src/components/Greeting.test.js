import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a test', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // n/a

    //Assert
    const helloWorldElements = screen.getByText('Hello World!');
    expect(helloWorldElements).toBeInTheDocument();
  });

  test("renders It's good to see you! if button was not clicked", () => {
    render(<Greeting />);

    const paraElement = screen.getByText("It's good to see you!");
    expect(paraElement).toBeInTheDocument();
  })
;
  test('render Change if button was clicked', () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const changedElement = screen.getByText("Changed", {exact: false});
    expect(changedElement).toBeInTheDocument();
  });

  test('do not render good to see you if button is clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const seeYouElement = screen.queryByText('good to see you', {exact: false});
    expect(seeYouElement).toBeNull();
  })

});
