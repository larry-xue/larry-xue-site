import mdx from '@next/mdx';

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
