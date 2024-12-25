/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // Specify the protocol
                hostname: "assets.aceternity.com", // Specify the hostname
                port: "", // Leave empty if no specific port is used
                pathname: "/**", // Allow all paths
            },
        ],
    },
};

module.exports = nextConfig;
