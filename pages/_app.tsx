import { AppProps } from "next/app";
import "../src/css/global.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = ({ Component, pageProps }: AppProps) => {
  // Instead do this, which ensures each request has its own cache:
  const [queryClient] = useState(() => new QueryClient({}));

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
