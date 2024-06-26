import Settings from "./settings";
import React from "react";
import Security from "./security";
import Profile from "./settings";

const SettingContent = ({ tab }: { tab: string }) => {
  return (
    <div className="w-full h-full">
      {tab === "security" && <Security />}
      {tab === "settings" && <Settings />}
      {tab === "profile" && <Profile />}
    </div>
  );
};

export default SettingContent;
