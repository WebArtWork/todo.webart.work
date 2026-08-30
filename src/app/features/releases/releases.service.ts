import { Injectable, signal } from '@angular/core';
import releasesData from '../../../data/releases/releases.json';
import { Release } from './release.interface';

@Injectable({ providedIn: 'root' })
export class ReleasesService {
	readonly releases = signal<Release[]>(releasesData as Release[]);

	get(id: string): Release | undefined {
		return this.releases().find((release) => release._id === id);
	}

	byProject(projectId: string): Release[] {
		return this.releases().filter((release) => release.projectId === projectId);
	}
}
