import React from "react";

function PersonCard({ id, name, status, country, number }) {
  return (
    <ul className="p-6 divide-y divide-slate-200">
      <li className="flex py-4 first:pt-0 last:pb-0">
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">{name}</p>
          <p className="text-sm text-slate-500 truncate">{status}</p>
        </div>
      </li>
    </ul>
  );
}

export default PersonCard;
