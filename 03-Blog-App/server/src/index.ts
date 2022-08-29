import { ApolloServer } from "apollo-server";
import { Prisma, PrismaClient, User as User_db } from "@prisma/client";

import { typeDefs } from "./schema";
import { Query,Mutation,Profile,Post,User } from "./resolvers";

export const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  userInfo:User_db
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Profile,
    Post,
    User
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
