import React, { useEffect, useState } from 'react';

const Services = () => {
  const [first, setfirst] = useState("This is Normal Data");
  const [second, setsecond] = useState("This is very large data");
  useEffect(() => {
    console.log("service is created");

    return () => {
      console.log("service is destroyed");
    };
  }, []); // Pass an empty array to run the effect only on mount and unmount

  return (
    <>

      <h1>{first}</h1>
      <button className="px-3 py-2 bg-red-300 mt-3" onClick={() => setfirst("This is changed data has been changes")}>Change Normal data</button>


      <h2>{second}</h2>
      <button className="px-3 py-2 bg-blue-300 mt-3" onClick={() => setsecond("This is large data data has been changes")} >Change Large data</button>
    </>
  );
};

export default Services;
