import React, { useEffect, useState } from "react";
import useFetch from "../customize/Fetch";

const Covid = () => {

  const {
    data: dataCovid,
    loading,
    error,
  } = useFetch("https://daogiatuan.com/covid_data.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.contact}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
