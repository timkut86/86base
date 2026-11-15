import { Pool } from 'pg';

const globalForPg = globalThis as unknown as {
  pgPool?: Pool;
};

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not configured');
}

export const pool =
  globalForPg.pgPool ??
  new Pool({
    connectionString,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPg.pgPool = pool;
}