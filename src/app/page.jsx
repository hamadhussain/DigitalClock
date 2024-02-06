"use client";
import Image from "next/image";
import Counterr from "./Components/Psounter/page";
export default function Home() {
  return (
    <>
      <div className=" w-40 animate-bounce ">
        <Counterr />
      </div>
    </>
  );
}
