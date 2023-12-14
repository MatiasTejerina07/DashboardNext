/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.karvi.com.ar'
            }
        ]
    }
}

module.exports = nextConfig
