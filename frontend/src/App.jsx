import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Forgot from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 0 } },
  });
  return (
    <div className="container-fluid">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_API_GOOGLE_CLIENT_ID}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/reset/:token" element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
