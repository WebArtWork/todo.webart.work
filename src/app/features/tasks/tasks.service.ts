import { Injectable, signal } from '@angular/core';
import tasksData from '../../../data/tasks/tasks.json';
import { Task } from './task.interface';

export const TASK_STATUSES: Task['status'][] = ['todo', 'in-progress', 'review', 'done'];

@Injectable({ providedIn: 'root' })
export class TasksService {
	readonly tasks = signal<Task[]>(tasksData as Task[]);

	get(id: string): Task | undefined {
		return this.tasks().find((task) => task._id === id);
	}

	byProject(projectId: string): Task[] {
		return this.tasks().filter((task) => task.projectId === projectId);
	}

	bySprint(sprintId: string): Task[] {
		return this.tasks().filter((task) => task.sprintId === sprintId);
	}

	backlog(projectId: string): Task[] {
		return this.tasks().filter(
			(task) => task.projectId === projectId && !task.sprintId,
		);
	}

	byAssignee(assignee: string): Task[] {
		return this.tasks().filter((task) => task.assignee === assignee);
	}
}
