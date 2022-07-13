import React, { useState, useEffect } from "react";
import DisplayContent from "./DisplayContent";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import AppButton from "./AppButton";

function Filter() {
  const { loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const keys = ["fullName", "status", "country"];

  const filtersBy = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
      setFilteredData(
        users.filter(
          (user) =>
            keys.some((key) => user[key].toLowerCase().includes(query)) ||
            user.phoneNumber.includes(query)
        )
      );
    }
  }, [loading, query]);

  return (
    <div className="flex mt-10 flex-col items-center">
      {/* Search Input */}
      <div className="mt-1 space-x-2 w-[250px] justify-center relative rounded-md shadow-md">
        <input
          placeholder="Search..."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <p className="text-center text-xs text-slate-400">
        search by name, status or country or use the filters below
      </p>
      {/* Filters */}
      <div className="mt-2 w-[290px] p-3 space-y-2 justify-center items-center space-x-2 md:w-[490px]">
        <AppButton change={filtersBy} value={""} btnName={"All"} />
        <AppButton change={filtersBy} value={"active"} btnName={"Active"} />
        <AppButton
          change={filtersBy}
          value={"disconnected"}
          btnName={"Disconnected"}
        />
        <AppButton
          change={filtersBy}
          value={"united states"}
          btnName={"United States"}
        />
        <AppButton change={filtersBy} value={"nigeria"} btnName={"Nigeria"} />
      </div>
      {query === "" ? (
        <DisplayContent data={users} />
      ) : (
        <DisplayContent data={filteredData} />
      )}
    </div>
  );
}

export default Filter;
