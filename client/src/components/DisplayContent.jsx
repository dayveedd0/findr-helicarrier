import React from "react";
import { groupBy } from "../helpers";
import PersonCard from "./PersonCard";

function DisplayContent({ data }) {
  const content = groupBy(data);
  console.log(content);

  return (
    <div className="w-auto justify center items-center md:w-auto md:justify-center md:items-center ">
      {content.map(({ group, children }, i) => (
        <div className="flex flex-col p-2">
          <span className="text-sm text-zinc-500">{group}</span>
          <div className="flex flex-col flex-grow sm:space-x-2 sm:flex-row">
            {children.map(({ fullName, country, status, phoneNumber }) => (
              <div>
                <PersonCard
                  name={fullName}
                  status={status}
                  number={phoneNumber}
                  country={country}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayContent;
