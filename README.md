# react-seo-kit

This kit helps you generate higher SEO score which includes site metadata, Open Graph tags, Twitter Cards, canonical URLs, structured data, and I also have included Breadcrumbs for better Google indexing results and Google Search Console. I have used this react components multiple times for both professional and personal projects. 

The component is written in **TypeScript** and powered by **react-helmet-async**.

Always place these components at the top level of your page before any visual UI elements like Header or even main, because it will ensure all the meta tags and structured data are registered immediately, before the rest of the page is processed.

```bash
<>
  {/* Always place SEO components at the top */}
  <SiteMetaData />
  <BreadcrumbSchema />

  <Header />

  <main>
    <article>
      {/* content... */}
    </article>
  </main>
</>


---

## Installation

```bash
npm install react-seo-kit react-helmet-async
# or
yarn add react-seo-kit react-helmet-async
