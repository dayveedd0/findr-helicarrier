import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

function PersonCard({ id, name, status, country, number }) {
  return (
    <ul className="p-3 divide-y divide-slate-200">
      <li className="flex p-3 border rounded-md shadow-md border-white">
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">{name}</p>
          <p className="text-sm font-medium text-slate-500">{country}</p>
          <p className="text-sm font-medium text-slate-500">{number}</p>
          {status === "active" ? (
            <p className="flex items-center space-x-2 text-sm text-green-600 ">
              <GoPrimitiveDot />
              {status}
            </p>
          ) : (
            <p className="flex items-center space-x-3 text-sm text-red-600 ">
              <GoPrimitiveDot />
              {status}
            </p>
          )}
        </div>
      </li>
    </ul>
  );
}

export default PersonCard;
