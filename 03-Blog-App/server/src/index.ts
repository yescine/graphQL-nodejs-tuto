import { ApolloServer } from "apollo-server";
import { Prisma, PrismaClient } from "@prisma/client";

import { typeDefs } from "./schema";
import { Query,Mutation } from "./resolvers";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`server listening on: ${url}`);
});
