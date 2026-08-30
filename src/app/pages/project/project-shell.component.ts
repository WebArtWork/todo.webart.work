import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ProjectsService } from '../../features/projects/projects.service';

@Component({
	templateUrl: './project-shell.component.html',
	styleUrl: './project-shell.component.scss',
	imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslateDirective],
})
export class ProjectShellComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _projectsService = inject(ProjectsService);

	private readonly _projectId = toSignal(
		this._route.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly project = computed(() => this._projectsService.get(this._projectId()));
}
