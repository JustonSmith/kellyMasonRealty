module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98f031af2291e2dee29651f683bea6d2'),
  },
});
