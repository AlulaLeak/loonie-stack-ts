import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getUserById: (id: string) => {
      return prisma.user.findUnique({ where: { id } });
    },
    getUserByName: (name: string) => {
      return prisma.user.findMany({ where: { name } });
    },
  },
};

export default resolvers;
