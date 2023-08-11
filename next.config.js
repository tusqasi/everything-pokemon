/** @type {import('next').NextConfig} */
const nextConfig = {

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
