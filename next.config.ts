import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/eval",
        destination: "https://calendly.com/treydill7/eval",
        permanent: false,
      },
      {
        source: "/apply",
        destination:
          "https://www.skool.com/mental-dugout-8433/about?ref=3851859bc2a94433ae603039d747b770",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
