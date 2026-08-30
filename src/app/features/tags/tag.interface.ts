export type TagSeverity = 'info' | 'success' | 'warn' | 'danger' | 'secondary' | 'contrast';

export interface Tag {
	_id: string;
	name: string;
	severity: TagSeverity;
}
