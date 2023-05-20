/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
  },
  images: {
    domains: ['cdn.shopify.com', 'ogaga2022.s3.ca-central-1.amazonaws.com']
  },
  reactStrictMode: true,
  

}

module.exports = nextConfig
