import React from "react";
import { VscTerminalBash } from "react-icons/vsc";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";

export interface INavbar {
  onCrossIconClick: () => void;
  onMinimizeClick: () => void;
  onMaximizeClick: () => void;
  onSplitNewTerminal: () => void;
  isMaximized?: boolean;
}

export default function Navbar({
	onCrossIconClick,
	onMaximizeClick,
	onMinimizeClick,
	onSplitNewTerminal,
	isMaximized
}: INavbar) {
	const boxs = [
    {
      icon: <AddBoxIcon />,
      fn: onSplitNewTerminal,
    },
    {
      icon: <RemoveIcon />,
      fn: onMinimizeClick,
    },
    {
      icon: <CropSquareIcon />,
      fn: onMaximizeClick,
    },
    {
      icon: <CloseIcon />,
      fn: onCrossIconClick,
    },
  ];
  return (
    <div
      className={`text-gray-300 mx-auto ${
        isMaximized ? "" : "max-w-4xl"
      } border-x-2 border-t-2 border-black rounded-t-md bg-black p-2 flex items-center justify-between`}
    >
      <div className="flex items-center gap-1">
        <VscTerminalBash className="text-xl" />
        <h1 className="text-center">dev-madhurendra@terminal_portfolio</h1>
      </div>
      <div className="flex items-center gap-10 p-2">
        {boxs.map(({ icon, fn }, index) => {
          return (
            <div
              key={index}
              className={`w-3 h-3 flex items-center cursor-pointer`}
              onClick={() => fn()}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
