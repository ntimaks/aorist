/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import './src/env.js';

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['localhost', 'fakestoreapi.com', 'example.com','utfs.io'],
  },
};

export default config;
