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


