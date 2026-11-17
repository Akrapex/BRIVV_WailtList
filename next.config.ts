import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Webinar landing page: a self-contained static page in public/webinar.
  // The home page and every other route are unchanged.
  // After the event, either delete public/webinar and this block, or swap it
  // for a redirect: { source: "/webinar", destination: "/", permanent: false }
  async rewrites() {
    return [{ source: "/webinar", destination: "/webinar/index.html" }];
  },
};

export default nextConfig;
