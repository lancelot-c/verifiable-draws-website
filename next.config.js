/** @type {import('next').NextConfig} */

const nextConfig = {}
module.exports = nextConfig

// module.exports = {
//     webpack: (
//         config,
//         { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
//     ) => {

//         webpack.externals = {
//             bufferutil: "bufferutil",
//             "utf-8-validate": "utf-8-validate",
//         }

//         // Important: return the modified config
//         return config
//     },
// }