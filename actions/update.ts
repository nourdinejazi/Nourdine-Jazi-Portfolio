"use server";

import * as z from "zod";
import { db } from "@/lib/db";

import { ProjectSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const update = async (
  values: z.infer<typeof ProjectSchema>,
  id: string
) => {
  try {
    await db.project.update({
      where: {
        projectId: id,
      },
      data: {
        name: values.name,
        description: values.description,
        link: values.link,
        type: values.type,
        isArchived: values.isArchived,
        miniParagraph: values.miniParagraph,
        gitRepoLink: values.gitRepoLink,
        images: {
          deleteMany: {},
        },
      },
    });

    await db.project.update({
      where: {
        projectId: id,
      },
      data: {
        images: {
          createMany: {
            data: [...values.images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    revalidatePath("/dashboard");

    return { success: "Updated successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
