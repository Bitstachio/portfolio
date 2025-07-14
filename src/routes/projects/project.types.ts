import type { IToolProps } from "$lib/components/common/Tool/tool.types";
import type { projectLinkTypes } from "./project.constants";

export interface IProjectLinkProps {
	srcIcon: string;
	description?: string;
}

export type TProjectLinkType = keyof typeof projectLinkTypes;

export interface IProjectLink {
	type: TProjectLinkType;
	address: string;
}

export interface IProjectProps {
	title: string;
	description: string[];
	tools: IToolProps[];
	links?: IProjectLink[];
	srcImg?: string;
}
