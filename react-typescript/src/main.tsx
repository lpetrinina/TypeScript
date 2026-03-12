import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./tutorials/07-redux-toolkit/store.ts";

// const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </QueryClientProvider> */}
  </StrictMode>,
);
