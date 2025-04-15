/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '/demos/**',
        },
        {
          protocol: 'https',
          hostname: 'asset.cloudinary.com',
          port: '',
          pathname: '/dzjlp82fv/**', // Adjust the pathname as needed
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dzjlp82fv/**', // Adjust the pathname as needed
        },
      ],
    },
  };

export default nextConfig;
