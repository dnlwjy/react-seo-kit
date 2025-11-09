import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// SEO kit
import { SiteMetaData } from "@/components/SiteMetaData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// all pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        
        {/* Global SEO with pre-defined value */}
        <SiteMetaData
          title="Example App"
          description="This is an example application using react-seo-kit."
          url="https://example.com"
          image="https://example.com/og-image.png"
        />

        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://example.com" },
          ]}
        />

        <Sonner richColors />

        <BrowserRouter>
          <div className="max-w-screen-md mx-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
