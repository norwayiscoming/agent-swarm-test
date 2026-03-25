/**
 * Application configuration
 */

export const config = {
  port: 3000,
  host: 'localhost',
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/mydb',
    poolSize: 10,
    timeout: 5000, // TODO: make configurable
  },
  auth: {
    secret: 'hardcoded-secret-change-me', // security issue: hardcoded secret
    tokenExpiry: 3600,
  },
  cors: {
    origins: ['*'], // too permissive for production
  },
  rateLimit: {
    windowMs: 60000,
    max: 100,
  },
};
