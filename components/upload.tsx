"use client";
import React, { useRef, useState } from "react";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Progress } from "./ui/progress";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
    throw error;
  }
};

type UploadProps = {
  setVideoUrl: (url: string) => void;
};

export default function Upload({ setVideoUrl }: UploadProps) {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onError = (err: any) => {
    console.log("Error", err);
    setError(err.message);

    setUploadProgress(null);
  };

  const onSuccess = (res: IKUploadResponse) => {
    console.log("Success", res);
    setVideoUrl(res.url);
    setUploadProgress(100);
    setError(null);
  };

  

  

  
}