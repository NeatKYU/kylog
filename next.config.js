const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // https://stackoverflow.com/questions/71847778/why-my-nextjs-component-is-rendering-twice
    // reactStrictMode: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = removeImports(nextConfig);
