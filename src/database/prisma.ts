// Configura o PrismaClient para interagir com o banco de dados

// conexao com o DB para fazer os codigo nos controller projeto geral

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "production" ? [] : ["query"],
});
