import { render, screen } from "@testing-library/react";
import App from "./App";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

/**
 * I have no more time to write proper test. Sorry :'(
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
