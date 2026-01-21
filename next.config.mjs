/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // GitHub Pages serves from /<repo> for project sites
  basePath: isCI && repo ? `/${repo}` : '',
  assetPrefix: isCI && repo ? `/${repo}/` : '',
};

export default nextConfig;
