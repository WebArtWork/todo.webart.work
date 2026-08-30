import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ProjectsService } from '../../features/projects/projects.service';
import { TasksService } from '../../features/tasks/tasks.service';

@Component({
	templateUrl: './search.component.html',
	styleUrl: './search.component.scss',
	imports: [RouterLink, InputTextModule, TranslateDirective],
})
export class SearchComponent {
	private readonly _projectsService = inject(ProjectsService);
	private readonly _tasksService = inject(TasksService);

	readonly translateService = inject(TranslateService);
	readonly query = signal('');

	readonly projects = computed(() => {
		const q = this.query().trim().toLowerCase();
		if (!q) return [];
		return this._projectsService
			.projects()
			.filter((project) => project.name.toLowerCase().includes(q));
	});

	readonly tasks = computed(() => {
		const q = this.query().trim().toLowerCase();
		if (!q) return [];
		return this._tasksService
			.tasks()
			.filter((task) => task.title.toLowerCase().includes(q));
	});

	onQueryChange(value: string): void {
		this.query.set(value);
	}
}
