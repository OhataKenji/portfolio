module.exports = {
    assetPrefix: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
    basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
    trailingSlash: true,
};
