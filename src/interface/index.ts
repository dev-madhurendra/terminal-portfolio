import { IconType } from 'react-icons';
import { CmdHistory } from '../type';

export interface IBio {
    title: string;
    Icon: IconType;
    href: string;
    text: string;
}

export interface IEnteredCmdProps {
	enteredCmd: CmdHistory[];
}

export interface IReadOnlyCmdInputProps {
	cmd: string;
	time: string;
}

export interface ICmdUserInputProp {
	onSubmit: (cmd: string) => void;
}

export interface ICmdTextDisplayProp {
	cmd: string;
	time: string;
}

export interface ICmdStatusProp {
	cmd: string;
}

export interface IBaseCmdInputProps {
	Children: React.ReactNode;
	CmdStatus?: React.ReactNode;
}