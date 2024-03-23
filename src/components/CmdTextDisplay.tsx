import React from "react";
import { ICmdTextDisplayProp } from "../interface";

const CmdTextDisplay = ({ cmd, time }: ICmdTextDisplayProp) => (
  <div className="flex justify-between items-center translate-y-2 -translate-x-3 w-full">
    <h1>{cmd}</h1>
    <h1 className="text-sm">{time}</h1>
  </div>
);

export default CmdTextDisplay