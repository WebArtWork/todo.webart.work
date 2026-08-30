import { Injectable, computed, signal } from '@angular/core';
import projectsData from '../../../data/projects/projects.json';
import { Project } from './project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
	readonly projects = signal<Project[]>(projectsData as Project[]);

	readonly byId = computed(() => {
		const map = new Map<string, Project>();
		for (const project of this.projects()) map.set(project._id, project);
		return map;
	});

	get(id: string): Project | undefined {
		return this.byId().get(id);
	}
}
