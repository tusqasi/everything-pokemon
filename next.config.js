/** @type {import('next').NextConfig} */
const nextConfig = {
	dev:false,
	reactStrictMode: true,
	images: {
		domains: ["*"],
		remotePatterns: [
			{
				hostname: '*',

			},
		],
	},
}

module.exports = nextConfig
