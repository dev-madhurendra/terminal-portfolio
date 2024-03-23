export type CmdHistory = {
	cmd: string;
	Component: () => JSX.Element;
	time: string;
};

export type HelpCmd = {
	cmd: string;
	detail: string;
};