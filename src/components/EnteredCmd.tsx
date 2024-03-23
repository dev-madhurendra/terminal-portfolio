import React from "react";
import { CmdHistory } from "../type";
import ReadOnlyCmdInput from "./ReadOnlyCmdInput";
import { IEnteredCmdProps } from "../interface";

const EnteredCmd = ({ enteredCmd }: IEnteredCmdProps) => {
	return (
		<div>
			{enteredCmd.map(({ cmd, Component, time }, index) => {
				return (
					<div key={index}>
						<ReadOnlyCmdInput cmd={cmd} time={time} />
						<div className="mt-3 mb-3">
							<Component />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default EnteredCmd