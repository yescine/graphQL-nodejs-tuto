import { Context } from "../../index";
import posts from './posts'
import authentication from "./auth";

export const Mutation = {
  ...posts,
  ...authentication
};
