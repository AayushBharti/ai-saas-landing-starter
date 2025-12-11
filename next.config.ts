import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		optimizeCss: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "raw.githubusercontent.com",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
	},
};
export default nextConfig;
