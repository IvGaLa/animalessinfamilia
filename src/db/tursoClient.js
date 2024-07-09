import { createClient } from "@libsql/client";
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from './tursoConfig'


export const turso = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});
