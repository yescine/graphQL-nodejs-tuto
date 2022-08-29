import { Context } from "..";
import {userLoader} from '../loaders/userLoader'
interface ProfileParent {
  authorId: number;
}

export const Post = {
  user: (parent: ProfileParent, __: any, { prisma }: Context) => {
    return userLoader.load(parent.authorId)
  },
};
