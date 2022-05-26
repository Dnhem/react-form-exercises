import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

//Smoke Test
it("renders without crashing", () => {
  render(<TodoList />);
});

//Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", () => {
  const { getByLabelText, fireEvent, queryByText } = render(<TodoList />);
  const input = getByLabelText("Enter new todo:");
  const btn = queryByText("Add");
  expect(queryByText("Cook Burgers")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Cook Burgers" } });
  fireEvent.click(btn);
  expect(queryByText("Cook Burgers")).toBeInTheDocument();
});
