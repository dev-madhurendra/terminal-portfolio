import React from "react";
import BaseCmdInput from "./BaseCmdInput";
import CmdStatus from "./CmdStatus";
import CmdTextDisplay from "./CmdTextDisplay";
import { IReadOnlyCmdInputProps } from "../interface";

const ReadOnlyCmdInput = ({ cmd, time }: IReadOnlyCmdInputProps) => {
	return (
		<BaseCmdInput
			CmdStatus={<CmdStatus cmd={cmd} />}
			Children={<CmdTextDisplay cmd={cmd} time={time} />}
		/>
	);
}

export default ReadOnlyCmdInput