import * as z from "zod";

export const ProjectSchema = z.object({
  name: z.string().min(1, {
    message: "Name Required",
  }),
  description: z.string().min(1, {
    message: "Description Required",
  }),
  link: z.string().min(1, {
    message: "Link Required",
  }),
  type: z.string().min(1, {
    message: "Type Required",
  }),
  gitRepoLink: z.string().min(1, {
    message: "giRepo Required",
  }),
  miniParagraph: z.string().min(1, {
    message: "miniParagraph Required",
  }),
  images: z.object({ url: z.string() }).array(),
  isArchived: z.boolean().default(false),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});
