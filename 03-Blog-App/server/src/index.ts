import { ApolloServer } from "apollo-server";
import { Prisma, PrismaClient, User } from "@prisma/client";

import { typeDefs } from "./schema";
import { Query,Mutation,Profile } from "./resolvers";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  userInfo:User
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Profile
  },
  context:({req})=>{
    return {
      prisma,
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`server listening on: ${url}`);
});
