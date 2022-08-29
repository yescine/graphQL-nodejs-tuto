import { Context } from "..";
interface ProfileParent {
  authorId: number;
}

export const Post = {
  user: (parent: ProfileParent, __: any, { prisma }: Context) => {
    return prisma.user.findUnique({ where: { id: parent.authorId } });
  },
};
