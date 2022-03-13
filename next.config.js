const isProd = process.env.NODE_ENV === "production"
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    assetPrefix: isProd ? "/portfolio" : "",
    basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
    publicRuntimeConfig: {
        basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
    },
    trailingSlash: true,
}

module.exports = nextConfig