import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" style={{ padding: '20px' }}>
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      window.location.href = '/';
    }}
  >
    <ThemeProvider defaultTheme="light" storageKey="cowolocation-theme">
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
