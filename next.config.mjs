const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.cal.com https://cal.com;",
      "style-src 'self' 'unsafe-inline' https://app.cal.com https://cal.com;",
      "img-src 'self' data: https://app.cal.com https://cal.com;",
      "connect-src 'self' https://app.cal.com https://cal.com https://api.cal.com;",
      "frame-src 'self' https://app.cal.com https://cal.com;",
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
      {
        source: '/book',
        destination: 'https://cal.com/zyorix.com/30min',
        permanent: false,
      },
      {
        source: '/30mins',
        destination: 'https://cal.com/zyorix.com/30min',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
