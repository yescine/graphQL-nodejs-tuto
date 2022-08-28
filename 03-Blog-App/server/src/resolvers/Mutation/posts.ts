import { Post } from "@prisma/client";
import { Context } from "../../index";

type PostCreateArgs = {
  input: {
    title: string;
    content: string;
  };
};

type PostPayload = {
  userErrors: {
    message: string;
  }[];
  post: Post | null;
};


const posts = {
  postCreate: async (
    _: any,
    { input: { content, title } }: PostCreateArgs,
    { prisma }: Context
  ): Promise<PostPayload> => {
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

  postUpdate: async (
    _: any,
    { postId, input }: { postId: string; input: PostCreateArgs },
    { prisma }: Context
  ): Promise<PostPayload> => {
    if (!Boolean(postId)) return { post: null, userErrors: [{ message: "no Id returned" }] };
    // @ts-ignore
    const post = await prisma.post.update({ data: { ...input }, where: { id: Number(postId) } });

    return { post, userErrors: [] };
  },

  postDelete: async (_: any, { postId }: { postId: string }, { prisma }: Context): Promise<PostPayload> => {
    if (!Boolean(postId)) return { post: null, userErrors: [{ message: "no Id returned" }] };
    const post = await prisma.post.delete({  where: { id: Number(postId) } });

    return { post, userErrors: [] };
  },
}
export default posts