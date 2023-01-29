import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "./context/appcontext";

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
