import React from "react";
import { groupBy } from "../helpers";
import PersonCard from "./PersonCard";

function DisplayContent({ data }) {
  const content = groupBy(data);
  console.log(content);

  return (
    <div className=" display w-auto p-3 border border-white rounded-md  justify center h-[300px] overflow-y-auto items-center md:w-auto md:justify-center md:items-center ">
      {content.map(({ group, children }, i) => (
        <div className="flex flex-col p-2">
          <span className="p-1 flex items-center max-w-fit space-x-1">
            <p className="text-sm text-zinc-500">Added</p>
            <p className="text-sm py-1 px-2 rounded-xl bg-slate-300 text-zinc-500">
              {group}
            </p>
          </span>
          <div className="flex flex-col flex-grow sm:space-x-2 sm:flex-row">
            {children.map(({ fullName, country, status, phoneNumber }) => (
              <PersonCard
                name={fullName}
                status={status}
                number={phoneNumber}
                country={country}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayContent;
