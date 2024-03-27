import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { DataContext } from "../context/DataProvider";

function Home() {
  const { data, setData } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (searchInput) => {
    const filtered = data.filter(
      (employee) => employee.id.toString() === searchInput
    );
    setFilteredData(filtered);
    if (searchInput === "") {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData(searchValue);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center py-10">
        <form onSubmit={handleSubmit} className="flex gap-3 items-center mb-12">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search by id"
            className="w-60 sm:w-80 h-10 px-3 rounded-lg border-none outline-none bg-gray-700 text-gray-100"
            autoComplete="off"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {filteredData.map((employee) => (
            <div key={employee.id}>
              <Card employee={employee} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
