import React from "react";
import { groupBy, toArray } from "../helpers";
//const newData = toArray(groupBy("createdAt", data.getAllUsers));

//console.log(newData, filteredData);

function DisplayContent({ data }) {
  return data.map((user) => {
    return (
      <ul className="p-6 divide-y divide-slate-200">
        <li className="flex py-4 first:pt-0 last:pb-0">
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">
              {user.fullName}
            </p>
            <p className="text-sm text-slate-500 truncate">{user.status}</p>
          </div>
        </li>
      </ul>
    );
  });
}

export default DisplayContent;
