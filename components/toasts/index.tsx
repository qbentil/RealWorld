import React from "react";

export default function AppToast({
  heading,
  body,
}: {
  heading: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <div className="ml-10"> {/* margin-left: 38px */}
      <h1 className="font-bold text-[#101828] mb-1 text-sm leading-5"> {/* font-size: 14px, line-height: 20px */}
        {heading}
      </h1>
      <p className="font-normal text-[#475467] text-sm leading-5"> {/* font-size: 14px, line-height: 20px */}
        {body}
      </p>
    </div>
  );
}
