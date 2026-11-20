import type { NextConfig } from "next";

/*
  Static export for Hostinger (Apache). `next build` writes the full site to
  out/, which is uploaded to public_html. Redirects, headers and clean URLs
  that Vercel used to handle live in public/.htaccess.
*/
const nextConfig: NextConfig = {
  output: "export",
  // Keep URLs exactly as before (/case-studies, not /case-studies/)
  trailingSlash: false,
  // No image optimisation server on static hosting
  images: { unoptimized: true },
};

export default nextConfig;
