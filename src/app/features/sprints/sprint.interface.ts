export type SprintStatus = 'planned' | 'active' | 'completed';

export interface Sprint {
	_id: string;
	projectId: string;
	name: string;
	goal: string;
	status: SprintStatus;
	startDate: string;
	endDate: string;
}
