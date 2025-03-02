import React from "react";

function Title(props) {
  return (
    <>
      <div className="w-full px-5 mt-4">
        <div className="bg-white drop-shadow-lg rounded-full rounded-tl-none w-fit p-2 lg:mx-auto">
          <p className="font-bold text-primary text-xl drop-shadow-lg">
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default Title;
