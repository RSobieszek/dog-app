import { render, screen } from "@testing-library/react";
import App from "./App";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

/**
 * I have little to no comercial experience with testing components.
 * Only unit testing with simple logic.
 * Probably better integration test are what you wanted to see :(
 */
describe("Elements rendered by App", () => {
  it("should render header", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should render loader", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const loader = screen.getByRole("img", { name: /loader/i });
    expect(loader).toBeInTheDocument();
  });
});
