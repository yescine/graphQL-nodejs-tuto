import { Context } from "..";
interface UserParent {
  id: number;
}

export const User = {
  posts: (parent: UserParent, __: any, { prisma }: Context) => {
    return prisma.post.findMany({ where: {authorId:parent.id} });
  },
};
