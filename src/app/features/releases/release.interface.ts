export type ReleaseStatus = 'planned' | 'released';

export interface Release {
	_id: string;
	projectId: string;
	version: string;
	name: string;
	status: ReleaseStatus;
	releaseDate: string;
	taskIds: string[];
}
