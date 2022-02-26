import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Import React Query
import { QueryClientProvider } from "react-query";
import queryClient from "services/react_query_config";

// Import components
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
