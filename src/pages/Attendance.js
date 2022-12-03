import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../assets/ultimate_hrm.png";
const Attendance = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `bearer ${localStorage.getItem("test_access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);
//   console.log(tableData);
  return (
    <section className="container mx-auto overflow-hidden">
      <header className="my-10">
        <img src={logo} alt="" />
      </header>
      <div className="flex justify-center">
        <h2 className="bg-[#1678CB] md:px-20 px-5 py-4 rounded-md text-white font-semibold text-3xl">
          Attendance information
        </h2>
      </div>
      <table className="table-fixed container text-center border-separate border-spacing-11">
          <thead className="">
            <tr>
              <th>Date</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(tableData).map((table, i) => (
              console.log(table)
            ))}
          </tbody>
        </table>
    </section>
  );
};

export default Attendance;
