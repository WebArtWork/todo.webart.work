import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../tasks/task-short/task-short.component';
import { ReleasesService } from '../releases.service';
import { TasksService } from '../../tasks/tasks.service';
import { Task } from '../../tasks/task.interface';

@Component({
	templateUrl: './release-view.component.html',
	styleUrl: './release-view.component.scss',
	imports: [TagModule, TaskShortComponent, TranslateDirective],
})
export class ReleaseViewComponent {
	private readonly _releasesService = inject(ReleasesService);
	private readonly _tasksService = inject(TasksService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _releaseId = toSignal(
		this._route.params.pipe(map((params) => params['releaseId'] as string)),
		{ requireSync: true },
	);

	readonly release = computed(() => this._releasesService.get(this._releaseId()));

	readonly tasks = computed<Task[]>(() => {
		const release = this.release();
		if (!release) return [];
		return release.taskIds
			.map((id) => this._tasksService.get(id))
			.filter((task): task is Task => !!task);
	});
}
