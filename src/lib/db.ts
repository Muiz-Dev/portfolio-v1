import { Pool } from "pg";

const globalForPg = globalThis as unknown as {
  pgPool: Pool | undefined;
};

// Strip sslrootcert file-path param — node-postgres uses the ssl object, not
// the query string cert path, so leaving it in causes a connection error.
function getConnectionString() {
  const url = process.env.DATABASE_URL || "";
  return url.replace(/[&?]sslrootcert=[^&]*/g, "");
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
