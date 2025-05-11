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

const ShortCard: React.FC<ShortCardProp> = ({ short }) => {
  return (
    <Card className="p-0 w-[360px] h-[640px]  flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300  relative ">
      <ImageKitProvider urlEndpoint={urlEndPoint}>
        <IKVideo
          path={short.url.replace(urlEndPoint, "")}
          transformation={[{ height: "640", width: "360", format: "mp4" }]}
          controls
          autoPlay={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </ImageKitProvider>

      
    </Card>
  );
};


