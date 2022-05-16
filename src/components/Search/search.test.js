import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

test("renders search input", () => {
  //mock
  const onSearch = jest.fn();

  render(<Search searchInputHandler={onSearch} />);

  const searchInput = screen.getByTestId("textField-searchInput");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "study" } });
  expect(onSearch).toHaveBeenCalled();
});
