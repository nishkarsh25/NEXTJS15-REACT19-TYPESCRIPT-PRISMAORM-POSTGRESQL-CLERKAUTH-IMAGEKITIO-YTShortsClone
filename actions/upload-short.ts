"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const uploadShortsSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  video: z.string(),
});

type UploadShortsState = {
  errors: {
    title?: string[];
    description?: string[];
    video?: string[];
    formError?: string[];
  };
};

export const uploadShortAction = async (
  prevState: UploadShortsState,
  formData: FormData
): Promise<UploadShortsState> => {
  const result = uploadShortsSchema.safeParse({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    video: formData.get("video") as string,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

 



 

  
  
  
};
