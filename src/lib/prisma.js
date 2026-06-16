import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prsima || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prsima = prisma;
