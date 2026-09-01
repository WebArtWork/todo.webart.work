import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../../features/tasks/task-short/task-short.component';
import { TasksService } from '../../../features/tasks/tasks.service';

@Component({
	templateUrl: './backlog.component.html',
	styleUrl: './backlog.component.scss',
	imports: [TaskShortComponent, TranslateDirective],
})
export class BacklogComponent {
	private readonly _tasksService = inject(TasksService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _projectId = toSignal(
		this._route.parent!.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly tasks = computed(() => this._tasksService.backlog(this._projectId()));
}
