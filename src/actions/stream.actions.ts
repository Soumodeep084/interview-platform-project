"use server";

import { currentUser } from "@clerk/nextjs/server";

import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error("User not authenticated");

    const streamClient = new StreamClient(
        process.env.NEXT_PUBLIC_STREAM_API_KEY!,
        process.env.STREAM_SECRET_KEY!
    );

    // Add clock skew buffer: subtract 10 seconds
    const iat = Math.floor(Date.now() / 1000) - 10;

    const token = streamClient.generateUserToken({ user_id: user.id , iat });
    return token;
}