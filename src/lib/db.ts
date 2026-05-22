import { Pool } from "pg";

const globalForPg = globalThis as unknown as {
  pgPool: Pool | undefined;
};

// Strip all SSL query params from the connection string.
// node-postgres parses sslmode=verify-full and sets rejectUnauthorized: true
// internally, which overrides the ssl object we pass to Pool. We control SSL
// entirely through the ssl config object below instead.
function getConnectionString() {
  const url = process.env.DATABASE_URL || "";
  return url
    .replace(/[&?]sslmode=[^&]*/g, "")
    .replace(/[&?]sslrootcert=[^&]*/g, "")
    .replace(/[&?]sslcert=[^&]*/g, "")
    .replace(/[&?]sslkey=[^&]*/g, "");
}

const sslConfig = process.env.DATABASE_CA_CERT
  ? { rejectUnauthorized: true, ca: process.env.DATABASE_CA_CERT }
  : { rejectUnauthorized: false }; // safe fallback for Vercel / managed Postgres

export const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString: getConnectionString(),
    ssl: sslConfig,
  });

if (process.env.NODE_ENV !== "production") globalForPg.pgPool = pool;
