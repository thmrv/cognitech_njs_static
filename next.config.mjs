/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    missingSuspenseWithCSRBailout: false
};

export default nextConfig;
