"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MeetingAppContainer = dynamic(
  () => import("../../src/containers/MeetingAppContainer"),
  { ssr: false }
);

const MeetingPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents server-side rendering issues

  return <MeetingAppContainer />;
};

export default MeetingPage;
