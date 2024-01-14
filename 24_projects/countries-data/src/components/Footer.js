import { useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Footer({ setRef, jumpRefTop }) {
  const divRef = useRef(null);
  useEffect(() => {
    setRef.current = divRef.current;
  }, [setRef]);
  return (
    <div ref={divRef} className="my-8">
      <div className="bg-[#f0f0f0] py-8 text-center">
        <p className="text-[#585555] text-xl font-semibold pb-4">
          {" "}
          Copyright ©2024
        </p>
        <p className="text-[#585555] text-sm ">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/r-nitin/"
            className="text-purple-500"
          >
            Nitin Raj
          </a>{" "}
          as part of 30 Days of React challenge by{" "}
          <a
            href="https://www.linkedin.com/in/asabeneh/"
            className="text-purple-500"
          >
            Asabeneh Yetayeh.
          </a>
        </p>
        <div className="flex justify-end items-end m-3">
          <FaArrowAltCircleUp
            className="text-4xl text-purple-500 hover:scale-110"
            onClick={() =>
              jumpRefTop.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
