import React, { useContext } from "react";
import data from "../assets/MOCK_DATA.json";
import Display from "../components/Display";

const Home = () => {
  return (
    <div>
      {data.map((d) => (
        <Display data={d} key={d.id} />
      ))}
    </div>
  );
};

export default Home;