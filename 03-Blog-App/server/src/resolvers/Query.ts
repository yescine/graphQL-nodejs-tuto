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

    return posts;
  },

  me: async (_: any, __: any, { userInfo, prisma }: Context) => {
    if (!userInfo) return null;
    return prisma.user.findUnique({ where: { id: userInfo.id } });
  },
  profile: async (_: any, { userId }: { userId: string }, { prisma }: Context) => {
    const prof = await prisma.profile.findUnique({ where: { id: Number(userId) } });
    return prof;
  },
};
