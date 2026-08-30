import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Sprint } from '../../../features/sprints/sprint.interface';
import { SprintsService } from '../../../features/sprints/sprints.service';

const STATUS_SEVERITY: Record<Sprint['status'], 'secondary' | 'info' | 'success'> = {
	planned: 'secondary',
	active: 'info',
	completed: 'success',
};

const STATUS_LABEL: Record<Sprint['status'], string> = {
	planned: 'Заплановано',
	active: 'Активний',
	completed: 'Завершено',
};

@Component({
	templateUrl: './sprints-list.component.html',
	styleUrl: './sprints-list.component.scss',
	imports: [RouterLink, TagModule, TranslateDirective],
})
export class SprintsListComponent {
	private readonly _sprintsService = inject(SprintsService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _projectId = toSignal(
		this._route.parent!.parent!.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly sprints = computed(() => this._sprintsService.byProject(this._projectId()));

	statusSeverity(status: Sprint['status']) {
		return STATUS_SEVERITY[status];
	}

	statusLabel(status: Sprint['status']) {
		return STATUS_LABEL[status];
	}
}
