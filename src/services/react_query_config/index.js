import { QueryClient } from "react-query";

const defaultConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
};

const queryClient = new QueryClient(defaultConfig);

export default queryClient;
