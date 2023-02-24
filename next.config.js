/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stake",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
