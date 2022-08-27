import { Post } from "@prisma/client";
import { Context } from "../../index";

type PostCreateArgs = {
  title: string;
  content: string;
};

type PostPayload = {
  userErrors: {
    message: string;
  }[];
  post: Post | null;
};
export const Mutation = {
  postCreate: async (_: any, { title, content }: PostCreateArgs, { prisma }: Context): Promise<PostPayload> => {
    if (!Boolean(title) || !Boolean(content)) return { post: null, userErrors: [{ message: "no content delivered" }] };
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1,
      },
    });
    return {
      post,
      userErrors: [],
    };
  },
};
