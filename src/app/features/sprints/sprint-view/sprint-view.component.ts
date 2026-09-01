import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskShortComponent } from '../../tasks/task-short/task-short.component';
import { SprintsService } from '../sprints.service';
import { TasksService } from '../../tasks/tasks.service';

@Component({
	templateUrl: './sprint-view.component.html',
	styleUrl: './sprint-view.component.scss',
	imports: [TagModule, TaskShortComponent, TranslateDirective],
})
export class SprintViewComponent {
	private readonly _sprintsService = inject(SprintsService);
	private readonly _tasksService = inject(TasksService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _sprintId = toSignal(
		this._route.params.pipe(map((params) => params['sprintId'] as string)),
		{ requireSync: true },
	);

	readonly sprint = computed(() => this._sprintsService.get(this._sprintId()));
	readonly tasks = computed(() => this._tasksService.bySprint(this._sprintId()));
}
