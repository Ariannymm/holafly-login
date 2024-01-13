import React from "react";

interface BadgeStatusProps {
  children: React.ReactNode;
  status: string;
  flag: string;
}

const statuses: { [key: string]: string } = {
  Active: "bg-green-100",
  Pending: "bg-red-100",
  Expired: "bd-gray-200",
};

const BadgeStatus: React.FC<BadgeStatusProps> = ({ status, flag }) => {
  const bgClass = statuses[status] || "bg-gray-100";

  return (
    <div className={`flex items-center w-min pr-2 rounded-xl ${bgClass}`}>
        <img
            className="w-6 h-5 md:h-6 mr-1 md:mr-1.5 rounded-xl bg-gray-100"
            src={flag} alt="Flag"
        />
        <p className="text-xs text-gray-600">{status}</p>
    </div>
  );
};

export default BadgeStatus;