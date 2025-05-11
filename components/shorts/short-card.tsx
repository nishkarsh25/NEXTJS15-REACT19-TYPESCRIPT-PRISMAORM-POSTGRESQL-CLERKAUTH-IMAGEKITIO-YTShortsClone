"use client";

import { Prisma } from "@prisma/client";
import React from "react";
import { Card, CardFooter } from "../ui/card";
import { IKVideo, ImageKitProvider } from "imagekitio-next";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const urlEndPoint = process.env.NEXT_PUBLIC_URL_ENDPOINT as string;

type ShortCardProp = {
  short: Prisma.ShortsGetPayload<{
    include: {
      user: {
        select: {
          name: true;
          emailAddress: true;
        };
      };
    };
  }>;
};




