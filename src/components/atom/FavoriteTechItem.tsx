import React from "react";

export default function FavoriteTechItem({
  name,
  logo,
  color,
}: {
  name: string;
  logo: React.ReactNode;
  color: string;
}) {
  return (
    <div className="group relative">
      <span className="text-4xl" style={{ color: color }}>
        {logo}
      </span>
      <span className="absolute -top-10 left-0 rounded-md bg-slate-50 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:-left-4">
        {name}
      </span>
    </div>
  );
}
