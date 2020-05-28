const isProd = process.env.NODE_ENV === 'develop'

module.exports = {
  assetPrefix: isProd ? '' : '/webstudy',
};
