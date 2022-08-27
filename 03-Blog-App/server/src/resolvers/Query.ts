import { Post, prisma } from "@prisma/client";
import { Context } from "..";

export const Query = {
  hello: () => "hellow",
  posts: async (_: any, __: any, { prisma }: Context): Promise<Post[]> => {
    const posts = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });

    return posts
  },
};
