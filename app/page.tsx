import ShortCard from "@/components/shorts/short-card";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.fullName || "Name",
        emailAddress: user.emailAddresses[0].emailAddress,
        clerkUserId: user.id,
      },
    });
  }

  const shorts = await prisma.shorts.findMany({
    where: { userId: loggedInUser?.id },
    include: {
      user: {
        select: {
          name: true,
          emailAddress: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="h-screen overflow-y-screen snap-y snap-mandatory">
      {/* shorts container */}
      <div className="flex flex-col items-center">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="snap-start flex justify-center items-center h-screen"
          >
            <ShortCard short={short} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
