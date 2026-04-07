// app.config.js
// Loads environment variables from .env at config/build time and injects them
// into Expo's `extra` so they are available at runtime via expo-constants.
require('dotenv').config();

module.exports = ({ config }) => ({
  ...config,
  extra: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
});
