import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ProjectsService } from '../../features/projects/projects.service';
import { SprintsService } from '../../features/sprints/sprints.service';
import { TagsService } from '../../features/tags/tags.service';
import { TasksService } from '../../features/tasks/tasks.service';

@Component({
	templateUrl: './task.component.html',
	styleUrl: './task.component.scss',
	imports: [RouterLink, TagModule, TranslateDirective],
})
export class TaskComponent {
	private readonly _tasksService = inject(TasksService);
	private readonly _tagsService = inject(TagsService);
	private readonly _projectsService = inject(ProjectsService);
	private readonly _sprintsService = inject(SprintsService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _taskId = toSignal(
		this._route.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly task = computed(() => this._tasksService.get(this._taskId()));
	readonly project = computed(() => this._projectsService.get(this.task()?.projectId ?? ''));
	readonly sprint = computed(() => {
		const sprintId = this.task()?.sprintId;
		return sprintId ? this._sprintsService.get(sprintId) : undefined;
	});
	readonly tags = computed(() => this._tagsService.many(this.task()?.tagIds ?? []));
}
