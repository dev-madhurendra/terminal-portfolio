import React from "react";
import { HELP_COMMANDS } from "../../utils/constants";


const Help = () => (
  <div className="w-11/12 mx-auto">
    {HELP_COMMANDS.map(({ cmd, detail }, index) => {
      return (
        <div className="flex items-center gap-20  mt-3" key={index}>
          <h1 className="text-yellow-200 w-20">{cmd}</h1>
          <p className="text-gray-300 flex-1 ">{detail}</p>
        </div>
      );
    })}
  </div>
);

export default Help