import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../../features/tasks/task-short/task-short.component';
import { TASK_STATUSES } from '../../../features/tasks/tasks.service';
import { TasksService } from '../../../features/tasks/tasks.service';
import { Task } from '../../../features/tasks/task.interface';

const STATUS_LABELS: Record<Task['status'], string> = {
	todo: 'До роботи',
	'in-progress': 'В роботі',
	review: 'Огляд',
	done: 'Зроблено',
};

@Component({
	templateUrl: './board.component.html',
	styleUrl: './board.component.scss',
	imports: [TaskShortComponent, TranslateDirective],
})
export class BoardComponent {
	private readonly _tasksService = inject(TasksService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _projectId = toSignal(
		this._route.parent!.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly statuses = TASK_STATUSES;
	readonly statusLabel = (status: Task['status']) => STATUS_LABELS[status];

	private readonly _tasks = computed(() => this._tasksService.byProject(this._projectId()));

	tasksByStatus(status: Task['status']): Task[] {
		return this._tasks().filter((task) => task.status === status);
	}
}
