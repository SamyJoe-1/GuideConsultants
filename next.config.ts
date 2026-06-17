import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All imagery is bundled locally under /public/images. next/image still
  // optimizes (AVIF/WebP, responsive srcset) for top Lighthouse scores.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80, 90],
    // A couple of source assets are referenced with ?v= query strings.
    localPatterns: [{ pathname: "/images/**", search: "" }],
  },
  poweredByHeader: false,
  compress: true,
  // Trailing slash mirrors the original WordPress URL scheme (/about-us/).
  trailingSlash: true,
};

export default nextConfig;
