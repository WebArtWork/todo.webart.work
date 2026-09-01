import { Component, computed, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../features/tasks/task-short/task-short.component';
import { TasksService } from '../../features/tasks/tasks.service';
import { ProjectsService } from '../../features/projects/projects.service';

@Component({
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	imports: [TaskShortComponent, TranslateDirective],
})
export class FeedComponent {
	private readonly _tasksService = inject(TasksService);
	private readonly _projectsService = inject(ProjectsService);

	readonly tasks = computed(() =>
		this._tasksService.tasks().filter((task) => task.status !== 'done'),
	);

	projectName(projectId: string): string {
		return this._projectsService.get(projectId)?.name ?? '';
	}
}
