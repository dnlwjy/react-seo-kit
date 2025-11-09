import { useEffect, useState } from "react";
import { SiteMetaData } from "@/components/SiteMetaData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface Item {
  id: string;
  name: string;
  description: string;
}

interface AboutPageProps {
  maxItems?: number;
}

export default function AboutPage({ maxItems }: AboutPageProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Simulated async data fetch (placeholder)
  useEffect(() => {
    setLoaded(false);

    const mockData: Item[] = [
      { id: "1", name: "Design Systems", description: "Building scalable design workflows." },
      { id: "2", name: "Frontend Development", description: "Creating user-focused web interfaces." },
      { id: "3", name: "UI Animation", description: "Enhancing experience through motion." }
    ];

    setTimeout(() => {
      setItems(mockData);
      setLoaded(true);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 300);
  }, []);

  const displayed = maxItems ? items.slice(0, maxItems) : items;

  if (!loaded) {
    return <p style={{ padding: "2rem", textAlign: "center" }}>Loading...</p>;
  }

  return (
    <>
      {/* Page-specific SEO */}
      <SiteMetaData
        title="About | Example App"
        description="Learn more about this example application."
        url="https://example.com/about"
        type="profile"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://example.com" },
          { name: "About", url: "https://example.com/about" },
        ]}
      />

      <header style={{ padding: "2rem 0", textAlign: "center" }}>
        <h1>About This App</h1>
        <p>Example placeholder page demonstrating SEO usage.</p>
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "1rem" }}>
        <section style={{ margin: "2rem 0" }}>
          <h2>What We Focus On</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
            {displayed.map(item => (
              <li key={item.id} style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer style={{ padding: "2rem 0", textAlign: "center", opacity: 0.5 }}>
        <p>Example Footer</p>
      </footer>
    </>
  );
}
