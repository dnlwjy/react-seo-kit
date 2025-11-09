import { Helmet } from "react-helmet-async";

export const OG_TYPES = [
  "website",
  "article",
  "product",
  "profile",
] as const;
export type OGType = (typeof OG_TYPES)[number];

interface SiteMetaDataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: OGType;
  isIndexable?: boolean;
  lang?: string;
}

export function SiteMetaData({
  title = "Website Title",
  description = "Description of the website goes here.",
  url = "https://example.com",
  image = `${url}/og-image.png`,
  type = "website",
  isIndexable = true,
  lang = "en",
}: SiteMetaDataProps) {
  const robotsValue = isIndexable ? "index, follow" : "noindex, nofollow";

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsValue} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
