/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'assets-global.website-files.com',
			},
			{
				protocol: 'https',
				hostname: 'swiperjs.com',
			},
		],
	},
    
};

export default nextConfig;
