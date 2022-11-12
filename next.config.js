// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = {
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,

    compiler: {
        styledComponents: true,
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/movie',
                permanent: false
            },
        ];
    },
};

module.exports = config;
