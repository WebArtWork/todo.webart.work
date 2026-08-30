import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ProjectsService } from '../../../features/projects/projects.service';
import { TagsService } from '../../../features/tags/tags.service';

@Component({
	templateUrl: './project-settings.component.html',
	styleUrl: './project-settings.component.scss',
	imports: [TagModule, TranslateDirective],
})
export class ProjectSettingsComponent {
	private readonly _projectsService = inject(ProjectsService);
	private readonly _tagsService = inject(TagsService);
	private readonly _route = inject(ActivatedRoute);

	private readonly _projectId = toSignal(
		this._route.parent!.params.pipe(map((params) => params['id'] as string)),
		{ requireSync: true },
	);

	readonly project = computed(() => this._projectsService.get(this._projectId()));
	readonly tags = computed(() => this._tagsService.many(this.project()?.tagIds ?? []));
}
