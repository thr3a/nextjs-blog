/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ENDPOINT: isProd ? "http://192.168.16.32" : "http://127.0.0.1:3000"
  }
};

module.exports = nextConfig;
