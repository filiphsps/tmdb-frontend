// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = {
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    pageExtensions: ['page.tsx'],

    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['image.tmdb.org']
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/movie',
                permanent: false
            }
        ];
    }
};

module.exports = config;
