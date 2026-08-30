export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
	_id: string;
	projectId: string;
	sprintId: string | null;
	tagIds: string[];
	title: string;
	description: string;
	status: TaskStatus;
	priority: TaskPriority;
	assignee: string;
}
