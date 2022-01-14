module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad35986c9f0d4f6814f4fb12ca8741f0'),
  },
});
