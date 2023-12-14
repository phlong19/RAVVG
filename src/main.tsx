import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ui/ErrorFallBack.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
