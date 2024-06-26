import React from "react";
import Image from "next/image";
import { formatDate } from "../../utils";

interface User {
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  numberOfArticles: number;
  articlesFavorited: number;
  accountCreatedDate: string;
}

const user: User = {
  profilePicture: "/assets/avatar.jpeg",
  firstName: "Shadrack",
  lastName: "Bentil",
  email: "bentilshadrack72@gmail.com",
  phone: "+233 24 123 4567",
  bio: "I am a software engineer passionate about building impactful solutions.",
  numberOfArticles: 10,
  articlesFavorited: 5,
  accountCreatedDate: "2022-01-15",
};

const Profile: React.FC = () => {
  return (
    <main className="w-full h-full py-2 flex flex-col md:flex-row justify-between gap-8">
      {/* Profile Picture */}
      <div className="w-full md:w-2/5 flex flex-col gap-y-2 items-start">
        <div className="relative border border-primary-100 p-6 rounded-md">
          <Image
            src={user.profilePicture}
            alt="Profile Picture"
            className="w-56 h-52 rounded-full"
            width={224}
            height={224}
          />
        </div>
      </div>
      {/* Profile Data */}
      <div className="w-full  flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <div className="flex item-center justify-start gap-x-3">
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
        <p className="text-gray-600">{user.bio}</p>
        <div className="flex flex-col gap-y-2">
          <p><strong>Number of Articles Posted:</strong> {user.numberOfArticles}</p>
          <p><strong>Articles Favorited:</strong> {user.articlesFavorited}</p>
          <p><strong>Account Created:</strong> {formatDate(user.accountCreatedDate, true)}</p>
        </div>
      </div>
    </main>
  );
};

export default Profile;
