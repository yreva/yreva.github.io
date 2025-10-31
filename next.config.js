const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const repoName = 'yreva.github.io';

module.exports = {
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // For GitHub Pages compatibility
  }};
