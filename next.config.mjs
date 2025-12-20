/** @type {import('next').NextConfig} */

const { protocol, hostname, port, pathname } = new URL(
  process.env.CMS_IMAGE_PATTERN
)

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: protocol.replace(":", ""),
        hostname,
        port,
        pathname,
      },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
}

export default nextConfig
