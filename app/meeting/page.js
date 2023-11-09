"use client";

import dynamic from "next/dynamic";

const MeetingPage = () => {
  const MeetingAppContainer = dynamic(
    () => import("../../src/containers/MeetingAppContainer"),
    {
      ssr: false,
    }
  );

  return <MeetingAppContainer />;
};

export default MeetingPage;
