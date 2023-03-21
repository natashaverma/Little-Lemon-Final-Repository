import { render, screen } from '@testing-library/react';
import Reservations from './Components/Reservations';
import BookingConfirmation from './Components/BookingConfirmation';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// Test if homepage title is in the document
describe("loads the home page", () => {
  test("renders little lemon home page title", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const littlelemon = screen.getByTestId("homepage-title");
    expect(littlelemon).toBeInTheDocument();
  });
});

// Test if form is correct in document
test("form loads and inputs displays as expected", () => {
  const form = {
    name: "inputname",
    guests: "1",
    date: "2023-01-17",
    time: "09:30",
  };
  render(
    <Router>
      <Reservations form={form} onChange={jest.fn()} onSubmit={jest.fn()} />
    </Router>
  );
  const title = screen.getByText("Reserve your Table");
  expect(title).toBeInTheDocument();

  const name = screen.getByPlaceholderText("Your Name");
  expect(name).toBeInTheDocument();
  expect(name).toHaveValue("inputname");
});


// Test success page

describe("loads the home page", () => {
  test("renders little lemon success page", () => {
    render(
      <Router>
        <BookingConfirmation />
      </Router>
    );
    const successPage = screen.getByText("The booking has been confirmed!");
    expect(successPage).toBeInTheDocument();
  });

});

//Form will not be submitted in case of missing fields
test("form wont submit on error", () => {
  const form = {
    name: "",
    guests: "",
    date: "",
    time: "",
  };
  render(
    <Router>
      <Reservations form={form} onChange={jest.fn()} onSubmit={jest.fn()} />
    </Router>
  );
  const button = screen.getByTestId("submitbutton");
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("disabled");
});


// Form will submit on correct errors
test("form submit button active on valid form", () => {
  const form = {
    name: "inputname",
    guests: "1",
    date: "2023-01-17",
    time: "09:30",
  };
  render(
    <Router>
      <Reservations form={form} onChange={jest.fn()} onSubmit={jest.fn()} />
    </Router>
  );
  const button = screen.getByTestId("submitbutton");
  expect(button).toBeInTheDocument();
  expect(button).not.toHaveAttribute("disabled");
});
