import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Release } from '../../../features/releases/release.interface';
import { ReleasesService } from '../../../features/releases/releases.service';

const STATUS_SEVERITY: Record<Release['status'], 'secondary' | 'success'> = {
	planned: 'secondary',
	released: 'success',
};

const STATUS_LABEL: Record<Release['status'], string> = {
	planned: 'Заплановано',
	released: 'Випущено',
};

@Component({
	templateUrl: './releases-list.component.html',
	styleUrl: './releases-list.component.scss',
	imports: [RouterLink, TagModule, TranslateDirective],
})
export class ReleasesListComponent {
	private readonly _releasesService = inject(ReleasesService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _projectId = toSignal(
		this._route.parent!.parent!.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly releases = computed(() => this._releasesService.byProject(this._projectId()));

	statusSeverity(status: Release['status']) {
		return STATUS_SEVERITY[status];
	}

	statusLabel(status: Release['status']) {
		return STATUS_LABEL[status];
	}
}
