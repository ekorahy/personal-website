import React from "react";

export default function TechItem({
  name,
  logo,
  color,
}: {
  name: string;
  logo: React.ReactNode;
  color: string;
}) {
  return (
    <li className="flex items-center gap-2 rounded-md p-2 text-lg shadow-md shadow-lime-200">
      <span className="text-xl" style={{ color: color }}>
        {logo}
      </span>{" "}
      {name}
    </li>
  );
}
