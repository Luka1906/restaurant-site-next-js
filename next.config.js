/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lukamatovic-nextjs-demo-users-image.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

module.exports = nextConfig
