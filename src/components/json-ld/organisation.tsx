export const JsonLdOrganisation = () => {
  const organisationData = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://feed-demo-blue.vercel.app",
    name: "Feed Demo Corp",
    description: "Example organisation for the Feed Demo project.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationData) }}
    />
  );
};
