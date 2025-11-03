/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**'
        }]
    },
    experimental: {
        globalNotFound: true,
    }
}

export default nextConfig