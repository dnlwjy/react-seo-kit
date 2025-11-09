import { SiteMetaData, BreadcrumbSchema } from "react-seo-kit";

export default function App() {
  return (
    <>
      <SiteMetaData
        title="Example Page"
        description="This page demonstrates react-seo-kit in action."
        url="https://example.com/page"
        image="https://example.com/og-image.png"
        type="article"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://example.com" },
          { name: "Example Page", url: "https://example.com/page" },
        ]}
      />

      <h1>Hello World</h1>
    </>
  );
}
