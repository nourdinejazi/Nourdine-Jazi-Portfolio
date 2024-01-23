"use server";

import * as z from "zod";
import { db } from "@/lib/db";

import { ProjectSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const send = async (values: z.infer<typeof ProjectSchema>) => {
  try {
    await db.project.create({
      data: {
        name: values.name,
        description: values.description,
        link: values.link,
        type: values.type,
        isArchived: values.isArchived,
        miniParagraph: values.miniParagraph,
        gitRepoLink: values.gitRepoLink,
        images: {
          createMany: {
            data: [...values.images.map((image: { url: string }) => image)],
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return { success: "submitted successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
