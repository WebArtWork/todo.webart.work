import { Injectable, signal } from '@angular/core';
import sprintsData from '../../../data/sprints/sprints.json';
import { Sprint } from './sprint.interface';

@Injectable({ providedIn: 'root' })
export class SprintsService {
	readonly sprints = signal<Sprint[]>(sprintsData as Sprint[]);

	get(id: string): Sprint | undefined {
		return this.sprints().find((sprint) => sprint._id === id);
	}

	byProject(projectId: string): Sprint[] {
		return this.sprints().filter((sprint) => sprint.projectId === projectId);
	}
}
