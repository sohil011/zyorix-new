const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com;",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com;",
      "img-src 'self' data: https://assets.calendly.com;",
      "connect-src 'self' https://calendly.com https://api.calendly.com https://assets.calendly.com;",
      "frame-src 'self' https://calendly.com https://assets.calendly.com;",
      "frame-ancestors 'self';"
    ].join(" ")
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders }
    ];
  },
  async redirects() {
    return [
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
