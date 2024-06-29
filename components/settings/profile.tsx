

import React from "react";
import Image from "next/image";
import { formatDate } from "../../utils";
import { useStateValue } from "@/context/StateProvider";


const Profile: React.FC = () => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <main className="w-full h-full py-2 flex flex-col md:flex-row justify-between gap-8">
      {/* Profile Picture */}
      <div className="w-full md:w-2/5 flex flex-col gap-y-2 items-start">
        <div className="relative border border-primary-100 p-6 rounded-md">
          <Image
            src={user.image}
            alt="Profile Picture"
            className="w-56 h-52"
            width={224}
            height={224}
          />
        </div>
      </div>
      {/* Profile Data */}
      <div className="w-full  flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold">
          {user.username}
        </h2>
        <div className="flex item-center justify-start gap-x-3">
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
        <p className="text-gray-600">{user.bio || "N/A"}</p>
        <div className="flex flex-col gap-y-2">
          <p><strong>Number of Articles Posted:</strong> {0}</p>
          <p><strong>Articles Favorited:</strong> {"0"}</p>
          <p><strong>Account Created:</strong> {formatDate(new Date().toISOString(), true)}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
