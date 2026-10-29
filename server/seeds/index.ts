import "dotenv/config";
import { seedProducts } from "./seedProducts";
import db from "../config/db";

const runSeeds = async () => {
  try {
    console.log("🚀 Starting seeds...\n");

    // Seed products
    await seedProducts();

    console.log("\n✨ All seeds completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("\n💥 Seeding failed:", error);
    process.exit(1);
  }
};

runSeeds();
