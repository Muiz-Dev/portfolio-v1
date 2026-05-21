import { Pool } from "pg";

const globalForPg = globalThis as unknown as {
  pgPool: Pool | undefined;
};

export const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: true,
      ca: process.env.DATABASE_CA_CERT, // or read from file
    },
  });

if (process.env.NODE_ENV !== "production") globalForPg.pgPool = pool;
