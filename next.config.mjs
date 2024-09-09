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
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: 'shoolin-construction-asset.s3.ap-south-1.amazonaws.com',
			},
			
		],
	},
    
};

export default nextConfig;
