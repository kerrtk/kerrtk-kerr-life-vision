const AWH = "https://www.agingwithhonor.com";

// The old WordPress posts moved to Aging With Honor in October 2026.
const movedPosts = [
  "live-with-faith-and-purpose",
  "finding-faith-and-hope-after-tragedy",
  "grief-support-through-prayer-find-comfort-healing",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old WordPress pages
      ...movedPosts.map((slug) => ({
        source: `/${slug}`,
        destination: `${AWH}/blog/${slug}`,
        permanent: true,
      })),
      { source: "/blog", destination: `${AWH}/blog`, permanent: true },
      { source: "/category/:path*", destination: `${AWH}/blog`, permanent: true },
      { source: "/tag/:path*", destination: `${AWH}/blog`, permanent: true },
      { source: "/author/:path*", destination: "/story", permanent: true },
      { source: "/about-us", destination: "/story", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
