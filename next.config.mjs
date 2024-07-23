/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'blr1.vultrobjects.com',
          pathname: '/erental-object/**',
        },
      ],
    },
};

export default nextConfig;
