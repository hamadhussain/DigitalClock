"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Page = () => {
  const [result, setResult] = useState("");

  const updateResult = () => {
    const now = new Date();
    let hours = now.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formattedTime = format(now, "mm:ss");
    setResult(`${hours}:${formattedTime} ${amOrPm}`);
  };

  useEffect(() => {
    updateResult();
    const intervalId = setInterval(updateResult, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="text-center bor my-56 place-content-center border-red-700 justify-center border-4 p-12 align-middle rounded-full">
        <h1>{result}</h1>
      </div>
    </>
  );
};

export default Page;
