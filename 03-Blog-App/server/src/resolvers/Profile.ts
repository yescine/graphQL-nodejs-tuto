import { Context } from "..";
interface ProfileParent {
  id: number;
  bio: string;
  userId: number;
}

export const Profile = {
  user: (parent: ProfileParent, __: any, { prisma }: Context) => {
    return prisma.user.findUnique({ where: { id: parent.userId } });
  },
};
