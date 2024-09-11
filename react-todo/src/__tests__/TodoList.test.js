import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Add new todo/i)).toBeInTheDocument();
});

test("adds a new todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add new todo/i), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
