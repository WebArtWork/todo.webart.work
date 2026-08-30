import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Project } from '../../features/projects/project.interface';
import { ProjectsService } from '../../features/projects/projects.service';
import { TagsService } from '../../features/tags/tags.service';

@Component({
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
	imports: [RouterLink, CardModule, TagModule, TranslateDirective],
})
export class ProjectsComponent {
	private readonly _tagsService = inject(TagsService);

	readonly projectsService = inject(ProjectsService);

	tagsFor(project: Project) {
		return this._tagsService.many(project.tagIds);
	}
}
