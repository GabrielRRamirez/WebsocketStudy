import { setupDatabase } from "./src/database/database.js";
import { startServer } from "./src/server/server.js";
import "dotenv/config";

async function startApplication() {
  await setupDatabase();
  startServer();
}

await startApplication();