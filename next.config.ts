import type { NextConfig } from "next";

const config: NextConfig = {
  // Silence "inferred workspace root" by pinning Turbopack root
  turbopack: { root: __dirname },
  // Correct placement in Next 15 (no longer under experimental)
  outputFileTracingRoot: __dirname,
};

export default config;
