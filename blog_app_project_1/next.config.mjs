import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Export withVideos wrapped around the nextConfig
export default withVideos(nextConfig);
