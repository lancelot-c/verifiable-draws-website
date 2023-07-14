/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
    ...nextConfig,
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.externals.push({ bufferutil: "bufferutil", "utf-8-validate": "utf-8-validate", });
        }
        return config;
    },
    rewrites: async () => {
        return {
            beforeFiles: [
                // These rewrites are checked after headers/redirects
                // and before all files including _next/public files which
                // allows overriding page files
                {
                    source: '/ipfs/:cid',
                    destination: '/ipfs?cid=:cid',
                },
            ],
        };
        // return [
        //     {
        //         source: '/ipfs/:cid/',
        //         destination: '/ipfs?cid=:cid',
        //     },
        // ]
    }
}