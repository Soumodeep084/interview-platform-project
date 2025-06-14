"use client";

import { useEffect, useState } from "react";
import {
  StreamVideoClient,
  StreamVideoClientOptions,
  StreamVideo,
} from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { streamTokenProvider } from "@/actions/stream.actions";
import LoaderUI from "../LoaderUI";

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] =
    useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const streamVideoClientOptions: StreamVideoClientOptions = {
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      user: {
        id: user?.id,
        name:
          `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: streamTokenProvider,
    };

    const client = new StreamVideoClient(streamVideoClientOptions);

    setStreamVideoClient(client);
  }, [isLoaded, user]);

  if (!streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
