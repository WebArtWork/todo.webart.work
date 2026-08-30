import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { TaskCardComponent } from '../../../../shared/task-card/task-card.component';
import { SprintsService } from '../../../../features/sprints/sprints.service';
import { TasksService } from '../../../../features/tasks/tasks.service';

@Component({
	templateUrl: './sprint-detail.component.html',
	styleUrl: './sprint-detail.component.scss',
	imports: [TagModule, TaskCardComponent, TranslateDirective],
})
export class SprintDetailComponent {
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
