import type { IToolProps } from "$lib/components/common/Tool/tool.types";

export interface IProjectProps {
	title: string;
	description: string[];
	tools: IToolProps[];
	linkGitHub?: string;
}
